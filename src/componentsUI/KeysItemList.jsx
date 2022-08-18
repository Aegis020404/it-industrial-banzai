import React, {useState, useRef, useEffect} from 'react';

import cl from '../style/KeysItem.module.css';
import {NavLink} from "react-router-dom";
import Link from 'next/link';
import MyViewElement from './UI/viewelement/MyViewElement';
import { useSelector } from "react-redux";
import MyAddElement from './UI/adminaddel/MyAddElement';
import MyAdminInput from './UI/admininput/MyAdminInput';
import MyDeleteElement from './UI/admindelel/MyDeleteElement';
const KeysItemList = ({logo,logoClasses, descr, background, alt, img,modal, actionDelete = 'DELETE_SITES_ELEMENT',classesImg,keysPage = 'sites', page, setModal, id, setActiveItem, activeItem, actionDescr}) => {
    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)
    const [sizeInfo, setSizeInfo] = useState({descr: {width:0,height:0}})
    const logoElement = useRef()

    console.log(logoClasses)
    const defaultLinks = ['/img/keys-stroy-logo.svg',
    '/img/keys-auto-logo.svg',
    '/img/llumar-pad.png',
    '/img/female-sort.png',
    '/img/pad-hockey.png',]

    return (
        <MyViewElement element={
            <li className={cl.keysItem}> 
                <MyDeleteElement typeAction={actionDelete} id={id}/>
                <span className={cl.changeItemBtn} onClick={e=>{keysPage == 'sites' ?setModal({...modal, sites: true}) : keysPage == 'crm' ? setModal({...modal, crm: true}) :  keysPage == 'mobile' ?  setModal({...modal, mobile: true}) : '' ;setActiveItem({...activeItem,href:page,color:background, alt: alt, id: id})}}>ИЗМЕНИТЬ</span>
                <figure alt={alt} className={cl.keysFigure}>
                    <Link href={`/keys${page}`}>
                        <div className={cl.keysImgBlock} style={{backgroundColor: background}}  onClick={e=>document.body.scrollTo({top:0,behavior:'smooth'})}>
                            <div className={cl.keysImgCard}>
                        <span className={defaultLinks.some(e=>e == '/img/'+logo) ? [cl.keysLogo, logoClasses].join` ` : cl.keysLogo}>
                            <img  src={'/img/'+logo}></img>
                        </span>
                            </div>
                            <div className={[cl.keysImgCard, classesImg].join` `}>
                                <img src={`/img/${img}`}className={cl.keysImg}/>
                            </div>
                        </div>
                    </Link>
                   {
                          isAdmin ? 
                          <MyAdminInput width={sizeInfo.descr.width} id={id} height={sizeInfo.descr.height} typeAction={actionDescr}>
                                 <figcaption className={cl.keysDescr}  onClick={e=>setSizeInfo({...sizeInfo, descr: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{descr}</figcaption>
                          </MyAdminInput>
                          :
                          <figcaption className={cl.keysDescr}>{descr}</figcaption>
                        
                    }
                </figure>
            </li>
        }/>
    )
}

export default KeysItemList