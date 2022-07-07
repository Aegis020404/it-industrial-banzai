import React, {useEffect} from "react";
import cl from '../../style/MobileService.module.css';
import MyViewElement from "../UI/viewelement/MyViewElement";

const MobileServItem = ({title, descr, img})=> {
    useEffect(() => {})
    return (
        
        <div className={cl.serviceItem}>
            <div className={cl.serviceItemBlock}>
                <MyViewElement element={
                    <div className={cl.serviceImg}>{img}</div>
                }/>
                <MyViewElement element={
                
                <h4 className={cl.serviceItemTitle}>{title}</h4>
                }/>
                <MyViewElement element={

                <p className={cl.serviceItemDescr}>{descr}</p>
            }/>

            </div>
        </div>
      
    )
}

export default MobileServItem