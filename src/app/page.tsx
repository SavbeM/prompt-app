import React from 'react'
import "../styles/global.css"
import Feed from "@/components/Feed";

const Home = () => {
    return (
        <section className="w-full flex flex-center flex-col">
            <h1 className="head_text text-center">
                Discover & Share
                <br className="max-md:hidden"/>
                <span className="orange_gradient text-center">AI-Powered Prompts</span>
            </h1>
            <p className="desc text-center">Prompt-App is an AI prompting tool for modern world to discover, create and share creative prompts</p>
            <Feed/>
        </section>
    )
}
Home.propTypes = {}
export default Home
