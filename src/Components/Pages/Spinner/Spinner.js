import React from 'react';
import Header from '../../Shared/Header/Header';
import './../ProductView/ProductView.css';
const Spinner = () => {
    return (
        <> <Header />
                <div className="d-flex justify-content-center mt-5 product-view-loading ">
                    <svg width="200" height="200" viewBox="0 0 100 100">
                        <polyline class="line-cornered stroke-still" points="0,0 100,0 100,100" stroke-width="10" fill="none"></polyline>
                        <polyline class="line-cornered stroke-still" points="0,0 0,100 100,100" stroke-width="10" fill="none"></polyline>
                        <polyline class="line-cornered stroke-animation" points="0,0 100,0 100,100" stroke-width="10" fill="none"></polyline>
                        <polyline class="line-cornered stroke-animation" points="0,0 0,100 100,100" stroke-width="10" fill="none"></polyline>
                    </svg><svg width="200" height="200" viewBox="0 0 100 100">
                        <polyline class="line-cornered stroke-still" points="0,0 100,0 100,100" stroke-width="10" fill="none"></polyline>
                        <polyline class="line-cornered stroke-still" points="0,0 0,100 100,100" stroke-width="10" fill="none"></polyline>
                        <polyline class="line-cornered stroke-animation" points="0,0 100,0 100,100" stroke-width="10" fill="none"></polyline>
                        <polyline class="line-cornered stroke-animation" points="0,0 0,100 100,100" stroke-width="10" fill="none"></polyline>
                    </svg>

                </div>
                
            </>
    );
};

export default Spinner;