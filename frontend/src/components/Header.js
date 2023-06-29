import React from "react";

export const Header = () =>{
    return(
        <>
       <header
        className="flex justify-between items-center bg-blue-600 text-black p-3"
      >
        <h1 className="text-xl font-bold flex items-center">
          <div>Good Reading Bookstore</div>
        </h1>
      </header>
      </>
    )
}