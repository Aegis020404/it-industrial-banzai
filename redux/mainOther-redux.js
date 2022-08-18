
const initialState =  [{title: 'SEO-продвижение', img: 'circle-cubs.png', id:1},
{title: 'SMM', img: 'circle-phone.png', id:2},
{title: 'Аналитика сайта', img: 'circle-mac.png', id:3},
{title: 'Аудит сайта', img: 'circle-contract.png', id:4}]


const MainOtherReducer = (state = initialState,action)=>{
    switch (action.type) {
        case 'OTHER_ITEM_TITLE_CHANGE': {
            return state.map(e=>e.id === action.info.id ? {...e, title: action.info.text} : e)
        }
        case 'OTHER_ITEM_IMG_CHANGE': {
            return state.map(e=>e.id === action.info.id ? {...e, img: action.info.text} : e)
        }
        case 'OTHER_ADD_ITEM': {
            return [...state, {...state[state.length-1], id: state.length+1}]
        }
        case 'OTHER_DELETE_ITEM' : {
            return state.filter((e,i)=> e.id !== action.info.id)
        }
        default:
           return state
    }
}

export const otherTitleChange = (info) => ({
    type: 'OTHER_ITEM_TITLE_CHANGE', info
})
export const otherImgChange = (info) => ({
    type: 'OTHER_ITEM_IMG_CHANGE', info
})
export const otherAddElement = (info) => ({
    type: 'OTHER_ADD_ITEM', info
})
export const otherDelteElement = (info) => ({
    type: 'OTHER_DELETE_ITEM', info
})


export default MainOtherReducer