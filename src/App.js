import { useEffect, useState } from "react";
import BookList from "./components/BookList";
import "./App.css"
import axios from "axios";

function App ()
{
    let [ title, setTitle ] = useState( "" );
    let [ books, setBooks ] = useState( [] );
    const handleChange = ( event ) =>
    {
        setTitle( event.target.value );
    }
    let fetchBooks = async () =>
    {
        let response = await axios.get( "http://localhost:3001/books" );
        setBooks( response.data );
    }
    useEffect( () =>
    {
        fetchBooks();
    }, [] );
    const handleSubmit = async ( event ) =>
    {
        event.preventDefault();
        if ( title !== "" )
        {
            let response = await axios.post( "http://localhost:3001/books",
                {
                    title
                }
            );
            let updatedBooks = [ ...books, (response.data) ];
            setBooks( updatedBooks );
            setTitle( "" );
        }
    }
    let editBook = async ( title,id ) =>
    {
        let response = await axios.put( `http://localhost:3001/books/${ id }`,
            {
                title,
            }
        );
        console.log(response);
       let updatedBooks = books.map( book =>
        {
            if ( book.id === id )
            {
                return { ...book, ...response.data };
            }
            return book;
            }
        )   
        setBooks( updatedBooks );
    }
    let removeBook = async ( id ) =>
    {
        await axios.delete( `http://localhost:3001/books/${ id }` );
        let newBooks = books.filter( ( book ) => ( id !== book.id ) );
        setBooks( newBooks );
    }
    return ( <div>
        <div className="input">
            <form onSubmit={ handleSubmit }>
            <h1>Add a Book</h1>
                <input placeholder="Enter Book Name" value={ title } onChange={ handleChange } />
                <button>Submit</button>
            </form>
        </div>
        <div className="reading">Reading List</div>
        <BookList books={ books } removeBook={ removeBook } editBook={editBook} />
    </div>
    );
}

export default App;