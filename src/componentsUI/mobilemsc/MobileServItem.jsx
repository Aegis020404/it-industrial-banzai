import React, {useEffect, useState, useCallback} from "react";
import cl from '../../style/MobileService.module.css';
import MyDeleteElement from "../UI/admindelel/MyDeleteElement";
import MyViewElement from "../UI/viewelement/MyViewElement";
import { useDispatch, useSelector } from "react-redux";

import {useDropzone} from 'react-dropzone'

import MyAdminInput from "../UI/admininput/MyAdminInput";
const MobileServItem = ({title, descr, img,id, actionListDelete,actionImg,actionListDescr,actionListTitle})=> {
    useEffect(() => {})
    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)
 
    const [changeImg, setChangeImg] = useState(false)
    const dispatch = useDispatch()

    const onDrop = useCallback(acceptedFiles => { 
        dispatch({type: actionImg, info: {text:acceptedFiles[0].path, id: id}})
    }, [])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    
    const [crmData, setCrmData] = useState({listTitle: {width:0,height:0},listDescr: {width:0,height:0}})
    return (
        
        <div className={cl.serviceItem}>
             {isAdmin ? 
                <span className={['changeItemBtn', cl.changeItemBtn].join` `} onClick={e=>setChangeImg(!changeImg)}>изменить</span>
            :'' }
             {isAdmin ? 
             <MyDeleteElement typeAction={actionListDelete} id={id}/>

            :'' }
            <div className={cl.serviceItemBlock}>
                <MyViewElement element={
                     isAdmin && changeImg ? 
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
                        <span className={cl.serviceImg}>
                            <img src={'/img/'+img} ></img>
                        </span>
                }/>
                <MyViewElement element={
                    isAdmin ? 
                    <MyAdminInput width={crmData.listTitle.width} id={id} height={crmData.listTitle.height} typeAction={actionListTitle}>
                        <h4 className={cl.serviceItemTitle} onClick={e=>setCrmData({...crmData, listTitle: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{title}</h4>
                    </MyAdminInput>
                    :
                    <h4 className={cl.serviceItemTitle}>{title}</h4>
                
                }/>
                <MyViewElement element={
                    isAdmin ? 
                    <MyAdminInput width={crmData.listDescr.width} id={id} height={crmData.listDescr.height} typeAction={actionListDescr}>
                        <p className={cl.serviceItemDescr}  onClick={e=>setCrmData({...crmData, listDescr: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{descr}</p>
                    </MyAdminInput>
                    :
                    <p className={cl.serviceItemDescr} >{descr}</p>
                
            }/>

            </div>
        </div>
      
    )
}

export default MobileServItem