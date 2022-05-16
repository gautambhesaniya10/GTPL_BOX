import React from 'react'
import './home.css'
import leftIcon from '../../images/icons-left.png'

const SecondPage = () => {
    return (
        <>
            <div className='main-content'>
                <div className=''>
                    <img className='leftBack' src={leftIcon} alt='leftIcon'></img>
                </div>

                <div style={{"padding" : "20%"}}>
                <div className="mb-3 inputField">
                    <label className ="form-label">Enter Name</label>
                    <input type="email" className="form-control" placeholder="Enter Your Name" />
                </div>
                <div className="mb-3 inputField">
                    <label className ="form-label">Mobile No .</label>
                    <input type="number" className="form-control" placeholder="Enter Your Number" />
                </div>
                </div>
                <div className='getStartBtn'>
                    <button className='getStartBtn_Btn'>Next</button>
                </div>
            </div>
        </>
    )
}

export default SecondPage