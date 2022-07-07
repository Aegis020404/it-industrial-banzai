import React, {useState} from 'react';
import cl from '../../style/tariffSEO.module.css'
import {Swiper, Pagination} from "swiper";
import MyModal from "../UI/modal/MyModal";
import MyThxModal from "../UI/thxmodal/MyThxModal";
import MyBtnBlank from "../UI/buttonborder/MyBtnBlank";
import {useSelector} from 'react-redux';
import MyViewElement from '../UI/viewelement/MyViewElement';
const TariffSeo = ({column}) => {
    let nameSwiper = column// + ~~(Math.random() * 100)
    const {tarrifSEOPage} = useSelector(state => state)
    let swiperWrapper = React.createRef(false), pag = React.createRef(false), state = tarrifSEOPage[column]
    const [modal, setModal] = useState(false)
    const [thxModal, setThxModal] = useState(false)
    React.useEffect(() => {
        let swiper = null;
        let mediaQuerySize = null
        let checkin = 1;

        function inititalSwiper() {

            if (!!pag.current) {
                pag.current.style.display = 'block'
                swiperWrapper.current.style.justifyContent = 'flex-start'
            }
            if (swiper) return
            swiper = new Swiper(`.${nameSwiper}`, {
                modules: [Pagination],
                slidesPerView: 'auto',
                speed: 400,
                spaceBetween: 10,
                pagination: {
                    el: `.${nameSwiper + 'pag'}`, type: 'bullets',

                }
            })
        }

        function destroySwiper() {
            try {
                if (swiper) {
                    swiper.destroy();
                    swiper = null;
                }
                swiperWrapper.current.style.justifyContent = 'center'
                pag.current.style.display = 'none'
            } catch (err) {
                console.log('')
            }
        }

        function loadResize() {
            if (typeof window !== 'undefined') {
                mediaQuerySize = state.cases.length * 400;
                let windowWidth = window.innerWidth
                if (windowWidth <= mediaQuerySize) {
                    try {
                        if (pag.current !== null && pag.current !== undefined) {
                            pag.current.style.display = 'block'
                            swiperWrapper.current.style.justifyContent = 'flex-start'
                        }
                    } catch (e) {
                    }
                    inititalSwiper()
                } else {
                    try {

                        if (pag.current !== null && pag.current !== undefined) {
                            swiperWrapper.current.style.justifyContent = 'center'
                            pag.current.style.display = 'none'
                        }
                    } catch (e) {
                    }
                    destroySwiper()
                }
            }
        }

            if (checkin) {
                loadResize()
                checkin = 0
            }
            window.addEventListener('load', loadResize);
            window.addEventListener('resize', loadResize);
    })
    return (<div className={cl.tariffSEO}>
            <div className="container">

                <div className={cl.column1}>
                    {state.title ?  <MyViewElement element={<div className={cl.title}>{state.title}</div>}/> : ''}
                    {state.text ? <MyViewElement element={<div className={cl.text}>{state.text}</div>}/> : ''}
                    {state.titleText ? <MyViewElement element={<div className={cl.titleText}>{state.titleText}</div>}/> : ''}

                </div>
            </div>
            <MyViewElement element={

          
            <div className={"swiper " + nameSwiper + ' ' + cl.swiper}>
                <div className={"swiper-wrapper " + ' container ' + cl.wrapperSlid} ref={swiperWrapper}>
                    {state.cases.map((el, i) => <div key={i} className={"swiper-slide " + cl.swiperSl}>
                        <div className={cl.titleCase + ' ' + el.color}>
                            <div className={cl.titleCaseSpan}>{el.title}</div>
                        </div>
                        {Array.isArray(el.list) ? <ul className={cl.wrapList}>
                            {el.list.map((li, i) => <li key={i} className={cl.listTitle}>
                                <div className={cl.circle}/>
                                <div>{li}</div>
                            </li>)}

                        </ul> : <div className={cl.wrapList}>
                            <div className={cl.caserText}>{el.list}</div>
                        </div>}
                        <div className={cl.btnWrap}>
                            <div className={cl.price}>{el.price}</div>
                            <MyBtnBlank classes={cl.btn} onClick={e => {
                                e.preventDefault(e);
                                setModal(true)
                            }}>Заказать</MyBtnBlank>
                        </div>
                    </div>)}
                </div>
                <div className="swiper-scrollbar"/>
                <div className={cl.pag + ' ' + nameSwiper + 'pag'} ref={pag}/>
            </div>
              }/>

            <MyModal visible={modal} setVisible={setModal} title='Получить консультацию' setThx={setThxModal}/>
            <MyThxModal visible={thxModal} setVisible={setThxModal}/>
        </div>

    );
};

export default TariffSeo;