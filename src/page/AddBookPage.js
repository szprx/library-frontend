import React, {useState} from "react";
import {Link} from "react-router-dom";

const AddBookPage = () => {

    const [bookId] = useState(0);
    const [bookTitle, setBookTitle] = useState("");
    const [bookAuthor, setBookAuthor] = useState("");
    const [bookDescription, setBookDescription] = useState("");
    const [bookReleaseYear, setBookReleaseYear] = useState(0);

    async function addBook() {
        fetch("http://localhost:8080/book/add", {
            "method": "POST",
            "headers": {
                "content-type": "application/json",
                "accept": "application/json"
            },
            "body": JSON.stringify({
                id: bookId,
                title: bookTitle,
                author: bookAuthor,
                description: bookDescription,
                releaseYear: bookReleaseYear
            })
        });
    }

    function addButton() {
        return <button className={"add"} type='button'
                       onClick={() => {
                           addBook();
                           alert("Dodano książkę: " +
                               "\nTytuł:" + bookTitle +
                               "\nAutor:" + bookAuthor +
                               "\nOpis:" + bookDescription +
                               "\nRok wydania:" + bookReleaseYear);
                       }}>
            {<Link className={"page-link"} to="/books">Dodaj ksiązkę</Link>}
        </button>;
    }

    function getBookForm() {
        return <form>
            <label>TYTUŁ:
                <input type="text"
                       name={"title"}
                       onChange={(e) => setBookTitle(e.target.value)}
                       value={bookTitle}
                />
            </label>
            <br/>
            <label>AUTOR:
                <input type="text"
                       name={"author"}
                       onChange={(e) => setBookAuthor(e.target.value)}
                       value={bookAuthor}
                />
            </label>
            <br/>
            <label>OPIS:
                <input type="textarea"
                       name={"description"}
                       onChange={(e) => setBookDescription(e.target.value)}
                       value={bookDescription}
                />
            </label>
            <br/>
            <label>ROK WYDANIA
                <input type="number"
                       name={"releaseYear"}
                       min="1900"
                       max={new Date().getFullYear()}
                       onChange={(e) => setBookReleaseYear(e.target.value)}
                       value={bookReleaseYear}
                />
            </label>
        </form>;
    }

    return (
        <div>
            {getBookForm()}
            <br/>
            {addButton()}
        </div>
    );
}

export default AddBookPage;