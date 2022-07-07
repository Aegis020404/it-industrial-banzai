import React from 'react';
import cl from '../style/KeysItem.module.css';
import {NavLink} from "react-router-dom";
import Link from 'next/link';
import MyViewElement from './UI/viewelement/MyViewElement';

const KeysItemList = ({logo, descr, background, alt, img, classesImg, page}) => {
    return (
        <MyViewElement element={
            <li className={cl.keysItem}> 
                <figure alt={alt} className={cl.keysFigure} onClick={e=>document.body.scrollTo({top:0,behavior:'smooth'})}>
                    <Link href={`/keys/${page}`}>
                        <div className={cl.keysImgBlock} style={{backgroundColor: background}}>
                            <div className={cl.keysImgCard}>
                        <span className={cl.keysLogo}>
                            {logo}
                        </span>
                            </div>
                            <div className={[cl.keysImgCard, classesImg].join` `}>
                                <img src={`/img/${img}`}className={cl.keysImg}/>
                            </div>
                        </div>
                    </Link>
                    <figcaption className={cl.keysDescr}>{descr}</figcaption>
                </figure>
            </li>
        }/>
    )
}

export default KeysItemList