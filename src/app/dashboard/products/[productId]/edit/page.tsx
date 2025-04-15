import { PageWithBackButton } from "@/app/dashboard/_components/PageWithBackButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getProduct } from "@/server/db/products";
import { auth } from "@clerk/nextjs/server";
import { notFound } from "next/navigation";

export default async function EditProductPage({
    params: { productId },
    searchParams: { tab = "details" },
}: {
    params: { productId: string };
    searchParams: { tab?: string };
}) {
    const { userId, redirectToSignIn } = await auth();

    if (userId == null) return redirectToSignIn();

    const product = await getProduct({ id: productId, userId });

    if (product == null) return notFound();

    return (
        <PageWithBackButton backButtonHref="/dashboard/products" pageTitle="Edit Product">
            <Tabs defaultValue={tab}>
                <TabsList>
                    <TabsTrigger value="details">Details</TabsTrigger>
                    <TabsTrigger value="country">Country</TabsTrigger>
                    <TabsTrigger value="customization">Customization</TabsTrigger>
                </TabsList>
                <TabsContent value="details">Details</TabsContent>
                <TabsContent value="country">Country</TabsContent>
                <TabsContent value="customization">Customization</TabsContent>
            </Tabs>
        </PageWithBackButton>
    );
}
