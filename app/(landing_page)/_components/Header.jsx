import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, UserButton, auth } from "@clerk/nextjs";
import { BellDot, Search, SquarePen } from "lucide-react";
import Image from "next/image";
import React from "react";
import Link from "next/link";

function Header() {
  const { userId } = auth();

  return (
    <div className="p-4 bg-white">
      <div className="flex justify-between lg:mx-[100px]">
        <div className="flex gap-2 border rounded-md p-2 ">
            <Link href='/'>
                <Image src="/next.svg" alt="logo" width={140} height={60} />
            </Link>
        </div>
        <div className="flex items-center gap-4">
          <BellDot className="text-gray-600" />
          <Link href={'/write'}>
            <SquarePen />
          </Link>
          <Link href={"/courses"}>
            <Button>Courses</Button>
          </Link>

          {!userId && (
            <div className="flex">
              <SignInButton>
                <Button className="mr-3 hidden md:block">Log In</Button>
              </SignInButton>
              <SignUpButton>
                <Button>Sign Up</Button>
              </SignUpButton>
            </div>
          )}
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
}

export default Header;
