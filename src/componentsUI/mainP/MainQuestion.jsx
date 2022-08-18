import React, { useState } from "react";
import cl from '../../style/MainQuestion.module.css';
import MyBtnFiled from "../UI/buttonback/MyBtnFiled";
import MyInput from "../UI/input/MyInput";
import MyMask from "../UI/maskinput/MyMask";
import MyModal from "../UI/modal/MyModal";
import MyTextarea from "../UI/textarea/MyTextarea";
import MyThxModal from "../UI/thxmodal/MyThxModal";
import MyViewElement from "../UI/viewelement/MyViewElement";
import MyAdminInput from "../UI/admininput/MyAdminInput";
import MyAddElement from '../UI/adminaddel/MyAddElement';
import { useSelector } from "react-redux";

const MainQuestion = ()=>{
    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)
    const questionTexts = useSelector(state=>state.AdminTexts.mainQuestion)
    const [sizeInfo, setSizeInfo] = useState({title: {width:0,height:0}, descr: {width:0,height:0}, bottomDescr: {width:0,height:0}})
    const itemInfo = useSelector(state=>state.MainKeys)
    const [isModal, setIsModal] = useState(false)

    const [modalInfo, setModalInfo] = useState({namePerson: '', tel: '', question: ''})

    let forServerInfo = {}

    const addModalInfo = (e)=>{
        e.preventDefault();
        setModal(true); 
        const newModal = {
            ...modalInfo, id: Date.now()
        }
        forServerInfo = {...newModal}
        setModalInfo({namePerson:'',tel:'', question:''})
        console.log(forServerInfo);
    }

    const [modal, setModal] = useState(false)

    return (
        <section className={cl.question}>
            <div className={cl.questionLeftImg}></div>
            <div className={cl.questionRightImg}></div>
            <div className={['container', cl.container].join` `}>
                <div className={cl.questionContent}>
                    <MyViewElement element={
                   
                        isAdmin ? 
                          <MyAdminInput width={sizeInfo.title.width}  height={sizeInfo.title.height} typeAction={'TITLE_QUESTION_INFO'}>
                            <h2 className={cl.questionTitle}  onClick={e=>setSizeInfo({...sizeInfo, title: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{questionTexts.title}</h2>
                          </MyAdminInput>
                          :
                          <h2 className={cl.questionTitle}>{questionTexts.title}</h2>
                        
                    }/>
                    <MyViewElement element={
                          isAdmin ? 
                          <MyAdminInput width={sizeInfo.descr.width}  height={sizeInfo.descr.height} typeAction={'DESCR_QUESTION_INFO'}>
                             <p className={cl.questionDescr}  onClick={e=>setSizeInfo({...sizeInfo, descr: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{questionTexts.descr}</p>

                          </MyAdminInput>
                          :
                          <p className={cl.questionDescr}>{questionTexts.descr}</p>

                     }/>
                     <MyViewElement element={
                    <form action="" id='question' className={cl.questionForm}>
                        <div className={cl.questionFormTop}>
                            <MyInput setInput={setModalInfo} input={modalInfo} valueInput={modalInfo.namePerson} place='Введите ваше имя' classesInput={cl.questionInput} classesPlace={cl.questionInputP}/>
                            <MyMask classesItem={cl.questionMask} classesPlace={cl.questionPlaceMask} value={modalInfo.tel} onChange={e => setModalInfo({...modalInfo, tel: e.target.value})} />
                        </div>
                        <div className={cl.questiontextAreaBlock}>
                            <MyTextarea setTextarea={setModalInfo} textarea={modalInfo} textareaValue={modalInfo.question} place='Ваш вопрос' classesTextarea={cl.questionTextarea} classesPlace={cl.questionTextareaP}/>
                        </div>
                        {
                            isAdmin ? 
                            <MyAdminInput width={sizeInfo.bottomDescr.width}  height={sizeInfo.bottomDescr.height} typeAction={'BOTTOM_DESCR_QUESTION_INFO'}>
                               <p className={cl.questionDescrForm}  onClick={e=>setSizeInfo({...sizeInfo, bottomDescr: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{questionTexts.bottomDescr}</p>
                            </MyAdminInput>
                            :
                            <p className={cl.questionDescrForm}>{questionTexts.bottomDescr}</p>
  
                        }
                       
                        <MyBtnFiled type='submit' form='question' classes={cl.questionBtn} onClick={e=>{addModalInfo(e)}}>ЗАДАТЬ ВОПРОС</MyBtnFiled>
                        
                    </form>
                     }/>
                </div>
            </div>
           
            <MyThxModal visible={modal} setVisible={setModal}/>
        </section>
    )
}

export default MainQuestion