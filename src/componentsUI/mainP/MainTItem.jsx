import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import cl from '../../style/MainTItem.module.css';
import MyBtnBlank from "../UI/buttonborder/MyBtnBlank";
import MyDeleteElement from '../UI/admindelel/MyDeleteElement';
import MyAdminInput from '../UI/admininput/MyAdminInput';
import {useDropzone} from 'react-dropzone'
const MainTItem = ({img, title, descr, price, dl, setModal, setTheme,logo, deleteAction, id})=>{
    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)
    const [tariffItem, setTariffItem] = useState({title: {width:0,height:0}, dl: {width:0,height:0}, price: {width:0,height:0}, descr: {first:{width:0,height:0},second:{width:0,height:0},third:{width:0,height:0}}})
    const dispatch = useDispatch()
    const [isLogo, setIsLogo] = useState('')

    const [changeModal, setChangeModal] = useState(false)

    const onDrop = useCallback(acceptedFiles => {
        setIsLogo(acceptedFiles[0].path)
      }, [])
      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    const confirmModal = (e)=>{
        e.preventDefault();
        dispatch({type:'TARIFF_LOGO_CHANGE', info: {id:id, text: isLogo}})
        setChangeModal(false)
    }

    console.log('../../../public/img/' + logo)
    return (
        <li className={cl.tariffItem}> 
            {isAdmin ? 
                <span className={cl.changeItemBtn} onClick={e=>setChangeModal(!changeModal)}>ИЗМЕНИТЬ</span>
            :''}
            {isAdmin ? 
                <div className={changeModal ? [cl.modalChangeIcon, cl.modalChangeActive].join` ` : cl.modalChangeIcon }>
                    <div className={cl.modalContent}>
                        <div className={cl.imgBlock}>
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                {
                                    isDragActive ?
                                    <p className={cl.drop}>Отпустите файлы, чтобы загрузить их</p> :
                                    <p className={cl.drag}>Преместите сюда изображени</p>
                                }
                            </div>
                        </div>
                    <MyBtnBlank classes={cl.tariffButton} onClick={e=>confirmModal(e)}>ПОДТВЕРДИТЬ</MyBtnBlank>
                    </div>
                </div>
            : ''}
            {isAdmin ? <MyDeleteElement typeAction={deleteAction} id={id}/> : ''}
            <div className={cl.tariffContent}>
                <div className={cl.tariffHeader}>
                    <span className={cl.tariffImg}>
                        <img src={'/img/' + logo}></img>
                    </span>
                    {isAdmin ? 
                        <MyAdminInput width={tariffItem.title.width} height={tariffItem.title.height} typeAction={'TARIFF_TITLE_CHANGE'} id={id}>
                            <h3 className={cl.tariffTitle} onClick={e=>{setTariffItem({...tariffItem, title: {width:e.target.offsetWidth,height:e.target.offsetHeight}})}}>{title}</h3>
                        </MyAdminInput>
                    :
                        <h3 className={cl.tariffTitle} onClick={e=>{setTariffItem({...tariffItem, title: {width:e.target.offsetWidth,height:e.target.offsetHeight}})}}>{title}</h3>
                    }
                    
                </div>
                <div className={cl.tariffCIBlock}>
                    <ul className={cl.tariffCList}>
                        <li className={cl.tariffСlause}>
                             <span className={cl.tariffCycle}></span>
                             {isAdmin ? 
                            <MyAdminInput width={tariffItem.descr.first.width} height={tariffItem.descr.first.height} typeAction={'TARIFF_DESCR_CHANGE'} id={id} count={0}>
                               <div className={cl.tariffClauseText} onClick={e=>{setTariffItem({...tariffItem, descr: {...tariffItem.descr ,first: {width:e.target.offsetWidth,height:e.target.offsetHeight}}})}}>{descr[0]}</div>
                            </MyAdminInput>
                            :
                            <div className={cl.tariffClauseText}>{descr[0]}</div>
                            }
                         </li>
                         <li className={cl.tariffСlause}>
                             <span className={cl.tariffCycle}></span>
                             {isAdmin ? 
                            <MyAdminInput width={tariffItem.descr.second.width} height={tariffItem.descr.second.height} typeAction={'TARIFF_DESCR_CHANGE'} id={id} count={1}>
                               <div className={cl.tariffClauseText} onClick={e=>{setTariffItem({...tariffItem, descr: {...tariffItem.descr ,second: {width:e.target.offsetWidth,height:e.target.offsetHeight}}})}}>{descr[1]}</div>
                            </MyAdminInput>
                            :
                            <div className={cl.tariffClauseText}>{descr[1]}</div>
                            }
                         </li>
                        
                         <li className={cl.tariffСlause}>
                             <span className={cl.tariffCycle}></span>
                             {isAdmin ? 
                            <MyAdminInput width={tariffItem.descr.third.width} height={tariffItem.descr.third.height} typeAction={'TARIFF_DESCR_CHANGE'} id={id} count={2}>
                               <div className={cl.tariffClauseText} onClick={e=>{setTariffItem({...tariffItem, descr: {...tariffItem.descr ,third: {width:e.target.offsetWidth,height:e.target.offsetHeight}}})}}>{descr[2]}</div>
                            </MyAdminInput>
                            :
                            <div className={cl.tariffClauseText}>{descr[2]}</div>
                            }
                         </li>
                         
                    </ul>
                </div>
                <div className={cl.tariffPriceBlock}>
                    <div className={cl.tariffPriceContent}>
                        <span className={cl.tariffPriceinside}>
                            от
                        </span>
                        {isAdmin ? 
                            <MyAdminInput  width={tariffItem.price.width} height={tariffItem.price.height} typeAction={'TARIFF_PRICE_CHANGE'} id={id}> 
                                 <span className={cl.tariffPrice} onClick={e=>{setTariffItem({...tariffItem, price: {width:e.target.offsetWidth,height:e.target.offsetHeight}})}}>
                                    {price}
                                </span>
                            </MyAdminInput>
                        :
                            <span className={cl.tariffPrice}>
                                {price}
                            </span>
                        }
                        <span className={cl.tariffPriceRuble}>
                            руб.
                        </span>
                    </div>
                </div>
                <div className={cl.tariffTermBlock}>
                    {isAdmin ? 
                        <MyAdminInput width={tariffItem.dl.width} height={tariffItem.dl.height} typeAction={'TARIFF_DL_CHANGE'} id={id}>
                            <span className={cl.tariffTerm} onClick={e=>{setTariffItem({...tariffItem, dl: {width:e.target.offsetWidth,height:e.target.offsetHeight}})}}>{dl}</span>
                        </MyAdminInput>
                    :
                        <span className={cl.tariffTerm}>{dl}</span>
                    }
                </div>
                <div className={cl.tariffBtnBlock}>
                    {setModal !== undefined ? <MyBtnBlank classes={cl.tariffButton} onClick={e=>{e.preventDefault(); setModal(true); setTheme(title)}}>ЗАКАЗАТЬ</MyBtnBlank> : console.log(1)}
                </div>
            </div>
           
        </li>
    )
}

export default MainTItem