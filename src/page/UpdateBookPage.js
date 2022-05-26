import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

const UpdateBookPage = () => {

    const {id} = useParams();
    const [hasError, setErrors] = useState(false);
    const [book, setBook] = useState({})


    function handleChange(changeObject) {
        setBook(changeObject)
    }

    useEffect(() => {
        fetchData();
    });

    async function fetchData() {
        const res = await fetch("http://localhost:8080/book/" + id);
        res
            .json()
            .then(res => setBook(res))
            .catch(err => setErrors(err))
    }


    async function updateData(e) {
        e.preventDefault();
        const res = await fetch("http://localhost:8080/book/update/" + id, {
            "method": "PUT",
            "headers": {
                "content-type": "application/json",
                "accept": "application/json"
            },
            "body": JSON.stringify({
                id: book.id,
                title: book.title,
                author: book.author,
                description: book.description,
                releaseYear: book.releaseYear
            })
        });
        res
            .json()
            .then(res => setBook(res))
            .catch(err => setErrors(err))
    }


    return (
        <div>
            <form>
                <label>TYTUŁ:
                    <input type="text"
                           onChange={(e) => handleChange({title: e.target.value})}/>
                </label>
                <br/>
                <label>AUTOR:
                    <input type="text"
                           onChange={(e) => handleChange({author: e.target.value})}/>
                </label>
                <br/>
                <label>OPIS:
                    <input type="textarea"
                           onChange={(e) => handleChange({description: e.target.value})}/>
                </label>
                <br/>
                <label>ROK WYDANIA
                    <input type="number"
                           min="1900"
                           max={new Date().getFullYear()}
                           onChange={(e) => handleChange({releaseYear: e.target.value})}/>
                </label>
                <br/>
                <button type='button'
                        onClick={(e) => updateData(e)}>
                </button>
            </form>
        </div>
    );
}

export default UpdateBookPage;


// import React, {Component} from "react";
//
// class UpdateBookPage extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             id: this.props.info.id,
//             title: this.props.info.title,
//             author: this.props.info.author,
//             description: this.props.info.description,
//             releaseYear: this.props.info.releaseYear,
//             url: "http://localhost:8080/book/update/" + this.props.info.id
//         };
//
//         this.update = this.update.bind(this);
//     }
//
//     update(e) {
//         e.preventDefault();
//         fetch(this.state.url, {
//             "method": "PUT",
//             "headers": {
//                 "content-type": "application/json",
//                 "accept": "application/json"
//             },
//             "body": JSON.stringify({
//                 id: 0,
//                 title: this.state.title,
//                 author: this.state.author,
//                 description: this.state.description,
//                 releaseYear: this.state.releaseYear
//             })
//         })
//             .then(response => response.json())
//             .then(response => {
//                 console.log(response)
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     }
//
//     handleChange(changeObject) {
//         this.setState(changeObject)
//     }
//
//     render() {
//         return (
//             <div>
//                 <form>
//                     <label>TYTUŁ:
//                         <input type="text"
//                                onChange={(e) => this.handleChange({title: e.target.value})}/>
//                     </label>
//                     <br/>
//                     <label>AUTOR:
//                         <input type="text"
//                                onChange={(e) => this.handleChange({author: e.target.value})}/>
//                     </label>
//                     <br/>
//                     <label>OPIS:
//                         <input type="textarea"
//                                onChange={(e) => this.handleChange({description: e.target.value})}/>
//                     </label>
//                     <br/>
//                     <label>ROK WYDANIA
//                         <input type="number"
//                                min="1900"
//                                max={new Date().getFullYear()}
//                                onChange={(e) => this.handleChange({releaseYear: e.target.value})}/>
//                     </label>
//                     <br/>
//                     <button type='button'
//                             onClick={(e) => this.update(e)}>
//                     </button>
//                 </form>
//             </div>
//         );
//     }
// }
//
// export default UpdateBookPage;