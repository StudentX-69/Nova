import "./globals.css";

export const metadata = {
  title: "NOVA — AI Productivity Platform",
  description: "Build Better. Work Smarter. NOVA brings projects, automation and collaboration into one intelligent workspace."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
