import {Nav} from "@/components/Nav";
import '../styles/global.css'
import {ReactNode} from "react";
import Providers from "@/components/Providers";

export const metadata = {
    title: 'Home',
    description: 'Generated by Next.js',
}



export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
             <body>
             <Providers>
                 <div className="gradient">
                 </div>
                    <Nav/>
                    <main className="w-full flex-center flex-col">{children}</main>

             </Providers>
             </body>
        </html>
    )
}
