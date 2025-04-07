import type { Metadata } from "next";
import "../globals.css";
import Header from "../components/header/page";
// import Footer from "../components/footer/page";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
        <Header/>
        {children}
        {/* <Footer/> */}
    </section>
  );
}