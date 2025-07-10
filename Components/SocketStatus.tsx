"use client"
import useSocket from "@/hooks/useSocket"

export default function SocketStatus() {
    const socket=useSocket()    
    socket?.on("connect",()=>console.log("connected from client"))
    socket?.on("disconnect",()=>console.log("disconnected from client"))

    socket?.on("message",(message)=>console.log(message))
    socket?.emit("new msg","hello server, this is working")

    return (
        <div>
            {socket?"socket connected":"socket disconnected"}
        </div>
    )
    
};
