import React, {useState} from "react";
import cl from '../../style/MainOther.module.css';
import MyBtnFiled from "../UI/buttonback/MyBtnFiled";
import MyModal from "../UI/modal/MyModal";
import MyMask from "../UI/maskinput/MyMask";
import MyInput from "../UI/input/MyInput";
import MainOItem from "./MainOItem";
import ContactsService from "../../API/ContactsService";

// import {Swiper, SwiperSlide} from "swiper/react";
import Swiper from "swiper";

import MainTItem from "./MainTItem";
import {Pagination} from "swiper";
import MyThxModal from "../UI/thxmodal/MyThxModal";


const MainOther = () => {

    const [modalInfo, setModalInfo] = useState({namePerson: '', tel: ''})

    let forServerInfo = {}

    const addModalInfoItem = (e) => {
        e.preventDefault();
        setModal(false);
        const newModal = {
            ...modalInfo, id: Date.now()
        }
        forServerInfo = {...newModal}
        setModalInfo({namePerson: '', tel: ''})
        // ContactsService.setPhoneNName(modalInfo.tel, modalInfo.tel)
    }

    const addModalInfo = (e) => {
        e.preventDefault();
        setModal(false);
        const newModal = {
            ...modalInfo, id: Date.now()
        }
        forServerInfo = {...newModal}
        setModalInfo({namePerson: '', tel: ''})
        // ContactsService.setPhoneNName(modalInfo.tel, modalInfo.tel)
    }


    const [modal, setModal] = useState(false)
    const [thxModal, setThxModal] = useState(false)

    const [modalItem, setModalItem] = useState(false)

    const infoItem = [{title: 'SEO-продвижение', img: 'circle-cubs.png'},
        {title: 'SMM', img: 'circle-phone.png'},
        {title: 'Аналитика сайта', img: 'circle-mac.png'},
        {title: 'Аудит сайта', img: 'circle-contract.png'}]


    React.useEffect(() => {
        let swiper = null;
        let mediaQuerySize = 576;

        function catalogSliderInit() {
            if (!swiper) {
                swiper = new Swiper('.swiperM', {
                    modules: [Pagination],
                    slidesPerView: "auto",
                    speed: 400,
                    // spaceBetween: 10,
                    // autoHeight: true
                }, []);
            }
        }

        function catalogSliderDestroy() {
            try {
                if (swiper) {
                    swiper.destroy();
                    swiper = null;

                }
            } catch (err) {}
        }

        function loadResize() {
            if (typeof window !== 'undefined') {

                let windowWidth = window.innerWidth

                if (windowWidth <= mediaQuerySize) {
                    catalogSliderInit()
                } else {
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


    return (
        <section className={cl.other}>
            <div className={cl.allOtherContent}>
                <div className={cl.overlay}/>
                <div className={cl.container}>
                    <div className={cl.otherContent}>
                        <h2 className={cl.otherTitle}>Другие услуги <span
                            className={cl.otherTitleItem}>IT-INDUSTRIAL</span></h2>
                        <div className={cl.otherListBlock}>
                            <div className={'swiper swiperM '}>


                                <div className={'swiper-wrapper ' + cl.otherList}>
                                    {infoItem.map((e, i) =>
                                        <div className={'swiper-slide ' + cl.swipeSl} key={i}>
                                            <MainOItem title={e.title} img={e.img} setModalItem={setModalItem}
                                                       key={e.title}/>
                                        </div>
                                    )}

                                </div>
                            </div>
                            {/*<ul className={cl.otherList}>*/}
                            {/*    {infoItem.map(e => */}
                            {/*        <MainOItem title={e.title} img={e.img} setModalItem={setModalItem} key={e.title}/> */}
                            {/*    )}*/}
                            {/*</ul>*/}
                            {/*<Swiper*/}
                            {/*    slidesPerView={"auto"}*/}
                            {/*    // spaceBetween={11}*/}
                            {/*    autoHeight ={true}*/}
                            {/*    className={cl.mySwiper}>*/}
                            {/*    <ul>*/}
                            {/*        {infoItem.map(e =>(*/}
                            {/*            <SwiperSlide className={cl.swipeSl}>*/}

                            {/*            <MainOItem title={e.title} img={e.img} setModalItem={setModalItem} key={e.title}/>*/}
                            {/*            </SwiperSlide>*/}
                            {/*            )*/}
                            {/*        )}*/}
                            {/*    </ul>*/}
                            {/*</Swiper>*/}
                        </div>
                        <div className={cl.btnCont}>
                            <MyBtnFiled classes={cl.otherBtn} onClick={e => {
                                e.preventDefault(e);
                                setModal(true)
                            }}>нужна консультация</MyBtnFiled>
                        </div>
                    </div>
                </div>
            </div>

            <MyModal visible={modal} setVisible={setModal} title='Получить консультацию' setThx={setThxModal}/>
            <MyModal visible={modalItem} setVisible={setModalItem} title='Оставить заявку' setThx={setThxModal}/>
            <MyThxModal visible={thxModal} setVisible={setThxModal}/>
        </section>
    )
}

export default MainOther