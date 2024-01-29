/*
* This component is solely used above the LeadMagnetsContainer.tsx component.
* It returns a title and button so the user can be redirected to creating a new lead button
* */
import { HeadingTwo } from "@/components/typography/Headers";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function LeadMagnetsHeader() {
    return (
        <div className="flex justify-between items-center mb-3">
            <HeadingTwo color="secondary-foreground">Lead Magnet</HeadingTwo>

            <Link className={buttonVariants({ variant: "default" })} href="/lead-magnet-editor">
                Create New Lead
            </Link>
        </div>
    )
}