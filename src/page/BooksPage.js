import React, {Component} from "react";
import Book from "../Book";

class BooksPage extends Component {

    state = {
        data: [],
        name: "daro"
    }

    componentDidMount() {
        fetch('http://localhost:8080/book/all')
            .then(response => response.json())
            .then(data => {
                    console.log(data);
                    this.setState({data})
                }
            );
    }

    render() {
        return (<div>
            <ul>{this.state.data.map(book => <Book info={book}/>)}</ul>
        </div>);
    }
}

export default BooksPage;
