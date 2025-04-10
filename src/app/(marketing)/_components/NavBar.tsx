import { BrandLogo } from "@/components/BrandLogo";
import { SignedIn, SignedOut } from "@clerk/nextjs"
import Link from "next/link";
import React from "react";

export default function NavBar() {
    return (
        <header className="flex py-6 shadow-xl fixed top-0 w-full z-10 bg-background/95">
            <nav className="flex items-center gap-10 container font-semibold">
                <Link href="/" className="mr-auto">
                    <BrandLogo />
                </Link>
                <Link href="/" className="mr-auto">
                    Features
                </Link>
                <Link href="/" className="mr-auto">
                    Pricing
                </Link>
                <Link href="/" className="mr-auto">
                    About
                </Link>
                <span className="text-lg">
                    <SignedIn>
                        <Link href="/dashboard">Dashboard</Link>
                    </SignedIn>
                    <SignedOut>
                        <Link href="/dashboard">Login</Link>
                    </SignedOut>
                </span>
            </nav>
        </header>
    );
}
