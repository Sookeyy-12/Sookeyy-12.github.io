import React from 'react';
import { FloatingDock } from './ui/floating-dock';
import {
    IconBrandGithub,
    IconUser,
    IconHome,
} from "@tabler/icons-react";

type Props = {}

function NavBar({ }: Props) {
    return (
        <>
            <div className='fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50 pb-5'> 
            <FloatingDock items={
                [
                    {
                        title: "Home",
                        icon: (<IconHome />),
                        href: "/",
                    },
                    {
                        title: "About",
                        icon: (<IconUser />),
                        href: "/",
                    },
                    {
                        title: "Github",
                        icon: (<IconBrandGithub />),
                        href: "/",
                    },
                ]
            } />
            </div>
        </>
    )
}

export default NavBar