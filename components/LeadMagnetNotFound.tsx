import React from "react";
import {HeadingOne} from "@/components/typography/Headers";
import {buttonVariants} from "@/components/ui/button";
import Link from "next/link";
import DashBoardNavBar from "@/components/DashBoardNavBar";

interface LeadMagnetNotFoundProps {
    returnLink: string,
}

export default function LeadMagnetNotFound({returnLink}: LeadMagnetNotFoundProps) {
    return (
        <div>
            <DashBoardNavBar />
            <div className="flex flex-col justify-center items-center h-full w-full gap-y-3">
                <HeadingOne color="primary">Lead Magnet Not Found</HeadingOne>

                <Link href={returnLink} className={buttonVariants({variant: "hoverOutline"})}>Click here</Link>
            </div>
        </div>
    )
}