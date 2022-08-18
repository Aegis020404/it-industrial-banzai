import React, {useState, useCallback} from "react";
import MyBtnBlank from "../UI/buttonborder/MyBtnBlank";
import cl from '../../style/MainOther.module.css';
import { useDispatch, useSelector } from 'react-redux';

import MyViewElement from "../UI/viewelement/MyViewElement";
import MyAdminInput from "../UI/admininput/MyAdminInput";
import MyDeleteElement from "../UI/admindelel/MyDeleteElement";
import {useDropzone} from 'react-dropzone'

const MainOItem = ({title, img, setModalItem, id})=>{
    const dispatch = useDispatch()
    const onDrop = useCallback(acceptedFiles => {
    
    dispatch({type: 'OTHER_ITEM_IMG_CHANGE', info: {text:acceptedFiles[0].path, id: id}})
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    const [modal, setModal] = useState(false)
    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)
    const [otherInfo, setOtherInfo ] = useState({title: {width:0,height:0}})
    const [changeImg, setChangeImg] = useState(false)

    return (
        <li className={cl.otherItem}>
             {isAdmin ?
                <span className={'changeItemBtn'} onClick={e=>setChangeImg(!changeImg)}>изменить</span>
            :''}
            {isAdmin ?
                <MyDeleteElement id={id} typeAction={'OTHER_DELETE_ITEM'}></MyDeleteElement>
            :''}
            
            {
                  isAdmin ? 
                  <MyAdminInput width={otherInfo.title.width} id={id}  height={otherInfo.title.height} typeAction={'OTHER_ITEM_TITLE_CHANGE'}>
                      <h3 className={cl.otherItemTitle} onClick={e=>setOtherInfo({...otherInfo, title: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{title}</h3>
                  </MyAdminInput>
                  :
                  <h3 className={cl.otherItemTitle}>{title}</h3>
            }
            {isAdmin && changeImg ? 
                <div className={cl.imgBlock}>
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        {
                            isDragActive ?
                            <p className={cl.drop}>Отпустите файл</p> :
                            <p className={cl.drag}>Переместите изображение</p>
                        }
                    </div>
                </div>
                :
                <img className={cl.otherItemImgBlock} src={`/img/${img}`}/>
            }
           
            <MyBtnBlank classes={cl.otherItemBtn} onClick={e=>{e.preventDefault(e); setModalItem(true)}}>ЗАКАЗАТЬ</MyBtnBlank>
        </li>
    )
}

export default MainOItem