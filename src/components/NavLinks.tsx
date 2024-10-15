import Link from "next/link";

interface NavLinkProps {
    children: React.ReactNode;
    href: string;
}

export default function NavLink({children, href}: NavLinkProps){
    return (
        <Link
            href={href}
            className="ml-2 border-4 p-4 rounded-xl hover:bg-slate-300 hover:text-slate-600 text-slate-200 border-slate-300 font-bold"
        >
            {children}
        </Link>
    )
}