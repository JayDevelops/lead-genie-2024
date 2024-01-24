import React from "react";
import DashBoardNavBar from "@/components/DashBoardNavBar";

export default function DashBoardLayout({children,}: {children: React.ReactNode;}) {
    return (
        <>
            <DashBoardNavBar />
            <div className="flex flex-col h-full w-full p-3">
                {children}
            </div>
        </>
    )
}