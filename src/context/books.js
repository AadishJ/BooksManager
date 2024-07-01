import { createContext, useCallback, useState } from "react";
import axios from "axios";
const booksContext = createContext();

function Provider ( { children } )
{


    let [ books, setBooks ] = useState( [] );



    let fetchBooks = useCallback( async () =>
    {
        let response = await axios.get( "http://localhost:3001/books" );
        setBooks( response.data );
    }, [] );



    let createBooks = async ( title ) =>
    {
        if ( title !== "" )
        {
            let response = await axios.post( "http://localhost:3001/books",
                {
                    title
                }
            );
            setBooks( [ ...books, ( response.data ) ] );
        }
    }



    let editBook = async ( title, id ) =>
    {
        let response = await axios.put( `http://localhost:3001/books/${ id }`,
            {
                title,
            }
        );
        console.log( response );
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



    let valueToShare = {
    books,
        removeBook,
        editBook,
        createBooks,
        fetchBooks
};



    return ( <booksContext.Provider value={valueToShare}>{ children }</booksContext.Provider> )



}
export default booksContext;
export { Provider };