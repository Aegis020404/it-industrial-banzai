
const initialState = [{id:1,title: 'Прогретые клиенты', descr: 'Они ищут в поисковике ваш товар или услугу и по этим поисковым фразам видят ваш сайт', img:''},
{id:2,title: 'Доверие, рост ваших продаж', descr: 'Если ваш сайт получил позиции в поисковиках, то он, скорее всего, пробудет там долго. Всё это время вы будете получать клиентов', img:''},
{id:3,title: 'Называем реальные сроки и стоимость',descr: 'Согласно исследованиям, 85% пользователей больше доверяют органической выдаче в отличие от контекстной рекламы. Поэтому клиент, открывая ваш сайт, заранее настроен лояльно и с большой вероятностью купит', img:''},
{id:4,title: 'Небольшая стоимость привлечения клиента',descr: 'Чем выше позиции вашего сайта, тем ниже стоимость привлечения клиентов. Особенно это касается фраз, по которым высокая стоимость контекстной рекламы.',img:''}]


export function SeoStableReducer  (state = initialState, action) {
    switch (action.type) {
        case 'ADD_SEO_STABLE_ELEMENT': {
            return [...state, {...state[state.length - 1], id: state[state.length - 1].id + 1}]
        }
        case 'DELETE_SEO_STABLE_ELEMENT': {
            return state.filter(e=>e.id !== action.info.id)
        }
        case 'TITLE_SEO_STABLE_CHANGE': {
            return state.map(e=>e.id == action.info.id ? {...e, title: action.info.text} : e)
        }
        case 'DESCR_SEO_STABLE_CHANGE': {
            return state.map(e=>e.id == action.info.id ? {...e, descr: action.info.text} : e)
        }
        default:
            return state
    }
}

export const addSeoStableElement = (info)=>({
    type: 'ADD_SEO_STABLE_ELEMENT',info
})
export const deleteSeoStableElement = (info)=>({
    type: 'DELETE_SEO_STABLE_ELEMENT',info
})
export const titleSeoStableChange = (info)=>({
    type: 'TITLE_SEO_STABLE_CHANGE',info
})
export const descrSeoStableChange = (info)=>({
    type: 'DESCR_SEO_STABLE_CHANGE',info
})
