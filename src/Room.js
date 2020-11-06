import React from 'react';

function Room(){

    const [isLit, setLit] = React.useState(false);

    return(
        <div>
            The room is {isLit ? 'lit' : 'dark'}
        </div>
    );
}

export default Room;