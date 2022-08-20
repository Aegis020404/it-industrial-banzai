import React, {useEffect, useState} from 'react';
import cl from '../../style/MobilePortfolio.module.css';

import MyBtnBlank from "../UI/buttonborder/MyBtnBlank";
import Link from "next/link";
import MyViewElement from "../UI/viewelement/MyViewElement";

import { useSelector, useDispatch } from 'react-redux';

import MyAddElement from '../UI/adminaddel/MyAddElement';
import MyAdminInput from '../UI/admininput/MyAdminInput';
import MyDeleteElement from '../UI/admindelel/MyDeleteElement';
import MyAdminModal from '../UI/adminmodal/MyAdminModal';
import Image from "next/image";
const MobilePortfolio = ()=>{
    const infoData =    useSelector(state=>state.CrmPortfolio)
    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)
    const portfolioTexts = useSelector(state=>state.AdminTexts.crmPortfolio)
    const [activeChange, setActiveChange] = useState('')
    console.log(activeChange)
    const [crmData, setCrmData] = useState({title: {width:0,height:0}, descr:{width:0,height:0}, textItem:{width:0,height:0} })
    const [isModal, setIsModal] = useState(false)
    return (
        <section className={cl.portSection}>
            <div className="container">
                <MyViewElement element={
                      isAdmin ? 
                      <MyAdminInput width={crmData.title.width}  height={crmData.title.height} typeAction={'TITLE_PORTFOLIO_CRM_PAGE_INFO'}>

                          <h2 className={cl.portTitle} onClick={e=>setCrmData({...crmData, title: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{portfolioTexts.title}</h2>
                      </MyAdminInput>
                      :
                      <h2 className={cl.portTitle}>{portfolioTexts.title}</h2>
                

                }/>
                <MyViewElement element={
                      isAdmin ? 
                      <MyAdminInput width={crmData.descr.width}  height={crmData.descr.height} typeAction={'DESCR_PORTFOLIO_CRM_PAGE_INFO'}>
                          <p className={cl.portDescr}  onClick={e=>setCrmData({...crmData, descr: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{portfolioTexts.descr}</p>
                      </MyAdminInput>
                      :
                      <p className={cl.portDescr}>{portfolioTexts.descr}</p>

                
                }/>
                    
               <div className={cl.portCardBlock}>
                <MyAddElement typeAction={'ADD_CRM_PORTFOLIO_ELEMENT'}></MyAddElement>
                {infoData.map(e=>
                    isAdmin ? 
                    <MyViewElement element={
                        <div className={cl.adminBlockPortf}>
                            <div className={cl.adminModalBtn} onClick={event=>{setIsModal(true); setActiveChange(e)}} >ИЗМЕНИТЬ</div>
                            <MyDeleteElement typeAction={'DELETE_CRM_PORTFOLIO_ELEMENT'} id={e.id}></MyDeleteElement>
                             
                                <figure className={cl.portFigure}>
                                    <Link href={e.href}>
                                        <div className={[cl.portBlock, e.classes].join` `}  onClick={e=>document.body.scrollTo({top:0,behavior:'smooth'})} style={{'backgroundColor': e.background}}>
                                            <Image  src={e.img} />
                                        </div>
                                    </Link>
                                    {
                                         isAdmin ? 
                                         <MyAdminInput width={crmData.textItem.width}  id={e.id} height={crmData.textItem.height} typeAction={'DESCR_CRM_PORTFOLIO_CHANGE'}>
                                             <figcaption className={cl.portImgDescr}  onClick={e=>setCrmData({...crmData, textItem: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{e.descr}</figcaption>
                                         </MyAdminInput>
                                         :
                                         <figcaption className={cl.portImgDescr}>{e.descr}</figcaption>
                                    }
                                   
                                </figure>
                           
                        </div>
                       
                    }/>
                    :
                    <MyViewElement element={
                        <Link href={e.href}>
                              <figure className={cl.portFigure} onClick={e=>document.body.scrollTo({top:0,behavior:'smooth'})}>
                                <div className={[cl.portBlock, e.classes].join` `} style={{'backgroundColor': e.background}}>
                                    <Image src={e.img} />
                                </div>
                                <figcaption className={cl.portImgDescr}>{e.descr}</figcaption>
                            </figure>
                        </Link>
                    }/>
                )}
                </div>
                <MyViewElement element={

                <div className={cl.portBtnBlock}>
                    <Link href='/keys'>
                        <a  className={cl.portLink}>
                        <MyBtnBlank classes={cl.portBtn} onClick={e=>{document.body.scrollTo({top:0,behavior:'smooth'})}}>ВСЕ КЕЙСЫ</MyBtnBlank>
                        </a>
                      
                    </Link>
                </div>
                }/>

            </div>
            <MyAdminModal visible={isModal} setVisible={setIsModal} hrefValue={activeChange.href} colorValue={activeChange.background} imgValue={activeChange.img}></MyAdminModal>
        </section>
    )
}

export default MobilePortfolio