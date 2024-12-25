import { CardSpotlight } from "@/components/ui/card-spotlight";

export function AboutMe() {
    return (
        <>
            <div className="mb-[5rem] pt-[3rem]">
                <div className="flex justify-center items-center w-full text-3xl mt-5 font-bold">
                    <h1>A little about ME</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-5">
                    <CardSpotlight
                        colorss={[[164, 22, 35], [248, 94, 0]]}
                        className="m-1 h-[25rem]"
                        titlee={
                            <div className="text-xl font-bold relative z-20 mt-2 text-white">
                                $ whoami
                            </div>
                        }
                        contentt={
                            <div>
                                <div className="text-xl font-bold relative z-20 mt-2 text-white">
                                    $ whoami
                                </div>
                                <p className="text-neutral-200 mt-4 relative z-20">
                                    Hey There! I am Suket Kamboj
                                </p>
                                <p className="text-neutral-200 mt-4 relative z-20">
                                    A 20-year-old wanna-be Software Engineer from India.
                                </p>
                                <p className="text-neutral-200 mt-4 relative z-20">
                                    I'm passionate about building impactful products through software development.
                                </p>
                                <p className="text-neutral-200 mt-4 relative z-20">
                                    Currently looking for Summer Internship Opportunities for 2025.
                                </p>
                            </div>
                        }
                    />
                    <CardSpotlight
                        colorss={[[126, 46, 132], [209, 64, 129]]}
                        className="m-1 h-[25rem]"
                        titlee={
                            <div className="text-xl font-bold relative z-20 mt-2 text-white">
                                $ whatdoido
                            </div>
                        }
                        contentt={
                            <div>
                                <h1 className="text-xl font-bold relative z-20 mt-2 text-white">
                                    $ whatdoido
                                </h1>
                                <p className="text-neutral-200 mt-4 relative z-20">
                                    I am currently pursuing my Bachelor's of Technology in Computer Science and Engineering from Kalinga Institute of Industrial Technology.
                                </p>
                                <p className="text-neutral-200 mt-4 relative z-20">
                                    My journey into Development began in 2022 when my friend introduced me to the world of code.
                                </p>
                                <p className="text-neutral-200 mt-4 relative z-20">
                                    Since then, I have been learning and building cool projects to enhance my skills.
                                </p>
                            </div>
                        }
                    />
                    <CardSpotlight
                        colorss={[[0, 191, 178], [26, 94, 99]]}
                        className="m-1 h-[25rem]"
                        titlee={
                            <div className="text-xl font-bold relative z-20 mt-2 text-white">
                                $ beyondcode
                            </div>
                        }
                        contentt={
                            <div>
                                <h1 className="text-xl font-bold relative z-20 mt-2 text-white">
                                    $ beyondcode
                                </h1>
                                <p className="text-neutral-200 mt-4 relative z-20">
                                    When I'm not immersed in code, I enjoy playing guitar, discovering new music, and exploring the outdoors.
                                </p>
                                <p className="text-neutral-200 mt-4 relative z-20">
                                    I value teamwork and am driven by a desire to constantly learn and refine my skills.
                                </p>
                                <p className="text-neutral-200 mt-4 relative z-20">
                                    Feel free to connect with me on LinkedIn or explore my projects below.
                                </p>
                            </div>
                        }
                    />
                </div>
            </div>
        </>
    );
}


