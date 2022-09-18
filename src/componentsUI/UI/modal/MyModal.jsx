import React, {useState, useMemo, useRef} from "react";
import cl from './MyModal.module.css';
import MyBtnFiled from "../buttonback/MyBtnFiled";
import MyInput from "../input/MyInput";
import MyMask from "../maskinput/MyMask";
import postRequest from "../../../../redux/requests";
import ContactsService from "../../../API/ContactsService";
import { useFetchingPost } from "../../../hooks/useAdminChangeing";
const MyModal = ({block, title, visible, setVisible, setThx, id, infoObj = {}})=>{
    
    const [modalInfo, setModalInfo] = useState({namePerson: '', tel: ''})

    const blockModal = useRef('')
    let forServerInfo = {}
    const rootClasses = [cl.modalBlock]
    const rootContentClasses = [cl.modalContent]

    const addModalInfo = (e)=>{
        e.preventDefault();
        setVisible(false); 
        useFetchingPost({...modalInfo, ...infoObj}, 'modalOrder', id);
       
    }


    let clean = false

    let [distance, setDistance] = useState(0) 
  
    visible && rootClasses.push(cl.active) && rootContentClasses.push(cl.activeContent)
    return (
        <div ref={blockModal} className={rootClasses.join` `} onClick={(e)=>{e.preventDefault();setVisible(false)}}>
          
                <div  className={rootContentClasses.join` `} >
                    <form action="" id='modal' className={cl.modalForm} onClick={e=>e.stopPropagation()}>
                        <h3 className={cl.modalTitle}>{title}</h3>
                        <p className={cl.modalDescr}>Менеджер свяжется с вами в течение дня, чтобы обсудить вашу задачу</p>
                        <MyInput valueInput={modalInfo.namePerson}  required clean={clean} classesInput={cl.modalInput} classesPlace={cl.modalPlace} place='Ваше имя' setInput={setModalInfo} input={modalInfo}/>
                        <MyMask classesItem={cl.modalMask} classesPlace={cl.modalMaskPlace} value={modalInfo.tel} onChange={e => setModalInfo({...modalInfo, tel: e.target.value})} required/>
                        <p className={cl.modalWarning}>Нажимая на кнопку, вы даете согласие на обработку ваших персональных данных</p>
                        <span className={cl.modalExit} onClick={e=>{e.preventDefault();setVisible(false)}}></span>
                        <div className={cl.btnBlock}>
                            <MyBtnFiled  type='submit' form='modal' classes={cl.modalBtn} onClick={e=>{addModalInfo(e); clean = true; setThx(true)}}>ОТПРАВИТЬ</MyBtnFiled>
                        </div>
                    </form>
                </div>
           
        </div>
    )
}

export default MyModal