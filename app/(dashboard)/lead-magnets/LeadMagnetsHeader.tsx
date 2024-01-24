/*
* This component is solely used above the LeadMagnetsContainer.tsx component.
* It returns a title and button so the user can be redirected to creating a new lead button
* */
import {HeadingThree} from "@/components/typography/Headers";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function LeadMagnetsHeader() {
    return (
        <div className="flex justify-between items-center mb-3">
            <HeadingThree color="secondary-foreground">Lead Magnet</HeadingThree>

            <Link className={buttonVariants({ variant: "hoverOutline" })} href="/lead-magnet-editor">
                Create New Lead
            </Link>

        </div>
    )
}