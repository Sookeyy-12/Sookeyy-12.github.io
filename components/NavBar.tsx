import React from 'react';
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandGithub,
    IconUser,
    IconHome,
} from "@tabler/icons-react";

type Props = {}

function NavBar({ }: Props) {
    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/#hero",
        },
        {
            title: "About",
            icon: (<IconUser className='h-full w-full text-neutral-500 dark:text-neutral-300' />),
            href: "/#aboutme",
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
    ];
    return (
        <div className="fixed flex justify-center w-full z-50">
            <FloatingDock
                desktopClassName='fixed bottom-0 m-3'
                mobileClassName="fixed top-1/2 transform -translate-y-1/2 right-4" 
                items={links}
            />
        </div>
    )
}

export default NavBar