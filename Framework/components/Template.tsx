import { TTemplateProps } from '@props/TTemplateProps';
import React from 'react';
import Head from "next/head";
import Navbar from "@components/Navbar/Navbar";
import Sidebar from "@components/Sidebar";

export const Template = ({children, title}: TTemplateProps) => {
    return (
        <div className={'Template'}>
            <Head>
                <title>{title}</title>
            </Head>
            <Navbar title={title}/>
            <Sidebar/>
            <main id={"main"} className={"Main"}>
                <div className="content">
                    {children}
                </div>
            </main>
        </div>
    );
};