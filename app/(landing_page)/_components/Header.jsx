"use client";
import { Button } from "@/components/ui/button";
import { BellDot, Home, Menu, Search, SquarePen } from "lucide-react";
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
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

function Header() {
  const { user } = useKindeBrowserClient();
  const initials = user?.given_name.slice(0, 2) || "NA";
  return (
    <div className="p-4 bg-white">
      <div className="flex justify-between lg:mx-[100px]">
        <div className="flex">
          <div className="lg:flex gap-2 border rounded-md p-2 mr-3 hidden ">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="logo"
                width={0}
                height={0}
                priority
                className="w-[100px] h-auto"
              />
            </Link>
          </div>
          <div className="flex lg:hidden items-center hover:bg-slate-200 rounded-full p-2">
            <Drawer direction="left" snapPoints={[0.5,1]}>
              <DrawerTrigger asChild>
                <Menu />
              </DrawerTrigger>
              <DrawerContent className="top-[-100px] ">  
                <div className="p-3 ml-[220px] ">
                  <ul className="flex flex-col space-y-2 sidebar-ul">
                    <li className="">
                      <strong className="block text-xs font-medium uppercase text-gray-400">
                        {" "}
                        General{" "}
                      </strong>
                      
                      <ul className="mt-2 space-y-1">
                        <li>
                          <Link href={'/reading-list'} className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
                            Reading List
                          </Link>
                        </li>

                        <li>
                          <a
                            href="#"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                          >
                            Team
                          </a>
                        </li>

                        <li>
                          <a
                            href="#"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                          >
                            Projects
                          </a>
                        </li>

                        <li>
                          <a
                            href="#"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                          >
                            Meetings
                          </a>
                        </li>

                        <li>
                          <a
                            href="#"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                          >
                            Calendar
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <strong className="block text-xs font-medium uppercase text-gray-400">
                        {" "}
                        Support{" "}
                      </strong>

                      <ul className="mt-2 space-y-1">
                        <li>
                          <a
                            href="#"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                          >
                            Update
                          </a>
                        </li>

                        <li>
                          <a
                            href="#"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                          >
                            Help
                          </a>
                        </li>

                        <li>
                          <a
                            href="#"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                          >
                            Settings
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <strong className="block text-xs font-medium uppercase text-gray-400">
                        {" "}
                        Profile{" "}
                      </strong>

                      <ul className="mt-2 space-y-1">
                        <li>
                          <a
                            href="#"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                          >
                            Details
                          </a>
                        </li>

                        <li>
                          <a
                            href="#"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                          >
                            Subscription
                          </a>
                        </li>

                        <li>
                          <form action="#">
                            <button
                              type="submit"
                              className="block w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
                            >
                              Logout
                            </button>
                          </form>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
          <div className="flex lg:hidden items-center hover:bg-slate-200 rounded-full p-2">
            <Link href={'/'}>
              <Home strokeWidth={1}/>
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
              <Button className="bg-primary">
                <LoginLink>Sign In</LoginLink>
              </Button>
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
                    <LogoutLink>Log Out</LogoutLink>
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
