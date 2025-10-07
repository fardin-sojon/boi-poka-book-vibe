import React from 'react';
import bookImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 my-5 rounded-md p-10">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={bookImg}
      className="max-w-sm rounded-lg shadow-2xl flex-1"/>
    <div className='flex-1 text-center lg:text-left'>
      <h1 className=" text-3xl lg:text-5xl font-bold mb-5">Books to freshen up your bookshelf</h1>
      <button className="btn bg-green-500 text-white rounded-md">View The List</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;