"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { name: "home", path: "/" },
    { name: "skills", path: "/skills" },
    { name: "dev", path: "/dev" },
    { name: "work", path: "/work" },
    { name: "education", path: "/education" },
    { name: "culture", path: "/culture" },
];

export function Navbar() {
    const currentPath = usePathname();

    return (
        <nav className="flex space-x-4 p-4 bg-gray-800 text-white">
            {navItems.map((item) => (
                <Link
                    key={item.path}
                    href={item.path}
                    className={cn(
                        "px-3 py-2 rounded-md text-sm font-medium",
                        currentPath === item.path
                            ? "bg-gray-700 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    )}
                >
                    {item.name}
                </Link>
            ))}
        </nav>
    );
}

export default Navbar;
