import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

export function Achievements() {
    return (
        <div className="mt-[6rem]">
            <div className="flex justify-center items-center w-full text-3xl mb-5 font-bold">
                <h1>Some extra stuff</h1>
            </div>
            <BentoGrid className="max-w-5xl mx-auto">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                    />
                ))}
            </BentoGrid>
        </div>
    );
}
const Skeleton = ({ imagePath }: { imagePath: string }) => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
        <img src={imagePath} alt="Achievement" className="object-cover w-full h-full rounded-xl" />
    </div>
);

const items = [
    {
        title: "Technical Head @GeeksForGeeks KIIT Chapter",
        description: "Led a Society of 200+ members and co-ordinated 20+ Projects annd 5+ Events.",
        header: <Skeleton imagePath="/ach/gfg.jpeg" />,
        // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "President @CyberVault",
        description: "Led a dedicated Cybersecurity Society, organized 5+ Workshops and 3+ CTFs.",
        header: <Skeleton imagePath="/ach/cybervault.jpg" />,
    },
    {
        title: "ML Team Member at various other societies",
        description: "Conducted classes and events to spread the knowledge of Machine Learning.",
        header: <Skeleton imagePath="/ach/iot.jpeg" />,
    },
    {
        title: "LeetCode Stats?",
        description: "Solved 500+ problems.",
        header: <Skeleton imagePath="/ach/lc.png" />,
    },
    {
        title: "Specialist on CodeForces",
        description:
            "Solved 250+ problems on CodeForces and participated in 30+ contests.",
        header: <Skeleton imagePath="/ach/cf.png" />,
    },
    {
        title: "Hey There",
        description: "If you are reading this then it probably means, you are interested in my work. Thanks for stopping by!",
        header: <Skeleton imagePath="/ach/stop.jpg" />,
    },
    {
        title: "OpenSource cuz its fun",
        description: "Contributed to Big Open Source Orgs like HuggingFace, DagsHub, illa Cloud and more!",
        header: <Skeleton imagePath="/ach/holo.png" />,
    },
];
