import React, {useState} from "react";
import cl from '../../style/MainSimple.module.css';
import MyViewElement from "../UI/viewelement/MyViewElement";
import MainSimpleList from "./MainSimpleList";
import { useSelector } from "react-redux";
import MyAdminInput from "../UI/admininput/MyAdminInput";
import MyAddElement from "../UI/adminaddel/MyAddElement";


const MainSimple = () => {

    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)
    const simpleTexts = useSelector(state=>state.AdminTexts.mainSimple)
    const [sizeInfo, setSizeInfo] = useState({title: {width:0,height:0}})
    return (
        <section className={cl.simple}>
            <div className="container">
            <div className={cl.simpleContent}>
                <MyAddElement typeAction={'ADD_SIMPLE_ELEMENT'}/>
                <MyViewElement element={
                     isAdmin ? 
                     <MyAdminInput width={sizeInfo.title.width}  height={sizeInfo.title.height} typeAction={'TITLE_SIMPLE_INFO'}>
                         <h2 className={cl.simpleTitle} onClick={e=>setSizeInfo({...sizeInfo, title: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{simpleTexts.title}</h2>
             
                     </MyAdminInput>
                     :
                     <h2 className={cl.simpleTitle}>{simpleTexts.title}</h2>
                    }/>
                   
                
                <MainSimpleList/>
            </div>
            </div>
        </section>
    )
}

export default MainSimple