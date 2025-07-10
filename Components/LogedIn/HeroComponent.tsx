import botIcon from "../../assets/cute-bot.svg"
import rapidIcon from "../../assets/rapid.d3940770.svg"
import friendIcon from "../../assets/handshake.8c90be47.svg"
import rankingImg from "../../assets/ranking.svg"
import reviewIcon from "../../assets/review.b44ad9a4.svg"
import chessBoard from "../../assets/standardboard.png"
import puzzleImg from "../../assets/puzzle-tier-2.svg"
import Image from "next/image"

export default function HeroComponent() {
    return (
        <div className="flex overflow-x-auto md:min-w-[1500px] md:-ml-20 -ml-50 w-full md:px-60 px-0 font-chess
         items-center md:justify-center justify-start scale-75 md:scale-100">
            <div id="play-div" className="flex-col scale-[0.9] md:h-[480px] px-0 md:px-4 w-80">
                <div className="flex justify-start mt-4">
                    <div className="flex">
                        <Image src={rankingImg} alt="ranking icon" className="max-h-12 max-w-20"/>
                        <div className="text-9xl -mt-11 -ml-40 text-white font-outline-2 scale-[0.25]">#19</div>
                    </div>
                    <div className="flex-col -ml-20 -mt-1 max-h-10 scale-[0.9]">
                        <div className="text-2xl scale-[0.8] -ml-2 -mb-2">Play</div>
                        <div className="flex text-4xl">15
                            <div className="sprite logo-events scale-125"></div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#262522] h-21  lg:h-18 xl:h-21 hidden lg:flex mt-2 border-b-[#1D1C1A] border-b-7">
                    <Image suppressHydrationWarning 
                    src={rapidIcon} alt="rapid icon" className="scale-50 h-20 -mt-1"/>
                    <div className="mt-7">Play 10 min</div>
                </div>
                <div className="flex bg-[#262522] h-21 lg:h-18 xl:h-21  mt-2 border-b-[#1D1C1A] border-b-7 ">
                    <div className="sprite logo-play scale-[1.4] ml-5"></div>
                    <div className="mt-7">New Game</div>
                </div>
                <div className="flex bg-[#262522] h-21 lg:h-18 xl:h-21  mt-2 border-b-[#1D1C1A] border-b-7 ">
                    <Image suppressHydrationWarning 
                    src={botIcon} alt="review icon" className="scale-50"/>
                    <div className="mt-7">Play Bots</div>
                </div>
                <div className="flex bg-[#262522] h-21 lg:h-18 xl:h-21  mt-2 border-b-[#1D1C1A] border-b-7 ">
                    <Image suppressHydrationWarning 
                    src={friendIcon} alt="friend icon" className="scale-[0.45]"/>
                    <div className="mt-7 -ml-2">Play a Friend</div>
                </div>
            </div>
            <div id="puzzles-div" className="flex-col scale-[0.9] md:h-[480px] px-0 md:px-4 w-80">
                <div className="flex mt-4">
                    <div className="flex">
                        <Image src={puzzleImg} alt="ranking icon" className="max-h-16 w-16"/>
                        <div className="text-9xl -mt-9 -ml-18 text-white font-outline-2 scale-[0.25]">8</div>
                    </div>
                    <div className="flex-col max-h-10 scale-[0.9]">
                        <div className="text-3xl scale-[0.8] -ml-2 -mb-2">Puzzles</div>
                        <div className="flex text-5xl font-chess">7,857
                            <div className="sprite logo-events scale-125"></div>
                        </div>
                    </div>
                </div>
                <Image suppressHydrationWarning 
                src={chessBoard} alt="puzzle board" className="w-max"/>
                <div className="flex justify-center items-center bg-[#262522] h-18 border-b-[#1D1C1A] border-b-7 ">
                    <div>Solve Puzzle</div>
                </div>
            </div>
            <div id="lesson-div" className="flex-col scale-[0.9] md:h-[480px] px-0 md:px-4 w-80">
                <div className="flex mt-4 mb-6">
                        <div className="sprite logo-learn scale-[2.5] ml-2"></div>        
                    <div className="flex-col max-h-10 mt-1 scale-[0.9]">
                        <div className="text-3xl scale-[0.8] -ml-2 -mb-2">Next Lesson</div>
                        <div className="flex opacity-90 font-sans mt-1">Capturing Pieces:Forks</div>
                    </div>
                </div>
                <Image suppressHydrationWarning 
                src={chessBoard} alt="lesson board" className="w-max"/>
                <div className="flex justify-center items-center bg-[#262522] h-18 border-b-[#1D1C1A] border-b-7 ">
                    <div>Start Lesson</div>
                </div>
            </div>
            <div id="review-div" className="flex-col scale-[0.9] md:h-[480px] px-0 md:px-4 w-80">
                <div className="flex mt-4 mb-6">
                    <Image suppressHydrationWarning
                    src={reviewIcon} alt="review icon" className="max-h-16 w-16"/>        
                    <div className="flex-col max-h-10 mt-1 scale-[0.9]">
                        <div className="text-3xl scale-[0.8] -ml-2 -mb-2">Game Review</div>
                        <div className="flex opacity-90 font-sans mt-1">Learn from your mistakes</div>
                    </div>
                </div>
                <Image suppressHydrationWarning 
                src={chessBoard} alt="lesson board" className="w-max"/>
                <div className="flex justify-center items-center bg-[#262522] h-18 border-b-[#1D1C1A] border-b-7 ">
                    <div>Review vs Laaxman10</div>
                </div>
            </div>
        </div>
    )
};
