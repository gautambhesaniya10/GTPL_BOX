import React, { useEffect, useState } from 'react'
import './home.css'
import LogoImage from '../../images/mask_img.png'
import leftIcon from '../../images/icons-left.png'
import HendLogo from '../../images/n.png'
import DatePicker from 'react-date-picker';
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { NextPage, PreviousPage, AddName, ContactNumber, packageType, packagePlane, startDate ,price } from '../../redux/Action'

const Home = () => {
    var letters = /^[A-Za-z/ /]+$/;
    const dispatch = useDispatch();
    const myCase = useSelector((state) => state)
    const [datePickervalue, setDatePickerValue] = useState(null);
    const [input, setInput] = useState(
        {
            name: "gautam",
            mobileNo: "9429914508"
        }
    );
    const [page, setPage] = useState(0)
    const [packagevalue, setPackagevalue] = useState("")
    const [packageplane, setPackageplane] = useState("")
    const [error, setError] = useState(
        {
            name: "",
            mobileNo: "",
            packageSelectType: "",
            packagePlaneSelectType: "",
            dateSelact: ""
        }
    );
    // eslint-disable-next-line no-unused-vars
    const [plane, setPlane] = useState([
        {
            Package_Type: "SD",
            price: 100
        },
        {
            Package_Type: "HD",
            price: 500
        },
        {
            Package_Type: "Normal",
            price: 200
        },
        {
            Package_Type: "HD+",
            price: 1000
        },
        {
            Package_Type: "UHD",
            price: 1500
        }
    ])
    const priceDispach = () => {
        // eslint-disable-next-line array-callback-return
        plane && plane.map((plane) => {
            if (plane.Package_Type === myCase.Package_Type) {
                dispatch(price(plane.price))
            }
        })
    }
    const setData = (state) => {
        setPage(state.Page)
    }
    useEffect(() => {
        myCase && setData(myCase)
    }, [myCase]);

    useEffect(() => {
        packagevalue && dispatch(packageType(packagevalue))
    },[dispatch, packagevalue]);

    const changeHendler = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value })

        if (name === 'name') {
            nameValidation(value);
        } else {
            numberValidation(value);
        }
    }
    const nameValidation = (value) => {
        if (!value) {
            setError({
                ...error,
                name: "Name is Requirded !"
            })
        }
        else if (!value.match(letters)) {
            setError({
                ...error,
                name: "Name is must be String !"
            })
        } else {
            setError({ ...error, name: "" })
        }
    }
    const numberValidation = (value) => {
        if (!value) {
            setError({
                ...error,
                mobileNo: "Mobile Number is Requirded !"
            })
        } else if (value.length !== 10) {
            setError({
                ...error,
                mobileNo: "Mobile Number must be 10 Degit !"
            })
        } else {
            setError({ ...error, mobileNo: "" })
        }
    }

    const Nextpage = () => {
        dispatch(NextPage(page))
    }
    const Previouspage = () => {
        dispatch(PreviousPage(page))
        DisplayPage()
    }

    const DropDownChangeler = (e) => {

        const { name, value } = e.target;

        if (name === "package_type") {
            if (!value) {
                setError({ ...error, packageSelectType: "Please Select PackageType" })
                setPackagevalue(value)
            } else {
                setPackagevalue(value)
                setError({ ...error, packageSelectType: "" })
                
            }
        }

    }
    const DropDownPlanChangeler = (e) => {
        const { name, value } = e.target;
        if (name === "package_plane") {

            if (!value) {
                setError({ ...error, packagePlaneSelectType: "Please Select PackageType" })
                setPackageplane(value)
            } else {
                setPackageplane(value)
                setError({ ...error, packagePlaneSelectType: "" })
            }
        }
    }
    const datePicker = (date) => {
        if (!date) {
            setError({ ...error, dateSelact: "Please Select date" })
            setDatePickerValue(date)
        } else {
            setError({ ...error, dateSelact: "" })
            setDatePickerValue(date)
        }
    }


    const packageTypeSubmit = () => {
        if (!packagevalue) {
            setError({ ...error, packageSelectType: "Please Select PackageType" })
        } else {
            priceDispach()
            Nextpage()
            DisplayPage()
        }
    }
    const packagePlaneSubmit = () => {
        if (!packageplane && !datePickervalue) {
            setError({ ...error, packagePlaneSelectType: "Please Select PackageType", dateSelact: "Please Select date" })

        } else if (!packageplane) {
            setError({ ...error, packagePlaneSelectType: "Please Select PackageType" })
        } else if (!datePickervalue) {
            setError({ ...error, dateSelact: "Please Select date" })
        }
        else {
            const getDate =  datePickervalue.getDate() + '-' + (datePickervalue.getMonth() + 1) + '-' + datePickervalue.getFullYear();
            dispatch(startDate(getDate))
            dispatch(packagePlane(packageplane))
            Nextpage()
            DisplayPage()
        }
    }

    const submitPage = () => {
        if (!input.name && !input.mobileNo) {
            setError({ name: "Name is Requirded !", mobileNo: "Mobile Number is Requirded !" })
        } else if (!input.name) { setError({ name: "Name is Requirded !" }) }
        else if (!input.mobileNo) { setError({ mobileNo: "Mobile Number is Requirded !" }) }
        else if (error.name || error.mobileNo) {
            return true
        }
        else {
            dispatch(AddName(input.name))
            dispatch(ContactNumber(input.mobileNo))
            Nextpage()
            DisplayPage()
        }
    }
    const DisplayPage = () => {

        switch (page) {
            case 1:
                return (
                    <>
                        <div className='main-content'>
                            <div className='imgLogo'>
                                <img style={{ marginTop: "10%" }} src={LogoImage} alt='logo'></img>
                            </div>
                            <div className='headerName'>
                                <h3>Welcome , User</h3>
                            </div>
                            <div className='listSpecification'>
                                <li>Company shall be liable to the Customer for any suspension or deactivation or termination of the
                                    Subscribed services in the accordance with the provisions of the CAF.</li>
                                <li> Company shall not be liable to the Customer of any acts or commissions on the Customer‟s part. </li>
                                <li>  Company takes no responsibility whatsoever for the content on the World Wide Web.</li>
                                <li> Company may suspend the service during technical failure modification or testing of the service
                                    network.</li>
                            </div>
                            <div className='getStartBtn'>
                                <button onClick={Nextpage} className='getStartBtn_Btn'>Get Started</button>
                            </div>
                        </div>
                    </>
                )
            case 2:
                return (
                    <>
                        <div className='main-content'>
                            <div className=''>
                                <img onClick={Previouspage} className='leftBack' src={leftIcon} alt='leftIcon'></img>
                            </div>

                            <div style={{ "padding": "20%" }}>
                                <div className="mb-3 inputField">
                                    <label className="form-label">Enter Name</label>
                                    <input type="text" name='name' value={input.name} onChange={changeHendler} className="form-control" placeholder="Enter Your Name" />
                                    <div className='errMsg'>{error.name !== "" && <p>{error.name}</p>}</div>
                                </div>
                                <div className="mb-3 inputField">
                                    <label className="form-label">Mobile No .</label>
                                    <input type="Number" name='mobileNo' value={input.mobileNo} onChange={changeHendler} className="form-control" placeholder="Enter Your Number" />
                                    <div className='errMsg'>{error.mobileNo !== "" && <p>{error.mobileNo}</p>}</div>

                                </div>
                            </div>
                            <div className='getStartBtn'>
                                <button onClick={submitPage} className='getStartBtn_Btn'>Next</button>
                            </div>
                        </div>
                    </>
                )
            case 3:
                return (
                    <>
                        <div className='main-content'>
                            <div className=''>
                                <img onClick={Previouspage} className='leftBack' src={leftIcon} alt='leftIcon'></img>
                            </div>
                            <div className='dropDown_Package'>
                                <label className="form-label">Package_Type</label>
                                <select className="form-select" value={packagevalue} name="package_type" onChange={DropDownChangeler} aria-label="Default select example">
                                    <option value="">Select Type</option>
                                    <option value="SD">SD</option>
                                    <option value="HD">HD</option>
                                    <option value="Normal">Normal</option>
                                    <option value="HD+">HD+</option>
                                    <option value="UHD">UHD</option>
                                </select>
                                <div className='errMsg'>{error.packageSelectType !== "" && <p>{error.packageSelectType}</p>}</div>
                            </div>
                            <div className='listSpecification'>
                                <li>SD - Standred Defination/720p</li>
                                <li>HD - High Defination/2k</li>
                                <li>Normal - Normal Resolution</li>
                                <li>HD+ - High Defination/4k</li>
                                <li>UHD - Ultra High Defination/8k</li>
                            </div>
                            <div className='getStartBtn'>
                                <button onClick={packageTypeSubmit} className='getStartBtn_Btn'>Next</button>
                            </div>
                        </div>
                    </>
                )
            case 4:
                return (
                    <>
                        <div className='main-content'>
                            <div className=''>
                                <img onClick={Previouspage} className='leftBack' src={leftIcon} alt='leftIcon'></img>
                            </div>
                            <div className='datePicker'>
                                <label className="form-label">Start Date</label>
                                <DatePicker
                                    onChange={datePicker}
                                    value={datePickervalue}
                                    format='dd/MM/yyyy'
                                    minDate={new Date()}
                                    maxDate={new Date()}
                                    name="selectDate"
                                />
                                <div className='errMsg'>{error.dateSelact !== "" && <p>{error.dateSelact}</p>}</div>
                            </div>


                            <div className='dropDown_Package'>
                                <label className="form-label">Package Plane</label>
                                <select value={packageplane} name="package_plane" onChange={DropDownPlanChangeler} className="form-select" aria-label="Default select example">
                                    <option value="">Select Plane</option>
                                    <option value="1-Month">1-Month</option>
                                    <option value="3-Month">3-Month</option>
                                    <option value="6-Month">6-Month</option>
                                    <option value="1-Year">1-Year</option>
                                </select>
                                <div className='errMsg'>{error.packagePlaneSelectType !== "" && <p>{error.packagePlaneSelectType}</p>}</div>
                            </div>
                            <div className='d-flex m-4 mt-2' style={{ 'padding': '15%' }}>
                                <div className='mb-3 mt-5'>
                                    <label className='form-label mx-4 mb-0 font'>Plane</label><br />
                                    <label className='form-label mx-4 mb-0 font'>1 - Month</label><br />
                                    <label className='form-label mx-4 mb-0 font'>3 - Month</label><br />
                                    <label className='form-label mx-4 mb-0 font'>6 - Month</label><br />
                                    <label className='form-label mx-4 mb-0 font'>1 Year</label><br />
                                </div>
                                <div className='mb-3 mt-5'>
                                    <label className='form-label mx-4 mb-0 font'>Price</label><br />
                                    <label className='form-label mx-4 mb-0 font'>250</label><br />
                                    <label className='form-label mx-4 mb-0 font'>625</label><br />
                                    <label className='form-label mx-4 mb-0 font'>1000</label><br />
                                    <label className='form-label mx-4 mb-0 font'>1750</label><br />
                                </div>
                            </div>
                            <div className='getStartBtn'>
                                <button onClick={packagePlaneSubmit} className='getStartBtn_Btn'>CONFIRM</button>
                            </div>
                        </div>
                    </>
                )
            case 5:
                return (
                    <>
                        <div className='main-content'>
                            <div className='hendLogo'>
                                <img className='' src={HendLogo} alt='hendLogo'></img>
                            </div>
                            <div className='headerName'>
                                <h3>Thank You</h3>
                            </div>
                            <div className='d-flex m-4 mt-2' style={{"padding" : "15% 0px 20% 10%"}}>
                                <div className='mb-3 mt-5'>
                                    <label className='form-label mx-4 mb-0 font'>Name</label><br />
                                    <label className='form-label mx-4 mb-0 font'>Packege_Type</label><br />
                                    <label className='form-label mx-4 mb-0 font'>Start_Date</label><br />
                                    <label className='form-label mx-4 mb-0 font'>Packege_Plane</label><br />
                                    <label className='form-label mx-4 mb-0 font'>Price</label><br />
                                </div>
                                <div className='mb-3 mt-5'>
                                    <label className='form-label mx-4 mb-0 font'>{myCase.Name}</label><br />
                                    <label className='form-label mx-4 mb-0 font'>{myCase.Package_Type}</label><br />
                                    <label className='form-label mx-4 mb-0 font'>{myCase.Start_Date}</label><br />
                                    <label className='form-label mx-4 mb-0 font'>{myCase.Package_Plane}</label><br />
                                    <label className='form-label mx-4 mb-0 font'>{myCase.Price}</label><br />
                                </div>
                            </div>
                        </div>
                    </>
                );
            default:
                break;
        }
    }

    return (
        <>
            <div>{DisplayPage()}</div>
        </>
    )
}

export default Home