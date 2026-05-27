import { useState } from "react";
import img1 from "./assets/hero.png"
import img2 from "./assets/react.svg"
function Us3() {
    const [text, settext] = useState("LJ university")
    const [c, setc] = useState("red")
    const [hsl, sethsl] = useState("Hide")
    const [hsltext, sethsltext] = useState("react JS")
    const [image, setimage] = useState(img1)
    function handleimage() {
        if (image === img1) { setimage(img2) } else { setimage(img1) }
    }
    function handletext() {
        if (text === "LJ university") { settext("Welcome Students") } else { settext("LJ university") }
    }
    function handlecolor() {
        if (c === "red") { setc("blue") } else { setc("red") }
    }
    function handlehs() {
        if (hsl === "Hide") {
            sethsl("show")
            sethsltext(" ")
        }
        else {
            sethsl("Hide")
            sethsltext("React JS")
        }
    }
    return (
        <>
            <button onClick={handleimage}>Change Image</button>
            <button onClick={handletext}>Change text</button>
            <button onClick={handlecolor}>Change Color</button>
            <button onClick={handlehs}>{hsl}</button>
            <img src={image} width="200" />
            <h1 style={{ color: c }}>{text}</h1>
            <h2>{hsltext}</h2>
        </>
    )
}
export default Us3;