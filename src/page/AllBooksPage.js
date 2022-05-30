import React, {Component} from "react";
import Book from "../components/Book";

class AllBooksPage extends Component {

    state = {
        data: [],
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

export default AllBooksPage;
