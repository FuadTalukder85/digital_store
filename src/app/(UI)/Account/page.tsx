"use client";
import Image from "next/image";
import React from "react";
import demoPro from "../../../../public/demoPro.jpg";
import { FaCreativeCommonsShare } from "react-icons/fa";

const Account = () => {
  return (
    <div className="min-h-screen bg-[#e8f5e9] py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="bg-white shadow-md border border-gray-200 px-6 py-4 rounded-t-2xl flex items-center justify-between">
          <p className="text-gray-700 text-lg font-bold">My Account</p>
          <button className="flex items-center gap-2 text-sm bg-primary text-white px-4 py-2 rounded-md hover:bg-[#e8f5e9] hover:text-gray-700 cursor-pointer transition-all duration-300">
            <FaCreativeCommonsShare className="text-lg" />
            Copy Referral Link
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 bg-white shadow-md border border-gray-200 rounded-b-2xl overflow-hidden">
          <div className="md:col-span-4 flex flex-col items-center justify-center p-8 border-r border-gray-100 bg-gray-50">
            <div className="">
              <Image
                src={demoPro}
                alt="Profile"
                width={220}
                height={220}
                className="rounded-full shadow-md border-4 border-white"
              />
            </div>
            <h2 className="mt-6 text-xl font-semibold text-gray-700">
              Fuad Talukder
            </h2>
            <p className="text-gray-500 text-sm">talukder@gmail.com</p>
          </div>

          <div className="md:col-span-8 p-8 space-y-6 bg-white">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Referral Overview
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-xl shadow hover:shadow-lg transition">
                <p className="text-gray-600 font-semibold mb-2">
                  Referred Users
                </p>
                <p className="text-4xl font-bold text-blue-600 text-right">
                  10
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-gradient-to-r from-green-50 to-green-100 p-5 rounded-xl shadow hover:shadow-lg transition">
                <p className="text-gray-600 font-semibold mb-2">
                  Users Who Purchased
                </p>
                <p className="text-4xl font-bold text-green-600 text-right">
                  6
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-5 rounded-xl shadow hover:shadow-lg transition">
                <p className="text-gray-600 font-semibold mb-2">
                  Total Credits Earned
                </p>
                <p className="text-4xl font-bold text-yellow-600 text-right">
                  20
                </p>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-sm text-gray-500">
                Share your referral link with friends and earn credits when they
                make their first purchase!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
