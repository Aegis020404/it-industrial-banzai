import React, { useEffect, useRef } from "react";
import MobileHeroContainer from "../src/componentsUI/MobileHero";
import MobilePortfolio from "../src/componentsUI/mobilemsc/MobilePortfolio";
import MainApplication from "../src/componentsUI/mainP/MainApplication";
import MobileServiceContainer from "../src/componentsUI/mobilemsc/MobileService";
import MainSimple from '../src/componentsUI/mainP/MainSimple'
import MainReview from "../src/componentsUI/mainP/MainReview";
import MainQuestion from '../src/componentsUI/mainP/MainQuestion'
import MainLider from "../src/componentsUI/mainP/MainLider";
import MainOfferContainer from "../src/componentsUI/mainP/MainOffer";
import TariffSeoContainer from "../src/componentsUI/TariffSEO/TariffSEO";
import MainDevContainer from "../src/componentsUI/mainP/MainDev";
import cl from '../src/style/MobilePage.module.css'
import MobileCount from '../src/componentsUI/mobilemsc/MobileCount'
import Container from '../src/componentsUI/Container'
const MobilePage = ()=>{
    const mobileI = useRef(false)
    useEffect(()=>{
        mobileI.current.classList.toggle('mobileI')
    },[mobileI])
    return (
        <>
            <Container>
                <main ref={mobileI} className="mobile">
                    <MobileHeroContainer column={'mobile'}/>
                    <MobileCount/>
                    <MobileServiceContainer column={'mobileDevelop'}/>
                    <MobilePortfolio/>
                    <MainDevContainer column={'developerMobile'}/>
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

export default MobilePage