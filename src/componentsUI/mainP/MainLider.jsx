import React, {useState} from "react";
import cl from '../../style/MainLider.module.css';
import MyViewElement from "../UI/viewelement/MyViewElement";
import { useSelector } from "react-redux";
import MyAdminModal from '../UI/adminmodal/MyAdminModal';
import MyAdminInput from "../UI/admininput/MyAdminInput";
const MainLider = ()=>{
    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)
    const liderTexts = useSelector(state=>state.AdminTexts.mainLider)
    const [sizeInfo, setSizeInfo] = useState({title: {width:0,height:0}, descr: {width:0,height:0}, initialis:  {width:0,height:0}, post:  {width:0,height:0}})
    const [isModal, setIsModal] = useState(false)
    return (
        <section className={cl.lider}>
            <div className="container">
                <div className={cl.liderContent}>
                    <div className={cl.liderLeft}>
                        <MyViewElement element={
                             isAdmin ? 
                             <MyAdminInput width={sizeInfo.title.width}  height={sizeInfo.title.height} typeAction={'TITLE_LIDER_INFO'}>
                                 <h2 className={cl.liderTitle} onClick={e=>setSizeInfo({...sizeInfo, title: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{liderTexts.title}</h2>
                             </MyAdminInput>
                             :
                             <h2 className={cl.liderTitle}>{liderTexts.title}</h2>
                           
                        }/>
                        <MyViewElement element={
                        <div className={cl.liderDescrBlock}>
                            <span className={cl.liderQuote}/>
                            <p className={cl.liderDescr}>
                                <span className={cl.liderDescrB}>К нам часто приходят клиенты</span> 
                                от других студий
                                <span className={cl.liderDescrB}>переделывать сайты</span>
                                , потому что они не работают и клиентов не приносят. Мы не экономим, делаем сайт хорошо один раз, и он вам стабильно приносит заявки 2-3 года.
                            </p>
                        </div>
                        }/>
                        <MyViewElement element={
                        <div className={cl.liderInfo}>
                            {
                                 isAdmin ? 
                                 <MyAdminInput width={sizeInfo.initialis.width}  height={sizeInfo.initialis.height} typeAction={'INITIIALS_LIDER_INFO'}>
                                     <p className={cl.liderName}  onClick={e=>setSizeInfo({...sizeInfo, initialis: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{liderTexts.initialis}</p>
                                 </MyAdminInput>
                                 :
                                 <p className={cl.liderName}>{liderTexts.initialis}</p>
                            }
                            {
                                 isAdmin ? 
                                 <MyAdminInput width={sizeInfo.post.width}  height={sizeInfo.post.height} typeAction={'POST_LIDER_INFO'}>
                                     <p className={cl.liderNameDescr}  onClick={e=>setSizeInfo({...sizeInfo, post: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{liderTexts.post}</p>
                                 </MyAdminInput>
                                 :
                                 <p className={cl.liderNameDescr}>{liderTexts.post}</p>
                            }
                            
                          
                        </div>
                        }/>
                    </div>
                    <div className={cl.liderRight}>
                        <div className={cl.liderPerson}>

                        </div>
                    </div>
                </div>
            </div>
            <MyAdminModal imgValue={1} actionImg={''}></MyAdminModal>
        </section>
    )
}

export default MainLider