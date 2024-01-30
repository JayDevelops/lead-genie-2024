import React from "react";
import {auth} from "@clerk/nextjs";
import {prismadb} from "@/lib/prismadb";
import LeadMagnetsContainer from "@/app/(dashboard)/lead-magnets/LeadMagnetsContainer";

export default async function LeadMagnetsPage() {
    //  Grab the current UserID
    const {userId} = auth();

    if (!userId) {
        return <div> No User Found...</div>
    }

    // Get both leads and leadMagnets from the database
    const leadMagnetsRequest = getLeadMagnets(userId);
    const leadsRequest = getLeads(userId);

    //  Assigned leadMagnets and leads to the requested queries, await all the promises
    const [leadMagnets, leads] = await Promise.all([
        leadMagnetsRequest,
        leadsRequest,
    ])

    return (
        <LeadMagnetsContainer leadMagnets={leadMagnets} leads={leads} />
    )
}

//  Get the lead magnets from the database
const getLeadMagnets = async (userId: string) => {
    try {
        return await prismadb.leadMagnet.findMany({
            where: {userId},
        })
    } catch (err) {
        console.error(err);
        return [];
    }
}

//  Get the leads from the database
const getLeads = async (userId: string) => {
    try {
        return await prismadb.lead.findMany({
            where: {userId},
        })
    } catch (err) {
        console.error(err);
        return [];
    }
}