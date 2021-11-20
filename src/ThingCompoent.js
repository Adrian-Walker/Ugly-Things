import React, { useState } from 'react';
import './style.css';

const ThingCompoent = ({ thing, onDeleteThing }) => {
    return (
        <div className="thing-container">
            <img src={thing.imgUrl} />
            <div>{thing.title}</div>
            <div>{thing.description}</div>
            <div className="thing-footer">
                <button onClick={() => { onDeleteThing(thing._id) }}>Delete</button>
            </div>
        </div>
    )
}

export default ThingCompoent;
