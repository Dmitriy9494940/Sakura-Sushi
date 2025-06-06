import React from "react"; import HTMLFlipBook from "react-pageflip"; import "./index.css";

const Page = React.forwardRef(({ number, text }, ref) => { return ( <div className="page" ref={ref}> <div>{text}</div> </div> ); });

export default function App() { const menuPages = [ "Роллы", "Суши", "Гунканы", "Нигири", "Маки", "Сеты", "Супы", "Напитки", "Десерты", ];

return ( <> <h1 className="logo">Sakura Sushi 🌸</h1> <canvas className="sakura" id="sakuraCanvas" width="1000" height="500"></canvas> <div className="flipbook-wrapper"> <HTMLFlipBook width={300} height={400} showCover={true}> {menuPages.map((item, index) => ( <Page key={index} number={index + 1} text={item} /> ))} </HTMLFlipBook> </div> </> ); }

