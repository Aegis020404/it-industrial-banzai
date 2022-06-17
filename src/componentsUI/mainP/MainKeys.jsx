import React from 'react';
import cl from '../../style/MainKeys.module.css';
import MainKItem from './MainKItem';
import MyBtnBlank from '../UI/buttonborder/MyBtnBlank';

import Link from 'next/link';

const MainKeys = () => {

    const itemInfo = [{
        count: 2,
        info: [{
            href: '/строй-мат',
            descr: 'Интернет-магазин «Строймат»',
            classes: cl.imgPhone,
            img: 'orange-phone-block.jpg',
            alt: 'Website компании "Строймат" на телефоне'
        }, {
            href: '/avto-estetica',
            descr: 'Интернет-магазин «Автоэстетика»',
            classes: cl.imgAmout,
            img: 'black-gadjets-block.jpg',
            alt: 'Website компании "Автоэстетика" на телефоне и ноутбуке'
        }]
    }, {
        count: 1,
        info: [{
            href: '/llumar',
            descr: 'Сайт компании «Llumar»',
            classes: [cl.imgPad, cl.imgPadM],
            img: ['pad-keys.png', 'pad-mobile.jpg'],
            alt: 'Website компании "Llumar" на планшете'
        }]
    }, {
        count: 2,
        info: [{
            href: '/ec-vtor',
            descr: 'Разработка сайта компании «Эковтор»',
            classes: cl.imgEva,
            img: ['logo-evo.svg', 'female-sort.png', 'eko-mobile.jpg'],
            alt: '"Ековтор" - экологически чистая компания, спасает природу, перерабатывая бумагу, пластик, пластмассы'
        }, {
            href: '/hock-team',
            descr: 'Сайт для хоккейной команды',
            classes: cl.imgMiniPad,
            img: 'pad-hockey.png',
            alt: 'Website хоккейной команды на планшете'
        }]
    }]

    return (
        <section className={cl.keys}>
            <div className="container">
                <div className={cl.keysContent}>
                    <h2 className={cl.keysTitle}>Наши кейсы</h2>
                    <p className={cl.keysDescr}>В каждом проекты мы разрабатываем и внедряем новые решения</p>
                    <div className={cl.keysListBlock}>
                        <ul className={cl.keysList}>
                            {itemInfo.map((e, i) =>
                            <MainKItem count={e.count} infoArr={e.info} key={i}/>
                            )}
                        </ul>
                    </div>
                    <Link href='/keys'>
                        <a onClick={e => {document.body.scrollTo({top: 0, behavior: 'smooth'})}}> 
                            <MyBtnBlank classes={cl.keysBtn}>все кейсы</MyBtnBlank>
                        </a>
                    </Link>

                </div>
            </div>
        </section>
    )
}

export default MainKeys