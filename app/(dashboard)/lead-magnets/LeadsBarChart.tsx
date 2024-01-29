"use client"
import {Card, CardContent} from "@/components/ui/card";
import {
    Bar,
    BarChart,
    ResponsiveContainer,
    XAxis,
    YAxis
} from "recharts";
import React from "react";
import {HeadingFour} from "@/components/typography/Headers";
import { BarChartIcon, PersonIcon } from "@radix-ui/react-icons";
import {Activity} from "lucide-react";

interface IssueChartProps {
    pageViews: number,
    leadsCount: number,
    conversionRate: number,
}

interface DataProps {
    label: string,
    value: number,
}

export default function LeadsBarChart({pageViews, leadsCount, conversionRate}: IssueChartProps) {
    //  Define the data labels with each passed property for Recharts
    const data: DataProps[] = [
        {label: "Page Views", value: pageViews},
        {label: "Leads", value: leadsCount},
        {label: "Conversion Rate", value: conversionRate},
    ]

    //  From each passed property, create a record for the appropriate radix-ui icons
    const iconMap: Record<string, React.ReactNode> = {
        "Page Views": <BarChartIcon />,
        "Leads": <PersonIcon />,
        "Conversion Rate": <Activity />,
    }

    return (
        <>
            {data.map((entry, index) => (
                <Card key={`bar-chart-${index}`}>
                    <div className="p-6 flex flex-row items-center justify-between pb-2">
                        <HeadingFour color="secondary-foreground">
                            {entry.label}
                        </HeadingFour>
                        <div className="entry-icon">
                            {iconMap[entry.label]}
                        </div>
                    </div>

                    <CardContent>
                        {entry.label === "Conversion Rate" ? <p>{entry.value} %</p> : <p>{entry.value} </p>}

                        <ResponsiveBarChart data={[entry]}/>
                    </CardContent>
                </Card>
            ))}
        </>
    );
}

function ResponsiveBarChart({data}: { data: DataProps[] }) {
    return (
        <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data} className="recharts-surface">
                <XAxis dataKey="label" />
                <YAxis />
                <Bar dataKey="value" barSize={60} style={{
                    fill: "hsl(var(--primary))"
                }}/>
            </BarChart>
        </ResponsiveContainer>
    )
}
