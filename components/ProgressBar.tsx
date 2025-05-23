"use client";
import { cn } from "@/lib/utils";
import { motion, useScroll, useSpring } from "framer-motion";

interface ScrollProgressProps {
    className?: string;
}

export function ScrollProgress({ className }: ScrollProgressProps) {
    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 200,
        damping: 50,
        restDelta: 0.001,
    });

    return (
        <motion.div
            className={cn(
                "fixed inset-x-0 top-0 z-[1000] h-1 origin-left bg-gradient-to-r from-teal-300 via-green-400 to-[#FDCC92]",
                className,
            )}
            style={{
                scaleX,
            }}
        />
    );
}
