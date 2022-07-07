import Link from "next/link";
import React from "react";
import cl from '../../style/MainKeys.module.css';
import MyViewElement from "../UI/viewelement/MyViewElement";

const MainKItem = ({count, infoArr})=>{
    return (
        <li className={cl.keysItem}>
            {count === 2 ?  
                <div className={cl.keysIContentS}>
                    <MyViewElement element={
                        <Link href={'/keys/' + infoArr[0].href}>
                            <figure  alt={infoArr[0].alt} className={cl.keysILeft}  onClick={e=>document.body.scrollTo({top:0,behavior:'smooth'})}>
                                {infoArr[0].classes == cl.imgEva ?  <div className={[cl.evaBlock, cl.img].join` `}>
                                    <img src={`/img/${infoArr[0].img[0]}`} alt="logo Ekovtor" className={[cl.evaLogo].join` `}/>
                                    <img src={`/img/${infoArr[0].img[1]}`} alt="female Ekovtor" className={[cl.femaleimgSort].join` `}/>
                                    <img src={`/img/${infoArr[0].img[2]}`} className={[cl.ekoM].join` `}/>
                                </div>
                                :   <img src={`/img/${infoArr[0].img}`} className={[cl.keysImg, infoArr[0].classes, cl.img ].join` `}/>}
                                <figcaption className={cl.keysIDescr}>{infoArr[0].descr}</figcaption>
                            </figure>
                        </Link>
                    }/>
                    <MyViewElement element={
                    <Link href={'/keys/' + infoArr[1].href}>
                        <figure alt={infoArr[1].alt} className={cl.keysIRight}  onClick={e=>document.body.scrollTo({top:0,behavior:'smooth'})}>
                            {infoArr[1].classes == cl.imgMiniPad ? 
                            <div className={[cl.padBlock, cl.img].join` `}>
                                <img src={`/img/${infoArr[1].img}`}  className={[infoArr[1].classes].join` `}/>
                            </div>
                            :  <img src={`/img/${infoArr[1].img}`}  className={[cl.keysImg, infoArr[1].classes, cl.img].join` `}/>}
                            <figcaption className={cl.keysIDescr}>{infoArr[1].descr}</figcaption>
                        </figure>
                    </Link>
                    }/>
                </div>
            :  
                <MyViewElement element={
                <Link href={'/keys/' + infoArr[0].href} >
                    <figure  alt={infoArr[0].alt}  className={cl.keysIContentF} onClick={e=>document.body.scrollTo({top:0,behavior:'smooth'})} >
                        <div className={[cl.keysImgBlockF, cl.img].join` `}>
                        <img src={`/img/${infoArr[0].img[0]}`}className={[cl.keysImg, infoArr[0].classes[0]].join` `}/>
                        <img src={`/img/${infoArr[0].img[0]}`}className={[cl.keysImg, infoArr[0].classes[1]].join` `}/>
                        </div>
                        <figcaption className={cl.keysIDescr}>{infoArr[0].descr}</figcaption>
                    </figure>
                </Link>
                }/>
            }
        </li>
    )
}

export default MainKItem