import React, {useEffect, useMemo, useRef, useState} from 'react';
import MainTItem from './MainTItem';
import cl from '../../style/MainTariff.module.css';
import {useDispatch, useSelector} from 'react-redux'
// import {Swiper, SwiperSlide} from "swiper/react";
import Swiper, {Pagination} from "swiper";
import MyModal from '../UI/modal/MyModal';
import MyThxModal from '../UI/thxmodal/MyThxModal';
import MyViewElement from '../UI/viewelement/MyViewElement';
import MyAddElement from '../UI/adminaddel/MyAddElement';
import MyAdminInput from '../UI/admininput/MyAdminInput';
const MainTariff = props => {
    const [theme, setTheme] = useState('')
    const [modal, setModal] = useState(false)
    const [thxModal, setThxModal] = useState(false)
    const dispatch = useDispatch();
    const {MainTariffPage} = useSelector((state) => state)
    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)
    const {AdminTexts} = useSelector(state=>state)
    const [tariffInfo, setTariffInfo] = useState({title: {width:0,height:0}})

    const infoData = [...MainTariffPage]

    const [modalInfo, setModalInfo] = useState({namePerson: '', tel: ''})

    let forServerInfo = {}

    const addModalInfo = (e) => {
        e.preventDefault();
        setModal(false);
        const newModal = {
            ...modalInfo, id: Date.now(), themePerson: theme
        }
        forServerInfo = {...newModal}
        setModalInfo({namePerson: '', tel: ''})
        // postRequest(forServerInfo)
    }

    useEffect(() => {
        let swiper = null;
        let mediaQuerySize = 576;

        function catalogSliderInit() {
            if (!swiper) {
                swiper = new Swiper(`.${cl.mySwiper}`, {
                    modules: [Pagination],
                    slidesPerView: "auto",
                    speed: 400,
                    spaceBetween: 10,
                    // autoHeight: true,
                    pagination: {
                        el: '.' + cl.pag,
                        type: 'bullets',
                    },

                }, []);
            }
        }

        function catalogSliderDestroy() {
            try {
                if (swiper) {
                    swiper.destroy();
                    swiper = null;

                }
            } catch (err) {
            }
        }

        function loadResize() {
            console.log('hello')
            if (typeof window !== 'undefined') {

                let windowWidth = window.innerWidth
                if (windowWidth <= mediaQuerySize) {
                    catalogSliderInit()
                } else if (swiper) {
                    catalogSliderDestroy()
                }
            }

        }
        if (typeof window !== 'undefined') {
            loadResize()
            window.addEventListener('load', loadResize);
            window.addEventListener('resize', loadResize);
        }
    }, []);

    console.log(isAdmin)

    const tariffS = useRef('')
    return (
        <section ref={tariffS} className={cl.tariffSection}>

            <MyViewElement element={
                props.title ? 
                    isAdmin ? 
                       
                            <div className={cl.tariffTittleBlock}>
                                 <MyAdminInput width={tariffInfo.title.width} height={tariffInfo.title.height} typeAction={ 'TITLE_TARIFF_INFO'}>
                                    <h2 className={cl.tariffTitle} onClick={e=>setTariffInfo({...tariffInfo, title: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{AdminTexts.mainTariff.title}</h2>
                                </MyAdminInput>
                            </div>
                        
                        :
                        <div className={cl.tariffTittleBlock}>
                            <h2 className={cl.tariffTitle}>Тарифы на разработку сайтов</h2>
                        </div>
                    :
                    ''
            }/> 
   
            
            <div className={cl.tariffListBlock}>

                <div className={`swiper  ` + cl.mySwiper}>

                    <div className={'swiper-wrapper ' + cl.tariffList}>
                        {isAdmin ?<MyAddElement  typeAction={'TARIFF_ELEMENT_ADD'}/>:''}
                        {infoData.map((e, i) => (
                                <div className={'swiper-slide ' + cl.slide} key={i}>
                                    <MyViewElement element={
                                    <MainTItem img={e.img} title={e.title} descr={e.descr} price={e.price} dl={e.dl}
                                            key={e.title} logo={e.logo} setModal={setModal} setTheme={setTheme} id={i+1} deleteAction={'TARIFF_ELEMENT_DELETE'}/>}/>
                                </div>
                        ))}
                    </div>

                    <div className="swiper-scrollbar"/>
                    <div className={cl.pag}/>

                </div>
            </div>
            <MyModal block={tariffS} visible={modal} setVisible={setModal} title='Оставить заявку'
                     setThx={setThxModal}/>
            <MyThxModal visible={thxModal} setVisible={setThxModal}/>
        </section>
    )
}


export default MainTariff
