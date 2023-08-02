import prismadb from "@/lib/prismadb";
import Navbar from "@/components/navbar";

interface DashboardPageProps {
    params: { storeId: string}
}



const DashboardPage: React.FC<DashboardPageProps> = async ({params}) => {
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

export default DashboardPage
