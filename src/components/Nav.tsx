'use client'
import React, {FC, useEffect, useState} from 'react'
import Link from "next/link";
import Image from "next/image";
import "../styles/global.css"
import {getProviders, signIn, signOut} from "next-auth/react";
import {Provider} from "next-auth/providers";

export const Nav: FC = () => {
    const isLoggedIn: boolean = true
    const [providers, setProviders] = useState<Provider>()
    const [toggleDropdown, setToggleDropdown] = useState<boolean>(false)
    useEffect(() => {
        const setProviders = async () => {
            const response = await getProviders()

            setProviders(response)
        }
    })
    return (
        <nav className="flex-between w-full mb-16 pt-3">
            <Link href='/' className="flex gap-2 ml-6 flex-center">
                <Image width={30} height={30} alt={"404"} src="/assets/images/logo.svg" className="object-contain"/>
                <p className="logo_text">Prompt-app</p>
            </Link>
            <div>
                {isLoggedIn ?
                    <div className="flex gap-3 mr-6 max-sm:hidden  ">
                        <Link href="/create-prompt" className="black_btn">Create post</Link>
                        <button type="button" onClick={() => signOut} className="outline_btn">Sign Out</button>
                        <Link href="/profile">
                            <Image src="/assets/images/profile.svg" alt="404" width={20} height={20}
                                   className="rounded border-dashed w-full max-w-[37px]"/>
                        </Link>
                    </div>
                    :
                    <>
                        {providers &&
                            Object.values(providers).map((provider) => {
                                return <button key={provider.name} type="button" className="black_btn"
                                               onClick={() => signIn(provider.id)}>
                                    Sign In
                                </button>
                            })
                        }
                    </>
                }
            </div>
            <div className="sm:hidden flex relative">
                {isLoggedIn ? (
                    <div className="flex mr-6">
                        <Image src="/assets/images/profile.svg" onClick={() => setToggleDropdown((prev) => !prev)}
                               alt="404" width={37} height={37}
                               className="rounded border-dashed w-full max-w-[37px]"/>
                        {toggleDropdown &&
                            <div className="dropdown">
                                <Link href="/profile" onClick={() => setToggleDropdown(false)}
                                      className="dropdown_link">
                                    Profile
                                </Link>
                                <Link href="/create-prompt" onClick={() => setToggleDropdown(false)}
                                      className="dropdown_link">
                                    Create Prompt
                                </Link>
                                <button onClick={() => {
                                    setToggleDropdown(false);
                                    signOut()
                                }} className="outline_btn self-center w-full mt-5">
                                    Sign Out
                                </button>
                            </div>}
                    </div>
                ) : <>
                    {providers &&
                        Object.values(providers).map((provider) => {
                            return <button key={provider.name} type="button" className="black_btn"
                                           onClick={() => signIn(provider.id)}>
                                Sign In
                            </button>
                        })
                    }
                </>}
            </div>
        </nav>
    )
}

