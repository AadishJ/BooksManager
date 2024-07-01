import { useContext, useState } from "react"
import "./ShowBook.css"
import Cross from "./SVG/cross.svg"
import Pencil from "./SVG/pencil.svg"
import EditBook from "./EditBook"
import booksContext from "../context/books"
function ShowBook ( { bookObj} )
{
    const { removeBook } = useContext( booksContext );
    let [ isEdit, setIsEdit ] = useState( false )
    let handleClick = () =>
    {
        removeBook( bookObj.id );
    }
    let openEdit = () =>
    {
        setIsEdit( !isEdit );
    }
    let content = <div>
        <div>Name: { bookObj.title }</div>
        <div>ID: { bookObj.id }</div>
    </div>;
    let handleSubmit = ()=>
    {
        setIsEdit( false );
    }
    if ( isEdit )
    {
        content = <EditBook handleSubmit={handleSubmit} bookObj={bookObj} />
    }
    return (
        <div className="book">
            <div className="icons">
                <img className="svg pencil" src={ Pencil } alt="Pencil Icon" onClick={ openEdit } />
                <img className="svg" src={ Cross } alt="Cross Icon" onClick={ handleClick } />
            </div>
            <figure>
                <img src={ `https://picsum.photos/seed/${ bookObj.id }/100/` } alt="" />
            </figure>
            <div>
                { content }
            </div>
        </div>
    );

}

export default ShowBook;