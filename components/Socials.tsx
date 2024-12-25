import React from 'react'
import { Marquee } from './ui/marquee';
import { cn } from "@/lib/utils";


export function Socials() {
    return (
        <>
            <div className="flex justify-center items-center w-full text-3xl mt-3 font-bold pt-[3rem]">
                <h1>Connect with ME</h1>
            </div>
            <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
                <Marquee pauseOnHover className="[--duration:20s]">
                    {firstRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:20s]">
                    {secondRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
            </div>
        </>
    )
}

const ReviewCard = ({
    img,
    name,
    username,
    body,
    redirectTo,
}: {
    img: string;
    name: string;
    username: string;
    body: string;
    redirectTo: string,
}) => {
    return (
        <figure
            className={cn(
                "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <a href={redirectTo} target="_blank">
                <div className="flex flex-row items-center gap-2">
                    <img className="rounded-full" width="32" height="32" alt="" src={img} />
                    <div className="flex flex-col">
                        <figcaption className="text-sm font-medium dark:text-white">
                            {name}
                        </figcaption>
                        <p className="text-xs font-medium dark:text-white/40">{username}</p>
                    </div>
                </div>
                <blockquote className="mt-2 text-sm">{body}</blockquote>
            </a>
        </figure>
    );
};

const reviews = [
    {
        name: "LinkedIn",
        username: "@SuketKamboj",
        body: "Connect with me on LinkedIn for professional networking!",
        img: "/linkedin.webp",
        redirectTo: "https://linkedin.com/in/suket-kamboj-212416255/",
    },
    {
        name: "Github",
        username: "@Sookeyy-12",
        body: "Check out my GitHub profile for some cool projects!",
        img: "/github-mark-white.png",
        redirectTo: "https://github.com/sookeyy-12/",
    },
    {
        name: "LeetCode",
        username: "@Sookeyy",
        body: "If you are wondering how good I am at DSA, check out my LeetCode profile!",
        img: "/leetcode.png",
        redirectTo: "https://leetcode.com/u/Sookeyy/",
    },
    {
        name: "Twitter (X)",
        username: "@SookeyyK",
        body: "Follow me on Twitter for some cool tweets and birbing!",
        img: "/x.png",
        redirectTo: "https://x.com/SookeyyK",
    },
    {
        name: "Instagram",
        username: "@so.okeyy",
        body: "Follow me on Instagram for some 'occasional' cool stories!",
        img: "/instalogo-nobg.png",
        redirectTo: "https://www.instagram.com/so.okeyy/",
    },
    {
        name: "Spotify",
        username: "@Sookeyy",
        body: "Follow me on Spotify for some cool playlists, let's vibe together!",
        img: "/spotify.webp",
        redirectTo: "https://open.spotify.com/user/332iryw17kyow0tkfqi9tv0z7?si=7053f8188d8547e3",
    },
    {
        name: "CodeForces",
        username: "@Sookeyy (max specialist)",
        body: "For the fellow Competitive programmers out there! Check out my CodeForces profile!",
        img: "/codeforces.png",
        redirectTo: "https://codeforces.com/profile/Sookeyy",
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);