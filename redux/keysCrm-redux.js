
import cl from '../src/style/KeysMainCrm.module.css';

const initialState = [{
    id:1,
    descr: 'Разработка индивидуальной CRM-системы',  
    href: '/crm-system', img: {
        background: '#E50A0B', 
        alt: 'Индивидуальная CRM-система разработанная для компании "LLumar"',
        image: 'keys-crm-red.svg',
        classesImg: cl.crmLlumarImg,
        logo: 'keys-crm-logo.svg',
        logoClasses: cl.crmlogo,
    },id:1
}]

const keysCrmReducer = (state= initialState, action) => {
    switch (action.type) {
        case 'ADD_CRM_KEYS_ELEMENT': {
            return [...state, {...state[state.length-1],id:  state.length+1}]
        }
        case 'DELETE_CRM_KEYS_ELEMENT': {
            return state.filter(e=>e.id != action.info.id)
        }
        case 'BACKGROUND_CRM_KEYS_CHANGE': {
            return state.map(e=> e.id == action.info.id ? {...e, img: {...e.img, background: action.info.text}} : e)
        }
        case 'ALT_CRM_KEYS_CHANGE': {
            return state.map(e=> e.id == action.info.id ? {...e, img: {...e.img, alt: action.info.text}} : e)
        }
        case 'IMG_CRM_KEYS_CHANGE': {
            return state.map(e=> e.id == action.info.id ? {...e, img: {...e.img, image: action.info.text}} : e)
        }
        case 'LOGO_CRM_KEYS_CHANGE': {
            return state.map(e=> e.id == action.info.id ? {...e, img: {...e.img, logo: action.info.text}} : e)
        }
        case 'HREF_CRM_KEYS_CHANGE': {
            return state.map(e=> e.id == action.info.id ? {...e, href: action.info.text} : e)
        }
        case 'DESCR_CRM_KEYS_CHANGE': {
            return state.map(e=> e.id == action.info.id ? {...e, descr: action.info.text} : e)
        }
        default: 
            return state
    }
}

export const keysCrmAddElement = (info)=>({
    type: 'ADD_CRM_KEYS_ELEMENT', info
})
export const keysCrmDeleteElement = (info)=>({
    type: 'DELETE_CRM_KEYS_ELEMENT', info
})
export const keysCrmBackChange = (info)=>({
    type: 'BACKGROUND_CRM_KEYS_CHANGE', info
})
export const keysCrmAltChange = (info)=>({
    type: 'ALT_CRM_KEYS_CHANGE', info
})
export const keysCrmLogoChange = (info)=>({
    type: 'LOGO_CRM_KEYS_CHANGE', info
})
export const keysCrmImgChange = (info)=>({
    type: 'IMG_CRM_KEYS_CHANGE', info
})
export const keysCrmHrefChange = (info)=>({
    type: 'HREF_CRM_KEYS_CHANGE', info
})
export const keysCrmDescrChange = (info)=>({
    type: 'DESCR_CRM_KEYS_CHANGE', info
})



export default keysCrmReducer