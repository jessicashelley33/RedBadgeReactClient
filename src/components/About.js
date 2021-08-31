import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import AboutImgOne from '../assests/aboutImgOne.jpg'
//<a href="https://www.vecteezy.com/free-vector/chinese-fan">Chinese Fan Vectors by Vecteezy</a>
import AboutImgTwo from '../assests/roseImg.jpg';

const About = () => {
    return (
        <div>
            <NavBar />
            <h1 className='text-center mt-5 lead'
            style={{
                fontSize: '78px',
                color:'#587644',
                textShadow: '-1px 0 #496239, 0 1px #496239, 1px 0 #496239, 0 -1px #496239'

            }}
            >Our Mission</h1>
            <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-sm-12 col-md-6">
                    <p className='lead lh-base text-start'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p className='lead lh-base text-start'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                
                </div>
                <div className="col-sm-12 col-md-6">
            <img src={AboutImgOne} clasName='img-fluid' alt='' />
                </div>
               
            </div>
            <div className="row mt-5">
                <div className="col-sm-12 col-md-6">
                    <div>
                    <img src={AboutImgTwo} clasName='img-fluid' alt='' />
                    </div>
                 </div>
                <div className="col-sm-12 col-md-6">
                <p className='lead lh-base text-start'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p className='lead lh-base text-start'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
               
            </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;