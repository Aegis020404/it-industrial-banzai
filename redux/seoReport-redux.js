

const initialState = [
    {id:1,text:'Отчет вы получаете в электронном виде на почту или в мессенджер.'},
    {id:2,text:'Наш SEO-специалист всегда на связи и готов дать пояснения и ответить на вопросы по отчету, если они есть.'},
    {id:3,text:'Вы видите, как меняются позиции у фраз. И совпадают ли прогнозы по трафику и конверсии с реальными показателями.'},
    {id:4,text:'Вы платите только за фразы в ТОПе'}
]

export function SeoReportReducer  (state = initialState, action) {
    switch (action.type) {
        case 'ADD_SEO_REPORT_ELEMENT': {
            return [...state, {...state[state.length - 1], id: state[state.length - 1].id + 1}]
        }
        case 'DELETE_SEO_REPORT_ELEMENT': {
            return state.filter(e=>e.id !== action.info.id)
        }
        case 'TEXT_SEO_REPORT_CHANGE': {
            return state.map(e=>e.id == action.info.id ? {...e, text: action.info.text} : e)
        }
        default:
            return state
    }
}

export const addSeoServElement = (info)=>({
    type: 'ADD_SEO_REPORT_ELEMENT',info
})
export const deleteSeoServElement = (info)=>({
    type: 'DELETE_SEO_REPORT_ELEMENT',info
})
export const titleSeoServChange = (info)=>({
    type: 'TEXT_SEO_REPORT_CHANGE',info
})
