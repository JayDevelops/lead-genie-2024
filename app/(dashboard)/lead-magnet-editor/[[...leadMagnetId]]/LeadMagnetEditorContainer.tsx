"use client";
import React from "react";
import {LeadMagnet} from "@prisma/client";
import {LeadMagnetEditorContextProvider} from "@/context/LeadMagnetEditorContext";
import LeadMagnetEditor from "@/app/(dashboard)/lead-magnet-editor/[[...leadMagnetId]]/editor_components/LeadMagnetEditor";

interface LeadMagnetEditorContainerProps {
    leadMagnet: LeadMagnet,
}
export default function LeadMagnetEditorContainer({leadMagnet}: LeadMagnetEditorContainerProps) {
    return (
        <LeadMagnetEditorContextProvider leadMagnet={leadMagnet}>
            <LeadMagnetEditor />
        </LeadMagnetEditorContextProvider>
    )
}