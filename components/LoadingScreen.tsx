import React from "react";
import {RingLoader} from "react-spinners";

export default function LoadingScreen() {
    return (
        <div className="z-50 flex h-screen w-screen items-center justify-center bg-primary">
            <div className="relative flex flex-col items-center justify-center">
                <div className="z-10 text-5xl font-bold text-primary">
                    LeadGenie
                </div>

                <RingLoader color="hsl(var(--primary))" speedMultiplier={1.5} />
            </div>
        </div>
    )
}