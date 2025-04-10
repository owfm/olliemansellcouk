"use client";

import SiteVersion from "./site-version";

export default function Footer() {
    return (
        <footer className="border-t border-foreground w-full mt-auto flex flex-row items-center text-slate-400 pt-1">
            <span className="text-xs text-left font-mono p-0 m-0 max-w-fit mr-auto">
                © {new Date().getFullYear()} Ollie Mansell. Made in UK. All rights reserved. Death before Decaf.
            </span>
            <SiteVersion />
        </footer>
    );
}
