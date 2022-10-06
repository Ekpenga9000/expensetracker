import React from 'react';
import { IoCalendarOutline } from "react-icons/io5";
import './Home.css';

const Home = ({ data }) => {
    
    let total = data.map(item => item.Total.substr(1)).reduce((prev, next) => parseFloat(prev) + parseFloat(next));
        total = total.toFixed()
    const entries = data.length

    return (
        <div>
            <div className='totalDiv'>
                <h1>Total: ${total}</h1>
                <h3>Entries: {entries}</h3>
            </div>

            <div className='dataDiv'>
                {data.map((item) => {
                    return (
                        <div key={item.id} className="item-divs">
                            <div className='calender-Div'>
                                <span><IoCalendarOutline className="pink" /></span> 
                                <span>{item.Date}</span>
                            </div>
                            <h2>{item.Merchant}</h2>
                            <p>{item.Total}</p>
                            <small>{item.Status}</small>
                            <p>{item.Comment}</p>
                        </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default Home;