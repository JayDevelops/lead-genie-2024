import React from "react";
import {LeadMagnetsProps} from "@/app/(dashboard)/lead-magnets/LeadMagnetsContainer";
import {
    Card,
    CardContent,
    CardTitle,
} from "@/components/ui/card"
import {buttonVariants} from "@/components/ui/button";
import Link from "next/link";
import LeadsBarChart from "@/app/(dashboard)/lead-magnets/LeadsBarChart";

export default function LeadMagnetsTable({leadMagnets, leads}: LeadMagnetsProps) {
    // From the passed leadMagnetId property, get the length of the filtered leads as a number.
    const getLeadsForMagnet = (leadMagnetId: string): number => {
        return leads.filter((lead) => lead.leadMagnetId === leadMagnetId).length
    }

    const getConversionRate = (
        leadMagnetId: string,
        pageViews: number,
    ): number => {
        if (pageViews === 0) return 0;

        return Math.round(
            (getLeadsForMagnet(leadMagnetId) / pageViews) * 100
        )
    }

    return (
        <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow-md md:shadow-xl">
            {leadMagnets.map((leadMagnet) => (
                <Card key={leadMagnet.id} className="flex-1 space-y-3 p-6 pt-6">
                    <div className="flex items-center justify-between space-y-2">
                        <CardTitle>
                            {leadMagnet.name}
                        </CardTitle>

                        <div className="flex items-center space-x-2">
                            <Link className={buttonVariants({ variant: "hoverOutline" })} href={`/leads/${leadMagnet.id}`}>
                                View Leads
                            </Link>
                        </div>
                    </div>

                    <CardContent className="grid gap-4 lg:grid-cols-3">
                        <LeadsBarChart pageViews={5}
                                       leadsCount={getLeadsForMagnet(leadMagnet.id)}
                                       conversionRate={getConversionRate(leadMagnet.id, leadMagnet.pageViews)}
                        />
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

