
import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, UserButton, auth, currentUser } from "@clerk/nextjs";
import { BellDot, Search, SquarePen } from "lucide-react";
import Image from "next/image";
import React from "react";
import Link from "next/link";

function Header() {
  const { userId } = auth();
  
  return (
    <div className="p-4 bg-white">
      <div className="flex justify-between lg:mx-[100px]">
        <div className="flex">
          <div className="flex gap-2 border rounded-md p-2 mr-3">
            <Link href="/">
              <Image
                src="/next.svg"
                alt="logo"
                width={0}
                height={0}
                priority
                className="w-[100px] h-auto"
              />
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <BellDot className="text-gray-600" />
          <Link href={"/write"}>
            <SquarePen />
          </Link>

          {!userId ? (
            <div className="flex">
              <Link href={'/sign-in'}>
                <Button className="mr-3 hidden md:block">Log In</Button>
              </Link>
              <SignUpButton>
                <Button>Sign Up</Button>
              </SignUpButton>
            </div>
          ) : (
            <Link href={"/courses"}>
              <Button>Courses</Button>
            </Link>
          )}
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
}

export default Header;
