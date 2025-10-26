"use client";
import Image from "next/image";
import React from "react";
import demoPro from "../../../../public/demoPro.jpg";
import { FaCreativeCommonsShare } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/Redux/hook";
import { logout, useCurrentUser } from "@/Redux/auth/authSlice";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import dynamic from "next/dynamic";
import { useGetUsersQuery } from "@/Redux/auth/authApi";
import { TUserTypes } from "@/Types/Types";

const Account = () => {
  const user = useAppSelector(useCurrentUser) as TUserTypes;
  const { data, isLoading } = useGetUsersQuery("");
  const matchUser = data?.find((dt: TUserTypes) => dt?.email === user?.email);
  console.log("matchUser", matchUser);
  console.log("user acc", data);
  const dispatch = useAppDispatch();
  const router = useRouter();
  // handle logout
  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    router.push("/");
  };
  // handle referral link copy
  const handleCopyReferral = async () => {
    if (!user?.referralCode) {
      toast.error("Referral code not found!");
      return;
    }

    const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
    const referralUrl = `${baseUrl}/Register?r=${user.referralCode}`;
    try {
      await navigator.clipboard.writeText(referralUrl);
      toast.success("Referral link copied to clipboard!");
    } catch (error) {
      console.error("Copy failed:", error);
      toast.error("Failed to copy referral link!");
    }
  };
  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }
  return (
    <div className="min-h-screen bg-secondary py-12 mt-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white shadow-md border border-gray-200 px-6 py-4 rounded-t-2xl md:flex items-center justify-between">
          <p className="text-gray-700 text-lg font-bold">My Account</p>
          <button
            onClick={handleCopyReferral}
            className="flex items-center gap-2 text-sm mt-1 md:mt-0 bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary hover:text-gray-700 cursor-pointer transition-all duration-300"
          >
            <FaCreativeCommonsShare className="text-lg" />
            Copy Referral Link
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 bg-white shadow-md border border-gray-200 rounded-b-2xl overflow-hidden">
          <div className="md:col-span-4 flex flex-col items-center justify-center p-8 border-r border-gray-100 bg-gray-100">
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
              {user?.name} {user?.lastName}
            </h2>
            <p className="text-gray-500 text-sm">{user?.email}</p>
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
                  {(matchUser?.referralPoints ?? 0) / 2}
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-gradient-to-r from-green-50 to-green-100 p-5 rounded-xl shadow hover:shadow-lg transition">
                <p className="text-gray-600 font-semibold mb-2">
                  Users Who Purchased
                </p>
                <p className="text-4xl font-bold text-green-600 text-right">
                  {(matchUser?.credits ?? 0) / 2}
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-5 rounded-xl shadow hover:shadow-lg transition">
                <p className="text-gray-600 font-semibold mb-2">
                  Total Credits Earned
                </p>
                <p className="text-4xl font-bold text-yellow-600 text-right">
                  {matchUser?.credits ?? 0}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-sm text-gray-500">
                Share your referral link with friends and earn credits when they
                make their first purchase!
              </p>
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleLogout}
                className="mt-6 bg-primary text-white px-5 py-2 font-semibold rounded-md hover:bg-secondary transition-all duration-300 hover:text-primary cursor-pointer"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Account), { ssr: false });
