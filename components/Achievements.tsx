import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
    IconArrowWaveRightUp,
    IconBoxAlignRightFilled,
    IconBoxAlignTopLeft,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";

export function Achievements() {
    return (
        <BentoGrid className="max-w-4xl mx-auto">
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
        header: <Skeleton imagePath="/gfg.jpeg" />,
        // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "President @CyberVault",
        description: "Led a dedicated Cybersecurity Society, organized 5+ Workshops and 3+ CTFs.",
        header: <Skeleton imagePath="/cybervault.jpg" />,
    },
    {
        title: "ML Team Member at various other societies",
        description: "Conducted classes and events to spread the knowledge of Machine Learning.",
        header: <Skeleton imagePath="/iot.jpeg" />,
    },
    // {
    //     title: "The Power of Communication",
    //     description:
    //         "Understand the impact of effective communication in our lives.",
    //     header: <Skeleton imagePath="/iot.jpeg" />,
    // },
    // {
    //     title: "The Pursuit of Knowledge",
    //     description: "Join the quest for understanding and enlightenment.",
    //     header: <Skeleton imagePath="/gfg.jpeg" />,
    // },
    // {
    //     title: "The Joy of Creation",
    //     description: "Experience the thrill of bringing ideas to life.",
    //     header: <Skeleton imagePath="/gfg.jpeg" />,
    // },
    // {
    //     title: "The Spirit of Adventure",
    //     description: "Embark on exciting journeys and thrilling discoveries.",
    //     header: <Skeleton imagePath="/gfg.jpeg" />,
    // },
];
