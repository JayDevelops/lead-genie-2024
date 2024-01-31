import React from "react";
import {LeadMagnet} from "@prisma/client";
import {prismadb} from "@/lib/prismadb";
import {DEFAULT_LEAD_MAGNET} from "@/app/(dashboard)/lead-magnet-editor/[[...leadMagnetId]]/lead-magnet-constants";
import LeadMagnetNotFound from "@/components/LeadMagnetNotFound";
import LeadMagnetEditorContainer from "@/app/(dashboard)/lead-magnet-editor/[[...leadMagnetId]]/LeadMagnetEditorContainer";

// Define our interface, so we can grab the leadMagnetId from the params
interface LeadMagnetEditorParams {
    params: {
        leadMagnetId: string[],
    },
}

export default async function LeadMagnetEditorPage({params}: LeadMagnetEditorParams) {
    //  Grab the first character from the params, else make it null,
    //  We make it null in case we don't have a leadMagnet with that same ID, then we post a new one to the backend
    const leadMagnetId: string | null = params.leadMagnetId?.length > 0 ? params.leadMagnetId[0] : null;
    console.log("LeadMagnet ID: " + leadMagnetId)

    //  initialize the leadMagnet
    let leadMagnet: LeadMagnet | null

    if(!leadMagnetId) {
        //  If the leadMagnet doesn't exist, then we assign it to a default lead magnet value
        leadMagnet = DEFAULT_LEAD_MAGNET;
    } else {
        // Otherwise, find the LeadMagnet from the database where the id matched the passed parameter leadMagnetId
        leadMagnet = await prismadb.leadMagnet.findUnique({
            where: {
                id: leadMagnetId,
            },
        });
    }

    // If there is still no leadMagnet, then we direct the user to a LeadMagnetNotFound.tsx page
    if(!leadMagnet) {
        return <LeadMagnetNotFound returnLink="/lead-magnets"/>
    }

    //  Else, we display the leadMagnet editor container page
    return (
        <LeadMagnetEditorContainer leadMagnet={leadMagnet}/>
    )
}