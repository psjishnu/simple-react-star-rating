import React from "react";
const STAR = require('./images/star.png');
const SELECTED_STAR = require('./images/selstar.png');
function Rating({ count , total }) {
    const rating = [];
    var i = 0;
    for (i = 0; i < count; i++) {
        rating.push(<img src={SELECTED_STAR} alt="*"/>);
    }
    for (i = 0; i < total - count; i++) {
        rating.push(<img src={STAR} alt=""/>);
    }
    return (<div className="flex flex-row h-1/2  mt-0 w-1/2">{rating}
    
            
    </div>
    
    
    );
}

export default Rating;
