


const initialState = [
    {
        photo: 'photoOfClient.png',
        name: 'Юлия Орлова',
        position: 'Руководитель компании Эковтор',
        comment: 'Мы продолжаем глобально меняться, предлагая принципиально новые и креативные решения: в прошлом году обновился фирменный стиль компании, в этом мы представили абсолютно новый сайт «Эковтор» разработанный командой IT-INDUSTRIAL.__ Наше творческое сотрудничество явило современный, яркий и интерактивный проект, который оказался интересным не только для наших партнеров и потенциальных сотрудников.',
        id: 1
    },
    {
        photo: 'photoOfClient.png',
        name: 'Юлия Орлова',
        position: 'Руководитель компании Эковтор',
        comment: 'Мы продолжаем глобально меняться, предлагая принципиально новые и креативные решения: в прошлом году обновился фирменный стиль компании, в этом мы представили абсолютно новый сайт «Эковтор» разработанный командой IT-INDUSTRIAL.__ Наше творческое сотрудничество явило современный, яркий и интерактивный проект, который оказался интересным не только для наших партнеров и потенциальных сотрудников.',
        id: 2
    },
    {
        photo: 'photoOfClient.png',
        name: 'Юлия Орлова',
        position: 'Руководитель компании Эковтор',
        comment: 'Мы продолжаем глобально меняться, предлагая принципиально новые и креативные решения: в прошлом году обновился фирменный стиль компании, в этом мы представили абсолютно новый сайт «Эковтор» разработанный командой IT-INDUSTRIAL.__ Наше творческое сотрудничество явило современный, яркий и интерактивный проект, который оказался интересным не только для наших партнеров и потенциальных сотрудников.',
        id: 3
    },
    {
        photo: 'photoOfClient.png',
        name: 'Юлия Орлова',
        position: 'Руководитель компании Эковтор',
        comment: 'Мы продолжаем глобально меняться, предлагая принципиально новые и креативные решения: в прошлом году обновился фирменный стиль компании, в этом мы представили абсолютно новый сайт «Эковтор» разработанный командой IT-INDUSTRIAL.__ Наше творческое сотрудничество явило современный, яркий и интерактивный проект, который оказался интересным не только для наших партнеров и потенциальных сотрудников.',
        id: 4
    },
    {
        photo: 'photoOfClient.png',
        name: 'Юлия Орлова',
        position: 'Руководитель компании Эковтор',
        comment: 'Мы продолжаем глобально меняться, предлагая принципиально новые и креативные решения: в прошлом году обновился фирменный стиль компании, в этом мы представили абсолютно новый сайт «Эковтор» разработанный командой IT-INDUSTRIAL.__ Наше творческое сотрудничество явило современный, яркий и интерактивный проект, который оказался интересным не только для наших партнеров и потенциальных сотрудников.',
        id: 5
    },
    

]


const MainReviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_REVIEW_MAIN_ELEMENT': {
            return [...state, {...state[state.length - 1], id: state[state.length - 1].id + 1}]
        }
        case 'DELETE_REVIEW_MAIN_ELEMENT': {
            return state.filter(e=>e.id !== action.info.id)
        }
        case 'COMMENT_REVIEW_MAIN_CHANGE': {
            return state.map(e=>e.id == action.info.id ? {...e, comment: action.info.text} : e)
        }
        case 'INITIALS_REVIEW_MAIN_CHANGE': {
            return state.map(e=>e.id == action.info.id ? {...e, name: action.info.text} : e)
        }
        case 'IMG_REVIEW_MAIN_CHANGE': {
            return state.map(e=>e.id == action.info.id ? {...e, photo: action.info.text} : e)
        }
        case 'POSITION_REVIEW_MAIN_CHANGE': {
            return state.map(e=>e.id == action.info.id ? {...e, position: action.info.text} : e)
        }
        default:
            return state
    }
} 

export const commentReviewChange = (info) => ({
    type: 'COMMENT_REVIEW_MAIN_CHANGE',info
})
export const initialsReviewChange = (info) => ({
    type: 'INITIALS_REVIEW_MAIN_CHANGE',info
})
export const imgReviewChange = (info) => ({
    type: 'IMG_REVIEW_MAIN_CHANGE',info
})
export const positionReviewChange = (info) => ({
    type: 'POSITION_REVIEW_MAIN_CHANGE',info
})
export const addReviewElement = (info) => ({
    type:'ADD_REVIEW_MAIN_ELEMENT',info
})
export const deleteReviewElement = (info) => ({
    type:'DELETE_REVIEW_MAIN_ELEMENT',info
})


export default MainReviewReducer