
import "./globals.css";

export const metadata = {
  title: "Auth",
  description: "trying to understand auth",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
