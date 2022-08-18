import React, {useState, useMemo, useRef, useCallback} from "react";
import cl from './MyAdminModal.module.css';
import MyBtnFiled from "../buttonback/MyBtnFiled";
import MyInput from "../input/MyInput";
import MyMask from "../maskinput/MyMask";
import postRequest from "../../../../redux/requests";
import ContactsService from "../../../API/ContactsService";
import { useDispatch } from "react-redux";
import {useDropzone} from 'react-dropzone'

const MyAdminModal = ({visible, setVisible, colorValue, hrefValue, imgValue,altValue, id, count, actionHref, actionColor, actionAlt, actionImg})=>{
    const dispatch = useDispatch()
    const [modalInfo, setModalInfo] = useState({img: ''})
    const [color, setColor] = useState('')
    const [inputValue, setInputValue] = useState('')
    const [altInput, setAltInput] = useState('')
    const blockModal = useRef('')
    let forServerInfo = {}
    const rootClasses = [cl.modalBlock]
    const rootContentClasses = [cl.modalContent]
    const [isImg, setIsImg] = useState('')
    useMemo(()=>{console.log(isImg)},[isImg])
    const onDrop = useCallback(acceptedFiles => {
        setModalInfo({...modalInfo, img:acceptedFiles[0].path})
      }, [])
      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    
      

    const addModalInfo = (e)=>{
        e.preventDefault();
        console.log(modalInfo)
        colorValue &&  dispatch({type: actionColor, info: {text: color, id: id, count: count}})
        hrefValue && inputValue && dispatch({type: actionHref, info: {text: inputValue, id: id, count: count}})
        altValue && altInput && dispatch({type: actionAlt, info: {text: altInput, id: id, count: count}})
        imgValue && modalInfo.img && dispatch({type: actionImg, info: {text: modalInfo.img, id: id, count: count}})
        visible.sites ? setVisible({...visible, sites: false}) : setVisible(false)
        // postRequest(forServerInfo)
        // console.log(forServerInfo)
        // ContactsService.setPhoneNName(modalInfo.tel, modalInfo.tel)
    }


    let clean = false

    let [distance, setDistance] = useState(0) 

    // useMemo(()=>{
    //     if (visible){
    //         document.body.classList.add('desable-scroll');
    //         document.documentElement.classList.add('html-overflow')
    //         rootContentClasses.push(cl.contentM)
    //     }else{
    //          rootContentClasses.pop(cl.contentM)
    //         document.documentElement.classList.remove('html-overflow')
    //         document.body.classList.remove('desable-scroll');
    //     }},[visible])
  


        
  
    visible && rootClasses.push(cl.active) && rootContentClasses.push(cl.activeContent)
    return (
        <div ref={blockModal} className={rootClasses.join` `} onClick={(e)=>{e.preventDefault();setVisible(false)}}>
          
                <div  className={rootContentClasses.join` `} onClick={e=>e.stopPropagation()}>
                    <form action="" id='modal' className={cl.modalForm} >
                        {colorValue && <label className={cl.labelColor}>
                            <span>Выберите цвет</span>
                            <input type="color" id="head" name="head" defaultValue={colorValue} className={cl.colorChange} onChange={e=>{setColor( e.target.value)}}/>
                        </label>
                       }

                       {imgValue && 
                        <div className={cl.imgBlock}>
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            {
                                isDragActive ?
                                <p>Отпустите файлы, чтобы загрузить их</p> :
                                <p>Преместите сюда изображени</p>
                            }
                        </div>
                        </div>
                        }
                        
                       
                        
                       { hrefValue && <MyInput valueInput={inputValue}  required clean={clean} classesInput={cl.modalInput} classesPlace={cl.modalPlace} place='Ссылка на страницу' setCheckInputSite={setInputValue} input={modalInfo}/>}
                       { hrefValue && <MyInput valueInput={altInput}  required clean={clean} classesInput={cl.modalInput} classesPlace={cl.modalPlace} place='Alt img' setCheckInputSite={setAltInput} input={modalInfo}/>}
                        <span className={cl.modalExit} onClick={e=>{e.preventDefault();setVisible(false)}}></span>
                        <div className={cl.btnBlock}>
                            <MyBtnFiled  type='submit' form='modal' classes={cl.modalBtn} onClick={e=>{addModalInfo(e); clean = true; }}>ОТПРАВИТЬ</MyBtnFiled>
                        </div>
                    </form>
                </div>
           
        </div>
    )
}

export default MyAdminModal