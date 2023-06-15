'use client'
import React, {FC} from 'react'
import {Session} from "next-auth";
import {SessionProvider} from "next-auth/react";

type Props = {
    children: React.ReactNode,
    session: Session
}

const Providers: FC<Props> = ({children, session}) => {

    return (
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
    )
}
export default Providers
