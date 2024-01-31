import React from "react";
import {useLeadMagnetEditorContext} from "@/context/LeadMagnetEditorContext";

export default function LeadMagnetEditorNavBar() {
    const {editedLeadMagnet} = useLeadMagnetEditorContext()
    console.log("editedLeadMagnet", editedLeadMagnet)

    return (
        <div>
            LeadMagnetEditorNavBar
        </div>
    )
}