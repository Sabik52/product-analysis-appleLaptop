import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className='container'>
            <div className="left-content">
                    <h1>8-Core CPU <br />Devours tasks.</h1>
                   
                    <p>The 8‑core CPU on M1 isn’t just up to 3.5x faster than the previous generation2 — it balances high-performance cores with efficiency cores that crush everyday jobs while using just a tenth of the power. With that kind of processing speed, MacBook Air can take on new extraordinarily intensive tasks like professional-quality editing and action-packed gaming.</p>
                    <button >More Details</button>
            
            </div>
            <div className="image">
                <img src='https://i.pinimg.com/originals/c5/95/c9/c595c9dc092cb7fbfecedde02a6952ae.png' alt="" />
            </div>
        </div>
       
    );
};

export default Home;