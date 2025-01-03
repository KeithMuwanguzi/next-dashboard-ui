import MenuBar from "@/components/Menu";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="h-screen flex">
        <div className="w-[16.7%] md:w-[8%] lg:w-[16%] xl:w-[16%] p-4">
          <Link href="/" className="flex justify-center lg:justify-start gap-2">
            <Image src="/logo.png" alt="Logo" width={28} height={28}/>
            <span className="hidden lg:block font-bold">DestinyPrep</span>
          </Link>
          <MenuBar/>
        </div>
        <div className="w-[83.3%] md:w-[92%] lg:w-[84%] xl:w-[84%] bg-[#F7F8FA] overflow-scroll">
          <NavBar/>
          {children}
        </div>
      </div>
    );
  }