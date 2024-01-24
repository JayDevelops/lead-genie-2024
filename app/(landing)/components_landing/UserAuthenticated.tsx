/*
* This component checks if the user is authenticated. If they are then show a dashboard button
* Else show the sign-in button so the user may sign in.
* */
import {User} from "@clerk/nextjs/api";
import {currentUser, SignInButton, UserButton} from "@clerk/nextjs";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {ModeToggle} from "@/components/ui/mode-toggle";
import React from "react";

export default async function UserAuthenticated() {
    const user: User | null = await currentUser();

    //  If there is no current signed-in user then return only the sign-in button and the mode-toggle
    if(!user) {
        return (
            <div className="flex flex-grow gap-x-4 items-center">
                <SignInButton />

                <ModeToggle />
            </div>
        )
    }

    return (
        <div className="flex flex-grow gap-x-4 items-center">
            <Link href="/lead-magnets" legacyBehavior passHref>
                <Button variant="rainbow">
                    Dashboard
                </Button>
            </Link>

            <ModeToggle />

            <UserButton afterSignOutUrl="/"/>

        </div>
    );
}