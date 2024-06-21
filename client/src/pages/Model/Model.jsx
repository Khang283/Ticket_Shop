import React from 'react';
import perf from './model.html';

function Model() {
    return (
        <>
            <iframe src={perf} style={{ width: '100%', height: '100vh', border: 'none' }} title="Performance"></iframe>
        </>
    )
}


export default Model;