"use client";
import React, { useEffect, useState } from "react";
import logo from "../../../../public/digital_store_white.png";
import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from "@/Redux/hook";
import { useCurrentUser } from "@/Redux/auth/authSlice";
import { usePathname, useRouter } from "next/navigation";
import { RiAccountCircleLine } from "react-icons/ri";

const Header = () => {
  const pathName = usePathname();
  const user = useAppSelector(useCurrentUser);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
    if (!user) {
      router.push("/Login");
    }
  }, []);
  const menu = [
    { name: "Home", path: "/" },
    { name: "Product", path: "/Product" },
    { name: "About Us", path: "/AboutUs" },
  ];

  if (!isMounted) {
    return (
      <div className="bg-primary h-16 w-full flex items-center justify-center text-gray-300">
        <Image src={logo} alt="logo" height={120} width={120} />
      </div>
    );
  }
  const getDynamicLink = (path: string) => {
    if (pathName === path) {
      return "border-b";
    }
    // if (
    //   pathName.startsWith("/Product") &&
    //   (path === "/Product" || path === "/Product/[id]")
    // ) {
    //   return "text-seaBlue bg-white px-2 rounded-sm font-bold";
    // }
    // if (
    //   pathName.startsWith("/AboutUs") &&
    //   (path === "/AboutUs" || path === "/AboutUs/[id]")
    // ) {
    //   return "text-seaBlue bg-white px-2 rounded-sm font-bold";
    // }
    return "text-white";
  };
  return (
    <div className="bg-primary">
      <div className="flex justify-between items-center max-w-7xl mx-auto py-1 text-gray-300">
        <Link href="/">
          <Image src={logo} alt="logo" height={150} width={150}></Image>
        </Link>
        <div>
          <ul className="flex gap-10 font-semibold">
            {menu?.map((dt, index) => (
              <li key={index}>
                <Link
                  href={dt.path}
                  className={`transition-all duration-500 ${getDynamicLink(
                    dt.path
                  )}`}
                >
                  {dt.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          {user ? (
            <button className="bg-white text-primary p-1 font-semibold rounded-md hover:bg-[#0F494D] transition-all duration-300 hover:text-white cursor-pointer">
              <Link href="/Account">
                <RiAccountCircleLine className="text-2xl" />
              </Link>
            </button>
          ) : (
            <button className="bg-[#e8f5e9] text-primary px-5 py-2 font-semibold rounded-md hover:bg-[#0F494D] transition-all duration-300 hover:text-white cursor-pointer">
              <Link href="/Login">Log in</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
