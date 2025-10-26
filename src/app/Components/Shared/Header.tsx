"use client";
import React, { useEffect, useState } from "react";
import logo from "../../../../public/digital_store_white.png";
import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from "@/Redux/hook";
import { useCurrentUser } from "@/Redux/auth/authSlice";
import { usePathname } from "next/navigation";
import { RiAccountCircleLine, RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const pathName = usePathname();
  const user = useAppSelector(useCurrentUser);
  const [isMounted, setIsMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const menu = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/Shop" },
    { name: "About", path: "/About" },
    { name: "Contact", path: "/Contact" },
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

        {/* menu for desktop */}
        <nav className="hidden md:flex gap-10 font-semibold uppercase">
          {menu.map((dt, index) => (
            <motion.li key={index} whileHover={{ y: -2 }} className="list-none">
              <Link
                href={dt.path}
                className={`relative transition-all duration-300 ${getDynamicLink(
                  dt.path
                )}`}
              >
                {dt.name}
              </Link>
            </motion.li>
          ))}
        </nav>

        {/* account/login for desktop */}
        <div className="hidden md:block">
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

        {/* mobile menu icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-3xl"
          >
            {menuOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </button>
        </div>
      </div>

      {/* Sidebar for mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed top-0 right-0 h-screen w-7/8 bg-primary text-secondary z-50 shadow-lg flex flex-col items-start md:hidden"
          >
            <div className="flex justify-end w-full items-center p-3">
              <button
                onClick={() => setMenuOpen(false)}
                className="text-3xl text-secondary border border-secondary rounded-md"
              >
                <RiCloseLine />
              </button>
            </div>
            <nav className="flex flex-col gap-6 p-3 text-lg font-semibold w-full bg-primary">
              {menu.map((dt, index) => (
                <Link
                  key={index}
                  href={dt.path}
                  onClick={() => setMenuOpen(false)}
                  className={`w-full block py-2 border-b border-gray-700 ${getDynamicLink(
                    dt.path
                  )}`}
                >
                  {dt.name}
                </Link>
              ))}
            </nav>

            <div className="mt-5 w-full">
              {user ? (
                <Link
                  href="/Account"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 text-secondary border border-gray-600 px-5 py-2 rounded-lg hover:bg-[#0F494D] transition-all duration-300"
                >
                  <RiAccountCircleLine className="text-2xl" /> Account
                </Link>
              ) : (
                <Link
                  href="/Login"
                  onClick={() => setMenuOpen(false)}
                  className="block text-center bg-[#e8f5e9] text-primary px-5 py-2 font-semibold rounded-lg hover:bg-[#0F494D] transition-all duration-300 hover:text-white"
                >
                  Log in
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
