import { ReactElement } from "react"

export type ButtonParams={
    children:ReactElement,
    onClick:()=>void,
    pref:"primary"|"secondary"
}

export enum HoverTypes{
    HOME="home",
    PLAY="play",
    PUZZLE="puzzle",
    LEARN="learn",
    WATCH="watch",
    NEWS="news",
    SOCIAL="social",
    MORE="more",
    SETTING="setting"
}