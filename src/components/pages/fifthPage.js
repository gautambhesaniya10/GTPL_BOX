import React from 'react'
import HendLogo from '../../images/n.png'
import './home.css'

const FifthPage = () => {
    return (
        <>
            <div className='main-content'>
                <div className='hendLogo'>
                    <img className='' src={HendLogo} alt='hendLogo'></img>
                </div>
                <div className='headerName'>
                    <h3>Thank You</h3>
                </div>
                <div className='d-flex m-4 mt-2' style={{'padding' : '15%'}}>
                    <div className='mb-3 mt-5'>
                        <label className='form-label mx-4 mb-0 font'>Name</label><br />
                        <label className='form-label mx-4 mb-0 font'>Packege_Type</label><br />
                        <label className='form-label mx-4 mb-0 font'>Start_Date</label><br />
                        <label className='form-label mx-4 mb-0 font'>Packege_Plane</label><br />
                        <label className='form-label mx-4 mb-0 font'>Price</label><br />
                    </div>
                    <div className='mb-3 mt-5'>
                        <label className='form-label mx-4 mb-0 font'>Name</label><br />
                        <label className='form-label mx-4 mb-0 font'>Packege_Type</label><br />
                        <label className='form-label mx-4 mb-0 font'>Start_Date</label><br />
                        <label className='form-label mx-4 mb-0 font'>Packege_Plane</label><br />
                        <label className='form-label mx-4 mb-0 font'>Price</label><br />
                    </div>
                </div>


            </div>
        </>
    )
}

export default FifthPage