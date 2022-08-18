

const initialState = {
    isAdmin: true,
}

export function isAdminReducer (state = initialState, action) {
    switch (action.type) {
        case 'IS_ADMIN_TRUE': {
            return {...state, isAdmin: true}
        }
        case 'IS_ADMIN_FALSE': {
            return {...state, isAdmin: false}
        }
    
        default:
            return state
    }
}


export const isAdminTruth = (value)=>({
    type: 'IS_ADMIN_TRUE', value
})


export const isAdminFalse = (value)=>({
    type: 'IS_ADMIN_FALSE', value
})