import React, { useState } from 'react';

function Room(){

    const [isLit, setLit] = useState(false);

    return(
        <div>
           <h1> The room is {isLit ? 'lit' : 'dark'} </h1>
            <br/>
            <button onClick={()=> setLit(!isLit)}>Flip</button>
        </div>
    );
}

export default Room;