'use client'

import { useEffect, useRef, useState } from "react";
import { Users } from "./types/User";
import axios from "axios";


export default function Home() {
  
  const handleGetPosts = async () => {
    const requestParams = {
      postId: 1,
      sort:' desc'
    }


  const response  = await axios.get('https://jsonplaceholder.typicode.com/comments' , {
    params: requestParams
    
  })
    

  console.log(response.data)
  }

    return (
        <div className="container mx-auto">
          <button
              onClick={handleGetPosts}
          >
            Pegar Posts
          </button>
        </div>
  );
}
