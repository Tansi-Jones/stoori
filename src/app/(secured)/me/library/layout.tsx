import { Navigation } from "@/components/Navbar/Navigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navigation />

      {children}
    </>
  );
}
