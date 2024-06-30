import { useState } from "react";
import "./EditBook.css"
function EditBook ( { handleSubmit } )
{
    let [ title, setTitle ] = useState( "" );
    let handleFormSubmit = ( event ) =>
    {
        event.preventDefault();
        handleSubmit( title );
    }
    let handleChange = ( event ) =>
    {
        setTitle( event.target.value );
    }
    return (
        <div>
            {/* <h3><label>Enter new Name:</label></h3> */}
            <form onSubmit={ handleFormSubmit } className="form">
                <input placeholder="Enter new Name" className="editInput" value={ title } onChange={ handleChange } />
                <button className="editButton">Submit</button>
            </form>
        </div>
    )
}

export default EditBook;