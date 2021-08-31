import React from 'react';

const Footer = () => {
    return(
        <div className="fixed-bottom"
        style={{
            backgroundColor: '#f8f8ff',
            color:'#313133',
            padding: '0.5rem'}} >
            <p style={
                { marginTop: '0.5rem'}
            }>&copy;2021 Website Created by: Jessica Shelley</p>
        </div>
    )
}

export default Footer