import React, { useState } from "react";
import cl from '../../style/MainResult.module.css'
import MyAdminInput from "../UI/admininput/MyAdminInput";
import MyViewElement from "../UI/viewelement/MyViewElement";
import { useSelector } from "react-redux";
import MyAddElement from '../UI/adminaddel/MyAddElement';
import MyDeleteElement from '../UI/admindelel/MyDeleteElement';
import MainResultItem from "./MainResultItem";
const MainResult = ()=>{
    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)
    const adminTexts = useSelector(state=>state.AdminTexts)
    const dataRes = useSelector(state=>state.MainRes)
    const [resInfo, setResinfo]=useState({title: {width:0,height:0}, itemTitle: {width:0,height:0}, itemDescr: {width:0,height:0}})
    return (
        <section className={cl.resultSection}>
            <div className="container">
                <div className={cl.resultContent}>
                    <MyViewElement element={
                        <div className={cl.resultTitleBlock}>
                            {isAdmin ? 
                                <MyAdminInput width={resInfo.title.width} height={resInfo.title.height} typeAction={'TITLE_RES_INFO'}>
                                    <h2 className={cl.resultTitle} onClick={e=>setResinfo({...resInfo, title: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{adminTexts.mainRes.title}</h2>
                                </MyAdminInput>
                            :   
                                <h2 className={cl.resultTitle}>{adminTexts.mainRes.title}</h2>
                            }
                            
                        </div>
                    }/>
                     <MyViewElement element={
                        <div className={cl.resultListBlock}>
                        <ul className={cl.resultList}>
                        {isAdmin ? <MyAddElement typeAction={'ADD_RES_ELEMENT'}/> : ''}
                            {dataRes.map((e,i)=>
                               <MainResultItem infoObj={e} key={i}/>
                            )}
                        </ul>
                    </div>    
                    }/>
                    
                </div>
            </div>
        </section>
    )
}

export default MainResult