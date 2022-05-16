import { ADD_DATA } from "./AllType";
import { initialState } from "./intialState";

// const initialState = {
//     list: []
// }

const addDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DATA:
            const { data } = action.payload;
            console.log("data---------",data);
            return {
                ...state,
                data
                
            }
            default :
            return state
    }
}

export default addDataReducer;
