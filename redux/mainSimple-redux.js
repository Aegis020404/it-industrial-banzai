

const initialState = [{
    title: 'Отвечаем на все вопросы быстро',
    descr: 'В рабочее время. Не игнорируем, а обсуждаем задачи и устанавливаем сроки на их выполнение.',
    count: '01.',
    id: 1
},
    {
        title: 'Разбиваем оплату по этапам',
        descr: 'В зависимости от видов работ оплата делится на 2 или 3 этапа. Все условия прописаны в договоре.',
        count: '02.',
        id: 2
    },
    {
        title: 'Контролируем сроки',
        descr: 'Работаем с системой управления проектами. У нас есть отдельный специалист (проект-менеджер), который отвечает за сроки.',
        count: '03.',
        id: 3
    },
    {
        title: 'Экономим ваше время',
        descr: 'Планируем удобное время для общения с вами, проведения интервью и ответов на вопросы.',
        count: '04.',
        id: 4
    },
    {
        title: 'Не навязываем абонентскую поддержку',
        descr: 'Все сайты мы делаем так, чтобы клиент мог самостоятельно им управлять по максимуму и чтобы постоянная поддержка не требовалась',
        count: '05.',
        id: 5
    },
    {
        title: 'Даем гарантии',
        descr: 'Гарантированная поддержка сайта после сдачи проекта. Гарантия в правильном юридическом оформлении услуг',
        count: '06.',
        id: 6
    }]



const MainSimpleReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_SIMPLE_ELEMENT': {
            return [...state, {...state[state.length - 1], id: state[state.length - 1].id + 1}]
        }
        case 'DELETE_SIMPLE_ELEMENT': {
            return state.filter(e=>e.id !== action.info.id)
        }
        case 'TITLE_SIMPLE_ITEM_CHANGE': {
            return state.map(e=>e.id == action.info.id ? {...e, title: action.info.text} : e)
        }
        case 'COUNT_SIMPLE_ITEM_CHANGE': {
            return state.map(e=>e.id == action.info.id ? {...e, count: action.info.text} : e)
        }
        case 'DESCR_SIMPLE_ITEM_CHANGE': {
            return state.map(e=>e.id == action.info.id ? {...e, descr: action.info.text} : e)
        }
        default:
            return state
    }
} 
export const simpleAddElement = (info) => ({
    type: 'DELETE_SIMPLE_ELEMENT',info
})
export const simpleDeleteElement = (info) => ({
    type: 'ADD_SIMPLE_ELEMENT',info
})
export const simpleTitleChange = (info) => ({
    type: 'TITLE_SIMPLE_ITEM_CHANGE',info
})
export const simpleCountChange = (info) => ({
    type: 'COUNT_SIMPLE_ITEM_CHANGE',info
})
export const descrTitleChange = (info) => ({
    type: 'DESCR_SIMPLE_ITEM_CHANGE',info
})

export default MainSimpleReducer