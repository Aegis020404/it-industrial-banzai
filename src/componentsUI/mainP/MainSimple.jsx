import React from "react";
import cl from '../../style/MainSimple.module.css';
import MyViewElement from "../UI/viewelement/MyViewElement";
import MainSimpleList from "./MainSimpleList";

const MainSimple = () => {

    

    return (
        <section className={cl.simple}>
            <div className={cl.simpleContent}>
                <MyViewElement element={
                    <h2 className={cl.simpleTitle}>С нами надежно, легко и комфортно</h2>
                }/>
                
                <MainSimpleList/>
            </div>
        </section>
    )
}

export default MainSimple