import React from 'react'
import leftIcon from '../../images/icons-left.png'

const ThirdPage = () => {
    return (
        <>
            <div className='main-content'>
                <div className=''>
                    <img className='leftBack' src={leftIcon} alt='leftIcon'></img>
                </div>
                <div className='dropDown_Package'>
                    <label className="form-label">Package_Type</label>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Select Type</option>
                        <option value="">SD</option>
                        <option value="">HD</option>
                        <option value="">Normal</option>
                        <option value="">HD+</option>
                        <option value="">UHD</option>
                    </select>
                </div>
                <div className='listSpecification'>
                    <li>SD - Standred Defination/720p</li>
                    <li>HD - High Defination/2k</li>
                    <li>Normal - Normal Resolution</li>
                    <li>HD+ - High Defination/4k</li>
                    <li>UHD - Ultra High Defination/8k</li>
                </div>
                <div className='getStartBtn'>
                    <button className='getStartBtn_Btn'>Next</button>
                </div>
            </div>
        </>
    )
}

export default ThirdPage