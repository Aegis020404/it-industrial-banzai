import React, { useRef, useEffect } from "react";
import MainApplication from "../src/componentsUI/mainP/MainApplication";
import TariffList from "../src/componentsUI/tariffP/TariffList";
import TariffSeoDuo from "../src/componentsUI/tariffP/TariffSeoDuo";
import NavPagesHead from "../src/componentsUI/UI/navpage/MyNavPages";
import MainTariffContainer from '../src/componentsUI/mainP/MainTariff';
import Container from "../src/componentsUI/Container";

const TariffPage = ()=>{
    const tariffRef = useRef('')
    useEffect(()=>{
        document.body.scrollTo({top:0,behavior:'smooth'})
        tariffRef.current.classList.toggle('tariffI')
    },[tariffRef])
    const infoPage = [{text: 'Тарифы'}]
    return (
        <>
            <Container>
                <main ref={tariffRef} className='tariff'>
                    <NavPagesHead navItems={infoPage}/>
                    <TariffList/>
                    <TariffSeoDuo/>
                    <MainApplication/>
                </main>
            </Container>
            
        </>
    )
}

export default TariffPage