import Image from "next/image"
import chessBot from "../../assets/cute-bot.svg"

export default function PlayOptions() {
    return (
        <div className="font-chess font-sm">
            <div className="flex align-middle">
                <div className="sprite logo-play"></div>
                <div className="mt-7">Play</div>
            </div>   
            <div className="flex align-middle -mt-2 -ml-1">
                <Image suppressHydrationWarning
                src={chessBot} alt="chess bot" className="-ml-3 h-12 scale-50"/>
                <div className="mt-3 -ml-2">Play Bots</div>
            </div>   
            <div className="flex align-middle -mt-2">
                <div className="sprite logo-history mt-3"></div>
                <div className="mt-7">Game History</div>
            </div> 
            <div className="flex align-middle -mt-2">
                <div className="sprite logo-leaderboard mt-3"></div>
                <div className="mt-7">Leaderboard</div>
            </div>            
        </div>
    )
};
