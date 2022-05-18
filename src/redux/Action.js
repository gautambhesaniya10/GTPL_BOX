import { NEXT_PAGE , PREVIOUS_PAGE , ADD_NAME , CONTACT_NUMBER, PACKAGE_TYPE, PACKAGE_PLANE, START_DATE, PRICE_TYPE, TOTEL_PRICE } from "./AllType";

export const NextPage = (payload) => {
    return{
        type : NEXT_PAGE,
        payload
    }
}

export const PreviousPage = (payload) => {
    return{
        type : PREVIOUS_PAGE,
        payload
    }
}

export const  AddName = (payload) => {
    return{
        type : ADD_NAME,
        payload 
    }
}
export const  ContactNumber = (payload) => {
    return{
        type : CONTACT_NUMBER,
        payload 
    }
}

export const packageType = (payload) => {
    return {
        type : PACKAGE_TYPE,
        payload
    }
}
export const packagePlane = (payload) => {
    return {
        type : PACKAGE_PLANE,
        payload
    }
}

export const startDate = (payload) => {
    return {
        type : START_DATE,
        payload
    }
}

export const price = (payload) => {
    return{
        type : PRICE_TYPE,
        payload
    }
}

export const totelPrice = (payload) => {
    return{
        type : TOTEL_PRICE,
        payload
    }
}