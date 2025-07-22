'use client';

import { useEffect } from "react";
import { Loading } from "./Loading";
import { useRouter } from "next/navigation";


export default function LoadAnimation(){
    const router = useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            router.push('/chat-bot-app');
        },1000)
        },[])
    return(
        <>
        <Loading />
        </>
    )
}

