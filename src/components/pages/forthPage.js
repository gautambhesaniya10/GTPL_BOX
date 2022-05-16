import React from 'react'
import leftIcon from '../../images/icons-left.png'
import './home.css'

const ForthPage = () => {
    return (
        <>
            <div className='main-content'>
                <div className=''>
                    <img className='leftBack' src={leftIcon} alt='leftIcon'></img>
                </div>
                <div className='datePicker'>
                    <label className="form-label">Start Date</label>
                    <input type="date" id="" name="" />
                </div>
                <div className='dropDown_Package'>
                    <label className="form-label">Package Plane</label>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Select Plane</option>
                        <option value="">1-Month</option>
                        <option value="">3-Month</option>
                        <option value="">6-Month</option>
                        <option value="">1-Year</option>
                    </select>
                </div>
                <div className='planeDiv'>
                        <label className='form-label mx-4 mb-0 font'>Plane</label>
                        <label className='form-label mx-5 mb-0 font'>Price</label><br />
                        <label className='form-label mx-4 mb-0 font'>1-Month</label>
                        <label className='form-label mx-4 mb-0 font'>250</label><br />
                        <label className='form-label mx-4 mb-0 font'>1-Month</label>
                        <label className='form-label mx-4 mb-0 font'>250</label><br />
                        <label className='form-label mx-4 mb-0 font'>1-Month</label>
                        <label className='form-label mx-4 mb-0 font'>250</label><br />
                        <label className='form-label mx-4 mb-0 font'>1-Month</label>
                        <label className='form-label mx-4 mb-0 font'>250</label><br />
                    </div>
                <div className='getStartBtn'>
                    <button className='getStartBtn_Btn'>CONFIRM</button>
                </div>
            </div>
        </>
    )
}

export default ForthPage