import React from 'react';
import Data from "./Followers"
const DataList = (props) => {
    console.log(props.data)
    return (
        <div>
            <h2>{props.data.login}</h2>
           <h2>{props.data.name}</h2> 
           <h2>{props.data.url}</h2> 
        </div>
    );
};

export default DataList;