import React, {useMemo, useState} from 'react';
import cl from '../../style/MainOffer.module.css'
import MyBtnFiled from '../UI/buttonback/MyBtnFiled'
import MyMask from '../UI/maskinput/MyMask'
import MyInput from "../UI/input/MyInput";
import Ranger from "../UI/ranger/Ranger";
import MyBtnBlank from '../UI/buttonborder/MyBtnBlank';

import {Swiper, SwiperSlide} from "swiper/react";
import MyThxModal from '../UI/thxmodal/MyThxModal';
import {selectBtn} from "../../../redux/mainOffer-redux";
import {useDispatch, useSelector} from 'react-redux';
import MyViewElement from '../UI/viewelement/MyViewElement';

const MainOffer = (props) => {
    const [btnActive, setBtnActive] = useState('')
    const dispatch = useDispatch();
    const {mainOfferPage} =useSelector(state=>state)
    const infoData = mainOfferPage.btns
    const [priceTo, setPriseTo] = useState(0)
    const [priceFrom, setPriseFrom] = useState(0)

    const [modalInfo, setModalInfo] = useState({namePerson: '', tel: '', themeSite: '', range: {from: '', to: ''}})
    const [modal, setModal] = useState(false)

    let forServerInfo = {}

    useMemo(() => {
        setModalInfo((mf)=>({...mf, range: {from: priceFrom, to: priceTo}}))
    }, [priceTo, priceFrom])

    useMemo(() => {

        setModalInfo(()=>({...modalInfo, themeSite: btnActive}))
    }, [btnActive])
    useMemo(()=> {
        setBtnActive(() => infoData.filter(el=>el.selected).map(el => el.text))
    },[infoData])
    const addModalInfo = (e) => {
        e.preventDefault();
        setModal(true);
        const newModal = {
            ...modalInfo, id: Date.now()
        }
        forServerInfo = {...newModal}
        setModalInfo(()=>({namePerson: '', tel: '', range: {from: priceFrom, to: priceTo}, themeSite: ''}))
        console.log(modalInfo)
        // ContactsService.setPhonaNameBudget(forServerInfo.namePerson, forServerInfo.tel, forServerInfo.range.from, forServerInfo.range.to)
    }
    return (
        <section className={cl.MainOffer}>
            <div className={["container", cl.container].join` `}>
                <div className={cl.wrapper}>
                    <span className={cl.mailRight}/>
                    <span className={cl.mailLeft}/>
                    <MyViewElement element={
                        <p className={cl.title}>Получить коммерческое предложение</p>
                    }/>
                    <MyViewElement element={
                        <p className={cl.titleText}>Заполните форму сейчас и наш специалист свяжется с вами для консультации
                        и составит ваше персональное предложение. Вы получите более точное КП, если укажете полную
                        информацию о проекте.</p>
                    }/>
                    <MyViewElement element={
                        <div className={cl.btnsM}>
                            <Swiper
                                slidesPerView={"auto"}
                                spaceBetween={10}
                                className={cl.mySwiper}>

                                {infoData.map((el, i) => (
                                    <SwiperSlide className={cl.swipeSl} key={i}>
                                        <button className={el.selected ? `${cl.btn} ${cl.btnSelected}` : cl.btn}  my_key={i}
                                                onClick={e => {
                                                    dispatch(selectBtn(e.target.getAttribute('my_key')))
                                                    // e.preventDefault();
                                                }}>{el.textS}
                                        </button>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    }/>
                    <MyViewElement element={
                         <div className={cl.btns}>
                            {infoData.map((el, i) => (
                                <button className={el.selected ? `${cl.btn} ${cl.btnSelected}` : cl.btn} key={i} my_key={i}
                                        onClick={(e,i) => {
                                            dispatch(selectBtn(e.target.getAttribute('my_key')))
                                            // e.preventDefault();
                                        }}>{el.text}
                                </button>
                            ))}
                        </div>
                    }/>
                    
                   
                    <MyViewElement element={
                        <div className={cl.prices}>
                        <p className={cl.titlePrices}>Бюджет проекта</p>
                        <p className={cl.titlePricesText}>Укажите примерную сумму, которую плнируете потратить на
                            реализацию проекта</p>
                        <Ranger setTo={setPriseTo} priceTo={priceTo} priceFrom={priceFrom} setFrom={setPriseFrom}/>
                    </div>
                    }/>
                    

                    <div className={cl.contacts}>
                        <form id='offer' action="">
                            <MyViewElement element={
                                <p className={cl.titleContacts}>Контакты</p>
                            }/>
                            <MyViewElement element={
                                <div className={cl.contactsBtn}>
                                    <div className={cl.itemBlock}>
                                        <MyInput classesInput={cl.input} valueInput={modalInfo.namePerson}
                                                setInput={setModalInfo} input={modalInfo} classesPlace={cl.modalPlace}
                                                place='Введите ваше имя'/>
                                    </div>
                                    <div className={cl.itemBlock}>
                                        <MyMask classesItem={[cl.input, cl.modalMask, cl.mask].join` `}
                                                value={modalInfo.tel}
                                                onChange={e => setModalInfo({...modalInfo, tel: e.target.value})}/>
                                    </div>
                                </div>
                            }/>
                            <MyViewElement element={
                                <p className={cl.agreement}>Нажимая на кнопку, вы даете согласие на обработку ваших
                                персональных
                                данных</p>
                            }/>
                            <MyViewElement element={
                                <div className={cl.requestWrap}>
                                <MyBtnFiled type='submit' form='offer' children={'получить консультацию'}
                                            onClick={e => addModalInfo(e)}
                                            classes={cl.request}/>
                                <MyBtnBlank type='submit' form='offer' children={'получить консультацию'}
                                            onClick={e => addModalInfo(e)}
                                            classes={cl.requestM}/>
                            </div>
                            }/>
                            
                        </form>
                    </div>
                </div>
            </div>
            <MyThxModal visible={modal} setVisible={setModal}/>
        </section>
    );

};


export default MainOffer;