import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { IconBrandCpp, IconBrandCSharp, IconBrandCss3, IconBrandGithubCopilot, IconBrandHtml5, IconBrandJavascript, IconBrandNextjs, IconBrandPython, IconBrandReact, IconBrandTypescript, IconBrandUnity, IconBrandVercel } from "@tabler/icons-react";
import { FaJava, FaLinux } from "react-icons/fa";
import { SiGnubash, SiHuggingface, SiPytorch, SiTensorflow } from "react-icons/si";


export function TechStack() {
    return (
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden md:overflow-visible rounded-lg  bg-background md:shadow-xl">
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
                My Tech Stack
            </span>

            {/* Inner Circles */}
            <OrbitingCircles
                className="size-[30px] border-none bg-transparent"
                duration={20}
                delay={6}
                radius={80}
            >
                <IconBrandHtml5 size={25} />
            </OrbitingCircles>

            <OrbitingCircles
                className="size-[30px] border-none bg-transparent"
                duration={20}
                delay={12.5}
                radius={80}
            >
                <IconBrandCss3 size={25} />
            </OrbitingCircles>

            <OrbitingCircles
                className="size-[30px] border-none bg-transparent"
                duration={20}
                delay={19}
                radius={80}
            >
                <IconBrandJavascript size={25}/>
            </OrbitingCircles>

            {/* Outer Circles (reverse) */}
            <OrbitingCircles
                className="size-[50px] border-none bg-transparent"
                radius={150}
                duration={20}
                delay={0}
                reverse
            >
                <IconBrandTypescript size={35}/>
            </OrbitingCircles>

            <OrbitingCircles
                className="size-[50px] border-none bg-transparent"
                radius={150}
                duration={20}
                delay={8}
                reverse
            >
                <IconBrandNextjs size={35}/>
            </OrbitingCircles>

            <OrbitingCircles
                className="size-[50px] border-none bg-transparent"
                radius={150}
                duration={20}
                delay={12}
                reverse
            >
                <IconBrandReact size={35}/>
            </OrbitingCircles>

            <OrbitingCircles
                className="size-[50px] border-none bg-transparent"
                radius={150}
                duration={20}
                delay={16}
                reverse
            >
                <IconBrandVercel size={35}/>
            </OrbitingCircles>

            <OrbitingCircles
                className="size-[50px] border-none bg-transparent"
                radius={150}
                duration={20}
                delay={4}
                reverse
            >
                <IconBrandGithubCopilot size={35}/>
            </OrbitingCircles>


            {/* outer outer Circles (reverse) */}
            <OrbitingCircles
                className="size-[50px] border-none bg-transparent"
                radius={250}
                duration={20}
                delay={7}
            >
                <IconBrandPython size={40}/>
            </OrbitingCircles>

            <OrbitingCircles
                className="size-[50px] border-none bg-transparent"
                radius={250}
                duration={20}
                delay={9}
            >
                <IconBrandCpp  size={40}/>
            </OrbitingCircles>

            <OrbitingCircles
                className="size-[50px] border-none bg-transparent"
                radius={250}
                duration={20}
                delay={11}
            >
                <IconBrandCSharp  size={40}/>
            </OrbitingCircles>

            <OrbitingCircles
                className="size-[50px] border-none bg-transparent"
                radius={250}
                duration={20}
                delay={13}
            >
                <IconBrandUnity size={40} />
            </OrbitingCircles>

            <OrbitingCircles
                className="size-[50px] border-none bg-transparent"
                radius={250}
                duration={20}
                delay={15}
            >
                <SiTensorflow size={40} />
            </OrbitingCircles>

            <OrbitingCircles
                className="size-[50px] border-none bg-transparent"
                radius={250}
                duration={20}
                delay={17}
            >
                <SiPytorch size={40}/>
            </OrbitingCircles>

            <OrbitingCircles
                className="size-[50px] border-none bg-transparent"
                radius={250}
                duration={20}
                delay={19}
            >
                <FaJava  size={40}/>
            </OrbitingCircles>

            <OrbitingCircles
                className="size-[50px] border-none bg-transparent"
                radius={250}
                duration={20}
                delay={5}
            >
                <FaLinux  size={40}/>
            </OrbitingCircles>

            <OrbitingCircles
                className="size-[50px] border-none bg-transparent"
                radius={250}
                duration={20}
                delay={3}
            >
                <SiGnubash  size={40}/>
            </OrbitingCircles>
            

            <OrbitingCircles
                className="size-[50px] border-none bg-transparent"
                radius={250}
                duration={20}
                delay={1}
            >
                <SiHuggingface size={40}  />
            </OrbitingCircles>

        </div>
    );
}
