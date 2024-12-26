import React from 'react';
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconSocial,
    IconUser,
    IconHome,
    IconBriefcase2,
    IconTrophy,
} from "@tabler/icons-react";


function NavBar() {
    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#hero",
        },
        {
            title: "About",
            icon: (<IconUser className='h-full w-full text-neutral-500 dark:text-neutral-300' />),
            href: "#aboutme",
        },
        {
            title: "My Work",
            icon: (
                <IconBriefcase2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#projects",
        },
        {
            title: "Achievements",
            icon: (
                <IconTrophy className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#achievements",
        },
        {
            title: "Socials",
            icon: (
                <IconSocial className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#socials",
        },
    ];
    return (
        <div className="fixed flex justify-center w-full z-50">
            <FloatingDock
                desktopClassName='fixed bottom-0 m-3'
                mobileClassName="fixed top-1/2 transform -translate-y-[-1rem] right-4" 
                items={links}
            />
        </div>
    )
}

export default NavBar