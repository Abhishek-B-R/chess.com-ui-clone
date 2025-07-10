"use client"
import { Dispatch, SetStateAction, useState } from "react"
import NavBar from "./NavBar"
import Components from "./navComponents/Components"
import { HoverTypes } from "."

interface NavMiniProps{
    setExpandComponent: Dispatch<SetStateAction<HoverTypes | null>>,
    expandComponent: HoverTypes | null,
    setIsComponentHovered?: Dispatch<SetStateAction<boolean>>
    setIsNavBarHovered: Dispatch<SetStateAction<boolean>>
}

export default function NavBarMini({setExpandComponent,expandComponent,setIsComponentHovered,setIsNavBarHovered}:NavMiniProps) {
    const [navbarOpen,setNavbarOpen]=useState(false)


    if(!navbarOpen){
        return (
            <div className="absolute z-10" onClick={()=>setNavbarOpen(true)}>
                <Bars/>
            </div>
        )
    }

    return (
        <div className="z-10 absolute overflow-hidden top-0 left-0 bg-[#262421] w-full">
            <div onClick={()=>setNavbarOpen(false)}>
                <Cross/>
            </div>
            <div className="flex">
                <NavBar setIsNavBarHovered={setIsNavBarHovered} mini={true} setExpandComponent={setExpandComponent}/>
                {expandComponent?
                <div className={`w-full h-screen -ml-10`}>
                    <Components expandedComponent={expandComponent} setIsComponentHovered={setIsComponentHovered || (() => {})}/>
                </div>:""}
            </div>
        </div>
    )
};

const Bars=()=>(
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-10 w-10 text-gray-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
)

const Cross=()=>(
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" strokeWidth={2} stroke="currentColor" className="h-10 w-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
)
