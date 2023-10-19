'use client';
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation"

export default function NavLinks({ data }) {
  const pathname = usePathname();
  const links = data.map(item => ({
    href : `/categories/${item.slug}`,
    label : item.name,
    isActive : pathname ===  `/categories/${item.slug}`,
  }))
  // console.log(pathname);
  return (
    <nav className="flex items-center gap-4 mx-6 lg:gap-6">
      {links.map(link => (
        <Link key={link.href} href={link.href} className={cn('text-sm font-medium hover:underline hover:text-black transition-colors  duration-500 ', link.isActive ? 'text-black' : 'text-slate-500')}>{ link.label }</Link>
      ))}
    </nav>
  )
}
