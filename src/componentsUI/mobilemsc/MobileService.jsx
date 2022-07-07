import React, {useEffect} from 'react';
import cl from '../../style/MobileService.module.css';
import MobileServItem from './MobileServItem';
import {connect} from "react-redux/lib";
import {Pagination, Swiper} from "swiper";

import { useSelector, useDispatch } from 'react-redux';
import MyViewElement from '../UI/viewelement/MyViewElement';

const MobileService = ({column}) => {
    const {mobileServicePage} = useSelector(state=>state)
    const dispatch = useDispatch()
    const state = mobileServicePage[column]
    let checkin = 1
    useEffect(() => {
        let swiper = null;
        let mediaQuerySize = 576

        function inititalSwiper() {
            if (swiper) return
            swiper = new Swiper(`.${column}`, {
                modules: [Pagination],
                slidesPerView: 'auto',
                speed: 400,
                spaceBetween: 20,
                pagination: {
                    el: `.pag${column}`,
                    type: 'bullets',
                },
            })
        }

        function destroySwiper() {
            try {
                if (swiper) {
                    swiper.destroy();
                    swiper = null;
                }
            } catch (err) {
                console.log('')
            }
        }

        function loadResize() {
            if (typeof window !== 'undefined') {
                let windowWidth = window.innerWidth
                if (windowWidth <= mediaQuerySize) {
                    inititalSwiper()
                } else {
                    destroySwiper()
                }
            }
        }
        if (typeof window !== 'undefined') {
            loadResize()
            window.addEventListener('load', loadResize);
            window.addEventListener('resize', loadResize);
        }
    }, [])

    return (
        <section className={cl.serviceSection}>
            <div className="container">
                {state.title ? <MyViewElement element={<h2 className={cl.serviceTitle}>{state.title}</h2>}/> : ''}
                {state.text ?  <MyViewElement element={<p className={cl.serviceDescr}>{state.text}</p>}/> : ''}
                <div className={cl.serviceListBlock}>
                    <div className={`swiper ${column}`}>
                        <div className={'swiper-wrapper ' + cl.serviceList}>
                            {state.cases.map((e, i) => <div className={'swiper-slide ' + cl.swiperSl} key={i}>
                                <MobileServItem title={e.title} descr={e.descr} img={e.img}/>
                            </div>)}
                        </div>
                        <div className="swiper-scrollbar"></div>
                        <div className={`pag${column}` + ' ' + cl.pag} ></div>
                    </div>
                </div>
            </div>
        </section>
    )
    }
export default MobileService