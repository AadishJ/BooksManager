import { useContext, useState } from "react";
import "./CreateBook.css"
import booksContext from "../context/books";

function CreateBook ()
{
    const { createBooks } = useContext( booksContext );
    let [ title, setTitle ] = useState( "" );
    const handleChange = ( event ) =>
    {
        setTitle( event.target.value );
    }
    const handleSubmit = async ( event ) =>
    {
        event.preventDefault();
        if ( title !== "" )
        {
            await createBooks( title );
            setTitle( "" );
        }
    }
    return (
        <div className="input">
            <form onSubmit={ handleSubmit }>
                <h1>Add a Book</h1>
                <input placeholder="Enter Book Name" value={ title } onChange={ handleChange } />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default CreateBook;