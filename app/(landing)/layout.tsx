import React from "react";

export default function LandingLayout(
    {
        children,
    }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section className="landing-page flex min-h-screen flex-col overflow-x-clip">

            <div className="flex-grow">
                {children}
            </div>
        </section>
    );
}