import React, {useState} from "react";
import { useSelector } from "react-redux";
import cl from '../../style/AboutText.module.css';
import MyViewElement from "../UI/viewelement/MyViewElement";
import MyAdminInput from "../UI/admininput/MyAdminInput";
const AboutText = ()=>{
    const adminTexts = useSelector(state=>state.AdminTexts.aboutTexts)
    const {isAdmin} = useSelector(state=>state.AdminKey)
    const [aboutInfo, setAboutInfo] = useState({title: {width:0,height:0},firstDescr: {width:0,height:0},secDescr:{width:0,height:0},thirdDescr: {width:0,height:0},fourthDescr: {width:0,height:0}, countTop: {width:0,height:0}, countBottom: {width:0,height:0}, topDescr: {width:0,height:0}, bottomDescr: {width:0,height:0}})
    console.log(adminTexts)
    return (
        <section className={cl.aboutSection}>
             <div className={cl.aboutBackImg}></div>
            <div className={["container", cl.container].join` `}>
                <div className={cl.aboutCont}>
                    <MyViewElement element={
                        isAdmin ? 
                        <MyAdminInput width={aboutInfo.title.width} height={aboutInfo.title.height} typeAction={'TITLE_ABOUT_PAGE_CHANGE'}>
                        <h1 className={cl.aboutTitle} onClick={e=>setAboutInfo({...aboutInfo, title: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{adminTexts.title}</h1>
                        </MyAdminInput>
                        :
                         <h1 className={cl.aboutTitle} onClick={e=>setAboutInfo({...aboutInfo, title: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{adminTexts.title}</h1>
                    }/>
                   
                    <div className={cl.aboutContent}>
                    <MyViewElement element={
                        <div className={cl.aboutTextCard}>
                           
                            {isAdmin ? 
                             <p>
                                 <MyAdminInput width={aboutInfo.firstDescr.width} height={aboutInfo.firstDescr.height} typeAction={'DESCR_FIRST_ABOUT_PAGE_CHANGE'}>
                                    <span className={cl.aboutText} onClick={e=>setAboutInfo({...aboutInfo, firstDescr: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{adminTexts.descrFirst}</span>
                                </MyAdminInput>
                                <br /><br />
                                <MyAdminInput width={aboutInfo.secDescr.width} height={aboutInfo.secDescr.height} typeAction={'DESCR_SEC_ABOUT_PAGE_CHANGE'}>
                                    <span className={[cl.strong, cl.aboutText].join` `} onClick={e=>setAboutInfo({...aboutInfo, secDescr: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{adminTexts.descrSec}</span>
                                </MyAdminInput>
                                <br /><br />
                                <MyAdminInput width={aboutInfo.thirdDescr.width} height={aboutInfo.thirdDescr.height} typeAction={'DESCR_THIRD_ABOUT_PAGE_CHANGE'}>
                                    <span className={cl.aboutText} onClick={e=>setAboutInfo({...aboutInfo, thirdDescr: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{adminTexts.descrThird}</span>
                                </MyAdminInput>
                                <br /><br />
                                <MyAdminInput width={aboutInfo.fourthDescr.width} height={aboutInfo.fourthDescr.height} typeAction={'DESCR_FOURTH_ABOUT_PAGE_CHANGE'}>
                                    <span className={cl.aboutText} onClick={e=>setAboutInfo({...aboutInfo, fourthDescr: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{adminTexts.descrFourth}</span>
                                </MyAdminInput>
                             
                             </p>
                            :
                                <p>
                                    <span className={cl.aboutText}>{adminTexts.descrFirst}</span>
                                    <br /><br />
                                    <span className={[cl.strong, cl.aboutText].join` `}>{adminTexts.descrSec}</span>
                                    <br /><br />
                                    <span className={cl.aboutText}>{adminTexts.descrThird}</span>
                                    <br /><br />
                                    <span className={cl.aboutText}>{adminTexts.descrFourth}</span>
                                </p>
                            }
                            
                           
                        </div>
                         }/>
                        <div className={cl.countCard}>
                        <MyViewElement element={
                            isAdmin ? 
                                <div className={cl.countTopCard}>
                                    <MyAdminInput width={aboutInfo.countTop.width} height={aboutInfo.countTop.height} typeAction={'TOP_COUNT_ABOUT_PAGE_CHANGE'}>
                                        <span className={cl.count} onClick={e=>setAboutInfo({...aboutInfo, countTop: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{adminTexts.topCount}</span>
                                    </MyAdminInput>
                                    <MyAdminInput width={aboutInfo.topDescr.width} height={aboutInfo.topDescr.height} typeAction={'TOP_DESCR_ABOUT_PAGE_CHANGE'}>
                                        <p className={cl.countDescr} onClick={e=>setAboutInfo({...aboutInfo, topDescr: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{adminTexts.topText}</p>
                                    </MyAdminInput>
                                </div>
                            :
                                <div className={cl.countTopCard}>
                                    <span className={cl.count} onClick={e=>setAboutInfo({...aboutInfo, countTop: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{adminTexts.topCount}</span>
                                    <p className={cl.countDescr} onClick={e=>setAboutInfo({...aboutInfo, topDescr: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{adminTexts.topText}</p>
                                </div>
                             }/>
                             <MyViewElement element={
                                 !isAdmin ? 
                                    <div className={cl.countBottomCard}>
                                        <span className={cl.count} onClick={e=>setAboutInfo({...aboutInfo, countBottom: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{adminTexts.developCount}</span>
                                        <p className={cl.countDescr} onClick={e=>setAboutInfo({...aboutInfo, bottomDescr: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{adminTexts.developText}</p>
                                    </div>
                                :
                                    <div className={cl.countBottomCard}>
                                        <MyAdminInput width={aboutInfo.countBottom.width} height={aboutInfo.countBottom.height} typeAction={'BOTTOM_COUNT_ABOUT_PAGE_CHANGE'}>
                                            <span className={cl.count} onClick={e=>setAboutInfo({...aboutInfo, countBottom: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{adminTexts.developCount}</span>
                                        </MyAdminInput>
                                        <MyAdminInput width={aboutInfo.bottomDescr.width} height={aboutInfo.bottomDescr.height} typeAction={'BOTTOM_DESCR_ABOUT_PAGE_CHANGE'}>
                                            <p className={cl.countDescr} onClick={e=>setAboutInfo({...aboutInfo, bottomDescr: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{adminTexts.developText}</p>
                                        </MyAdminInput>
                                    </div>
                             }/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutText