import { BUY_ICECREAM } from "./IceCreamType"

const initialState = {
    NumberOfIceCream : 20
}

const iceCreamReducer = (state= initialState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            ...state,
            NumberOfIceCream: state.NumberOfIceCream - 1
        }
        default : return state
    }
}

export default iceCreamReducer