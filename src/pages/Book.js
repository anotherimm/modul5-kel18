import { Fragment } from "react";
import CardBig from "../component/CardBig"; 
import CardSmall from "../component/CardSmall"; 
import "./Book.css";

export default function Book() {
    const STAR_COLOR = "rgb(220, 117, 21)";
    const STAR_SIZE = 20;

    const poster = [
        {
            title: "Harry Potter", id: 1,
            rate: 5,
            genre: "fantasy, adventure",
            img: "https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg",
        },
        {
            title: "The Lord of the Rings", id: 2,
            rate: 5,
            genre: "fantasy, adventure",
            img: "https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg",
        },
        {
            title: "The Hobbit", id: 3,
            rate: 4,
            genre: "fantasy, adventure",
            img: "https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg",
        },
    ];

    const data = [
        {
            title: "Pride and Prejudice", id: 1,
            rate: 4,
            genre: "romance, drama",
            img: "https://m.media-amazon.com/images/I/71Q1Iu4suSL.jpg",
        },
        {
            title: "1984", id: 2,
            rate: 5,
            genre: "dystopian, political fiction",
            img: "https://m.media-amazon.com/images/I/71kxa1-0zfL.jpg",
        },
        {
            title: "The Great Gatsby", id: 3,
            rate: 4,
            genre: "fiction, classic",
            img: "https://m.media-amazon.com/images/I/81AFgYvW6gL.jpg",
        },
        {
            title: "To Kill a Mockingbird", id: 4,
            rate: 5,
            genre: "fiction, drama",
            img: "https://m.media-amazon.com/images/I/81wgcld4wxL.jpg",
        },
    ];

    return (
        <>
            <p id="books">Top Books</p>
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
                    <p id="books">All Books</p>
                    {data.map((item, index) => (
                        <Fragment key={item.id}>
                            <CardSmall title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR} onClick={() => alert("Book id = " + item.id)} />
                            {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
                        </Fragment>
                    ))}
                </div>
                <div className="column">
                    <p id="books">All Books</p>
                    {data.map((item, index) => (
                        <Fragment key={item.id}>
                            <CardSmall title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR} onClick={() => alert("Book id = " + item.id)} />
                            {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
                        </Fragment>
                    ))}
                </div>
            </div>
        </>
    );
}
