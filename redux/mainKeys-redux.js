
import cl from '../src/style/MainKeys.module.css';




const initialState = 
    [{  
        id: 1,
        count: 2,
        info: [{
            
            id:1,
            href: 'stroy-mat',
            descr: 'Интернет-магазин «Строймат»',
            classes: cl.imgPhone,
            backColor: '',
            img: ['orange-phone-block.jpg'],
            alt: 'Website компании "Строймат" на телефоне'
        }, {
            
            id:2,
            href: 'avto-estetica',
            descr: 'Интернет-магазин «Автоэстетика»',
            classes: cl.imgAmout,
            backColor: '',
            img: ['black-gadjets-block.jpg'],
            alt: 'Website компании "Автоэстетика" на телефоне и ноутбуке'
        }]
    }, {
        id: 2,
        count: 1,

        info: [{
            
            id:1,
            href: 'llumar',
            descr: 'Сайт компании «Llumar»',
            backColor: '#F8F8F9',
            classes: [cl.imgPad, cl.imgPadM],
            img: ['pad-keys.png', 'pad-mobile.jpg'],
            alt: 'Website компании "Llumar" на планшете'
        }]
    }, {
        id: 3,
        count: 2,
        info: [{
            
            id:1,
            href: 'ecovtor',
            descr: 'Разработка сайта компании «Эковтор»',
            classes: cl.imgEva,
            backColor: '#EFF2ED',
            img: ['logo-evo.svg', 'female-sort.png', 'eko-mobile.jpg'],
            alt: '"Ековтор" - экологически чистая компания, спасает природу, перерабатывая бумагу, пластик, пластмассы'
        }, {
            id:2,
            href: 'hock-team',
            descr: 'Сайт для хоккейной команды',
            classes: cl.imgMiniPad,
            backColor: '#07315E',
            img: ['pad-hockey.png'],
            alt: 'Website хоккейной команды на планшете'
        }]
    }]

    




const MainKeysReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_KEYS_MAIN_ITEM_ELEMENT': {
            return [...state, {...state[state.length - 1], id: state[state.length - 1].id + 1}]
        }
        case 'DELETE_KEYS_MAIN_ITEM_ELEMENT': {
            return state.filter(e=>e.id !== action.info.id)
        }
        case 'DESCR_KEYS_MAIN_ITEM_ELEMENT': {
            return state.map(e=>e.id == action.info.id ? {...e, info: e.info.map(el=>el.id == action.info.count ? {...el, descr: action.info.text} : el)} : e)
        }
        case 'HREF_KEYS_MAIN_ITEM_ELEMENT': {
            return state.map(e=>e.id == action.info.id ? {...e, info: e.info.map(el=>el.id == action.info.count ? {...el, href: action.info.text} : el)} : e)
        }
        case 'IMG_KEYS_MAIN_ITEM_ELEMENT': {
            return state.map(e=>e.id == action.info.id ? {...e, info: e.info.map(el=>el.id == action.info.count ? {...el, img: [action.info.text]} : el)} : e)
        }
        case 'ALT_KEYS_MAIN_ITEM_ELEMENT': {
            return state.map(e=>e.id == action.info.id ? {...e, info: e.info.map(el=>el.id == action.info.count ? {...el, alt: action.info.text} : el)} : e)
        }
        case 'COLOR_KEYS_MAIN_ITEM_ELEMENT': {
            return state.map(e=>e.id == action.info.id ? {...e, info: e.info.map(el=>el.id == action.info.count ? {...el, backColor: action.info.text} : el)} : e)
        }

        default:
            return state
    }
} 


export const descrKeysMainChange = (info) => ({
    type: 'DESCR_KEYS_MAIN_ITEM_ELEMENT',info
})
export const hrefKeysMainChange = (info) => ({
    type: 'HREF_KEYS_MAIN_ITEM_ELEMENT',info
})
export const imgKeysMainChange = (info) => ({
    type: 'IMG_KEYS_MAIN_ITEM_ELEMENT',info
})
export const altKeysMainChange = (info) => ({
    type: 'ALT_KEYS_MAIN_ITEM_ELEMENT',info
})
export const colorKeysMainChange = (info) => ({
    type: 'COLOR_KEYS_MAIN_ITEM_ELEMENT',info
})
export const addKeysMainElement = (info) => ({
    type:'ADD_KEYS_MAIN_ITEM_ELEMENT',info
})
export const deleteKeysMainElement = (info) => ({
    type:'DELETE_KEYS_MAIN_ITEM_ELEMENT',info
})


export default MainKeysReducer