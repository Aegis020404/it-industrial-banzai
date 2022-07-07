import React from "react";
import cl from '../../style/SeoServices.module.css';
import MyViewElement from "../UI/viewelement/MyViewElement";

const SeoServicesItem = ({title, img, infoItem})=>{
    return (
        <li className={cl.servicesItem}>
            <div className={cl.servicesIHead}>
                <span className={cl.servicesImgBlock}>
                    {img}
                </span>
                <MyViewElement element={
                    <h4 className={cl.servicesITitle}>{title}</h4>
                }/>
                </div>
            <ul className={cl.servicesIList}>
                {infoItem.map((e, i)=>
                <MyViewElement element={
                    <li className={cl.servicesIItem} key={i}>
                    {e}
                </li>   
                }/>
                    
                )}
            </ul>
        </li>
    )
}

export default SeoServicesItem