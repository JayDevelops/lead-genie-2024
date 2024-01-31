"use client"
import React, {ReactNode, useState} from "react";
import LeadMagnetEditorNavBar
    from "@/app/(dashboard)/lead-magnet-editor/[[...leadMagnetId]]/LeadMagnetEditorNavBar";

export type LeadMagnetSections =
    | "content"
    | "prompt"
    | "email"
    | "profile"
    | "settings";

// const editorComponents: Record<LeadMagnetSections, ReactNode> = {
//     content: <LeadMagnetContentEditor />,
//     prompt: <LeadMagnetPromptEditor />,
//     email: <LeadMagnetEmailEditor />,
//     profile: <LeadMagnetProfileEditor />,
//     settings: <LeadMagnetSettings />,
// }

export default function LeadMagnetEditor() {
    //  The state to track if the sidebar is collapsed, default is false
    const [isSideBarCollapsed, setIsSideBarCollapsed] = useState(false);

    //  The Default editor section will be the content, then users can switch between states
    const [selectedEditor, setSelectedEditor] = useState<LeadMagnetSections>("content");

    //  Set the appropriate selected editor given the state to the record to react node in editorComponents
    const handleSelectEditor = (editor: LeadMagnetSections) => {
        setSelectedEditor(editor)
    }

    return (
        <div className="flex flex-col h-screen w-full overflow-y-hidden">
            {/* Navbar containing the deleting, view published, save and publish buttons*/}
            <LeadMagnetEditorNavBar />

            {/*Sidebar from all the editors will be shown below*/}
            <div className="flex h-full flex-row">
                {/*<LeadMagnetEditorSideBar*/}
                {/*    isSideBarCollapsed={isSideBarCollapsed}*/}
                {/*    setSelectedEditor={handleSelectEditor}*/}
                {/*    setIsSideBarCollapsed={setIsSideBarCollapsed}*/}
                {/*/>*/}

                {/* Let handleSelectEditor change the ReactNode component to be display, when the user clicks on it*/}
                <div className="h-full flex-grow">
                    {/*{editorComponents[selectedEditor]}*/}
                </div>
            </div>
        </div>
    )
}