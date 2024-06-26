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
import { usePathname } from "next/navigation";

function Header() {
  const { user } = useKindeBrowserClient();
  const initials = user?.given_name.slice(0, 2) || "NA";
  const path = usePathname();
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
                  <div className="flex flex-col space-y-2 sidebar-div ">
                    <div className="">
                      <strong className="block text-xs font-medium uppercase text-gray-400">
                        {" "}
                        TAB{" "}
                      </strong>
                      
                      <div className="mt-2 space-y-1">
                        <div>
                          <Link href={'/reading-list'} className={`block rounded-lg hover:bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 ${path.includes('reading-list') && 'bg-midnight text-white'}`}>
                            Reading List
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div>
                      <strong className="block text-xs font-medium uppercase text-gray-400">
                        {" "}
                        TOPICS{" "}
                      </strong>

                      <div className="mt-2 space-y-1">
                        <div>
                          <a
                            href="#"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                          >
                            Update
                          </a>
                        </div>

                        <div>
                          <a
                            href="#"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                          >
                            Help
                          </a>
                        </div>

                        <div>
                          <a
                            href="#"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                          >
                            Settings
                          </a>
                        </div>
                      </div>
                    </div>

                    <div>
                      <strong className="block text-xs font-medium uppercase text-gray-400">
                        {" "}
                        Profile{" "}
                      </strong>

                      <div className="mt-2 space-y-1">
                        <div>
                          <a
                            href="#"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                          >
                            Details
                          </a>
                        </div>

                        <div>
                          <a
                            href="#"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                          >
                            Subscription
                          </a>
                        </div>

                        <div>
                          <form action="#">
                            <button
                              type="submit"
                              className="block w-fdivl rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-adivgn:_inherit] hover:bg-gray-100 hover:text-gray-700"
                            >
                              Logout
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
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
                <Button className="bg-midnight">Courses</Button>
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger className="items-center">
                  <Avatar className=" w-8 h-8">
                    {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
                    <AvatarFallback className="bg-dawn-sky uppercase">
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
