import React from 'react';
import { IconBrandGithub, IconRocket } from '@tabler/icons-react';

type Props = {}

function Footer({ }: Props) {
    return (
        <>
            <footer className="footer bg-black tetx-white items-center p-4 border-t border-white">
                <aside className="grid-flow-col items-center">
                    <IconRocket size={50}/>
                    <p>Made with ❤️ by Suket Kamboj</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <IconBrandGithub/>
                    <a href='https://github.com/Sookeyy-12/Sookeyy-12.github.io'>
                    Checkout this website on Github
                    </a>
                </nav>
            </footer>
        </>
    )
}

export default Footer