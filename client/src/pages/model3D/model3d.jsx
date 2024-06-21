import React from 'react';

import perf from './model3d.html';

function Model3d() {
    return (
        <>
            <iframe src={perf} style={{ width: '100%', height: '100vh', border: 'none' }} title="Performance"></iframe>
        </>
    )
}


export default Model3d;