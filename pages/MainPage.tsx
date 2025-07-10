"use client"
import NavBar from "@/Components/NavBar";
import MainComponentLogIn from "@/Components/LogedIn/MainComponent";
import NavBarMini from "@/Components/NavBarMini";
import { useEffect, useState } from "react";
import { HoverTypes } from "../Components"
import Components from "@/Components/navComponents/Components";

export default function MainHomePage() {
    const [mini, setMini] = useState(true)
    const [expandComponent,setExpandComponent]=useState<HoverTypes | null>(null)
    const [isNavBarHovered, setIsNavBarHovered] = useState(false)
    const [isComponentHovered, setIsComponentHovered] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setMini(window.innerWidth > 1023)
        }
        handleResize()

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        if (!isNavBarHovered && !isComponentHovered) {
            setExpandComponent(null)
        }
    }, [isNavBarHovered, isComponentHovered])

    return (
        <div className="flex h-screen w-screen overflow-hidden">
            {!mini ? (
                <NavBarMini
                    setExpandComponent={setExpandComponent}
                    expandComponent={expandComponent}
                    setIsComponentHovered={setIsComponentHovered}
                    setIsNavBarHovered={setIsNavBarHovered}
                />    
            ) : (
                <>
                <NavBar
                    mini={false}
                    setExpandComponent={setExpandComponent}
                    setIsNavBarHovered={setIsNavBarHovered}
                />
                {expandComponent &&
                    <div className={`w-full h-screen`}>
                        <Components 
                            expandedComponent={expandComponent} 
                            setIsComponentHovered={setIsComponentHovered}
                        />
                    </div>
                }
                </>
            )}
            <div className="w-full flex justify-center items-center h-full">
                <MainComponentLogIn/>
            </div>
        </div>
    )
}
