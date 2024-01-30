import {LeadMagnet} from "@prisma/client";
import React, {createContext, Dispatch, ReactNode, SetStateAction, useContext, useState} from "react";
import {useSession} from "@clerk/nextjs";
import {useRouter} from "next/navigation";
import axios from "axios";
import {useToast} from "@/components/ui/use-toast";
import {ToastAction} from "@/components/ui/toast";

//  Define the shape of our context
interface LeadMagnetEditorContext {
    editedLeadMagnet: LeadMagnet,
    setEditedLeadMagnet: Dispatch<SetStateAction<LeadMagnet>>,
    save: () => Promise<void>,
    publish: () => Promise<void>,
    unPublish: () => Promise<void>,
    remove: () => Promise<void>,
}

const LeadMagnetEditorContext = createContext<LeadMagnetEditorContext | null>(null)

//  Shares the state throughout the application
export const LeadMagnetEditorContextProvider = ({
    children,
    leadMagnet
}: {
    children: ReactNode,
    leadMagnet: LeadMagnet
}) => {
    //  Grab the current session. Also get replace and push from next/router, as well as use the toast.
    const {session} = useSession()
    const {replace, push} = useRouter()
    const { toast } = useToast()

    const [editedLeadMagnet, setEditedLeadMagnet] = useState<LeadMagnet>(leadMagnet)

    if(!session) {
        throw new Error("No session found!")
    }

    /* Set the methods when the state changes for the LeadMagnet editor */

    // When the user clicks save, we want to send that lead magnet text to the backend through our POST API
    const save = async () => {
        try {
            //  If the leadMagnet.id exists, then we update, else we make a new record on the database
            const response = await axios.request({
                url: "/api/lead-magnet",
                method: editedLeadMagnet.id ? "PUT" : "POST",
                data: {
                    ...editedLeadMagnet,
                    userId: session?.user.id,
                }
            })

            if(response.data.data) {
                toast({
                    title: "Lead Magnet Saved Successfully!",
                })
            }
        } catch (err) {
            toast({
                variant: "destructive",
                title: "Failed to Save Lead Magnet",
                description: "There was a problem with your request.",
                action: <ToastAction altText="Try again">Okay.</ToastAction>,
            })
        }
    }

    //  On our publish API route, we post the data with the new editedLeadMagnet.id
    const publish = async () => {
        try {
            const response = await axios.post("/api/lead-magnet/publish", {
                id: editedLeadMagnet.id
            })

            if(response.data.data) {
                toast({
                    title: "Lead Magnet Published Successfully!",
                })
            }

        } catch (err) {
            toast({
                variant: "destructive",
                title: "Failed to Publish the Lead Magnet",
                description: "There was a problem with your request.",
                action: <ToastAction altText="Try again">Okay.</ToastAction>,
            })
        }
    }

    // On our unpublish API route, we remove where we have the lead magnet
    const unPublish = async () => {
        try {
            const response = await axios.post("/api/lead-magnet/unpublish", {
                id: editedLeadMagnet.id
            })

            if(response.data.data) {
                toast({
                    title: "Lead Magnet Unpublished Successfully.",
                })
            }

        } catch (err) {
            toast({
                variant: "destructive",
                title: "Failed to UnPublish the Lead Magnet",
                description: "There was a problem with your request.",
                action: <ToastAction altText="Try again">Okay.</ToastAction>,
            })
        }
    }

    //  On our lead magnet primary API, we find the matched ID, and we delete from the database
    const remove = async () => {
        try {
            const response = await axios.delete(`/api/lead-magnet?id=${editedLeadMagnet.id}`)

            if(response.data.data) {
                toast({
                    title: "Lead Magnet Deleted Successfully.",
                })
            }
        } catch (err) {
            toast({
                variant: "destructive",
                title: "Failed to Delete the Lead Magnet",
                description: "There was a problem with your request.",
                action: <ToastAction altText="Try again">Okay.</ToastAction>,
            })
        }
    }

    return (
        <LeadMagnetEditorContext.Provider
            value={{
                save,
                setEditedLeadMagnet,
                editedLeadMagnet,
                publish,
                unPublish,
                remove
            }}
        >
            {children}
        </LeadMagnetEditorContext.Provider>
    )
}

//  Custom Hook to use our Context in the application
export function useLeadMagnetEditorContext() {
    const context: LeadMagnetEditorContext | null = useContext(LeadMagnetEditorContext)

    if (!context) {
        throw new Error("useLeadMagnetEditorContext must be within a LeadMagnetEditorProvider")
    }

    return context
}