import { BrandLogo } from "@/components/BrandLogo";
import {  UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

export default function NavBar() {
    return (
        <header className="flex py-4 shadow fixed top-0 w-full  bg-background/95">
            <nav className="flex items-center gap-10 container font-semibold">
                <Link href="/dashboard" className="mr-auto">
                    <BrandLogo />
                </Link>
                <Link href="/dashboard/products">Products</Link>
                <Link href="/dashboard/analytics">Analytics</Link>
                <Link href="/dashboard/subscription">Subscription</Link>
                <UserButton />
                {/*
                <span className="text-lg">
                    <SignedIn>
                        <Link href="/dashboard">Dashboard</Link>
                    </SignedIn>
                    <SignedOut>
                        <SignInButton>Login</SignInButton>
                    </SignedOut>
                </span> */}
            </nav>
        </header>
    );
}
