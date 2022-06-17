import React from 'react';
import MyTitle from '../UI/titlepage/MyTitle';
import cl from '../../style/VacancyAcc.module.css';
import VacancyAccAll from './VacancyAccAll';
import VacancyAccItem from './VacancyAccItem';

const VacancyAcc = ()=>{
    const vacancyInfo = [ {title: 'Программист', descr: 'Мы ищем дизайнера на продукт 1cloud-автоматизированный онлайн сервис аренды виртуальной инфраструктуры, ориентированный на малый, средний бизнес и физический лиц.', whatdo: 'Чем предстоит заниматься:', list: ['​​​​​Разрабатывать концепций дизайна и интерфейсов web-сайтов, лендинг страниц, e-mail рассылок;', 'Проектировать логическую структуру и визуальное представление (прототипы);', 'Создавать дизайн-макеты (технический дизайн) разделов страниц, интерфейсов, модулей;', 'Участвовать в разработке креативов, создавать графические и стилистические элементы, дизайн баннеров (статичных, анимированных);', 'Взаимодействовать с разработчиками и менеджерами проекта;', 'Осуществлять авторский надзор и тестирование после вёрстки;', 'Внедрять улучшения на основе UX, выявлять сильные стороны конкурентов;', 'Визуализировать информацию, создавать презентации и демо-контент;', 'Визуализировать информацию, создавать презентации и демо-контент;', 'Сопровождать дизайн в социальных медиа и на Интернет-площадках;', 'Совершенствовать фирменный стиль, работать с брендбуком и гайдлайнами;' ] },
    {title: 'Веб-дизайнер', descr: 'Мы ищем дизайнера на продукт 1cloud-автоматизированный онлайн сервис аренды виртуальной инфраструктуры, ориентированный на малый, средний бизнес и физический лиц.', whatdo: 'Чем предстоит заниматься:', list: ['​​​​​Разрабатывать концепций дизайна и интерфейсов web-сайтов, лендинг страниц, e-mail рассылок;', 'Проектировать логическую структуру и визуальное представление (прототипы);', 'Создавать дизайн-макеты (технический дизайн) разделов страниц, интерфейсов, модулей;', 'Участвовать в разработке креативов, создавать графические и стилистические элементы, дизайн баннеров (статичных, анимированных);', 'Взаимодействовать с разработчиками и менеджерами проекта;', 'Осуществлять авторский надзор и тестирование после вёрстки;', 'Внедрять улучшения на основе UX, выявлять сильные стороны конкурентов;', 'Визуализировать информацию, создавать презентации и демо-контент;', 'Визуализировать информацию, создавать презентации и демо-контент;', 'Сопровождать дизайн в социальных медиа и на Интернет-площадках;', 'Совершенствовать фирменный стиль, работать с брендбуком и гайдлайнами;' ] },
    {title: 'Копирайтер', descr: 'Мы ищем дизайнера на продукт 1cloud-автоматизированный онлайн сервис аренды виртуальной инфраструктуры, ориентированный на малый, средний бизнес и физический лиц.', whatdo: 'Чем предстоит заниматься:', list: ['​​​​​Разрабатывать концепций дизайна и интерфейсов web-сайтов, лендинг страниц, e-mail рассылок;', 'Проектировать логическую структуру и визуальное представление (прототипы);', 'Создавать дизайн-макеты (технический дизайн) разделов страниц, интерфейсов, модулей;', 'Участвовать в разработке креативов, создавать графические и стилистические элементы, дизайн баннеров (статичных, анимированных);', 'Взаимодействовать с разработчиками и менеджерами проекта;', 'Осуществлять авторский надзор и тестирование после вёрстки;', 'Внедрять улучшения на основе UX, выявлять сильные стороны конкурентов;', 'Визуализировать информацию, создавать презентации и демо-контент;', 'Визуализировать информацию, создавать презентации и демо-контент;', 'Сопровождать дизайн в социальных медиа и на Интернет-площадках;', 'Совершенствовать фирменный стиль, работать с брендбуком и гайдлайнами;' ] },
    {title: 'Менеджер', descr: 'Мы ищем дизайнера на продукт 1cloud-автоматизированный онлайн сервис аренды виртуальной инфраструктуры, ориентированный на малый, средний бизнес и физический лиц.', whatdo: 'Чем предстоит заниматься:', list: ['​​​​​Разрабатывать концепций дизайна и интерфейсов web-сайтов, лендинг страниц, e-mail рассылок;', 'Проектировать логическую структуру и визуальное представление (прототипы);', 'Создавать дизайн-макеты (технический дизайн) разделов страниц, интерфейсов, модулей;', 'Участвовать в разработке креативов, создавать графические и стилистические элементы, дизайн баннеров (статичных, анимированных);', 'Взаимодействовать с разработчиками и менеджерами проекта;', 'Осуществлять авторский надзор и тестирование после вёрстки;', 'Внедрять улучшения на основе UX, выявлять сильные стороны конкурентов;', 'Визуализировать информацию, создавать презентации и демо-контент;', 'Визуализировать информацию, создавать презентации и демо-контент;', 'Сопровождать дизайн в социальных медиа и на Интернет-площадках;', 'Совершенствовать фирменный стиль, работать с брендбуком и гайдлайнами;' ] },
]
    return (
        <section className={cl.vacancySection}>
            <div className={["container", cl.container].join` `}>
                <div className={cl.vacancyCont}>
                    <MyTitle title={'Вакансии'} classes={cl.title}/>
                    <VacancyAccAll itemList={vacancyInfo}/>
                </div>
            </div>
        </section>
    )
}

export default VacancyAcc