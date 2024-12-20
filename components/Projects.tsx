import { HoverEffect } from "./ui/card-hover-effect";

export function Projects() {
    return (
        <>
            <div className="flex justify-center items-center w-full text-3xl mt-5 font-bold">
                <h1>Some of my Projects</h1>
            </div>
            <div className="max-w-5xl mx-auto px-8">
                <HoverEffect items={projects} />
            </div>
        </>
    );
}
export const projects = [
    {
        title: "Neural Nitro AI",
        description:
            "An Autonomous AI Agent trained using Deep Reinforcement Learning in Unity 3D to navigate around a Racetrack faster than you.",
        github: "https://github.com/sookeyy-12/neuralnitro-ai",
        deploy: "https://sookeyy.itch.io/neuralnitro",
    },
    {
        title: "Handwritten Math Equation Solver",
        description:
            "A web app that uses CNN to recognize handwritten math equations and solve them. It is capable of solving simple arithmetic equation, and linear equations with one and two variables.",
        github: "https://github.com/Sookeyy-12/Handwritten-Eqn-Solver",
        deploy: "",
    },
    {
        title: "Flappy Bird AI",
        description:
            "A Deep Reinforcement Learning Agent which absolutely demolishes the famous Flappy Bird game. This AI was trained by building a custom environment on Unity 3D and using DRL technique.",
        github: "https://github.com/Sookeyy-12/FlappyBird-Unity-MLAgents",
        deploy: "",
    },
    {
        title: "Face Recognition with Anti-Spoofing",
        description:
            "Trained a Face Recognition model and an Antispoofind model with high accuracy. Integrated them together to create a secure face recognition system. Currently deployed on Raspberry Pi and actively used in KRS Room at KIIT University.",
        github: "https://github.com/Sookeyy-12/DoorAutomation",
        deploy: "",
    },
    {
        title: "TrackCov-19",
        description:
            "A Website which color-codes the global map indicating the number of active cases around the world and other relevant information",
        github: "https://github.com/Sookeyy-12/TrackCov19",
        deploy: "",
    },
    {
        title: "Botkeyy",
        description:
            "A discord bot which i made while i was learning python using discord.py library.",
        github: "https://github.com/Sookeyy-12/Botkeyy",
        deploy: "",
    },
];
