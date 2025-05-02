"use client"

import { useState, useEffect, useCallback } from "react"

export default function Cursor(){

    const [X, setX] = useState(0)
    const [Y, setY] = useState(0)

    const setCoords = useCallback((e) => {

        setX(e.clientX)
        setY(e.clientY)

    }, [])


    useEffect(() => {
        document.addEventListener("mousemove",setCoords)
        
        return () => {
            document.removeEventListener("mousemove",setCoords)

        }

    }, [])


    return(
        <div style={{transform : `translateX(${X-5}px) translateY(${Y}px) rotate(-115deg)`}} className="custom-cursor fixed w-5 h-5 bg-blue-500 pointer-events-none z-[9999]"></div>
    )
}