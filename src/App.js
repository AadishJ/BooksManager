import { useState } from "react";
import BookList from "./components/BookList";
import "./App.css"

function App ()
{
    let [ title, setTitle ] = useState( "" );
    let [ books, setBooks ] = useState( [] );
    const handleChange = ( event ) =>
    {
        setTitle( event.target.value );
    }
    const handleSubmit = ( event ) =>
    {
        event.preventDefault();
        if ( title !== "" )
        {
            let newBook = { title, id: Math.round( Math.floor( Math.random() * 9999 ) ) }
            let updatedBooks = [ ...books, newBook ]
            setBooks( updatedBooks );
            setTitle( "" );
        }
    }
    let editBook = ( title,id ) =>
    {
       let updatedBooks = books.map( book =>
        {
            if ( book.id === id )
            {
                return { ...book, title: title };
            }
            return book;
            }
        )   
        setBooks( updatedBooks );
    }
    let removeBook = ( id ) =>
    {
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