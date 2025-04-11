"use client";

import Dot from "./dot";
import { Button } from "./ui/button";
import { ROUTES } from "@/config/site";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="flex flex-col items-center justify-between w-full">
            <h1 className="text-lg font-mono font-bold uppercase w-full mb-4">Ollie Mansell</h1>
            <nav className="grid sm:grid-cols-6 gap-2 grid-cols-3 w-full">
                {ROUTES.map((route) => (
                    <Button
                        key={route.href}
                        asChild
                        variant="outline"
                        className="dark:hover:text-background dark:hover:bg-foreground hover:text-background hover:bg-foreground transition-colors duration-200 ease-in-out border-2 border-foreground"
                    >
                        <Link href={route.href} className="items-center ">
                            {route.href === pathname ? <Dot /> : null}
                            {route.name}
                        </Link>
                    </Button>
                ))}
            </nav>
        </header>
    );
}
