import React from "react";
import LandingNavBar from "@/app/(landing)/components_landing/LandingNavBar";

export default function LandingLayout(
    {
        children,
    }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <LandingNavBar />
            <section className="landing-page flex min-h-screen flex-col overflow-x-clip">
                <div className="flex-grow">
                    {children}
                </div>
            </section>
        </>
    );
}