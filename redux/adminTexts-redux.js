

const initialState = {
    mainTariff: {
        title: 'Тарифы на разработку сайтов'
    },
    mainQuiz: {
        title: 'Рассчитать стоимость вашего сайта?',
        descr: 'Ответьте на 4 вопроса, и получите расчет стоимости в 2-х вариантах бюджета',
    },
    mainApplication: {
        title: 'Оставить заявку',
        descr: 'Заполните форму и наш менеджер свяжется с вами в течение дня, чтобы обсудить вашу задачу',
        subdescr: 'Нажимая на кнопку, вы даете согласие на обработку ваших персональных данных'
    },
    mainDev: {
        title: 'Процесс разработки сайта под ключ'
    },
    mainOffer: {
        title: 'Получить коммерческое предложение',
        descr: 'Заполните форму сейчас и наш специалист свяжется с вами для консультации и составит ваше персональное предложение. Вы получите более точное КП, если укажете полную информацию о проекте.',
        titlePrice: 'Бюджет проекта',
        descrPrice: 'Укажите примерную сумму, которую плнируете потратить на реализацию проекта',
        descrContact: 'Нажимая на кнопку, вы даете согласие на обработку ваших персональных данных',
        titleContact: 'Контакты'
    },
    mainRes: {
        title: 'Мы не работаем по шаблонам, а работаем на результат'
    },
    mainOther: {
        title: '',
    },
    mainKeys: {
        title: 'Наши кейсы',
        descr: 'В каждом проекты мы разрабатываем и внедряем новые решения' 
    },
    mainLider: {
        title: 'Слово руководителя «IT-INDUSTRIAL»',
        descr: 'К нам часто приходят клиенты от других студий переделывать сайты, потому что они не работают и клиентов не приносят. Мы не экономим, делаем сайт хорошо один раз, и он вам стабильно приносит заявки 2-3 года.',
        initialis: 'Дмитрий Дмитриев',
        post: 'Генеральный директор «IT-INDUSTRIAL»'
    },
    mainReview: {
        title: '98% наших клиентов довольны результатом'
    },
    mainSimple: {
        title: 'С нами надежно, легко и комфортно'
    },
    mainQuestion: {
        title: 'У вас остались вопросы?',
        descr: 'Если вы не нашли ответ на свой вопрос — свяжитесь с нами любым удобным способом и мы обязательно проконсультируем вас',
        bottomDescr: 'Нажимая на кнопку, вы даете согласие на обработку ваших персональных данных'
    },
    aboutTexts: {
        title: 'О компании',
        descrFirst: '«IT-INDUSTRIAL» — коллектив специалистов, каждый из которых имеет большой опыт работы в разных по сложности и объему проектах и (не скромно) профессионал своего дела. Мы не накладываем никаких рамок на наших сотрудников и не давим на них авторитетом и бессмысленными правилами.',
        descrSec: 'Высокий уровень имеющейся квалификации, умение работать и постоянно учиться новому — вот те качества, которые мы ценим в профессионалах.',
        descrThird: 'Наших специалистов отличают не только дипломы и регалии (которые, конечно есть), а блеск в глазах и влюбленность в то, чем они заняты.',
        descrFourth: 'Каждый участник нашей команды не просто умеет делать свою работу хорошо, а искренне хочет делать ее именно так. Такой подход гарантирует успех проекта, ведь в него вкладывается душа.',
        developCount: '150+',
        topCount: '100+',
        developText: 'Сайтов выведено в ТОП',
        topText: 'Cайтов разработано'
    },
    reviewsTexts: {
        title: 'Отзывы'
    },
    vacancyTexts: {
        title: 'Вакансии'
    },
    keysTexts: {
        title: 'Кейсы'
    },
    contactTexts: {
        title: 'Контакты',
        firstColumn: {
            img: '',
            titleItem: 'СВЯЗАТЬСЯ С НАМИ',
            titleNumber: 'Телефон:',
            valueNumber: '+7 (925) 117-00-46',
            titleEmail: 'Email:',
            valueEmail: 'info@it-industriul.ru',

        },
        secondColumn: {
            img: '',
            titleItem: 'КАК НАС НАЙТИ',
            addressItem: 'Адрес:',
            addressValue: 'Москва, ул. Деловая, 20'
        }
    },
    seoServices: {
        title: 'Что входит в стоимость услуг?',
    },
    seoStable: {
        title: 'SEO продвижение поможет вам получать стабильный поток целевых заявок длительное время'
    },
    seoQuestion: {
        title: 'Часто задаваемые вопросы'
    },
    seoMonth: {
        title: 'Ежемесячно SEO оптимизатор выполняет следующие работы',
        img: ''
    },
    seoMini: {
        title: 'В работе мы используем только белые методы продвижения (естественные, «законные» с точки зрения поисковых систем).',
        descr: 'Поэтому мы исключаем ситуации, в которых ваш сайт получит бан и вы потеряете вложенные в сайт деньги.'
    },
    seoReport: {
        title: 'Каждый месяц мы будем предоставлять вам подробный отчет о работе',
        bottomTitle: 'Результаты продвижения вы увидите через 6 месяцев',
        bottomDescr: 'Несколько месяцев занимают подготовительные работы, и ещё сктолько же, чтобы поисковые системы смогла оценить и проанализировать ваш сайт',
        number: '6',
        value: 'мес'
    },
    crmServices: {
        title: 'Возможности CRM-систем'
    },
    crmPortfolio :{
        title: 'Портфолио',
        descr: 'Мы стремимся к длительным отношениям с погружением в мир бизнеса клиента. Это наш способ находить точные, красивые и своевременные решения'
    },
    crmDevelop: {
        title: 'Процесс разработки сайта под ключ'
    },
    marketText: {
        title: 'Как успешно продвигаться на маркетплейсе: ключевые правила',
        overDescr: 'Размещение на маркетплейсах – отличная возможность получить дополнительный канал трафика, расширить круг целевой аудитории и увеличить прибыль от бизнеса. Однако у подобных платформ есть один весомый недостаток. Это высокая конкуренция. Чтобы успешно конкурировать с сотнями продавцов, которые предлагают похожие товары, нужно правильно продвигаться.__На маркетплейсах необходимо не такое продвижение, как в интернет-магазинах. Здесь другая рекламная коммуникация и структура компаний. На что следует обращать внимание продавцу и как оказаться в числе лидеров площадки – даем конкретные рекомендации в статье.',
        descr: 'Продажи на маркетплейсах во многом зависят от того, как часто потенциальные покупатели видят страницу с предложением конкретного продавца. До последних страниц выдачи мало кто доходит, а значит – вероятность получения заказов в таком случае сильно снижается.__Уникальные системы ранжирования и своя поисковая выдача, похожая на ту, которой мы привыкли пользоваться в «Яндекс» и Google, есть у каждого маркетплейса. Чтобы быть в числе лидеров, нужно постоянно работать над рейтингом на платформе.'
    },
    mobileService: {
        title: 'Услуги по разработке приложений',
        descr: 'Обратитесь к нам и мы на ранней стадии поможем вам спроектировать бизнес-модель и стратегию его поэтапного развития. Важное место в нашей работе занимает аналитика: анализ требований и бизнес-процессов, маркетинговый и технический аудит, управление требованиями на всех этапах проекта.'
    }

}



export function isAdminTextsReducer (state = initialState, action) {
    switch (action.type) {
        
       
        case 'TITLE_SERVICES_CRM_PAGE_INFO': {
            return {...state, crmServices: {...state.crmServices, title: action.info.text}}
        }
        case 'TITLE_PORTFOLIO_CRM_PAGE_INFO': {
            return {...state, crmPortfolio: {...state.crmPortfolio, title: action.info.text}}
        }
        case 'DESCR_PORTFOLIO_CRM_PAGE_INFO': {
            return {...state, crmPortfolio: {...state.crmPortfolio, descr: action.info.text}}
        }
        case 'TITLE_DEVELOP_CRM_PAGE_INFO': {
            return {...state, crmDevelop: {...state.crmDevelop, title: action.info.text}}
        }


        case 'TITLE_SERVICES_MOBILE_PAGE_INFO': {
            return {...state, mobileService: {...state.mobileService, title: action.info.text}}
        }
        case 'TITLE_SERVICES_MOBILE_PAGE_INFO': {
            return {...state, mobileService: {...state.mobileService, descr: action.info.text}}
        }

        
        case 'TITLE_QUIZ_INFO': {
            return {...state, mainQuiz: {...state.mainQuiz, title: action.info.text}}
        }
        case 'DESCR_QUIZ_INFO': {
            return {...state, mainQuiz: {...state.mainQuiz, descr: action.info.text}}
        }  
        case 'TITLE_TARIFF_INFO': {
            return {...state, mainTariff: {...state.mainTariff, title: action.info.text}}
        }
        case 'TITLE_APPLICATION_INFO': {
            return {...state, mainApplication: {...state.mainApplication, title: action.info.text}}
        }
        case 'DESCR_APPLICATION_INFO': {
            return {...state, mainApplication: {...state.mainApplication, descr: action.info.text}}
        }
        case 'SUBDESCR_APPLICATION_INFO': {
            return {...state, mainApplication: {...state.mainApplication, subdescr: action.info.text}}
        }
        case 'TITLE_DEV_INFO': {
            return {...state, mainDev: {...state.mainDev, title: action.info.text}}
        }
        case 'TITLE_OFFER_INFO': {
            return {...state, mainOffer: {...state.mainOffer, title: action.info.text}}
        }
        case 'DESCR_OFFER_INFO': {
            return {...state, mainOffer: {...state.mainOffer, descr: action.info.text}}
        }
        case 'TITLE_PRICE_OFFER_INFO': {
            return {...state, mainOffer: {...state.mainOffer, titlePrice: action.info.text}}
        }
        case 'DESCR_PRICE_OFFER_INFO': {
            return {...state, mainOffer: {...state.mainOffer, descrPrice: action.info.text}}
        }
        case 'DESCR_CONTACT_OFFER_INFO': {
            return {...state, mainOffer: {...state.mainOffer, descrContact: action.info.text}}
        }
        case 'TITLE_CONTACT_OFFER_INFO': {
            return {...state, mainOffer: {...state.mainOffer, titleContact: action.info.text}}
        }
        case 'TITLE_RES_INFO': {
            return {...state, mainRes: {...state.mainRes, title: action.info.text}}
        }
        case 'TITLE_KEYS_MAIN_INFO': {
            return {...state, mainKeys: {...state.mainKeys, title: action.info.text}}
        }case 'DESCR_KEYS_MAIN_INFO': {
            return {...state, mainKeys: {...state.mainKeys, descr: action.info.text}}
        }case 'TITLE_LIDER_INFO': {
            return {...state, mainLider: {...state.mainLider, title: action.info.text}}
        }case 'DESCR_LIDER_INFO': {
            return {...state, mainLider: {...state.mainLider, descr: action.info.text}}
        }case 'INITIIALS_LIDER_INFO': {
            return {...state, mainLider: {...state.mainLider, initialis: action.info.text}}
        }case 'POST_LIDER_INFO': {
            return {...state, mainLider: {...state.mainLider, post: action.info.text}}
        }case 'TITLE_SIMPLE_INFO': {
            return {...state, mainSimple: {...state.mainSimple, title: action.info.text}}
        }case 'TITLE_REVIEW_INFO': {
            return {...state, mainReview: {...state.mainReview, title: action.info.text}}
        }case 'TITLE_QUESTION_INFO': {
            return {...state, mainQuestion: {...state.mainQuestion, title: action.info.text}}
        }
        case 'DESCR_QUESTION_INFO': {
            return {...state, mainQuestion: {...state.mainQuestion, descr: action.info.text}}
        }
        case 'BOTTOM_DESCR_QUESTION_INFO': {
            return {...state, mainQuestion: {...state.mainQuestion, bottomDescr: action.info.text}}
        }
        case 'TITLE_ABOUT_PAGE_CHANGE' : {
            return {...state, aboutTexts: {...state.aboutTexts, title: action.info.text}}
        }
        case 'DESCR_FIRST_ABOUT_PAGE_CHANGE' : {
            return {...state, aboutTexts: {...state.aboutTexts, descrFirst: action.info.text}}
        }
        case 'DESCR_SEC_ABOUT_PAGE_CHANGE' : {
            return {...state, aboutTexts: {...state.aboutTexts, descrSec: action.info.text}}
        }
        case 'DESCR_THIRD_ABOUT_PAGE_CHANGE' : {
            return {...state, aboutTexts: {...state.aboutTexts, descrThird: action.info.text}}
        }
        case 'DESCR_FOURTH_ABOUT_PAGE_CHANGE' : {
            return {...state, aboutTexts: {...state.aboutTexts, descrFourth: action.info.text}}
        }
        case 'TOP_COUNT_ABOUT_PAGE_CHANGE' : {
            return {...state, aboutTexts: {...state.aboutTexts, topCount: action.info.text}}
        }
        case 'BOTTOM_COUNT_ABOUT_PAGE_CHANGE' : {
            return {...state, aboutTexts: {...state.aboutTexts, developCount: action.info.text}}
        }
        case 'TOP_DESCR_ABOUT_PAGE_CHANGE' : {
            return {...state, aboutTexts: {...state.aboutTexts, topText: action.info.text}}
        }
        case 'BOTTOM_DESCR_ABOUT_PAGE_CHANGE' : {
            return {...state, aboutTexts: {...state.aboutTexts, developText: action.info.text}}
        }
        case 'TITLE_REVIEWS_PAGE_CHANGE' : {
            return {...state, reviewsTexts: {...state.reviewsTexts, title: action.info.text}}
        }
        case 'TITLE_VACANCY_PAGE_CHANGE' : {
            return {...state, vacancyTexts: {...state.vacancyTexts, title: action.info.text}}
        }
        case 'TITLE_KEYS_PAGE_CHANGE' : {
            return {...state, keysTexts: {...state.keysTexts, title: action.info.text}}
        }
        case 'TITLE_CONTACT_PAGE_CHANGE' : {
            return {...state, contactTexts: {...state.contactTexts, title: action.info.text}}
        }
        case 'TITLE_ITEM_FIRST_CONTACT_PAGE_CHANGE' : {
            return {...state, contactTexts: {...state.contactTexts, firstColumn: {...state.contactTexts.firstColumn, titleItem: action.info.text}}}
        }
        case 'TITLE_NUMBER_FIRST_CONTACT_PAGE_CHANGE' : {
            return {...state, contactTexts: {...state.contactTexts, firstColumn: {...state.contactTexts.firstColumn, titleNumber: action.info.text}}}
        }
        case 'TITLE_EMAIL_FIRST_CONTACT_PAGE_CHANGE' : {
            return {...state, contactTexts: {...state.contactTexts, firstColumn: {...state.contactTexts.firstColumn, titleEmail: action.info.text}}}
        }
        case 'VALUE_EMAIL_FIRST_CONTACT_PAGE_CHANGE' : {
            return {...state, contactTexts: {...state.contactTexts, firstColumn: {...state.contactTexts.firstColumn, valueEmail: action.info.text}}}
        }
          case 'VALUE_NUMBER_FIRST_CONTACT_PAGE_CHANGE' : {
            return {...state, contactTexts: {...state.contactTexts, firstColumn: {...state.contactTexts.firstColumn, valueNumber: action.info.text}}}
        }
        case 'TITLE_ITEM_SEC_CONTACT_PAGE_CHANGE' : {
            return {...state, contactTexts: {...state.contactTexts, secondColumn: {...state.contactTexts.secondColumn, titleItem: action.info.text}}}
        }
        case 'ADDRES_ITEM_SEC_CONTACT_PAGE_CHANGE' : {
            return {...state, contactTexts: {...state.contactTexts, secondColumn: {...state.contactTexts.secondColumn, addressItem: action.info.text}}}
        }
        case 'ADDRES_VALUE_SEC_CONTACT_PAGE_CHANGE' : {
            return {...state, contactTexts: {...state.contactTexts, secondColumn: {...state.contactTexts.secondColumn, addressValue: action.info.text}}}
        }
        case 'TITLE_MARKETPLACE_HERO_INFO': {
            return {...state, marketHero: {...state.marketHero, title: action.info.text}}
        }
       
        case 'OVER_DESCR_MARKETPLACE_TEXTS_INFO': {
            return {...state, marketText: {...state.marketText, overDescr: action.info.text}}
        }
        case 'DESCR_MARKETPLACE_TEXTS_INFO': {
            return {...state, marketText: {...state.marketText, descr: action.info.text}}
        }

        case 'TITLE_SEO_MINI_INFO': {
            return {...state, seoMini: {...state.seoMini, title: action.info.text}}
        }
        case 'DESCR_SEO_MINI_INFO': {
            return {...state, seoMini: {...state.seoMini, descr: action.info.text}}
        }
        case 'TITLE_SEO_SERVICES_INFO': {
            return {...state, seoServices: {...state.seoServices, title: action.info.text}}
        } case 'TITLE_SEO_STABLE_INFO': {
            return {...state, seoStable: {...state.seoStable, title: action.info.text}}
        } case 'TITLE_SEO_QUESTION_INFO': {
            return {...state, seoQuestion: {...state.seoQuestion, title: action.info.text}}
        } case 'TITLE_SEO_MONTH_INFO': {
            return {...state, seoMonth: {...state.seoMonth, title: action.info.text}}
        }case 'TITLE_SEO_REPORT_INFO': {
            return {...state, seoReport: {...state.seoReport, title: action.info.text}}
        }case 'BOTTOM_TITLE_SEO_REPORT_INFO': {
            return {...state, seoReport: {...state.seoReport, bottomTitle: action.info.text}}
        }case 'BOTTOM_DESCR_SEO_REPORT_INFO': {
            return {...state, seoReport: {...state.seoReport, bottomDescr: action.info.text}}
        }case 'NUMBER_SEO_REPORT_INFO': {
            return {...state, seoReport: {...state.seoReport, number: action.info.text}}
        }case 'VALUE_SEO_REPORT_INFO': {
            return {...state, seoReport: {...state.seoReport, value: action.info.text}}
        }
        default:
            return state
    }
}


export const titleSeoMiniEdit = (info)=>({
    type: 'TITLE_SEO_MINI_INFO', info
})
export const titleKeysPageEdit = (info)=>({
    type: 'TITLE_KEYS_PAGE_CHANGE', info
})
export const descrSeoMiniEdit = (info)=>({
    type: 'DESCR_SEO_MINI_INFO', info
})
export const titleSeoServicesEdit = (info)=>({
    type: 'TITLE_SEO_SERVICES_INFO', info
})
export const titleSeoStableEdit = (info)=>({
    type: 'TITLE_SEO_STABLE_INFO', info
})
export const titleSeoQuestionEdit = (info)=>({
    type: 'TITLE_SEO_QUESTION_INFO', info
})

export const titleSeoMonthEdit = (info)=>({
    type: 'TITLE_SEO_MONTH_INFO', info
})
export const titleSeoReportEdit = (info)=>({
    type: 'TITLE_SEO_REPORT_INFO', info
})
export const bottomTitleSeoReportEdit = (info)=>({
    type: 'BOTTOM_TITLE_SEO_REPORT_INFO', info
})
export const bottomDescrSeoReportEdit = (info)=>({
    type: 'BOTTOM_DESCR_SEO_REPORT_INFO', info
})
export const numberSeoReportEdit = (info)=>({
    type: 'NUMBER_SEO_REPORT_INFO', info
})
export const valueSeoReportEdit = (info)=>({
    type: 'VALUE_SEO_REPORT_INFO', info
})



export const titleMarketplaceTextsEdit = (info)=>({
    type: 'TITLE_MARKETPLACE_TEXTS_INFO', info
})
export const overDescrMarketplaceTextsEdit = (info)=>({
    type: 'OVER_DESCR_MARKETPLACE_TEXTS_INFO', info
})
export const descrMarketplaceTextsEdit = (info)=>({
    type: 'DESCR_MARKETPLACE_TEXTS_INFO', info
})

export const titleContactPageEdit = (info)=>({
    type: 'TITLE_CONTACT_PAGE_CHANGE', info
})
export const titleItemFirstContactPageEdit = (info)=>({
    type: 'TITLE_ITEM_FIRST_CONTACT_PAGE_CHANGE', info
})
export const titleNumberFirstContactPageEdit = (info)=>({
    type: 'TITLE_NUMBER_FIRST_CONTACT_PAGE_CHANGE', info
})
export const titleEmailFirstContactPageEdit = (info)=>({
    type: 'TITLE_EMAIL_FIRST_CONTACT_PAGE_CHANGE', info
})
export const valueEmailFirstContactPageEdit = (info)=>({
    type: 'VALUE_EMAIL_FIRST_CONTACT_PAGE_CHANGE', info
})
export const valueNumberFirstContactPageEdit = (info)=>({
    type: 'VALUE_NUMBER_FIRST_CONTACT_PAGE_CHANGE', info
})
export const titleItemSecContactPageEdit = (info)=>({
    type: 'TITLE_ITEM_SEC_CONTACT_PAGE_CHANGE', info
})
export const addredItemSecContactPageEdit = (info)=>({
    type: 'ADDRES_ITEM_SEC_CONTACT_PAGE_CHANGE', info
})
export const addresValueSecContactPageEdit = (info)=>({
    type: 'ADDRES_VALUE_SEC_CONTACT_PAGE_CHANGE', info
})

export const titleVacancyPageEdit = (info)=>({
    type: 'TITLE_VACANCY_PAGE_CHANGE', info
})
export const titleAboutPageEdit = (info)=>({
    type: 'TITLE_ABOUT_PAGE_CHANGE', info
})
export const titleReviewsPageEdit = (info)=>({
    type: 'TITLE_REVIEWS_PAGE_CHANGE', info
})
export const descrFirstAboutPageEdit = (info)=>({
    type: 'DESCR_FIRST_ABOUT_PAGE_CHANGE', info
})
export const descrSecAboutPageEdit = (info)=>({
    type: 'DESCR_SEC_ABOUT_PAGE_CHANGE', info
})
export const descrThirdAboutPageEdit = (info)=>({
    type: 'DESCR_THIRD_ABOUT_PAGE_CHANGE', info
})
export const descrFourthAboutPageEdit = (info)=>({
    type: 'DESCR_FOURTH_ABOUT_PAGE_CHANGE', info
})
export const topCountAboutPageEdit = (info)=>({
    type: 'TOP_COUNT_ABOUT_PAGE_CHANGE', info
})
export const bottomCountAboutPageEdit = (info)=>({
    type: 'BOTTOM_COUNT_ABOUT_PAGE_CHANGE', info
})
export const topDescrAboutPageEdit = (info)=>({
    type: 'TOP_DESCR_ABOUT_PAGE_CHANGE', info
})
export const bottomAboutPageEdit = (info)=>({
    type: 'BOTTOM_DESCR_ABOUT_PAGE_CHANGE', info
})


export const titleQuizEdit = (info)=>({
    type: 'TITLE_QUIZ_INFO', info
})
export const titleApplicationEdit = (info)=>({
    type: 'TITLE_APPLICATION_INFO', info
})
export const descrApplicationEdit = (info)=>({
    type: 'DESCR_APPLICATION_INFO', info
})
export const subdescrApplicationEdit = (info)=>({
    type: 'SUBDESCR_APPLICATION_INFO', info
})
export const titleTariffEdit = (info)=>({
    type: 'TITLE_TARIFF_INFO', info
})
export const titleDevEdit = (info)=>({
    type: 'TITLE_DEV_INFO', info
})
export const titleOfferEdit = (info)=>({
    type: 'TITLE_OFFER_INFO', info
})
export const descrOfferEdit = (info)=>({
    type: 'DESCR_OFFER_INFO', info
})
export const titlePriceOfferEdit = (info)=>({
    type: 'TITLE_PRICE_OFFER_INFO', info
})
export const descrPriceOfferEdit = (info)=>({
    type: 'DESCR_PRICE_OFFER_INFO', info
})
export const titleContactOfferEdit = (info)=>({
    type: 'TITLE_CONTACT_OFFER_INFO', info
})
export const descrContactOfferEdit = (info)=>({
    type: 'DESCR_CONTACT_OFFER_INFO', info
})
export const descrEdit = (info)=>({
    type: 'DESCR_QUIZ_INFO', info
})
export const titleResEdit = (info)=>({
    type: 'TITLE_RES_INFO', info
})
export const titlekeysEdit = (info)=>({
    type: 'TITLE_KEYS_MAIN_INFO', info
})
export const descrKeysEdit = (info)=>({
    type: 'DESCR_KEYS_MAIN_INFO', info
})
export const titleLiderEdit = (info)=>({
    type: 'TITLE_LIDER_INFO', info
})
export const descrLiderEdit = (info)=>({
    type: 'DESCR_LIDER_INFO', info
})
export const initialisLiderEdit = (info)=>({
    type: 'INITIIALS_LIDER_INFO', info
})

export const postLiderEdit = (info)=>({
    type: 'POST_LIDER_INFO', info
})
export const titleSimpleEdit = (info)=>({
    type: 'TITLE_SIMPLE_INFO', info
})
export const titleReviewEdit = (info)=>({
    type: 'TITLE_REVIEW_INFO', info
})
export const titleQuestionEdit = (info)=>({
    type:  'TITLE_QUESTION_INFO', info
})
export const descrQuestionEdit = (info)=>({
    type: 'DESCR_QUESTION_INFO', info
})

export const bottomDesccrQuestionEdit = (info)=>({
    type:  'BOTTOM_DESCR_QUESTION_INFO', info
})
