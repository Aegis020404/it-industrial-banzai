import React, {useState} from "react";
import cl from '../../style/MainSimple.module.css';
import MyViewElement from "../UI/viewelement/MyViewElement";
import { useSelector } from 'react-redux';
import MyAdminInput from "../UI/admininput/MyAdminInput";
import MyDeleteElement from "../UI/admindelel/MyDeleteElement";

const MainSItem = ({title, descr, count, id})=>{
    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)
    const [sizeInfo, setSizeInfo] = useState({title: {width:0,height:0}, descr: {width:0,height:0}, count: {width:0,height:0}})
    return (
        
            <li className={cl.simpleItem}>
                <MyDeleteElement id={id} typeAction={'DELETE_SIMPLE_ELEMENT'}/>
                <MyViewElement element={
                     isAdmin ? 
                     <MyAdminInput width={sizeInfo.count.width} id={id} height={sizeInfo.count.height} typeAction={'COUNT_SIMPLE_ITEM_CHANGE'}>
                          <div className={cl.simpleCount}  onClick={e=>setSizeInfo({...sizeInfo, count: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{count}</div>
                     </MyAdminInput>
                     :
                     <div className={cl.simpleCount}>{count}</div>
                    
                }/>
                <MyViewElement element={
                      isAdmin ? 
                      <MyAdminInput width={sizeInfo.title.width} id={id} height={sizeInfo.title.height} typeAction={'TITLE_SIMPLE_ITEM_CHANGE'}>
                             <h3 className={cl.simpleItemTitle}  onClick={e=>setSizeInfo({...sizeInfo, title: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{title}</h3>
                      </MyAdminInput>
                      :
                      <h3 className={cl.simpleItemTitle}>{title}</h3>
               
                }/>
                <MyViewElement element={
                      isAdmin ? 
                      <MyAdminInput width={sizeInfo.descr.width} id={id} height={sizeInfo.descr.height} typeAction={'DESCR_SIMPLE_ITEM_CHANGE'}>
                             <p className={cl.simpleItemDescr}  onClick={e=>setSizeInfo({...sizeInfo, descr: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{descr}</p>
                      </MyAdminInput>
                      :
                      <p className={cl.simpleItemDescr}>{descr}</p>
               
            }/>
            </li>
        
       
    )
}

export default MainSItem