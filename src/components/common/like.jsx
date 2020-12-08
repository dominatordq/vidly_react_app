import React from 'react';

// Responsible for rendering an empty or full heart
// Input: liked: boolean
// Output: onClick

// Stateless Functional Component
const Like = props => {
    let classes = "fa fa-heart";
    if (!props.liked) classes += "-o"
    
    return ( <i 
        onClick={props.onClick} 
        style={{ cursor: "pointer" }} 
        className={classes} 
        aria-hidden="true"
        /> );
}
 
export default Like;