

const initialState =  [{id:1,title: 'Работа с семантикой', descr:'Оцениваем потенциал каждой фразы, собираем дополнительные поисковые фразы, анализируем их продвижение в топ'},
{id:2,title: 'Ссылочная оптимизация', descr: 'Проводим анализ ссылочного профиля, чистим его. Отбираем ресурсы для покупки ссылок на ваш сайт и проверяем их по более 15 параметрам'},
{id:3,title: 'Поведенческая оптимизация', descr: 'Анализируем поведение клиентов на сайте, дорабатываем его с точки зрения удобства для пользователей. Отслеживаем изменения после каждого апдейта Яндекса и Google, при необходимости корректируем стратегию, вносим правки'},
{id:4,title: 'Техническая оптимизация', descr: 'Анализ страниц в индексе, отслеживание и оперативная чистка дублей, грамотная перелинковка. Это основа, без которой продвижение не возможно'},
{id:5,title: 'Контентная оптимизация', descr: 'Составляем техническое задание, пишем уникальные, конкурентные  тексты для вашего сайта.'}]

export function SeoMonthReducer  (state = initialState, action) {
    switch (action.type) {
        case 'ADD_SEO_MONTH_ELEMENT': {
            return [...state, {...state[state.length - 1], id: state[state.length - 1].id + 1}]
        }
        case 'DELETE_SEO_MONTH_ELEMENT': {
            return state.filter(e=>e.id !== action.info.id)
        }
        case 'TITLE_SEO_MONTH_ITEM_CHANGE': {
            return state.map(e=>e.id == action.info.id ? {...e, title: action.info.text} : e)
        }
        case 'DESCR_SEO_MONTH_CHANGE': {
            return state.map(e=>e.id == action.info.id ? {...e, descr: action.info.text} : e)
        }
        default:
            return state
    }
}

export const addSeoMonthElement = (info)=>({
    type: 'ADD_SEO_MONTH_ELEMENT',info
})
export const deleteSeoMonthElement = (info)=>({
    type: 'DELETE_SEO_MONTH_ELEMENT',info
})
export const titleSeoMonthChange = (info)=>({
    type: 'TITLE_SEO_MONTH_ITEM_CHANGE',info
})
export const descrSeoMonthChange = (info)=>({
    type: 'DESCR_SEO_MONTH_CHANGE',info
})