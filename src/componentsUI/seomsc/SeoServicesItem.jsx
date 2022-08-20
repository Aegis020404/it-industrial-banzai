import React, {useState, useCallback} from "react";
import cl from '../../style/SeoServices.module.css';
import MyViewElement from "../UI/viewelement/MyViewElement";
import { useSelector, useDispatch } from 'react-redux';

import {useDropzone} from 'react-dropzone'

import MyAdminInput from "../UI/admininput/MyAdminInput";
import Image from "next/image";



const SeoServicesItem = ({title, img, infoItem, id})=>{
    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)
    const seoTexts = useSelector(state=>state.AdminTexts.seoServices)
    const servicesData = useSelector(state=>state.SeoServices)
    const [servicesItem, setServicesItem] = useState({title:{width:0,height:0}, textItem: {width:0,height:0}})
    console.log(img)
    const dispatch = useDispatch()

    const onDrop = useCallback(acceptedFiles => { 
        dispatch({type: 'IMG_SEO_SERV_CHANGE', info: {text:acceptedFiles[0].path, id: id}})
    }, [])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    

    const [changeImg, setChangeImg] = useState(false)


    return (
        <li className={cl.servicesItem}>
             {isAdmin ? 
                <span className={['changeItemBtn', cl.changeItemBtn].join` `} onClick={e=>setChangeImg(!changeImg)}>изменить</span>
            :'' }
            <div className={cl.servicesIHead}>
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
                <span className={cl.servicesImgBlock}>
                        <Image  src={`/img/${img}`} alt="photo" className={cl.itemImg}/>
                </span>
                
            }
               
                <MyViewElement element={
                    isAdmin ?
                        <MyAdminInput width={servicesItem.title.width} id={id} height={servicesItem.title.height} typeAction={'TITLE_SEO_SERV_CHANGE'}>
                            <h4 className={cl.servicesITitle}  onClick={e=>setServicesItem({...servicesItem, title: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{title}</h4>
                        </MyAdminInput>
                    :
                    <h4 className={cl.servicesITitle}>{title}</h4>
                    
                   
                }/>
                </div>
            <ul className={cl.servicesIList}>
                {infoItem.map((e, i)=>
                <MyViewElement element={
                    isAdmin ?
                    <MyAdminInput width={servicesItem.textItem.width} id={id} count={e.id} height={servicesItem.textItem.height} typeAction={'LIST_SEO_SERV_CHANGE'}>

                        <li className={cl.servicesIItem} key={i} onClick={e=>setServicesItem({...servicesItem, textItem: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{e.text}</li>  
                    </MyAdminInput>
                :
                <li className={cl.servicesIItem} key={i}>{e.text}</li>  
                    
                }/>
                    
                )}
            </ul>
        </li>
    )
}

export default SeoServicesItem