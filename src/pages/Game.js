import { Fragment } from "react";
import CardBig from "../component/CardBig"; 
import CardSmall from "../component/CardSmall"; 
import "./Game.css";

export default function Game() {
    const STAR_COLOR = "rgb(220, 117, 21)";
    const STAR_SIZE = 20;

    const poster = [
        {
            title: "The Legend of Zelda", id: 1,
            rate: 5,
            genre: "action-adventure",
            img: "https://m.media-amazon.com/images/I/71A5Vqfw9+L._AC_SL1500_.jpg",
        },
        {
            title: "God of War", id: 2,
            rate: 5,
            genre: "action-adventure",
            img: "https://m.media-amazon.com/images/I/81RQhGzvfbL._AC_SL1500_.jpg",
        },
        {
            title: "The Witcher 3", id: 3,
            rate: 5,
            genre: "RPG, action",
            img: "https://m.media-amazon.com/images/I/81xTXsqyC7L._AC_SL1500_.jpg",
        },
    ];

    const data = [
        {
            title: "Cyberpunk 2077", id: 1,
            rate: 4,
            genre: "RPG, action",
            img: "https://m.media-amazon.com/images/I/71Lhcvrlp-L._AC_SL1500_.jpg",
        },
        {
            title: "Red Dead Redemption 2", id: 2,
            rate: 5,
            genre: "action-adventure",
            img: "https://m.media-amazon.com/images/I/81pmspId6iL._AC_SL1500_.jpg",
        },
        {
            title: "GTA V", id: 3,
            rate: 5,
            genre: "action, open-world",
            img: "https://m.media-amazon.com/images/I/91Y5bgB5XiL._AC_SL1500_.jpg",
        },
        {
            title: "Assassin's Creed Valhalla", id: 4,
            rate: 4,
            genre: "action, RPG",
            img: "https://m.media-amazon.com/images/I/71wyp+LRQsL._AC_SL1500_.jpg",
        },
    ];

    return (
        <>
            <p id="games">Top Games</p>
            <div className="containerTop">
                {poster.map((item, index) => (
                    <Fragment key={item.id}>
                        <CardBig title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR} />
                        {data.length === index + 1 ? (
                            <div style={{ marginRight: 40 }} />
                        ) : null}
                    </Fragment>
                ))}
            </div>
            <div className="rowcoba">
                <div className="column">
                    <p id="games">All Games</p>
                    {data.map((item, index) => (
                        <Fragment key={item.id}>
                            <CardSmall title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR} onClick={() => alert("Game id = " + item.id)} />
                            {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
                        </Fragment>
                    ))}
                </div>
                <div className="column">
                    <p id="games">All Games</p>
                    {data.map((item, index) => (
                        <Fragment key={item.id}>
                            <CardSmall title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR} onClick={() => alert("Game id = " + item.id)} />
                            {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
                        </Fragment>
                    ))}
                </div>
            </div>
        </>
    );
}
