import React, {useState} from "react";
import cl from '../../style/SeoMonth.module.css';
import MyViewElement from "../UI/viewelement/MyViewElement";
import SeoMonthItem from "./SeoMonthItem";
import { useSelector } from 'react-redux';
import MyAdminInput from "../UI/admininput/MyAdminInput";
import MyAddElement from "../UI/adminaddel/MyAddElement";
import Image from "next/image";

const SeoMonth = ()=>{
    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)
    const seoTexts = useSelector(state=>state.AdminTexts.seoMonth)
    const [monthData, setMonthData] = useState({title: {width:0,height:0}})
    const infoArr = useSelector(state=>state.SeoMonth)
    return (
        <section className={cl.monthSection}>
            <div className="container">
                <MyViewElement element={ 
                    isAdmin ? 
                    <MyAdminInput width={monthData.title.width}  height={monthData.title.height} typeAction={'TITLE_SEO_MONTH_INFO'}>
                        <h2 className={cl.monthTitle} onClick={e=>setMonthData({...monthData, title: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{seoTexts.title}</h2>
                    </MyAdminInput>
                    :
                    <h2 className={cl.monthTitle}>{seoTexts.title}</h2>
                }/>
                <div className={cl.monthContent}>
                    <div className={cl.monthLeft}>
                        <MyAddElement typeAction={'ADD_SEO_MONTH_ELEMENT'}></MyAddElement>
                        <ul className={cl.monthLeftList}>
                            {infoArr.map((e, i)=><SeoMonthItem key={i} title={e.title} id={e.id} descr={e.descr}/>)}
                        </ul>
                    </div>
                    <div className={cl.monthRight}>
                    <MyViewElement element={
                        <div className={cl.monthRightImg}>
                            <Image  src={'/img/seo-month.WebP'} alt="web-google"/>
                        </div>
                        }/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SeoMonth