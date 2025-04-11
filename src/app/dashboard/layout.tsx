import { ReactNode } from "react";
import NavBar from "./_components/NavBar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <div className="bg-accent/5 min-h-screen">
            <div className="">
                <NavBar />
                {children}
            </div>
        </div>
    );
}
