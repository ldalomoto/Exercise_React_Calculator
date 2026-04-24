import { useState } from "react";
import { useEffect } from "react";
import "./page.css"

export function Search() {


    return (
        <>
            <div className="contenedor_search">
                <input type="text" placeholder="buscardor" />
                <button>BUSCAR</button>
            </div>
        </>
    );
}

export function Card({ text, url, body }) {
    return (
        <>
            <div className="card_personaje">
                <div className="encabezado">
                    <div>
                        <img src={url} alt="imagen_api" />
                    </div>
                    <div>
                        <h3>{text["created"]}</h3>
                        <h3>{text["gender"]}</h3>
                        <h3>{text["name"]}</h3>
                        <h3>{text["species"]}</h3>
                        <h3>{text["status"]}</h3>
                        <h3>{text["url"]}</h3>
                    </div>
                </div>
                <div>
                    {body.map((cap) => (
                        <h6>{cap}</h6>
                    ))}
                </div>
                <div>
                    <button>BUTTON</button>
                </div>
            </div>
        </>
    );
}

function Card_Character({ url, text }) {
    return (
        <>
            <div>
                <div>
                    <img src={url} alt="character"></img>
                </div>
                <div>
                    <h2>{text}</h2>
                </div>
            </div>
        </>
    );
}


export default function Api() {

    const [dataApi, setDataApi] = useState([])

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then(response => response.json())
            .then(data => setDataApi(data.results))
    }, [])

    console.log(dataApi)

    return (
        <>
            <div>
                <Search />
                <div className="Cards_api">
                    {dataApi.map((dat) => (
                        <Card text={dat} url={dat["image"]} body={dat["episode"]} />
                    ))}
                </div>
            </div>
        </>
    );
}