import React, {useState} from "react";
import cl from '../../style/MainApplication.module.css';
import MyBtnBlank from "../UI/buttonborder/MyBtnBlank";
import MyMask from "../UI/maskinput/MyMask";
import MyInput from "../UI/input/MyInput";
import MyModal from "../UI/modal/MyModal";
import postRequest from "../../../redux/requests";
import MyThxModal from "../UI/thxmodal/MyThxModal";
import MyViewElement from "../UI/viewelement/MyViewElement";
import MyAdminInput from '../UI/admininput/MyAdminInput';
import { useSelector } from "react-redux";
const MainApplication = ()=>{
    const [modalInfo, setModalInfo] = useState({namePerson: '', tel: ''})
    const isAdmin = useSelector(state=>state.AdminKey)
    let forServerInfo = {}
    const {AdminTexts} = useSelector(state=>state)
    console.log(AdminTexts)
    const addModalInfo = (e)=>{
        e.preventDefault();
        setModal(true); 
        const newModal = {
            ...modalInfo, id: Date.now()
        }
        forServerInfo = {...newModal}
        setModalInfo({namePerson:'',tel:''})
        console.log(forServerInfo);
        // postRequest(forServerInfo)

    }

    const [adminInfo, setAdminInfo] = useState({title: {width:0,height:0}, descr: {width:0,height:0}, subdescr: {width:0,height:0}})

    const [modal, setModal] = useState(false)
    return (
        <section className={cl.application}>
           
            <div className={cl.applicationLeftBg}></div>



            
                 <div className="container">
           
                 <div className={cl.applicationContent}>
                     
                         <div className={cl.applicationLeftBlock}>
                             <span className={cl.applicationFemaleBg}>
 
                             </span>
                         </div>
                     
                     
                     <div className={cl.applicationRightBlock}>
                         <div className={cl.applicationRightContent}>
                             
                                 <form action="" id='application'>
                                    {isAdmin ? 
                                        <MyAdminInput width={adminInfo.title.width} height={adminInfo.title.height} typeAction={'TITLE_APPLICATION_INFO'}>
                                            <h2 className={cl.applicationRightTitle} onClick={e=>setAdminInfo({...adminInfo, title: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{AdminTexts.mainApplication.title}</h2>
                                        </MyAdminInput>
                                    :
                                        <h2 className={cl.applicationRightTitle}>Оставить заявку</h2>
                                    }
                                    {isAdmin ? 
                                        <MyAdminInput width={adminInfo.descr.width} height={adminInfo.descr.height} typeAction={'DESCR_APPLICATION_INFO'}>
                                            <p className={cl.applicationRightDescr}  onClick={e=>setAdminInfo({...adminInfo, descr: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{AdminTexts.mainApplication.descr}</p>  
                                        </MyAdminInput>
                                    :
                                        <p className={cl.applicationRightDescr}>Заполните форму и наш менеджер свяжется с вами в течение дня, чтобы обсудить вашу задачу</p>
                                    }
                                     <div className={cl.applicationInputBlock}>
                                         <MyInput required place='Ваше имя' classesInput={cl.applicationInput} valueInput={modalInfo.namePerson} setInput={setModalInfo} input={modalInfo} classesPlace={cl.applicationPlace}/>
                                         <MyMask classesItem={cl.applicationMask} classesPlace={cl.applicationPlaceM} value={modalInfo.tel} onChange={e => setModalInfo({...modalInfo, tel: e.target.value})}/>
                                     </div>
                                     {isAdmin ? 
                                        <MyAdminInput width={adminInfo.subdescr.width} height={adminInfo.subdescr.height} typeAction={'SUBDESCR_APPLICATION_INFO'}>
                                            <p className={cl.applicationBottomDescr} onClick={e=>setAdminInfo({...adminInfo, subdescr: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{AdminTexts.mainApplication.subdescr}</p>
                                        </MyAdminInput>
                                    :
                                        <p className={cl.applicationBottomDescr}>Нажимая на кнопку, вы даете согласие на обработку ваших персональных данных</p>
                                    }
                                     <MyBtnBlank classes={cl.applicationBtn} type='submit' form='application' onClick={(e)=>{addModalInfo(e)}}>ОТПРАВИТЬ</MyBtnBlank>
                                     <MyBtnBlank classes={cl.applicationBtnM}  type='submit' form='application' onClick={(e)=>{addModalInfo(e)}}>ОСТАВИТЬ ЗАЯВКУ</MyBtnBlank>
                                 </form>
                            
                         </div>
                     </div>
                 </div>
                  
             </div>
           
           
            <div className={cl.applicationRightBg}></div>
            <MyThxModal visible={modal} setVisible={setModal}/>
        </section>
    )
}

export default MainApplication