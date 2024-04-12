'use client'
 
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react';
import { Suspense } from 'react'
 
export function Searchbar() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const [search, setSearch] = useState("");
    function handleSearch() {
      const params = new URLSearchParams(searchParams);
      if (search) {
        params.set("query", search);
      } else {
        params.delete("query");
      }
      replace(`${pathname}?${params.toString()}`);
    }
  return (
    // You could have a loading skeleton as the `fallback` too
    <Suspense>
        <div className="flex mr-3">
        <Input
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />

        <Button onClick={handleSearch} type="button" className="ml-3 bg-midnight">
            <Search className="h-4 w-4" />
        </Button>
    </div>
    </Suspense>
  )
}