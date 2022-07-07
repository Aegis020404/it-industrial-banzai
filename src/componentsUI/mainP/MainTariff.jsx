import React, {useEffect, useRef, useState} from 'react';
import MainTItem from './MainTItem';
import cl from '../../style/MainTariff.module.css';
import {useDispatch, useSelector} from 'react-redux'
// import {Swiper, SwiperSlide} from "swiper/react";
import Swiper, {Pagination} from "swiper";
import MyModal from '../UI/modal/MyModal';
import MyThxModal from '../UI/thxmodal/MyThxModal';
import MyViewElement from '../UI/viewelement/MyViewElement';

const MainTariff = props => {
    const [theme, setTheme] = useState('')
    const [modal, setModal] = useState(false)
    const [thxModal, setThxModal] = useState(false)
    const dispatch = useDispatch();
    const {MainTariffPage} = useSelector((state) => state)
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

    const tariffS = useRef('')
    return (
        <section ref={tariffS} className={cl.tariffSection}>

            <MyViewElement element={props.title}/> 
            {/* {props.title} */}
            <div className={cl.tariffListBlock}>

                <div className={`swiper  ` + cl.mySwiper}>


                    <div className={'swiper-wrapper ' + cl.tariffList}>

                        {infoData.map((e, i) => (
                            
                                <div className={'swiper-slide ' + cl.slide} key={i}>
                                    <MyViewElement element={
                                    <MainTItem img={e.img} title={e.title} descr={e.descr} price={e.price} dl={e.dl}
                                            key={e.title} setModal={setModal} setTheme={setTheme}/>
                                        }/>
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
