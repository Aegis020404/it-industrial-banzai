

const initialState = [{id:1,title: 'Может ли быть такое, что результата не будет?', descr: 'Нет. Результат от нашей работы будет в любом случае. Не всегда результат получается сразу таким, который ожидает клиент, но мы всегда анализируем, дорабатываем и работаем до тех пор, пока результат не будет устраивать на 100%'},
{id:2,title: 'Какие гарантии вы даете?', descr: 'Мы не можем дать гарантий по позициям, т.к. алгоритмы поисковых систем меняются постоянно. Но каждый месяц мы предоставляем подробный отчет, где вы видите, какие работы проведены и результат этих работ.'},
{id:3,title: 'Заключаете ли вы официальный договор?', descr: 'Да, условия сотрудничества обсуждаем индивидуально.'},
{id:4,title: 'Обязательно ли переделывать сайт, если он мне нравится?', descr: 'Мы анализируем сайт с точки зрения требований поисковых систем и удобства дли клиента. Если не доработать, то сложно будет вывести его в топ и получить заявки. Поэтому дорабатывать сайт приходится всегда, и нужно быть к этому готовым.'},
{id:5,title: 'Если запросы вошли в топ, мы можем закончить сотруднчество?', descr: 'Если в вашей нише есть конкуренты, которые вкладываются в продвижение, то они со временем могут вас сместить. Рекомендуем работать над сайтом постоянно, подстраиваться под новые алгоритмы, улучшать и добаратывать, чтобы поддерживать лидирующие позиции'}]


export function SeoAccReducer  (state = initialState, action) {
    switch (action.type) {
        case 'ADD_SEO_ACC_ELEMENT': {
            return [...state, {...state[state.length - 1], id: state[state.length - 1].id + 1}]
        }
        case 'DELETE_SEO_ACC_ELEMENT': {
            return state.filter(e=>e.id !== action.info.id)
        }
        case 'TITLE_SEO_ACC_CHANGE': {
            return state.map(e=>e.id == action.info.id ? {...e, title: action.info.text} : e)
        }
        case 'DESCR_SEO_ACC_CHANGE': {
            return state.map(e=>e.id == action.info.id ? {...e, descr: action.info.text} : e)
        }
        default:
            return state
    }
}

export const addSeoAccElement = (info)=>({
    type: 'ADD_SEO_ACC_ELEMENT',info
})
export const deleteSeoAccElement = (info)=>({
    type: 'DELETE_SEO_ACC_ELEMENT',info
})
export const titleSeoAccChange = (info)=>({
    type: 'TITLE_SEO_ACC_CHANGE',info
})
export const descrSeoAccChange = (info)=>({
    type: 'DESCR_SEO_ACC_CHANGE',info
})