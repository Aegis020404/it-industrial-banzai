import React, {useState} from "react";
import cl from '../../style/CrmOpportunities.module.css'
import MobileOppServ from "../mobilemsc/MobileOppServ";
import { useSelector } from 'react-redux';
import MyAdminInput from "../UI/admininput/MyAdminInput";
import MyAddElement from "../UI/adminaddel/MyAddElement";
import MyViewElement from "../UI/viewelement/MyViewElement";

const CrmOpportunities = ()=>{
    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)
    const crmTexts = useSelector(state=>state.AdminTexts.crmServices)
    const infoArr =  useSelector(state=>state.crmServices)
    const [crmData, setCrmData] = useState({title: {width:0,height:0}})
    return (
        <section className={cl.crmSection}>
            <div className="container">
            <MyViewElement element={ 
                    isAdmin ? 
                        <MyAdminInput width={crmData.title.width}  height={crmData.title.height} typeAction={'TITLE_SERVICES_CRM_PAGE_INFO'}>

                            <h2 className={cl.crmTitle} onClick={e=>setCrmData({...crmData, title: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{crmTexts.title}</h2>
                        </MyAdminInput>
                    :
                     <h2 className={cl.crmTitle}>{crmTexts.title}</h2>
                }/>
                <MobileOppServ dataInfo={infoArr} />
            </div>
        </section>
    )
}

export default CrmOpportunities