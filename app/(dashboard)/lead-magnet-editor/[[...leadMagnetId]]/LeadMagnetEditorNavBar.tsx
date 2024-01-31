import React from "react";
import {useLeadMagnetEditorContext} from "@/context/LeadMagnetEditorContext";

export default function LeadMagnetEditorNavBar() {
    const {editedLeadMagnet} = useLeadMagnetEditorContext()
    console.log("editedLeadMagnet", editedLeadMagnet)

    return (
        <div className="flex w-full items-center justify-between border-b-[1px] border-solid border-accent-foreground p-3 bg-secondary text-secondary-foreground">
            LeadMagnetEditorNavBar
        </div>
    )
}