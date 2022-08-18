import React, { useRef, useEffect } from "react";
import cl from '../../style/VacancyAcc.module.css';
import MyAddElement from "../UI/adminaddel/MyAddElement";

import VacancyAccItem from "./VacancyAccItem";



const VacancyAccAll = ({itemList, actionTitle, actionDescr, actionQuestion, actionList, actionListAdd, actionListDelete, actionAddMain = 'VACANCY_ADD_ELEMENT', actionDeleteMain})=>{
   
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
  
    return (
        <>
             <div className={cl.listAcc}>
                <MyAddElement typeAction={actionAddMain}/>
                {itemList.map((e,i)=><VacancyAccItem actionTitle={actionTitle} actionDescr={actionDescr} actionQuestion={actionQuestion} actionList={actionList} actionDeleteMain={actionDeleteMain} actionListAdd={actionListAdd} actionListDelete={actionListDelete} key={i} id={e.id} handleChange={handleChange} expanded={expanded} title={e.title} descr={e.descr} whatDo={e.whatdo} info={e.list} check={'panel' + (i + 1)}/>)}
            </div>
        </>
       
    )
}

export default VacancyAccAll