import { HasPermission } from "@/components/HasPermission";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getViewsByDayChartData } from "@/server/db/productViews";
import { canAccessAnalytics } from "@/server/permissions";
import { auth } from "@clerk/nextjs/server";

export default async function AnalyticsPage({
    searchParams,
}: {
    searchParams: {
        interval?: string;
        timezome?: string;
        productId?: string;
    };
}) {
    const { userId, redirectToSignIn } = await auth();

    if (userId == null) return redirectToSignIn();

    return (
        <>
            <h1 className="text-3xl font-semibold">Analytics</h1>
            <HasPermission permission={canAccessAnalytics} renderFallback>
                <div className="flex flex-col gap-8">
                    <ViewsByDayCard />
                    <ViewsByPPPCard />
                    <ViewsByCountryCard />
                </div>
            </HasPermission>
        </>
    );
}

async function ViewsByDayCard(props: Parameters<typeof getViewsByDayChartData>[0]) {
    const chartData = await getViewsByDayChartData(props);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Visitors Per Day</CardTitle>
            </CardHeader>
            <CardContent>
                <ViewsByDayChart chartData={chartData} />
            </CardContent>
        </Card>
    );
}

async function ViewsByPPPCard(props: Parameters<typeof getViewsByPPPChartData>[0]) {
    const chartData = await getViewsByPPPChartData(props);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Visitors Per PPP Group</CardTitle>
            </CardHeader>
            <CardContent>
                <ViewsByPPPChart chartData={chartData} />
            </CardContent>
        </Card>
    );
}

async function ViewsByCountryCard(
    props: Parameters<typeof getViewsByCountryChartData>[0]
) {
    const chartData = await getViewsByCountryChartData(props);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Visitors Per Country</CardTitle>
            </CardHeader>
            <CardContent>
                <ViewsByCountryChart chartData={chartData} />
            </CardContent>
        </Card>
    );
}