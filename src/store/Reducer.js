import * as TYPES from './Type'


var initialState = {
    cart : [],
    my_orders : []
}

const Reducer = (state = initialState, actions) => {
    switch (actions.type){
        case TYPES.ADD_TO_CART:
            return {
                ...state,
                cart: [
                    ...state.cart,
                    {
                        ...actions.payload,
                        QTY : 1,
                    }
                ]  
            }
    }
}

export default Reducer