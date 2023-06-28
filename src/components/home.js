import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return(
        <div className='home'>
            <div className='header'></div>
            <div className='intro' >
                <div className='text'>
                    <h1 className='welcome'>Discover<br/> Your<br/> Academic<br/> Oasis at <br/></h1><h1 className='welcome-II'>Info🌎asis</h1>
                </div>
                <div className='image'></div>
            </div>
            <div className='heading-links'>
                <h3>📌 Department / Year</h3>
            </div >
            <div className='list-links'>
                <div className='links'>
                    <p>CSE</p>
                    <Link to="" className="cse link">1</Link>
                    <Link to="" className="cse link">2</Link>
                    <Link to="" className="cse link">3</Link>
                    <Link to="" className="cse link">4</Link>
                </div>
                <div className='links'>
                    <p>ECE</p>
                    <Link to="" className="ece link">1</Link>
                    <Link to="" className="ece link">2</Link>
                    <Link to="" className="ece link">3</Link>
                    <Link to="" className="ece link">4</Link>
                </div>
                <div className='links'>
                    <p>IT</p>
                    <Link to="" className="it link">1</Link>
                    <Link to="" className="it link">2</Link>
                    <Link to="" className="it link">3</Link>
                    <Link to="" className="it link">4</Link>
                </div>
            </div>
            <div className='home-contact'>
                <h3>Have Questions or Need Study Recommendations?</h3>
                <p>We're Here to Help! Reach Out Now and Let Us Assist You in Finding the Perfect Study Resources!</p>
                <button>CONTACT US</button>
            </div>
        </div>
    )
};

export default Home;