import ShowBook from "./ShowBook";
import "./BookList.css"
import { useContext } from "react";
import booksContext from "../context/books";
function BookList ()
{
    const { books } = useContext( booksContext );
    let rendered = books.map( ( book ) =>
    {
        return ( < ShowBook bookObj={ book } key={ book.id } /> );
    } )
    return <div className="bpar">{ rendered }</div>
}

export default BookList; 