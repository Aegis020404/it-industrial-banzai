import React, {useState} from "react";
import cl from '../../style/SeoStable.module.css';
import MyDeleteElement from "../UI/admindelel/MyDeleteElement";
import MyViewElement from "../UI/viewelement/MyViewElement";
import { useSelector } from "react-redux";
import MyAdminInput from "../UI/admininput/MyAdminInput";
const SeoStableItem = ({title, descr, img, id})=>{
    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)
    const [stableItem, setStableItem] = useState({title: {width:0,height:0}, descr: {width:0,height:0}})
    return (
        <li className={cl.stableItem}>
            <MyDeleteElement id={id} typeAction={'DELETE_SEO_STABLE_ELEMENT'}></MyDeleteElement>
            <MyViewElement element={
                 <span className={cl.stableImgBlock}>
                    {img}
                </span>
            }/>
            <MyViewElement element={
                isAdmin ? 
                <MyAdminInput width={stableItem.title.width} id={id} height={stableItem.title.height} typeAction={'TITLE_SEO_STABLE_CHANGE'}>
                    <h4 className={cl.stableITitle} onClick={e=>setStableItem({...stableItem, title: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{title}</h4> 

                </MyAdminInput>
                :
                <h4 className={cl.stableITitle}>{title}</h4> 
            }/>
            <MyViewElement element={
                isAdmin ? 
                <MyAdminInput width={stableItem.descr.width} id={id} height={stableItem.descr.height} typeAction={'DESCR_SEO_STABLE_CHANGE'}>
                    <p className={cl.stableIDescr} onClick={e=>setStableItem({...stableItem, descr: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{descr}</p>
                </MyAdminInput>
                :
                <p className={cl.stableIDescr}>{descr}</p>
               
            }/>
        </li>
    )
}

export default SeoStableItem