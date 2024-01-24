import React from "react";
import Link from "next/link";
import UserAuthenticated from "@/app/(landing)/components_landing/UserAuthenticated";
import {ModeToggle} from "@/components/ui/mode-toggle";

export default function LandingNavBar() {

    return (
        <nav className="flex w-screen items-center justify-between p-6">
            <div>
                <Link href="/" className="text-xl md:text-2xl text-primary no-underline">
                    LeadGenie
                </Link>
            </div>

            <div className="text-base md:text-lg">
                <UserAuthenticated />
            </div>
        </nav>
    );
}