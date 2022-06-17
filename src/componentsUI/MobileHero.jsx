import React from 'react';
import HeroSection from './HeroSection';
import cl from '../style/MobileHero.module.css';
import {connect} from "react-redux/lib";
import { useSelector,useDispatch } from 'react-redux';

const MobileHero =  ({column})  => {
    const {MobileHeroPage} = useSelector(state=>state)
    const dispatch = useDispatch()
    const state = MobileHeroPage[column]
    return (
        <section className={cl.mobileSection}>
           <HeroSection title={state.title} descr={state.descr} classesImg={state.classesimg} gridCl={state.grid}/>
        </section>
    )
}

export default MobileHero