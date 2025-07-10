"use client"

import { useState } from "react"
import { Clock, Square } from "lucide-react"

export default function HistoryComponent({ userName }: { userName: string }) {
  const [games] = useState([
    {
      player1: userName,
      player2: "TotalJeffrey685",
      player1Rank: 739,
      player2Rank: 750,
      result: "black",
      moveCt: 57,
      date: "Apr 29, 2025",
      battleMode: "rapid",
      accuracy1: 76,
      accuracy2: 79.7,
      player1Country: "🇺🇸",
      player2Country: "🇺🇸",
    },
    {
      player1: "Abhishek_B_R",
      player2: "TotalJeffrey685",
      player1Rank: 739,
      player2Rank: 750,
      result: "white",
      moveCt: 0,
      date: "Apr 1, 2025",
      battleMode: "rapid",
      accuracy1: null,
      accuracy2: null,
      player1Country: "🇮🇳",
      player2Country: "🇺🇸",
    },
    {
      player1: "Laaxman10",
      player2: "Abhishek_B_R",
      player1Rank: 749,
      player2Rank: 752,
      result: "black",
      moveCt: 9,
      date: "Mar 11, 2025",
      battleMode: "rapid",
      accuracy1: null,
      accuracy2: null,
      player1Country: "🇨🇦",
      player2Country: "🇮🇳",
    },
    {
      player1: "Maga_Alan",
      player2: "Abhishek_B_R",
      player1Rank: 775,
      player2Rank: 763,
      result: "black",
      moveCt: 28,
      date: "Mar 11, 2025",
      battleMode: "rapid",
      accuracy1: null,
      accuracy2: null,
      player1Country: "🇫🇷",
      player2Country: "🇮🇳",
    },
    {
      player1: "RobSan77",
      player2: "Abhishek_B_R",
      player1Rank: 755,
      player2Rank: 774,
      result: "white",
      moveCt: 25,
      date: "Mar 11, 2025",
      battleMode: "rapid",
      accuracy1: 59.5,
      accuracy2: 74.7,
      player1Country: "🇩🇪",
      player2Country: "🇮🇳",
    },
  ])

  return (
    <div className="flex-col bg-[#262522] h-[30rem] w-[45rem] text-white">
      <div className="flex justify-between px-4 h-10 items-center border-b border-gray-600">
        <div className="font-sans font-bold text-lg">Game History</div>
        <div className="scale-y-[1.7] cursor-pointer hover:text-gray-300">&gt;</div>
      </div>

      <div className="bg-[#1F1E1C]">
        <table className="w-full font-sans text-sm">
          <thead>
            <tr className="h-12 text-gray-400 border-b border-gray-600">
              <th className="text-left pl-4 w-80">Players</th>
              <th className="text-center w-20">Result</th>
              <th className="text-center w-24">Accuracy</th>
              <th className="text-center w-16">Moves</th>
              <th className="text-center w-24">Date</th>
            </tr>
          </thead>
          <tbody className="bg-[#262522]">
            {games.map((game, index) => (
              <tr key={index} className="h-16 border-b border-gray-700 hover:bg-[#2a2926]">
                <td className="pl-4">
                  <PlayerDetails
                    player1={game.player1}
                    player2={game.player2}
                    player1Rank={game.player1Rank}
                    player2Rank={game.player2Rank}
                    battleMode={game.battleMode}
                    result={game.result}
                    player1Country={game.player1Country}
                    player2Country={game.player2Country}
                  />
                </td>
                <td className="text-center">
                  <ResultDisplay result={game.result} />
                </td>
                <td className="text-center">
                  {game.accuracy1 && game.accuracy2 ? (
                    <div className="flex flex-col text-xs">
                      <span>{game.accuracy1}</span>
                      <span>{game.accuracy2}</span>
                    </div>
                  ) : (
                    <span className="text-[#2392BB] cursor-pointer hover:underline">Review</span>
                  )}
                </td>
                <td className="text-center">{game.moveCt}</td>
                <td className="text-center text-xs">{game.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

interface PlayerDetailsProps {
  player1: string
  player2: string
  player1Rank: number
  player2Rank: number
  battleMode: string
  result: string
  player1Country: string
  player2Country: string
}

function PlayerDetails({
  player1,
  player2,
  player1Rank,
  player2Rank,
  player1Country,
  player2Country,
}: PlayerDetailsProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1 text-green-400">
        <Clock size={16} />
        <span className="text-xs">10 min</span>
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center">
            <div className="w-2 h-2 bg-black rounded-full"></div>
          </div>
          <span className="text-sm">{player1}</span>
          <span className="text-xs text-gray-400">({player1Rank})</span>
          <span>{player1Country}</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-black rounded-sm border border-gray-500"></div>
          <span className="text-sm">{player2}</span>
          <span className="text-xs text-gray-400">({player2Rank})</span>
          <span>{player2Country}</span>
        </div>
      </div>
    </div>
  )
}

function ResultDisplay({ result }: { result: string }) {
  if (result === "white") {
    return (
      <div className="flex flex-col items-center gap-1">
        <div className="text-lg">1</div>
        <div className="text-lg">0</div>
        <Square size={12} className="fill-red-500 text-red-500" />
      </div>
    )
  } else if (result === "black") {
    return (
      <div className="flex flex-col items-center gap-1">
        <div className="text-lg">0</div>
        <div className="text-lg">1</div>
        <Square size={12} className="fill-red-500 text-red-500" />
      </div>
    )
  } else {
    return (
      <div className="flex flex-col items-center gap-1">
        <div className="text-lg">½</div>
        <div className="text-lg">½</div>
        <Square size={12} className="fill-gray-500 text-gray-500" />
      </div>
    )
  }
}
