


const initialState = [
    {
        photo: 'photoOfClient.WebP',
        name: 'Юлия Орлова',
        position: 'Руководитель компании Эковтор',
        comment: 'Мы продолжаем глобально меняться, предлагая принципиально новые и креативные решения: в прошлом году обновился фирменный стиль компании, в этом мы представили абсолютно новый сайт «Эковтор» разработанный командой IT-INDUSTRIAL.__ Наше творческое сотрудничество явило современный, яркий и интерактивный проект, который оказался интересным не только для наших партнеров и потенциальных сотрудников.',
        id: 1
    },
    {
        photo: 'photoOfClient.WebP',
        name: 'Юлия Орлова',
        position: 'Руководитель компании Эковтор',
        comment: 'Мы продолжаем глобально меняться, предлагая принципиально новые и креативные решения: в прошлом году обновился фирменный стиль компании, в этом мы представили абсолютно новый сайт «Эковтор» разработанный командой IT-INDUSTRIAL.__ Наше творческое сотрудничество явило современный, яркий и интерактивный проект, который оказался интересным не только для наших партнеров и потенциальных сотрудников.',
        id: 2
    },
    {
        photo: 'photoOfClient.WebP',
        name: 'Юлия Орлова',
        position: 'Руководитель компании Эковтор',
        comment: 'Мы продолжаем глобально меняться, предлагая принципиально новые и креативные решения: в прошлом году обновился фирменный стиль компании, в этом мы представили абсолютно новый сайт «Эковтор» разработанный командой IT-INDUSTRIAL.__ Наше творческое сотрудничество явило современный, яркий и интерактивный проект, который оказался интересным не только для наших партнеров и потенциальных сотрудников.',
        id: 3
    },
    {
        photo: 'photoOfClient.WebP',
        name: 'Юлия Орлова',
        position: 'Руководитель компании Эковтор',
        comment: 'Мы продолжаем глобально меняться, предлагая принципиально новые и креативные решения: в прошлом году обновился фирменный стиль компании, в этом мы представили абсолютно новый сайт «Эковтор» разработанный командой IT-INDUSTRIAL.__ Наше творческое сотрудничество явило современный, яркий и интерактивный проект, который оказался интересным не только для наших партнеров и потенциальных сотрудников.',
        id: 4
    },
    {
        photo: 'photoOfClient.WebP',
        name: 'Юлия Орлова',
        position: 'Руководитель компании Эковтор',
        comment: 'Мы продолжаем глобально меняться, предлагая принципиально новые и креативные решения: в прошлом году обновился фирменный стиль компании, в этом мы представили абсолютно новый сайт «Эковтор» разработанный командой IT-INDUSTRIAL.__ Наше творческое сотрудничество явило современный, яркий и интерактивный проект, который оказался интересным не только для наших партнеров и потенциальных сотрудников.',
        id: 5
    },
    

]


const ReviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_REVIEWS_ELEMENT': {
            return [...state, {...state[state.length - 1], id: state[state.length - 1].id + 1}]
        }
        case 'DELETE_REVIEWS_ELEMENT': {
            return state.filter(e=>e.id !== action.info.id)
        }
        case 'COMMENT_REVIEWS_CHANGE': {
            return state.map(e=>e.id == action.info.id ? {...e, comment: action.info.text} : e)
        }
        case 'INITIALS_REVIEWS_CHANGE': {
            return state.map(e=>e.id == action.info.id ? {...e, name: action.info.text} : e)
        }
        case 'IMG_REVIEWS_CHANGE': {
            return state.map(e=>e.id == action.info.id ? {...e, photo: action.info.text} : e)
        }
        case 'POSITION_REVIEWS_CHANGE': {
            return state.map(e=>e.id == action.info.id ? {...e, position: action.info.text} : e)
        }
        default:
            return state
    }
} 

export const commentReviewsChange = (info) => ({
    type: 'COMMENT_REVIEWS_CHANGE',info
})
export const initialsReviewsChange = (info) => ({
    type: 'INITIALS_REVIEWS_CHANGE',info
})
export const positionReviewsChange = (info) => ({
    type: 'POSITION_REVIEWS_CHANGE',info
})
export const imgReviewsChange = (info) => ({
    type: 'IMG_REVIEWS_CHANGE',info
})
export const addReviewsElement = (info) => ({
    type:'ADD_REVIEWS_ELEMENT',info
})
export const deleteReviewsElement = (info) => ({
    type:'DELETE_REVIEWS_ELEMENT',info
})


export default ReviewsReducer