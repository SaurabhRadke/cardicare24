"use client"
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export function SupabaseServer() {
  const cookieStore = cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get(name) {
          return cookieStore.get(name)?.value;
        },
        set(name, value, options) {
          // Can't directly set cookies in a server component, this should be handled by middleware or API routes.
          console.warn('Cannot set cookies from here, should be handled in middleware or API routes.');
        },
        remove(name, options) {
          // Same warning for cookie removal in server components
          console.warn('Cannot remove cookies from here, should be handled in middleware or API routes.');
        },
      },
    }
  );
}
