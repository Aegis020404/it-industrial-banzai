import React, { useState, useCallback } from "react";
import cl from '../../style/MainResult.module.css'
import MyAdminInput from "../UI/admininput/MyAdminInput";
import MyViewElement from "../UI/viewelement/MyViewElement";
import { useSelector } from "react-redux";
import MyAddElement from '../UI/adminaddel/MyAddElement';
import MyDeleteElement from '../UI/admindelel/MyDeleteElement';
import {useDropzone} from 'react-dropzone'
import { useDispatch } from "react-redux";

const MainResultItem = ({infoObj})=>{
    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)
    const [resInfo, setResinfo]=useState({title: {width:0,height:0}, itemTitle: {width:0,height:0}, itemDescr: {width:0,height:0}})
    const [changeImg, setChangeimg] = useState(false)
    const dispatch = useDispatch()
    const onDrop = useCallback(acceptedFiles => {
        dispatch({type: 'IMG_RES_CHANGE', info: {text:acceptedFiles[0].path, id: infoObj.id}})
    }, [])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    return (
        <li className={cl.resultItem}>
            {isAdmin ? <span className={'changeItemBtn'} onClick={e=>setChangeimg(!changeImg)}>ИЗМЕНИТЬ</span> : ''}
            {isAdmin ? <MyDeleteElement typeAction={'DELETE_RES_ELEMENT'} id={infoObj.id}/>: ''}
            <MyViewElement element={
                <div className={cl.resultImgBlock}>
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
                        <span className={[cl.resultImg].join` `}>
                            <img src={'/img/' +  infoObj.img}></img>
                        </span>
                    } 
                </div>
            }/>
            <MyViewElement element={
                isAdmin ?
                <MyAdminInput  width={resInfo.itemTitle.width} height={resInfo.itemTitle.height} typeAction={'TITLE_RES_CHANGE'} id={infoObj.id}>
                    <h3 className={cl.resultItemTitle}  onClick={e=>setResinfo({...resInfo, itemTitle: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{infoObj.title}</h3>
                </MyAdminInput>
                :
                <h3 className={cl.resultItemTitle}  >{infoObj.title}</h3>

            }/>
            <MyViewElement element={
                    isAdmin ?
                <MyAdminInput  width={resInfo.itemDescr.width} height={resInfo.itemDescr.height} typeAction={'DESCR_RES_CHANGE'} id={infoObj.id}>
                    <p className={cl.resultItemDescr}  onClick={e=>setResinfo({...resInfo, itemDescr: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{infoObj.descr}</p> 
                </MyAdminInput>
                :
                <p className={cl.resultItemDescr}  >{infoObj.descr}</p> 

            }/>
        </li>
    )
}

export default MainResultItem