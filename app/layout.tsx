import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI or Child? - The Guessing Game",
  description: "Can you tell if it was made by artificial intelligence or a real kid? It's harder than you think!",
  keywords: ["AI", "game", "quiz", "children", "artificial intelligence", "guessing game"],
  authors: [{ name: "AI or Child" }],
  openGraph: {
    title: "AI or Child? - The Guessing Game",
    description: "Can you tell the difference between AI and a child's work?",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI or Child?",
    description: "Can you tell if it was made by AI or a real kid?",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
