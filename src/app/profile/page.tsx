"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";
export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState("nothing");
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logged out successfully");
      router.push("/login");
    } catch (error: any) {
      console.log("Logout failed", error.message);
      toast.error(error.message);
    }
  };
  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    console.log(res.data);
    setUser(res.data.data._id);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white py-2 flex-col">
      <h1>Profile page</h1>
      <h1 className="p-2 bg-green-400 m-2 ">
        {user === "nothing" ? (
          "Nothing inside"
        ) : (
          <Link href={`/profile/${user}`}>{user}</Link>
        )}
      </h1>
      <button onClick={logout} className="bg-blue-600 rounded-lg mt-4 p-2">
        Logout
      </button>
      <button
        onClick={getUserDetails}
        className="mt-2 rounded-md p-2 bg-purple-500"
      >
        Get data
      </button>
    </div>
  );
}
