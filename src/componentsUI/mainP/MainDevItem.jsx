import React, {useMemo, useState, useCallback} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";

import cl from '../../style/MainDev.module.css'
import { useDispatch, useSelector } from 'react-redux';
import MyViewElement from '../UI/viewelement/MyViewElement';
import MyAddElement from '../UI/adminaddel/MyAddElement';
import MyDeleteElement from '../UI/admindelel/MyDeleteElement';
import MyAdminInput from '../UI/admininput/MyAdminInput';
import {useDropzone} from 'react-dropzone'


const MainDevItem = ({actionTitle, actionDescr, actionDelete, id, obj, actionImg}) => {
    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)
    const dispatch = useDispatch()
    const [changeImg, setChangeImg] = useState(false)
    const [devInfo, setDevInfo] = useState({title: {width:0,height:0}, itemTitle: {width:0,height:0}, itemDescr: {width:0,height:0}})
      const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
          const reader = new FileReader()
    
          reader.onabort = () => console.log('file reading was aborted')
          reader.onerror = () => console.log('file reading has failed')
          reader.onload = () => {
       
            const binaryStr = reader.result
            console.log(binaryStr)
          }
          reader.readAsArrayBuffer(file)
        })
        dispatch({type: actionImg, info: {text:acceptedFiles[0].path, id: id}})
        
      }, [])
      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    return (
     
        <div className={cl.contentBlock}>
            {isAdmin ? <MyDeleteElement typeAction={actionDelete} id={id}/> : ''}
            <div className={cl.wrapper}>
                <div className={cl.stepper}>
                    <div className={cl.step}>{id} этап</div>
                    {isAdmin ? 
                        <MyAdminInput width={devInfo.itemTitle.width} height={devInfo.itemTitle.height} typeAction={actionTitle} id={id}>
                        <h2 className={cl.title} onClick={e=>setDevInfo({...devInfo,itemTitle: {width:e.target.offsetWidth,height:e.target.offsetHeight}})}>{obj.title}</h2>
                    </MyAdminInput>
                    :
                    <h2 className={cl.title} onClick={e=>setDevInfo({...devInfo,itemTitle: {width:e.target.offsetWidth,height:e.target.offsetHeight}})}>{obj.title}</h2>
                    
                    }
                    
                </div>
                <div className={cl.photoWrapBlock}>
                    {isAdmin ? 
                        <span className={'changeItemBtn'} onClick={e=>setChangeImg(!changeImg)}>изменить</span>
                        :'' }
                        <div className={cl.photoWrap}>
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
                        
                            <span className={[cl.photo].join` `}>
                                <img src={'/img/' + obj.img}></img>
                            </span>
                        
                        }
                        </div>

                </div>

                {Array.isArray(obj.lists) ? <ul className={cl.wrapList}>
                    {obj.lists.map((list, n) => 

                            <div key={n}>
                            <li className={cl.listItem}>
                                <div className={cl.line}></div>
                                {
                                    isAdmin ? 
                                        <MyAdminInput width={devInfo.itemDescr.width} height={devInfo.itemDescr.height} typeAction={actionDescr} id={id} count={n}>
                                            <div className={cl.itemText} onClick={e=>setDevInfo({...devInfo,itemDescr: {width:e.target.offsetWidth,height:e.target.offsetHeight}})}>{list}</div>
                                        </MyAdminInput>
                                    :
                                        <div className={cl.itemText} onClick={e=>setDevInfo({...devInfo,itemDescr: {width:e.target.offsetWidth,height:e.target.offsetHeight}})}>{list}</div>

                                }
                            </li>
                        </div>
                    )}
                </ul> : typeof obj.lists === 'object' ? <div className={cl.wholeText}>
                    <div className={cl.innerTitle}>{obj.lists.title}</div>
                    <ul className={cl.ulContainer}>
                        {
                            obj.lists.list.map((el, i)=>
                            
                            <li className={cl.lis} key={i} >{el}</li>
                            )
                        }
                    </ul>
                </div> : 
                    isAdmin ? 
                    <MyAdminInput width={devInfo.itemDescr.width} height={devInfo.itemDescr.height} typeAction={actionDescr} id={id} >
                        <div className={cl.wholeText} onClick={e=>setDevInfo({...devInfo,itemDescr: {width:e.target.offsetWidth,height:e.target.offsetHeight}})}>{obj.lists}</div>
                    </MyAdminInput>
                :
                <div className={cl.wholeText}>{obj.lists}</div>}

                <div className={cl.stepCount}>
                    {id }
                </div>
            </div>
            <div className={cl.wrapperM}>
                <div className={cl.stepperM}>
                    <div className={cl.stepperBlock}>
                        <div className={cl.stepM}>{id} этап</div>
                        <div className={cl.titleM}>{obj.title}</div>
                        {Array.isArray(obj.lists) ?    <ul className={cl.listBlockM}>
                            {obj.lists.map((list, n) => {
                                return <div key={n}>
                                    <li className={cl.listIteMm}>
                                        <div className={cl.line}></div>
                                        {isAdmin ? 
                                            <MyAdminInput width={devInfo.itemDescr.width} height={devInfo.itemDescr.height} typeAction={actionDescr} id={id} count={n}>
                                                <div className={cl.itemText} onClick={e=>setDevInfo({...devInfo,itemDescr: {width:e.target.offsetWidth,height:e.target.offsetHeight}})}>{list}</div>
                                            </MyAdminInput>
                                        :
                                            <div className={cl.itemText} onClick={e=>setDevInfo({...devInfo,itemDescr: {width:e.target.offsetWidth,height:e.target.offsetHeight}})}>{list}</div>
                                        }
                                            
                                    </li>
                                </div>
                            })}
                        </ul> : typeof obj.lists === 'object' ? <div className={cl.wholeText}>
                            <div className={cl.innerTitle}>{obj.lists.title}</div>
                            <ul>
                                {
                                    obj.lists.list.map((el, i)=> <li key={i} >{el}</li>)
                                }
                            </ul>
                        </div> :
                            isAdmin ? 
                                <MyAdminInput width={devInfo.itemDescr.width} height={devInfo.itemDescr.height} typeAction={actionDescr} id={id} >
                                    <div className={cl.wholeText} onClick={e=>setDevInfo({...devInfo,itemDescr: {width:e.target.offsetWidth,height:e.target.offsetHeight}})}>{obj.lists}</div>
                                </MyAdminInput>
                            :
                            <div className={cl.wholeText}>{obj.lists}</div>
                            
                                
                            }
                    </div>
                    <div className={cl.stepCountM}>
                        {id}
                    </div>
                </div>
                <div className={cl.photoBlockM}>
                    <div className={cl.photoWrapM}>
                             <span className={[cl.photoM].join` `}>
                                <img src={'/img/' + obj.img}></img>
                            </span>
                    </div>
                </div>
            </div>
        </div>
    
    )
}


export default MainDevItem