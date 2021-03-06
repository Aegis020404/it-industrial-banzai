import React from "react";
import cl from '../../style/SeoReport.module.css'
import MyViewElement from "../UI/viewelement/MyViewElement";

const SeoReportItem = ({img, text})=>{
    return (
        <li className={cl.reportItem}>
            <MyViewElement element={
                 <div className={cl.reportImgBlock}>
                 <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M14.6319 0.166016L6.03837 8.0621L2.4041 4.22079L0 6.45204L5.87134 12.6579L16.8661 2.56473L14.6319 0.166016Z" fill="#F84263"/>
                 </svg>
             </div>
            }/>
           <MyViewElement element={
            <p className={cl.reportDescr}>{text}</p>
        }/>
        </li>
    )
}

export default SeoReportItem