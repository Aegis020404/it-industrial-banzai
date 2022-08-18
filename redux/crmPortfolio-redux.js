import cl from '../src/style/MobilePortfolio.module.css';

const initialState = [
    {descr: 'Перевозки App', img: '/img/mob-phones.svg', href: '/keys/carriage-app', background: '#2F80ED',classes:cl.portMobileCBlock, id: 1},
    {descr: 'Разработка индивидуальной CRM-системы', img: '/img/mob-crm.svg', href: '/keys/crm-system', background: '#E50A0B', classes:cl.portCrmBlock, id: 2},
]

export function crmPortfolioReducer  (state = initialState, action) {
    switch (action.type) {
        case 'ADD_CRM_PORTFOLIO_ELEMENT': {
            return [...state, {...state[state.length - 1], id: state[state.length - 1].id + 1}]
        }
        case 'DELETE_CRM_PORTFOLIO_ELEMENT': {
            return state.filter(e=>e.id !== action.info.id)
        }
        case 'HREF_CRM_PORTFOLIO_CHANGE': {
            return state.map(e=>e.id == action.info.id ? {...e, href: action.info.text} : e)
        }
        case 'BACK_CRM_PORTFOLIO_CHANGE': {
            return state.map(e=>e.id == action.info.id ? {...e, background: action.info.text} : e)
        }
        case 'IMG_CRM_PORTFOLIO_CHANGE': {
            return state.map(e=>e.id == action.info.id ? {...e, img: action.info.text} : e)
        }
        case 'DESCR_CRM_PORTFOLIO_CHANGE': {
            return state.map(e=>e.id == action.info.id ? {...e, descr: action.info.text} : e)
        }
        default:
            return state
    }
}

export const addCrmPortfolioElement = (info)=>({
    type: 'ADD_CRM_PORTFOLIO_ELEMENT',info
})
export const deleteCrmPortfolioElement = (info)=>({
    type: 'DELETE_CRM_PORTFOLIO_ELEMENT',info
})
export const hrefCrmPortfolioChange = (info)=>({
    type: 'HREF_CRM_PORTFOLIO_CHANGE',info
})
export const backCrmPortfolioChange = (info)=>({
    type: 'BACK_CRM_PORTFOLIO_CHANGE',info
})
export const imgCrmPortfolioChange = (info)=>({
    type: 'IMG_CRM_PORTFOLIO_CHANGE',info
})
export const descrCrmPortfolioChange = (info)=>({
    type: 'DESCR_CRM_PORTFOLIO_CHANGE',info
})