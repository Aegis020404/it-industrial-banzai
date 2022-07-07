import React from "react";
import cl from '../../style/SeoStable.module.css';
import MyViewElement from "../UI/viewelement/MyViewElement";
const SeoStableItem = ({title, descr, img})=>{
    return (
        <li className={cl.stableItem}>
            <MyViewElement element={
                 <span className={cl.stableImgBlock}>
                    {img}
                </span>
            }/>
            <MyViewElement element={
            <h4 className={cl.stableITitle}>{title}</h4> 
            }/>
            <MyViewElement element={
            <p className={cl.stableIDescr}>{descr}</p>
        }/>
        </li>
    )
}

export default SeoStableItem