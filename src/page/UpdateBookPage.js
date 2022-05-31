import React, {useState} from "react";
import {Link, useParams} from "react-router-dom";


const UpdateBookPage = () => {

    const {id} = useParams();

    const [bookTitle, setBookTitle] = useState("");
    const [bookAuthor, setBookAuthor] = useState("");
    const [bookDescription, setBookDescription] = useState("");
    const [bookReleaseYear, setBookReleaseYear] = useState(0);

    async function updateBook() {
        fetch("http://localhost:8080/book/update/" + id, {
            "method": "PUT",
            "headers": {
                "content-type": "application/json",
                "accept": "application/json"
            },
            "body": JSON.stringify({
                id: id,
                title: bookTitle,
                author: bookAuthor,
                description: bookDescription,
                releaseYear: bookReleaseYear
            })
        });
    }

    function updateButton() {
        return <button className={"update"} type='button'
                       onClick={() => {
                           updateBook();
                           alert("Zaktualizowano książkę jesli podano poprawne dane: " +
                               "\nTytuł:" + bookTitle +
                               "\nAutor:" + bookAuthor +
                               "\nOpis:" + bookDescription +
                               "\nRok wydania:" + bookReleaseYear);
                       }}>
            {<Link className={"page-link"} to="/books">Zaktualizuj ksiązkę</Link>}
        </button>;
    }

    function getBookForm(setBookTitle, bookTitle, setBookAuthor, bookAuthor, setBookDescription, bookDescription, setBookReleaseYear, bookReleaseYear) {
        return <form>
            <label>TYTUŁ
                <br/>
                <input type="text"
                       name={"title"}
                       onChange={(e) => setBookTitle(e.target.value)}
                       value={bookTitle}
                />
            </label>
            <br/>
            <label>AUTOR
                <br/>
                <input type="text"
                       name={"author"}
                       onChange={(e) => setBookAuthor(e.target.value)}
                       value={bookAuthor}
                />
            </label>
            <br/>
            <label>OPIS
                <br/>
                <input className={"description"}
                       type="textarea"
                       name={"description"}
                       onChange={(e) => setBookDescription(e.target.value)}
                       value={bookDescription}
                />
            </label>
            <br/>
            <label>ROK WYDANIA
                <br/>
                <input type="number"
                       name={"releaseYear"}
                       min="1900"
                       max={new Date().getFullYear()}
                       step={1}
                       onChange={(e) => setBookReleaseYear(e.target.value)}
                       value={bookReleaseYear}
                />
            </label>
        </form>;
    }

    return (
        <div>
            {getBookForm(setBookTitle, bookTitle, setBookAuthor, bookAuthor, setBookDescription, bookDescription, setBookReleaseYear, bookReleaseYear)}
            <br/>
            {updateButton()}
        </div>
    );
}

export default UpdateBookPage;