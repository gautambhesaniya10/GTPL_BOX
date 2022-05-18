import { ADD_NAME, CONTACT_NUMBER, NEXT_PAGE , PACKAGE_PLANE, PACKAGE_TYPE, PREVIOUS_PAGE, PRICE_TYPE, START_DATE, TOTEL_PRICE } from "./AllType";
import { initialState } from "./intialState";

const pageReducer = (state=initialState , action) => {
    let page = 0;
    let name = ""
    let contactNumber = ""
    let packageType = ""
    let packagePlane = ""
    let startDate = ""
    let price = ""
    let totelPrice = ""

    switch(action.type){
        case NEXT_PAGE :
            page = action.payload + 1 
        return {
            ...state,
            Page: page
        }
        
        case PREVIOUS_PAGE :
            page = action.payload - 1 
            return  {
                ...state,
                Page: page
            }
            case ADD_NAME :
                name = action.payload
                return {
                    ...state,
                    Name : name
                }
                case  CONTACT_NUMBER :
                    contactNumber = action.payload
                    return {
                        ...state,
                        Contact : contactNumber
                    }
                    case PACKAGE_TYPE :
                        packageType = action.payload
                        return{
                            ...state,
                            Package_Type : packageType
                        }
                    case PACKAGE_PLANE :
                        packagePlane = action.payload
                        return{
                            ...state,
                            Package_Plane : packagePlane
                        }
                        case START_DATE :
                            startDate = action.payload
                            return{
                                ...state,
                                Start_Date : startDate
                            }
                            case PRICE_TYPE :
                                price = action.payload
                                return{
                                    ...state,
                                    Price : price
                                }
                                case TOTEL_PRICE :
                                    totelPrice = action.payload
                                    return{
                                        ...state,
                                        Totel_Price : totelPrice
                                    }
        default :
         return state
    }
}

export default pageReducer;