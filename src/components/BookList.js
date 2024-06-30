import ShowBook from "./ShowBook";
import "./BookList.css"
function BookList ( { books, removeBook, editBook } )
{
    let rendered = books.map( ( book ) =>
    {
        return ( < ShowBook bookObj={ book } removeBook={ removeBook } editBook={ editBook } key={ book.id } /> );
    } )
    return <div className="bpar">{ rendered }</div>
}

export default BookList; 