import { IconBrandGithub, IconLink } from "@tabler/icons-react";

export function Projects() {
    return (
        <>
            <div className="flex justify-center items-center w-full text-3xl mt-5 font-bold">
                <h1>Some of my Projects</h1>
            </div>
            {/* <div className="max-w-5xl mx-auto px-8">
                <HoverEffect items={projects} />
            </div> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-[5rem]">
                <div className="card lg:card-side bg-black shadow-xl border-2">
                    <figure>
                        <img
                            src="/projects/Neural.gif"
                            alt="Neural Nitro Demo gif" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Neural Nitro AI</h2>
                        <p>A Deep Reinforcement Learning AI Agent trained on custom Unity 3D race environment capable of beating you in the circuit.</p>
                        <div className="card-actions justify-end">
                            <a href="https://sookeyy.itch.io/neuralnitro" target="_blank"><button className="btn btn-white"><IconLink /></button></a>
                            <a href="https://github.com/Sookeyy-12/NeuralNitro-AI" target="_blank"><button className="btn btn-white"><IconBrandGithub /></button></a>
                        </div>
                    </div>
                </div>
                <div className="card lg:card-side bg-black shadow-xl border-2">
                    <figure>
                        <img
                            src="/projects/Flappy.gif"
                            alt="Flappy Bird AI Demo gif" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Flappy Bird AI</h2>
                        <p>A Deep Reinforcement Learning AI Agent trained on custom built Flappy Bird game using Unity3D and ML-Agents. Up for a 1v1? xD</p>
                        <div className="card-actions justify-end">
                            {/* <button className="btn btn-white"><IconLink /></button> */}
                            <a href="https://github.com/Sookeyy-12/FlappyBird-Unity-MLAgents" target="_blank"><button className="btn btn-white"><IconBrandGithub /></button></a>
                        </div>
                    </div>
                </div>
                <div className="card lg:card-side bg-black shadow-xl border-2">
                    <figure>
                        <img
                            src="/projects/antispoof.png"
                            alt="Antispoofing with face recog demo image" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Face Recognition w/ AntiSpoofing</h2>
                        <p>Developed a DL model which can accurately identify a person and distinguish between a real face and a spoofing attempt in real time.</p>
                        <div className="card-actions justify-end">
                            {/* <button className="btn btn-white"><IconLink /></button> */}
                            <a href="https://github.com/Sookeyy-12/AntiSpoofing" target="_blank"><button className="btn btn-white"><IconBrandGithub /></button></a>
                        </div>
                    </div>
                </div>
                <div className="card lg:card-side bg-black shadow-xl border-2">
                    <figure>
                        <img
                            src="/projects/matheq.gif"
                            alt="Hand written equation solver demo" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Handwritten Equation Solver</h2>
                        <p>Write any linear equation to the AI and it will solve it in matter of seconds!</p>
                        <div className="card-actions justify-end">
                            {/* <button className="btn btn-white"><IconLink /></button> */}
                            <a href="https://github.com/Sookeyy-12/Handwritten-Eqn-Solver" target="_blank"><button className="btn btn-white"><IconBrandGithub /></button></a>
                        </div>
                    </div>
                </div>
                <div className="card lg:card-side bg-black shadow-xl border-2">
                    <figure>
                        <img
                            src="/projects/chatobot.png"
                            alt="next js gemini chatbot" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">NextJS-Gemini Chatbot</h2>
                        <p>An insanely fast Chatbot capable of searching the internet to deliver accurate data, made using Vercel AI SDK 4.0 and NextJS</p>
                        <div className="card-actions justify-end">
                            <a href="https://nextjs-sookeyy.vercel.app/" target="_blank"><button className="btn btn-white"><IconLink /></button></a>
                            <a href="https://github.com/Sookeyy-12/NextJS-ChatBot" target="_blank"><button className="btn btn-white"><IconBrandGithub /></button></a>
                        </div>
                    </div>
                </div>
                <div className="card lg:card-side bg-black shadow-xl border-2">
                    <figure>
                        <img
                            src="/projects/github-bg.jpeg"
                            alt="github background" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Github</h2>
                        <p>Checkout my Github for more Amazing projects!</p>
                        <div className="card-actions justify-end">
                            {/* <button className="btn btn-white"><IconLink /></button> */}
                            <button className="btn btn-white"><IconBrandGithub /><a href="https://github.com/Sookeyy-12/" target="_blank">Sookeyy-12</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export const projects = [
    {
        title: "Neural Nitro AI",
        description:
            "An Autonomous AI Agent trained using Deep Reinforcement Learning in custom build training environment in Unity 3D to navigate around a Racetrack faster than you.",
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
