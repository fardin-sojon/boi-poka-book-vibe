import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoreBook } from "../../Utiluty/addToDB";
import SingleBook from "../Books/SingleBook";

const ReadList = () => {

    const [readList, setReadList]=useState([]);
    const [sort, setSort] = useState("")

    const data = useLoaderData();
    console.log(data);

    useEffect(()=>{
        const storeBookData =getStoreBook();
        // console.log(storeBookData);
        const ConvertedStoredBooks = storeBookData.map(id=> parseInt(id))
        // console.log(ConvertedStoredBooks);
        const myReadList=data.filter(book=>ConvertedStoredBooks.includes(book.id));
        setReadList(myReadList);
    }, [])


    const haldleSort = (type)=>{
        setSort(type)
        if(type === "pages"){
            const shortedPage= [...readList].sort((a,b)=>a.totalPages - b.totalPages);
            setReadList(shortedPage)
        }
        if(type === "rating"){
            const shortedRating = [...readList].sort((a, b)=> a.rating - b.rating)
            setReadList(shortedRating)
        }
    }

  return (
    <div className="mt-5">
        <details className="dropdown">
  <summary className="btn m-1">Sort by : {sort? sort : ""}</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=>haldleSort('pages')}>Pages</a></li>
    <li><a onClick={()=>haldleSort('rating')}>Rating</a></li>
  </ul>
</details>
      <Tabs>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>My Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>Read Book List {readList.length}</h2>

            {
                readList.map(b=> <SingleBook key={b.id} book={b}></SingleBook>)
            }

        </TabPanel>
        <TabPanel>
          <h2>My Wish List</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
