import React from 'react';

function Data(props) {
    console.log(props, "data render")
    return (
        <>
           <div>
              <h2>{props.followersData.followers}</h2> 
              <h2>{props.followersData.id}</h2> 
            <h2>{props.followersData.locataion}</h2>
           </div>
        </>
    );
};

export default Data;