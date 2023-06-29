import React, { useEffect, useState } from 'react';
import { getData } from '../utils/data';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export default function Appetizers() {
    useEffect(() => {
        let data = getData;
        console.log(data);
    }, []);

    return (
        <div className='container text-center text-color'>
            <h2>Appetizers</h2>
            <div className='row'>
                <div className='col'>asdf</div>
                <div className='col'>asdf</div>
                <div className='col'>asfd</div>
            </div>
            <div className='row'>
                <div className='col'>asdf</div>
                <div className='col'>asdf</div>
                <div className='col'>asdf</div>
            </div>
            <div className='row'>
                <div className='col'>asfd</div>
                <div className='col'>asdf</div>
                <div className='col'>asdf</div>
            </div>
        </div>
    );
}