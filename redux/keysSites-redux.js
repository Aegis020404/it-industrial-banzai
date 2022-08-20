import cl from './../src/style/KeysMainSites.module.css';
import itemCl from './../src/style/KeysItem.module.css';


const initialState = [{ href: 'stroy-mat', descr: 'Интернет-магазин «Строймат»', imageInfo: {classesImg: cl.orangePhone , alt:'Сайт компании "Строймат" на мобильном устройстве',background: '#FFAA5C', logo: 'keys-stroy-logo.svg', logoClasses: itemCl.stroyLogo, img: 'orange-img-phone.WebP'}, id: 1},
{href: 'avto-estetica', descr: 'Интернет-магазин «Автоэстетика»', imageInfo: {classesImg:cl.blackGadjets, alt:'Сайт компании "Auto estetica" на различных устройствах', background: '#000000', logo: 'keys-auto-logo.svg',logoClasses: itemCl.autoLogo,  img: 'auto-gadjets.WebP'}, id: 2},
{href: 'llumar', descr: 'Сайт компании «Llumar»', imageInfo: {classesImg:cl.llumar,alt: 'Сайт компании "LLumar" на планшете', background: '#F8F8F9', logo: 'keys-llumar-logo.svg',logoClasses: itemCl.llumarLogo,  img: 'llumar-pad.WebP'}, id: 3},
{href: 'ecovtor', descr: 'Разработка сайта «Эковтор»', imageInfo: {classesImg:cl.ecoFemale,alt: 'Девушка сортирует отходы',background: '#F8F8F9', logo: 'keys-eco-logo.svg', logoClasses: itemCl.ecoLogo, img: 'female-sort.WebP'}, id: 4},
{href: 'hock-team', descr: 'Сайт для хоккейной команды', imageInfo: {classesImg:cl.hockeyImg,alt:'Сайт хоккейной команды на планшете',background: '#07315D', logo: 'keys-hockey-logo.svg',logoClasses: itemCl.hockeyLogo,  img: 'pad-hockey.WebP'}, id: 5}]



const keysSitesReducer = (state= initialState, action) => {
    switch (action.type) {
        case 'ADD_SITES_ELEMENT': {
            return [...state, {...state[state.length-1],id:  state.length+1}]
        }
        case 'DELETE_SITES_ELEMENT': {
            return state.filter(e=>e.id != action.info.id)
        }
        case 'BACKGROUND_SITES_CHANGE': {
            return state.map(e=> e.id == action.info.id ? {...e, imageInfo: {...e.imageInfo, background: action.info.text}} : e)
        }
        case 'ALT_SITES_CHANGE': {
            return state.map(e=> e.id == action.info.id ? {...e, imageInfo: {...e.imageInfo, alt: action.info.text}} : e)
        }
        case 'IMG_SITES_CHANGE': {
            return state.map(e=> e.id == action.info.id ? {...e, imageInfo: {...e.imageInfo, img: action.info.text}} : e)
        }
        case 'HREF_SITES_CHANGE': {
            return state.map(e=> e.id == action.info.id ? {...e, href: action.info.text} : e)
        }
        case 'DESCR_SITES_CHANGE': {
            return state.map(e=> e.id == action.info.id ? {...e, descr: action.info.text} : e)
        }
        case 'LOGO_SITES_CHANGE': {
            return state.map(e=> e.id == action.info.id ? {...e, logo: action.info.text} : e)
        }
        default: 
            return state
    }
}

export const keysAddElement = (info)=>({
    type: 'ADD_SITES_ELEMENT', info
})
export const keysDeleteElement = (info)=>({
    type: 'DELETE_SITES_ELEMENT', info
})
export const keysBackChange = (info)=>({
    type: 'BACKGROUND_SITES_CHANGE', info
})
export const keysAltChange = (info)=>({
    type: 'ALT_SITES_CHANGE', info
})
export const keysImgChange = (info)=>({
    type: 'IMG_SITES_CHANGE', info
})
export const keysHrefChange = (info)=>({
    type: 'HREF_SITES_CHANGE', info
})
export const keysDescrChange = (info)=>({
    type: 'DESCR_SITES_CHANGE', info
})
export const keysLogoChange = (info)=>({
    type: 'LOGO_SITES_CHANGE', info
})



export default keysSitesReducer