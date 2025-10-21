import React from "react";
import logo from "../../../../public/digital_store_white.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const menu = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/Shop" },
    { name: "About Us", path: "/AboutUs" },
  ];

  return (
    <div className="bg-primary">
      <div className="flex justify-between items-center max-w-7xl mx-auto py-2 text-gray-300">
        <Link href="/">
          <Image src={logo} alt="logo" height={150} width={150}></Image>
        </Link>
        <div>
          <ul className="flex gap-10 font-semibold">
            {menu?.map((dt, index) => (
              <li key={index}>
                <Link href={dt.path}>{dt.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Link href="/Register">
            <button className="border border-secondary px-5 py-2 font-semibold rounded-md hover:bg-secondary transition-all duration-300 cursor-pointer hover:text-primary">
              Log in
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
