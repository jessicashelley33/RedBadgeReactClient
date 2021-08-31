import React from 'react';
import NavbarAdmin from '../Admin/NavBarAdmin';
import Footer from '../Footer';
import fanImage from '../../assests/fanImg.jpg';
//<a href="https://www.vecteezy.com/free-vector/chinese-fan">Chinese Fan Vectors by Vecteezy</a>


const ContactAdmin = () => {
    return (
        <div>
            <NavbarAdmin />
            <img src={fanImage} alt='fanImg' className='' />
            <h1 className='text-center mb-5 mt-3'
            style={{
            fontSize: '80px',
                color:'#587644',
                textShadow: '-1px 0 #496239, 0 1px #496239, 1px 0 #496239, 0 -1px #496239'}}>
                    
                    Contact Us
                    
                    </h1>
                    
           <div className="container">
                <div className="row">
                    <div className="col"
                    style={{
                        width: '790px'
                    }}
                    >
                    <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Full Name</label>
                </div>
                 </div>
                </div>
                <div className="row">
                    <div className="col"
                    style={{
                        width: '790px'
                    }}
                    >
                    <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Email address</label>
                </div>
                 </div>
                </div>
                <div className='row'>
                    <div className='col'
                    style={{
                        width: '790px'
                    }}
                    >
                    <div class="form-floating">
            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{
                height:'200px'
            }}></textarea>
            <label for="floatingTextarea2">Comments</label>
            </div>
                    </div>
                </div>
                <div className='d-grid gap-2'>
                <button class="btn btn-outline-success mt-5 btn-lg" type="button"
                style={{
                    paddingLeft: '200px',
                    paddingRight: '200px'
                }}
                >Submit Form</button>
                </div>
                 
                
            </div>
            
                    
                    
            <Footer />
        </div>
    )
}

export default ContactAdmin;