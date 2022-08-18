import React from 'react';
import MyTitle from '../UI/titlepage/MyTitle';
import cl from '../../style/VacancyAcc.module.css';
import VacancyAccAll from './VacancyAccAll';
import VacancyAccItem from './VacancyAccItem';
import { useSelector } from 'react-redux';

const VacancyAcc = ()=>{
    const vacancyInfo = useSelector(state=>state.VacancyAccordion)
    const vacancyTexts = useSelector(state=>state.AdminTexts.vacancyTexts)
    return (
        <>
            <section className={cl.vacancySection}>
                <div className={["container", cl.container].join` `}>
                    <div className={cl.vacancyCont}>
                        <MyTitle title={vacancyTexts.title} typeAction={'TITLE_VACANCY_PAGE_CHANGE'} classes={cl.title}/>
                        <VacancyAccAll itemList={vacancyInfo} actionTitle={'VACANCY_TITLE_CHANGE'} actionDescr={'VACANCY_DESCR_CHANGE'} actionQuestion={'VACANCY_QUESTION_CHANGE'} actionList={'VACANCY_LIST_CHANGE'} actionListAdd={'VACANCY_LIST_ADD_ELEMENT'} actionListDelete={'VACANCY_LIST_DELETE_ELEMENT'}/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default VacancyAcc