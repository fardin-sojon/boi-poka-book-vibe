import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDB } from '../../Utiluty/addToDB';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const BookDetails = () => {

    const {id} = useParams();
    const bookId = parseInt(id)
    
    const data = useLoaderData();
    // console.log(data);
    const singleBook = data.find(book => book.id ===bookId);
    // console.log(singleBook);
    const {bookName, image} = singleBook;

    const haldleMarkAsRead =(id)=>{
        // Store with Id
        // Where to store
        // array or collection
        // if book already exist the show a alart
        // if book not exist then push id the collection or array

        Swal.fire({
  title: "Good job!",
  text: "You clicked the button!",
  icon: "success"
});

        addToStoreDB(id)
    }

    return (
        <div className='w-2/3 mx-auto'>
            <img className='h-120' src={image} alt="" />
            <h3 className='font-bold text-xl'>{bookName}</h3>
            <button onClick={()=>haldleMarkAsRead(id)} className='btn bg-green-500 text-white'>Mar as Read</button>
            <button className='btn bg-blue-500 text-white'>Add to WishList</button>
        </div>
    );
};

export default BookDetails;