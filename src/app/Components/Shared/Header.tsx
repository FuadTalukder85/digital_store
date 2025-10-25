"use client";
import React, { useEffect, useState } from "react";
import logo from "../../../../public/digital_store_white.png";
import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from "@/Redux/hook";
import { useCurrentUser } from "@/Redux/auth/authSlice";
import { usePathname, useRouter } from "next/navigation";
import { RiAccountCircleLine } from "react-icons/ri";
import { motion } from "framer-motion";

const Header = () => {
  const pathName = usePathname();
  const user = useAppSelector(useCurrentUser);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const menu = [
    { name: "Home", path: "/" },
    { name: "Product", path: "/Product" },
    { name: "About Us", path: "/AboutUs" },
  ];

  const getDynamicLink = (path: string) =>
    pathName === path
      ? "text-secondary font-semibold border-b-2 border-secondary"
      : "text-white hover:text-secondary";

  if (!isMounted) {
    return (
      <div className="bg-primary h-16 w-full flex items-center justify-center text-gray-300">
        <Image src={logo} alt="logo" height={120} width={120} />
      </div>
    );
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-primary/80 shadow-md"
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-5 py-1 text-gray-300">
        {/* logo */}
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Image src={logo} alt="logo" height={150} width={150} />
          </motion.div>
        </Link>
        {/* menu */}
        <nav>
          <ul className="hidden md:flex gap-10 font-semibold">
            {menu.map((dt, index) => (
              <motion.li key={index} whileHover={{ y: -2 }}>
                <Link
                  href={dt.path}
                  className={`relative transition-all duration-300 ${getDynamicLink(
                    dt.path
                  )}`}
                >
                  {dt.name}
                  <span className="absolute left-0 bottom-0 w-0 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
        {/* account / login */}
        <div>
          {user ? (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white text-primary rounded-md p-[2px] hover:bg-[#0F494D] transition-all duration-300 hover:text-white cursor-pointer"
            >
              <Link href="/Account">
                <RiAccountCircleLine className="text-3xl" />
              </Link>
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#e8f5e9] text-primary px-5 py-2 font-semibold rounded-lg hover:bg-[#0F494D] transition-all duration-300 hover:text-white cursor-pointer"
            >
              <Link href="/Login">Log in</Link>
            </motion.button>
          )}
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
