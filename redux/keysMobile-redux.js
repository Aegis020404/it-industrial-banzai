import cl from '../src/style/KeysMainMobile.module.css';



const initialState = [{
            descr: 'Перевозки App',
            href:'/carriage-app',
            img: {
                background:'#2F80EC',
                image: 'keys-phones-blue.svg',
                alt:'Сайт компании на мобильных устройствах',
                classesImg: cl.mobilaAppImg,
                logo: 'keys-mobile-logo.svg',
                logoClasses: cl.mobileLogo,
            }, 
            id: 1
        }
    ]

const keysMobileReducer = (state= initialState, action) => {
    switch (action.type) {
        case 'ADD_MOBILE_ELEMENT': {
            return [...state, {...state[state.length-1],id:  state.length+1}]
        }
        case 'DELETE_MOBILE_ELEMENT': {
            return state.filter(e=>e.id != action.info.id)
        }
        case 'BACKGROUND_MOBILE_CHANGE': {
            return state.map(e=> e.id == action.info.id ? {...e, img: {...e.img, background: action.info.text}} : e)
        }
        case 'ALT_MOBILE_CHANGE': {
            return state.map(e=> e.id == action.info.id ? {...e, img: {...e.img, alt: action.info.text}} : e)
        }
        case 'IMG_MOBILE_CHANGE': {
            return state.map(e=> e.id == action.info.id ? {...e, img: {...e.img, img: action.info.text}} : e)
        }
        case 'LOGO_MOBILE_CHANGE': {
            return state.map(e=> e.id == action.info.id ? {...e, img: {...e.img, logo: action.info.text}} : e)
        }
        case 'HREF_MOBILE_CHANGE': {
            return state.map(e=> e.id == action.info.id ? {...e, href: action.info.text} : e)
        }
        case 'DESCR_MOBILE_CHANGE': {
            return state.map(e=> e.id == action.info.id ? {...e, descr: action.info.text} : e)
        }
        default: 
            return state
    }
}

export const keysMobileAddElement = (info)=>({
    type: 'ADD_MOBILE_ELEMENT', info
})
export const keysMobileDeleteElement = (info)=>({
    type: 'DELETE_MOBILE_ELEMENT', info
})
export const keysMobileBackChange = (info)=>({
    type: 'BACKGROUND_MOBILE_CHANGE', info
})
export const keysMobileAltChange = (info)=>({
    type: 'ALT_MOBILE_CHANGE', info
})
export const keysMobileImgChange = (info)=>({
    type: 'IMG_MOBILE_CHANGE', info
})
export const keysMobileLogoChange = (info)=>({
    type: 'LOGO_MOBILE_CHANGE', info
})
export const keysMobileHrefChange = (info)=>({
    type: 'HREF_MOBILE_CHANGE', info
})
export const keysMobileDescrChange = (info)=>({
    type: 'DESCR_MOBILE_CHANGE', info
})



export default keysMobileReducer