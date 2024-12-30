import { createServerClient } from '@supabase/ssr';
import { NextResponse } from 'next/server';

export async function updateSession(request, response) {
  // Create Supabase server client
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get(name) {
          return request.cookies.get(name)?.value;
        },
        set(name, value, options) {
          // Set cookies using NextResponse in middleware
          response.cookies.set(name, value, options);
        },
        remove(name, options) {
          // Remove cookies using NextResponse in middleware
          response.cookies.set(name, '', { maxAge: -1, ...options });
        },
      },
    }
  );

  // Get the user from the Supabase session
  const { data: { user } } = await supabase.auth.getUser();

  // If no user, redirect to login
  if (!user) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Return the updated response with session cookies set
  return response;
}
