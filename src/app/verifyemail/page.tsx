"use client";
import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyEmail = async () => {
    try {
      await axios.post("/api/users/verifyemail", { token });
      setVerified(true);
    } catch (error: any) {
      setError(true);
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyEmail();
    }
  }, [token]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl text-white">Verify Email</h1>
      <h2 className="text-white bg-orange-400 mt-4 p-2">
        {token ? `${token}` : "No token"}
      </h2>
      {verified && (
        <div>
          <h2 className="text-2xl">Email verified</h2>
          <Link href="/login" className="text-blue-500">
            Login
          </Link>
        </div>
      )}
      {error && (
        <div>
          <h2 className="bg-red-500 text-violet-500 mt-4 p-2 rounded-lg ">
            Error
          </h2>
        </div>
      )}
    </div>
  );
}
