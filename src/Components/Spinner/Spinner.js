import React from 'react';
import './Spinner.css';

const Spinner = () => {
    return (
        <div>
             <div className="d-flex justify-content-center product-view-loading  " style={{marginTop:'100px'}}>
                    <svg width="200" height="200" viewBox="0 0 100 100">
                        <polyline className="line-cornered stroke-still" points="0,0 100,0 100,100" strokeWidth="10" fill="none"></polyline>
                        <polyline className="line-cornered stroke-still" points="0,0 0,100 100,100" strokeWidth="10" fill="none"></polyline>
                        <polyline className="line-cornered stroke-animation" points="0,0 100,0 100,100" strokeWidth="10" fill="none"></polyline>
                        <polyline className="line-cornered stroke-animation" points="0,0 0,100 100,100" strokeWidth="10" fill="none"></polyline>
                    </svg><svg width="200" height="200" viewBox="0 0 100 100">
                        <polyline className="line-cornered stroke-still" points="0,0 100,0 100,100" strokeWidth="10" fill="none"></polyline>
                        <polyline className="line-cornered stroke-still" points="0,0 0,100 100,100" strokeWidth="10" fill="none"></polyline>
                        <polyline className="line-cornered stroke-animation" points="0,0 100,0 100,100" strokeWidth="10" fill="none"></polyline>
                        <polyline className="line-cornered stroke-animation" points="0,0 0,100 100,100" strokeWidth="10" fill="none"></polyline>
                    </svg>

                </div>
        </div>
    );
};

export default Spinner;
