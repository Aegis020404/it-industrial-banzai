import React from 'react';
import cl from '../../style/KeysMainSeo.module.css';
import KeysMainSeoItem from './KeysMainSeoItem';
import ecoSchedule from '../../assets/img/keys-seo-eco.svg';
import stroySchedule from '../../assets/img/keys-seo-stroy.svg';
import veniSchedule from '../../assets/img/key-seo-veni.svg';
import autoSchedule from '../../assets/img/keys-seo-auto.svg';
import llumarSchedule from '../../assets/img/keys-seo-lumar.svg';
import {connect} from "react-redux/lib";
import { useDispatch, useSelector } from 'react-redux';

const KeysMainSeo = (props) => {
    const dispatch = useDispatch()
    const {KeysMainSeoPage} = useSelector(state=>state)

    return (
        <div className={[cl.seoBlock, props.classesTabs].join` `}>
            <ul className={cl.seoList}>
                {KeysMainSeoPage.map((e,i)=><KeysMainSeoItem key={i} index={i} nameCompany={e.nameCompany} linkCompany={e.linkCompany} beenTopTen={e.changeSeo.beenChange.topTen}  schedule={e.schedule} scheduleSet={e.scheduleSet} beenTraffic={e.changeSeo.becameChange.traffic} becameTopTen={e.changeSeo.becameChange.topTen} becameTraffic={e.changeSeo.becameChange.traffic}/>)}
            </ul>
        </div>
    )
}


export default KeysMainSeo