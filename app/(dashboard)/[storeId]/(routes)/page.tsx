import prismadb from "@/lib/prismadb";
import Navbar from "@/components/navbar";

interface DashboardPageProps {
    params: { storeId: string}
}

export default async function DashboardPage({params}: DashboardPageProps) {
    const store = await prismadb.store.findFirst({
        where: {id: params.storeId}
    })
    return (
        <div>
            <Navbar />
            Active Store: {store?.name}
        </div>
    )
}
