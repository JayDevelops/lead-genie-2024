"use client";
import React from "react";
import {LeadMagnet} from "@prisma/client";
import {LeadMagnetEditorContextProvider} from "@/context/LeadMagnetEditorContext";
import LeadMagnetEditor from "@/app/(dashboard)/lead-magnet-editor/[[...leadMagnetId]]/editor_components/LeadMagnetEditor";
import {useSession} from "@clerk/nextjs";
import LoadingScreen from "@/components/LoadingScreen";

interface LeadMagnetEditorContainerProps {
    leadMagnet: LeadMagnet,
}
export default function LeadMagnetEditorContainer({leadMagnet}: LeadMagnetEditorContainerProps) {
    const {isLoaded} = useSession()

    if(!isLoaded) return <LoadingScreen />

    return (
        <LeadMagnetEditorContextProvider leadMagnet={leadMagnet}>
            <LeadMagnetEditor />
        </LeadMagnetEditorContextProvider>
    )
}