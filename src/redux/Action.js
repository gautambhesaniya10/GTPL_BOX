import { NEXT_PAGE , PREVIOUS_PAGE , ADD_NAME , CONTACT_NUMBER, PACKAGE_TYPE, PACKAGE_PLANE, START_DATE, PRICE_TYPE } from "./AllType";

export const NextPage = (payload) => {
    console.log("payloadd",payload);
    // console.log("paylod",payload);
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
