import React from "react";
import cl from '../../style/MainSimple.module.css';
import MyViewElement from "../UI/viewelement/MyViewElement";

const MainSItem = ({title, descr, count})=>{
    return (
        
            <li className={cl.simpleItem}>
                <MyViewElement element={
                     <div className={cl.simpleCount}>
                        {count}
                    </div>
                }/>
                <MyViewElement element={
                <h3 className={cl.simpleItemTitle}>{title}</h3>
                }/>
                <MyViewElement element={
                <p className={cl.simpleItemDescr}>{descr}</p>
            }/>
            </li>
        
       
    )
}

export default MainSItem