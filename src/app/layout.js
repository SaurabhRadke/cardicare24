import "./globals.css";

import { Jost } from 'next/font/google';
import SupabaseAuthProvider from "./store/SupabaseContext";

const jost = Jost({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
});

export const metadata = {
  title: "CardiCare Heart Clinic",
  description: "Comprehensive cardiovascular care with advanced treatments and personalized care plans.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SupabaseAuthProvider>
      <body className={jost.className}>
        
        {children}
        
      </body>
      </SupabaseAuthProvider>
    </html>
  );
}
