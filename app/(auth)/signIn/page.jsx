"use client"

import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <form className="mt-8 grid grid-cols-6 gap-6">
      <h3 className="text-[24px] font-bold">Sign In</h3>
      <div className="col-span-6">
        <label
          htmlFor="Email"
          className="block text-sm font-medium text-gray-700"
        >
          {" "}
          Email{" "}
        </label>

        <Input
          id="email" 
          name="email"
          type="email"
          placeholder="Email"
        />
      </div>

      <div className="col-span-6">
        <label
          htmlFor="Password"
          className="block text-sm font-medium text-gray-700"
        >
          {" "}
          Password{" "}
        </label>

        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
        />
      </div>

      <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
        <button
          className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
          
        >
          Log in
        </button>

        <p className="mt-4 text-sm text-gray-500 sm:mt-0">
          Already have an account?
          <Link href={'/signUp'}>
            Sign Up
          </Link>
          .
        </p>
      </div>
    </form>
  );
}

export default page;
