import { Outlet } from "react-router-dom";
import Banner from "src/components/Banner/Banner";

export default function DefaultPage() {
    return (
        <main>
            <Banner />

            <Outlet />
        </main>
    )
}