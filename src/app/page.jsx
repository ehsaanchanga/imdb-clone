import Image from "next/image";
import { Inter } from "@next/font/google";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <h1 className="text-red-600">Home</h1>
    </>
  );
}
