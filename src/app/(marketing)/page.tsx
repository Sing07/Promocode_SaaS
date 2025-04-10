import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/nextjs";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { NeonIcon } from "./_icons/Neon";
import { ClerkIcon } from "./_icons/Clerk";
import { subscriptionTiersInOrder } from "@/data/subscriptionTiers";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCompactNumber } from "@/formatters";
import { cn } from "@/lib/utils";

export default function HomePage() {
    return (
        <>
            <section className="min-h-screen bg-radial-[at_50%_75%] from-sky-100 via-blue-100 to-indigo-300 to-90% flex items-center justify-center text-center text-balance flex-col gap-8 px-4">
                <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight m-4">
                    Price Smarter, Sell bigger!
                </h1>
                <p className="text-lg lg:text-3xl max-w-screen-xl">
                    Optimize your product pricing across countries to maximize sales.
                    Capture 85% of the untapped market with location-based dynamic pricing
                </p>
                <SignUpButton>
                    <Button className="text-lg !px-5 p-6 flex gap-2">
                        Get started for free <ArrowRightIcon className="size-5" />
                    </Button>
                </SignUpButton>
            </section>
            <section className="bg-primary text-primary-foreground">
                <div className="container py-16 flex flex-col gap-16 px-8 md:px-16">
                    <h2 className="text-3xl text-center text-balance">
                        Trusted by the top modern companies
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-16">
                        <Link href="https://neon.tech">
                            <NeonIcon />
                        </Link>
                        <Link href="https://clerk.com">
                            <ClerkIcon />
                        </Link>
                        <Link href="https://neon.tech">
                            <NeonIcon />
                        </Link>
                        <Link href="https://clerk.com">
                            <ClerkIcon />
                        </Link>
                        <Link href="https://neon.tech">
                            <NeonIcon />
                        </Link>
                        <Link href="https://clerk.com">
                            <ClerkIcon />
                        </Link>
                        <Link href="https://neon.tech">
                            <NeonIcon />
                        </Link>
                        <Link href="https://clerk.com">
                            <ClerkIcon />
                        </Link>
                        <Link href="https://neon.tech">
                            <NeonIcon />
                        </Link>
                        <Link className="md:max-xl:hidden" href="https://clerk.com">
                            <ClerkIcon />
                        </Link>
                    </div>
                </div>
            </section>
            <section id="pricing" className="px-8 py-16 bg-sky-50">
                <h2 className="text-4xl text-center text-balance font-semibold mb-8">
                    Pricing software which pays for itself 20x over
                </h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto">
                    {subscriptionTiersInOrder.map((tier) => (
                        <PricingCard key={tier.name} {...tier} />
                    ))}
                </div>
            </section>
        </>
    );
}

function PricingCard({
    name,
    priceInCents,
    maxNumberOfVisits,
    maxNumberOfProducts,
    canRemoveBranding,
    canAccessAnalytics,
    canCustomizeBanner,
}: (typeof subscriptionTiersInOrder)[number]) {
    const isMostPopular = name === "Standard";

    return (
        <Card
            className={cn(
                "relative shadow-none rounded-3xl overflow-hidden",
                isMostPopular ? "border-accent border-2" : "border-none"
            )}
        >
            {isMostPopular && (
                <div className="bg-accent text-accent-foreground absolute py-1 px-10 -right-8 top-24 rotate-45 origin-top-right">
                    Most popular
                </div>
            )}
            <CardHeader>
                <div className="text-accent font-semibold mb-8">{name}</div>
                <CardTitle className="text-xl font-bold">
                    ${priceInCents / 100} /mo
                </CardTitle>
                <CardDescription>
                    {formatCompactNumber(maxNumberOfVisits)} pricing page visits/mo
                </CardDescription>
            </CardHeader>
            <CardContent>
                <SignUpButton>
                    <Button
                        className="text-lg w-full rounded-lg"
                        variant={isMostPopular ? "outline" : "default"}
                    >
                        Get Started
                    </Button>
                </SignUpButton>
            </CardContent>
        </Card>
    );
}