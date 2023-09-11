import NavBar from "./../../../components/nav/NavBar";
import "./../../../globals.css";
import { Sora } from "next/font/google";

const inter = Sora({ subsets: ["latin"] });

export const metadata = {
  title: "Science Ignite",
  description: "Science Ignite Africa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
