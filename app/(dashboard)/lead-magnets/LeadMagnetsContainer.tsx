"use client"
import {Lead, LeadMagnet} from "@prisma/client";
import LeadMagnetsHeader from "@/app/(dashboard)/lead-magnets/LeadMagnetsHeader";

interface LeadMagnetsContainerProps {
    leadMagnets: LeadMagnet[],
    leads: Lead[],
}

export default function LeadMagnetsContainer({leadMagnets, leads}: LeadMagnetsContainerProps) {
    return (
        <div className="w-full lg:max-w-6xl lg:mx-auto">
            <LeadMagnetsHeader />

            {/*TODO: Lead Magnets Table with Graph Cards, they go by columns in one row. Look at shadcn examples...*/}
        </div>
    )
}
