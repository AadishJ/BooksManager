import { useContext, useEffect } from "react";
import BookList from "./components/BookList";
import "./App.css"
// import axios from "axios";
import CreateBook from "./components/CreateBook";
import booksContext from "./context/books";

function App ()
{
    const { fetchBooks } = useContext( booksContext );


    // let [ books, setBooks ] = useState( [] );
    // let fetchBooks = async () =>
    // {
    //     let response = await axios.get( "http://localhost:3001/books" );
    //     setBooks( response.data );
    // }
    useEffect( () =>
        {
        fetchBooks();
        }, [fetchBooks]);


    // let createBooks = async ( title ) =>
    // {
    //     if ( title !== "" )
    //     {
    //         let response = await axios.post( "http://localhost:3001/books",
    //             {
    //                 title
    //             }
    //         );
    //         setBooks( [ ...books, ( response.data ) ] );
    //     }
    // }



    // let editBook = async ( title, id ) =>
    // {
    //     let response = await axios.put( `http://localhost:3001/books/${ id }`,
    //         {
    //             title,
    //         }
    //     );
    //     console.log( response );
    //     let updatedBooks = books.map( book =>
    //     {
    //         if ( book.id === id )
    //         {
    //             return { ...book, ...response.data };
    //         }
    //         return book;
    //     }
    //     )
    //     setBooks( updatedBooks );
    // }



    // let removeBook = async ( id ) =>
    // {
    //     await axios.delete( `http://localhost:3001/books/${ id }` );
    //     let newBooks = books.filter( ( book ) => ( id !== book.id ) );
    //     setBooks( newBooks );
    // }




    return ( <div>
        <CreateBook />
        <div className="reading">Reading List</div>
        <BookList/>
    </div>
    );
}

export default App;