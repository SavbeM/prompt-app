import NextAuth from "next-auth/src/next";
import GoogleProvider from "next-auth/providers/google";
import {NextAuthApiHandler} from "next-auth/src/core/types";


const handler: NextAuthApiHandler = NextAuth({

       providers: [
           GoogleProvider({
               clientId: process.env.GOOGLE_ID,
               clientSecret: process.env.GOOGLE_CLIENT_SECRET
           })],
       callbacks: {
           signIn({account,profile}){
               if (account.provider === "google") {
                   return profile.email_verified && profile.email.endsWith("@example.com")
               }
               return true
           },
       }

})

export {handler as GET, handler as POST}