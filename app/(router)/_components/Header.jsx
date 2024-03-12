import React from 'react'
import { Search,BellDot, SquarePen } from 'lucide-react'
import { Button } from '@/components/ui/button'

import Link from 'next/link'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { createClient } from '@/utils/supabase/server'
import { signOut } from '@/app/(auth)/login/actions'
 function Header() {
  
  return (
    <div className="p-4 bg-white flex justify-between">
        <div className="flex gap-2 border rounded-md p-2 ">
            <Search className='h-5 w-5'/>
            <input type="text" placeholder="Search..."  className="outline-none"/>
        </div>
        <div className="flex items-center gap-4">
            <BellDot className='text-gray-600'/>
            <Link href={'/write'}>
              <SquarePen />
            </Link>
            <Link href={'/'}>
             <Button>Read</Button>
            </Link>
            
        </div>
    </div>
  )
}

export default Header