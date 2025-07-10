"use client"
import { redirect } from "next/navigation"
import settingImg from "../assets/setting.png"
import helpImg from "../assets/help.png"
import expandNavBarCompressImg from "../assets/expand-compress.png"
import Image from "next/image"
import { useState,useEffect, SetStateAction,Dispatch } from "react"
import { HoverTypes } from "."

interface NavBarProps {
    mini: boolean
    setExpandComponent: Dispatch<SetStateAction<HoverTypes | null>>
    setIsNavBarHovered: Dispatch<SetStateAction<boolean>>
}


export default function NavBar({mini,setExpandComponent,setIsNavBarHovered}:NavBarProps){
    const [isXLargeScreen, setIsXLargeScreen] = useState(false);
    const [expandNavBar,setExpandNavBar]=useState(true)

    useEffect(() => {
        const handleResize = () => {
            setIsXLargeScreen(window.innerWidth > 1280);
        };
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    const handleMouseEnter = (hoverType: HoverTypes) => {
        setExpandComponent(hoverType);
        if (typeof setIsNavBarHovered === 'function') {
            setIsNavBarHovered(true);
        }
    };
    
    const handleMouseLeave = () => {
        if (typeof setIsNavBarHovered === 'function') {
            setIsNavBarHovered(false);
        }
    };
    
    return (
        <div className={`flex`}>
            <div className={`${!mini?"w-14 hidden":"mt-10"} lg:block ${expandNavBar?"xl:w-40":""} ${mini?"w-50":""} font-normal`}>
                <div className={`bg-[#262522] ${mini?"h-full":"h-screen"} font-chess pr-2`}>
                    <div className="flex align-middle hover:bg-[#21201F] w-40 h-20" onClick={()=>redirect("/")}                    
                        onMouseEnter={() => handleMouseEnter(HoverTypes.HOME)}
                        onMouseLeave={handleMouseLeave}
                    >
                        {!mini?<div className="sprite logo-icon"></div>:
                            <div className="sprite logo-home -mt-8"></div>}
                        {isXLargeScreen && expandNavBar && !mini?<div className="mt-5 -ml-2 flex align-middle p-1">
                            <div className="text-2xl font-sans-700 font-extrabold h-10 -ml-6 z-10 -mt-1.5">Chess</div>.com
                        </div>:""}
                        {mini?<div className={`-mt-5 ml-0.5 ${!mini?"hidden":""} ${expandNavBar?"xl:block":""}`}>Home</div>:""}
                    </div>
                    <div className={`flex align-middle hover:bg-[#21201F] cursor-pointer ${!mini?"-mt-8":"-mt-20"}`}
                        onMouseEnter={() => handleMouseEnter(HoverTypes.PLAY)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="sprite logo-play"></div>
                        <div className={`mt-8 ml-0.5 ${!mini?"hidden":""} ${expandNavBar?"xl:block":""}`}>Play</div>
                    </div>
                    <div className="flex align-middle hover:bg-[#21201F] w-40 cu20or-pointer -mt-5"
                        onMouseEnter={() => handleMouseEnter(HoverTypes.PUZZLE)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="sprite logo-puzzles"></div>
                        <div className={`mt-6 ml-0.5 ${!mini?"hidden":""} ${expandNavBar?"xl:block":""}`}>Puzzles</div>
                    </div>
                    <div className="flex align-middle hover:bg-[#21201F] w-40 cu20or-pointer -mt-6"
                        onMouseEnter={() => handleMouseEnter(HoverTypes.LEARN)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="sprite logo-learn"></div>
                        <div className={`mt-7 ml-0.5 ${!mini?"hidden":""} ${expandNavBar?"xl:block":""}`}>Learn</div>
                    </div>
                    <div className="flex align-middle hover:bg-[#21201F] w-40 cu20or-pointer -mt-6"
                        onMouseEnter={() => handleMouseEnter(HoverTypes.WATCH)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="sprite logo-watch"></div>
                        <div className={`mt-6 ml-0.5 ${!mini?"hidden":""} ${expandNavBar?"xl:block":""}`}>Watch</div>
                    </div>
                    <div className="flex align-middle hover:bg-[#21201F] w-40 cu20or-pointer -mt-7"
                        onMouseEnter={() => handleMouseEnter(HoverTypes.NEWS)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="sprite logo-news"></div>
                        <div className={`mt-6 ml-0.5 ${!mini?"hidden":""} ${expandNavBar?"xl:block":""}`}>News</div>
                    </div>
                    <div className="flex align-middle hover:bg-[#21201F] w-40 cu20or-pointer -mt-7"
                        onMouseEnter={() => handleMouseEnter(HoverTypes.SOCIAL)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="sprite logo-social"></div>
                        <div className={`mt-6 ml-0.5 ${!mini?"hidden":""} ${expandNavBar?"xl:block":""}`}>Social</div>
                    </div>
                    <div className="flex align-middle hover:bg-[#21201F] w-40 cu20or-pointer -mt-7"
                        onMouseEnter={() => handleMouseEnter(HoverTypes.MORE)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="sprite logo-more"></div>
                        <div className={`mt-6 ml-0.5 ${!mini?"hidden":""} ${expandNavBar?"xl:block":""}`}>More</div>
                    </div>

                    <div className="flex-col align-bottom">
                        <div className="flex align-middle hover:bg-[#21201F] w-40 cu20or-pointer -mt-9">
                            <div className="sprite logo-premium"></div>
                            <div className={`mt-6 ml-0.5 ${!mini?"hidden":""}  ${expandNavBar?"xl:block":""} text-[#179FD9]`}>Free Trial</div>
                        </div>
                        <div className={`${mini?"mt-[400px]":"mt-[380px]"} font-sans text-sm text-gray-400`}>
                            {isXLargeScreen && !mini?<div className="flex align-middle hover:bg-[#21201F] w-40 cursor-pointer" onClick={()=>setExpandNavBar(!expandNavBar)}>
                                <Image suppressHydrationWarning src={expandNavBarCompressImg} 
                                alt="Chess icon" className={`${expandNavBar?"rotate-180":""}`} />
                                <div className={`mt-2 ${!mini?"hidden":""} ${expandNavBar?"xl:block":""}`}>Collapse</div>
                            </div>:""}
                            <div className="flex align-middle hover:bg-[#21201F] w-40 cu20or-pointer "
                                onMouseEnter={() => handleMouseEnter(HoverTypes.SETTING)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Image suppressHydrationWarning 
                                 src={settingImg} alt="Chess icon" />
                                <div className={`mt-2 ${!mini?"hidden":""} ${expandNavBar?"xl:block":""}`}>Settings</div>
                            </div>
                            <div className="flex align-middle hover:bg-[#21201F] cursor-20inter ">
                                <Image suppressHydrationWarning
                                 src={helpImg} alt="Chess icon" />
                                <div className={`mt-2 ${!mini?"hidden":""} ${expandNavBar?"xl:block":""}`}>Support</div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}