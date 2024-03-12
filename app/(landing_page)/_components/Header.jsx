import { Button } from "@/components/ui/button";
import { BellDot, Search, SquarePen } from "lucide-react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "@/app/(auth)/login/actions";
import { createClient } from "@/app/_utils/supabase/client";

async function Header() {
  const supabase = createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  const initials = user?.email.slice(0, 2) || "NA";

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
          {!user ? (
            <div className="flex">
              <Link href={"/signIn"}>
                <Button className="mr-3 hidden md:block">Log In</Button>
              </Link>
            </div>
          ) : (
            <div className="flex gap-4 items-center">
              <Link href={"/courses"}>
                <Button>Courses</Button>
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger className="items-center">
                  <Avatar className=" w-8 h-8">
                    {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
                    <AvatarFallback className="bg-orange-300 uppercase">
                      {initials}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>
                    <form action={signOut}>
                      <Button>Sign Out</Button>
                    </form>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
