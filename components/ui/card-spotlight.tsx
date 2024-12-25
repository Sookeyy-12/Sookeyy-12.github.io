"use client";

import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React, { MouseEvent as ReactMouseEvent, useState } from "react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { cn } from "@/lib/utils";

export const CardSpotlight = ({
    children,
    titlee,
    contentt,
    radius = 350,
    color = "#262626",
    className,
    colorss,
    ...props
}: {
    titlee?: React.ReactNode;
    contentt?: React.ReactNode;
    radius?: number;
    color?: string;
    children?: React.ReactNode;
    colorss?: [number, number, number][];
} & React.HTMLAttributes<HTMLDivElement>) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    function handleMouseMove({
        currentTarget,
        clientX,
        clientY,
    }: ReactMouseEvent<HTMLDivElement>) {
        let { left, top } = currentTarget.getBoundingClientRect();

        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const [isHovering, setIsHovering] = useState(false);
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    return (
        <div
            className={cn(
                "group/spotlight p-10 rounded-md relative border border-neutral-800 bg-black dark:border-neutral-800",
                className
            )}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            {...props}
        >
            <Icon className="z-30 absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="z-30 absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="z-30 absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="z-30 absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

            <motion.div
                className="pointer-events-none absolute z-0 -inset-px rounded-md opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
                style={{
                    backgroundColor: color,
                    maskImage: useMotionTemplate`
            radial-gradient(
                ${radius}px circle at ${mouseX}px ${mouseY}px,
                white,
                transparent 80%
            )
            `,
                }}
            >
                {isHovering && (
                    <CanvasRevealEffect
                        animationSpeed={5}
                        containerClassName="bg-transparent absolute inset-0 pointer-events-none"
                        colors={colorss}
                        dotSize={3}
                    />
                )}
            </motion.div>
            {children}
            <div className="relative z-20 flex items-center justify-center h-full">
                <div className="absolute text-center group-hover/spotlight:-translate-y-4 group-hover/spotlight:opacity-0 transition duration-200">
                    {titlee}
                </div>
                <div className="dark:text-white opacity-0 group-hover/spotlight:opacity-100 relative z-10 text-black mt-4 group-hover/spotlight:text-white group-hover/spotlight:-translate-y-2 transition duration-200">
                    {contentt}
                </div>
            </div>

        </div>
    );
};


export const Icon = ({ className, ...rest }: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
            {...rest}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
    );
};