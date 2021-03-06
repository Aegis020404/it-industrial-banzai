import React, { useEffect, useRef } from "react";
import cl from '../src/style/CRM.module.css'
import MobilePortfolio from "../src/componentsUI/mobilemsc/MobilePortfolio";
import MainApplication from "../src/componentsUI/mainP/MainApplication";
import MainSimple from '../src/componentsUI/mainP/MainSimple'
import MainReview from "../src/componentsUI/mainP/MainReview";
import MainQuestion from '../src/componentsUI/mainP/MainQuestion'
import MainLider from "../src/componentsUI/mainP/MainLider";
import MainOfferContainer from "../src/componentsUI/mainP/MainOffer";
import MainDevContainer from "../src/componentsUI/mainP/MainDev";
import MobileServiceContainer from "../src/componentsUI/mobilemsc/MobileService";
import MobileHero from '../src/componentsUI/MobileHero'
import CrmCount from '../src/componentsUI/crmseo/CrmCount';
import Container from "../src/componentsUI/Container";

const CRMPage = ()=>{
    const mobileI = useRef('')
    useEffect(()=>{
        mobileI.current.classList.toggle('mobileI')
    },[mobileI])
    return (
        <>
            <Container>
            <main ref={mobileI} className="mobile">
                <MobileHero column='crm'/>
                <CrmCount/>
                <MobileServiceContainer column={'crmDevelop'}/>
                <MobilePortfolio/>
                <MainDevContainer column={'developerCRM'}/>
                <MainApplication/>
                <div className={cl.offer}>
                    <MainOfferContainer/>
                </div>
                <MainLider/>
                <MainReview/>
                <MainSimple/>
                <MainQuestion/>
            </main>
            </Container>
        </>
        
    )
}

export default CRMPage