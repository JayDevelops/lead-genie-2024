import React from "react";
import LandingNavBar from "@/app/(landing)/components_landing/LandingNavBar";

export default function LandingLayout(
    {
        children,
    }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section className="landing-page flex min-h-screen flex-col overflow-x-clip">
            <LandingNavBar />

            <div className="flex-grow">
                {children}
            </div>
        </section>
    );
}