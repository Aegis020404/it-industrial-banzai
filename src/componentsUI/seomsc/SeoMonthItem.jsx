import React from "react";
import cl from '../../style/SeoMonth.module.css';
import MyViewElement from "../UI/viewelement/MyViewElement";

const SeoMonthItem = ({title, descr})=>{
    return (
        <>
            <li className={cl.monthItem}>
                <MyViewElement element={
                     <h4 className={cl.monthITitle}>{title}</h4>
                }/>
                <MyViewElement element={
               
                <p className={cl.monthIDescr}>{descr}</p>
                }/>

            </li>
        </>
        
    )
}

export default SeoMonthItem