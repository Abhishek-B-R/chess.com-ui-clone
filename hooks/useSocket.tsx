"use client";
import { useEffect, useState } from "react";
import { io,Socket } from "socket.io-client";

export default function useSocket() {
    const [socket,setSocket]=useState<Socket|null>(null)

    useEffect(()=>{
        let ws:Socket|null=null
        async function initializer() {
            ws=io("http://localhost:8080")
            setSocket(ws as unknown as Socket)
        }
        initializer()

        return () => {
            ws?.disconnect();
          };
    },[])

    return socket
};
