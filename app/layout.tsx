import "./globals.css";
import Nav from "./NavBar";
import Footer from "./Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <Nav></Nav>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
