import React from 'react'
import Star from './Star';
function StarRating() {
    const rate=3;
    const total=5;
    return (
        <div>
            <Star
                count={rate}
                total={total}
            />
        </div>
    )
}

export default StarRating
