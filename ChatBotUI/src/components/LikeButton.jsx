"use client";
import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDisplay, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartOutline } from '@fortawesome/free-regular-svg-icons';

 
const LikeButton = ()=>{
    const [isLiked , setIsLiked] = useState(false) 
    

    const handleClick = ()=>{
        console.log("clicked");
        
        setIsLiked(!isLiked)
    }

    return (
        <>

            <div>
                <h1>Hii</h1>
                <p></p>

                {isLiked? <p  className='Liked'   onClick={handleClick}   style={{color : 'red'}}   >          <FontAwesomeIcon icon={faHeart} />            </p> : <p className='Like'  onClick={handleClick}> <FontAwesomeIcon icon={faHeartOutline} />    </p> }            

           
            </div>

        </>
    )

}

export default LikeButton;