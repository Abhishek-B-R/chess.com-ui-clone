import { HoverTypes } from "..";
import HomeOptions from "./1HomeOptions";
import PlayOptions from "./2PlayOptions";
import PuzzleOptions from "./3PuzzleOptions";
import LearnOptions from "./4LearnOptions";
import WatchOptions from "./5WatchOptions";
import NewsOptions from "./6NewsOptions";
import SocialOptions from "./7SocialOptions";
import MoreOptions from "./8MoreOptions";
import SettingsOptions from "./9SettingsOptions";
import { Dispatch,SetStateAction } from "react";

interface ComponentsProps {
    expandedComponent: HoverTypes | null
    setIsComponentHovered: Dispatch<SetStateAction<boolean>>
}

export default function Components({ expandedComponent, setIsComponentHovered }: ComponentsProps) {
    const handleMouseEnter = () => {
        if (typeof setIsComponentHovered === 'function') {
            setIsComponentHovered(true);
        }
    };
    
    const handleMouseLeave = () => {
        if (typeof setIsComponentHovered === 'function') {
            setIsComponentHovered(false);
        }
    };
    
    return (
        <div 
            className="bg-black md:w-80 w-full overflow-hidden h-screen absolute z-10"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <ReturnFn expandedComponent={expandedComponent}/>
        </div>
    )
}


function ReturnFn({expandedComponent}:{expandedComponent:HoverTypes | null}){
    if(expandedComponent === HoverTypes.PLAY){
        return <PlayOptions/>
    }else if(expandedComponent === HoverTypes.PUZZLE){
        return <PuzzleOptions/>
    }else if(expandedComponent === HoverTypes.HOME){
        return <HomeOptions/>
    }else if(expandedComponent === HoverTypes.LEARN){
        return <LearnOptions/>
    }else if(expandedComponent === HoverTypes.WATCH){
        return <WatchOptions/>
    }else if(expandedComponent === HoverTypes.NEWS){
        return <NewsOptions/>
    }else if(expandedComponent === HoverTypes.SOCIAL){
        return <SocialOptions/>
    }else if(expandedComponent === HoverTypes.MORE){
        return <MoreOptions/>
    }else if(expandedComponent === HoverTypes.SETTING){
        return <SettingsOptions/>
    }
}