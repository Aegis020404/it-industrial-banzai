import React, {useState} from 'react';
import cl from '../../style/SeoMini.module.css'
import MyViewElement from '../UI/viewelement/MyViewElement';
import { useSelector } from 'react-redux';
import MyAdminInput from "../UI/admininput/MyAdminInput";

const SeoMini = ()=>{
    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)
    const seoTexts = useSelector(state=>state.AdminTexts.seoMini)
    const [miniData, setMiniData] = useState({title: {width:0,height:0}, descr: {width:0,height:0}})

    return (
        <section className={cl.miniSection}>
            <div className={cl.overlay}>
               
            </div>
            <div className={["container", cl.cont].join` `}>
                    <span className={cl.miniImg}>
                        {/* <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M45.5843 36.6088H43.761V25.6232C45.0691 25.4359 46.2006 24.6649 46.8619 23.4796C47.6164 22.1274 47.58 20.4688 46.7663 19.1502L36.7261 2.89885C35.9428 1.62945 34.5852 0.871582 33.0945 0.871582C31.6038 0.871582 30.2462 1.62945 29.4633 2.89812L25.3647 9.53238H6.20045C5.19342 9.53238 4.37712 10.3487 4.37712 11.3557V36.6088H2.55379C1.54677 36.6088 0.730469 37.4251 0.730469 38.4321C0.730469 43.4591 4.82019 47.5487 9.8471 47.5487H38.291C43.3179 47.5487 47.4076 43.4591 47.4076 38.4321C47.4076 37.4251 46.5913 36.6088 45.5843 36.6088ZM32.5662 4.81389C32.725 4.55661 32.9653 4.51823 33.0945 4.51823C33.2237 4.51823 33.464 4.55661 33.6233 4.81471L43.6635 21.0661C43.8322 21.3394 43.7446 21.5824 43.6774 21.7027C43.6108 21.8221 43.4518 22.0221 43.1352 22.0221H23.0538C22.7371 22.0221 22.5782 21.822 22.5116 21.7027C22.4445 21.5823 22.3568 21.3394 22.525 21.0668L32.5662 4.81389ZM8.02377 13.179H23.1118L19.4222 19.1511C18.6091 20.4688 18.5726 22.1274 19.3272 23.4796C20.0921 24.8504 21.4852 25.6688 23.0538 25.6688H40.1143V36.6088H8.02377V13.179ZM38.291 43.9021H9.8471C7.46994 43.9021 5.44212 42.3779 4.68955 40.2554H43.4485C42.696 42.3779 40.6681 43.9021 38.291 43.9021ZM31.18 18.4667C31.18 17.4597 31.9963 16.6433 33.0033 16.6433C34.0104 16.6433 34.8267 17.4597 34.8267 18.4667C34.8267 19.4737 34.0104 20.29 33.0033 20.29C31.9963 20.29 31.18 19.4737 31.18 18.4667ZM31.18 13.6349V11.4469C31.18 10.4398 31.9963 9.62355 33.0033 9.62355C34.0104 9.62355 34.8267 10.4398 34.8267 11.4469V13.6349C34.8267 14.6419 34.0104 15.4582 33.0033 15.4582C31.9963 15.4582 31.18 14.6419 31.18 13.6349Z" fill="#ACB8C0"/>
                        </svg> */}
                    </span>
                    <MyViewElement element={
                        isAdmin ? 
                        <MyAdminInput width={miniData.title.width}  height={miniData.title.height} typeAction={'TITLE_SEO_MINI_INFO'}>
                            <h2 className={cl.miniTitle} onClick={e=>setMiniData({...miniData, title: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{seoTexts.title}</h2>
                        </MyAdminInput>
                        :
                        <h2 className={cl.miniTitle}>{seoTexts.title}</h2>
                           
                    }/>
                    <MyViewElement element={
                        isAdmin ? 
                        <MyAdminInput width={miniData.descr.width}  height={miniData.descr.height} typeAction={'DESCR_SEO_MINI_INFO'}>
                            <p className={cl.miniDescr}  onClick={e=>setMiniData({...miniData, descr: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{seoTexts.descr}</p>

                        </MyAdminInput>
                        :
                            <p className={cl.miniDescr}>{seoTexts.descr}</p>
                        
                }/>

                </div>
        </section>
    )
}

export default SeoMini