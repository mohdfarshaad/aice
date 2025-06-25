import Head from "next/head";
import React from "react";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <html>
      <body>
        <Head>
          <title>{title}</title>
          <meta
            name="description"
            content="Association of Innovative Computer Engineers - Empowering the future of technology"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="min-h-screen flex flex-col">
          {/* Header */}
          <Navbar />
          {/* Main Content */}
          <main className="flex-grow">{children}</main>
          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default Layout;
