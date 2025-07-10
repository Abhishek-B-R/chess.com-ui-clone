"use client"
import Image from "next/image"
import standardBoard from "../../assets/standardboard.png"
import Button from "../Button"
import cuteBot from "../../assets/cute-bot.svg"

export default function MainComponent() {
    return (
        <div className="h-screen font-chess relative left-0 top-0 w-screen">
            <div className="mt-10 flex justify-center">
                <div className="hidden md:block md:h-[450px] md:w-[450px] max-h-[500px] max-w-[500px]">
                    <Image suppressHydrationWarning
                    src={standardBoard} alt="chess board"/>
                </div>
                <div className="p-10">
                    <div className="text-2xl pb-4 md:text-4xl lg:text-5xl font-chess grid grid-cols-12 gap-y-2">
                        <div className="mx-1 col-span-7 sm:col-span-5 md:col-span-8 lg:col-span-7 xl:col-span-6">Play Chess</div>
                        <div className="mx-1 col-span-5 sm:col-span-4 md:col-span-4 lg:col-span-5 xl:col-span-6">Online</div>
                        <div className="mx-1 col-span-12">on the #1 Site!</div>
                    </div>
                    <div className="mt-10">
                        <Button onClick={()=>null} pref="primary">
                            <div className="flex align-middle w-80 cursor-pointer">
                                <div className="sprite logo-play mb-2" style={{
                                    transform: 'scale(1)'}}>
                                </div>
                                <div className="mt-3">
                                    <div className="text-3xl">Play Online</div>
                                    <div className="font-sans text-sm">Play with someone at your level</div>
                                </div>
                            </div>
                        </Button>
                    </div>
                    <div>
                        <Button onClick={()=>null} pref="secondary">
                            <div className="flex align-middle w-76 cursor-pointer py-5">
                                <div>
                                    <Image suppressHydrationWarning
                                    src={cuteBot} alt="bot img" className="h-14 -ml-4"/>
                                </div>
                                <div className="text-gray-300">
                                    <div className="text-3xl">Play Bots</div>
                                    <div className="font-sans text-sm">Play vs customizable training bots</div>
                                </div>
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
};
