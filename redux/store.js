import {applyMiddleware, combineReducers, createStore} from 'redux'
import {createWrapper} from 'next-redux-wrapper';
import sliderReducer from "./slider-redux";
import MainTariffReducer from "./mainTariff-redux";
import MainDevReducer from "./mainDev-redux";
import mainOfferReducer from "./mainOffer-redux";
import keysMainReducer from './keysNav-redux.js';
import {KeySiteReducer} from "./keySite-redux";
import {tarrifSEORedux} from "./tariffSEO-redux";
import {mobileServiceReducer} from "./mobileService-redux";
import {mobileHeroReducer} from "./mobileHero-redux";
import {KeysMainSeoReducer} from "./keysMainSeo-redux";
import { composeWithDevTools } from 'redux-devtools-extension'


let reducers = combineReducers( {
    mainSliderPage: sliderReducer,
    MainTariffPage: MainTariffReducer,
    MainDevPage: MainDevReducer,
    mainOfferPage: mainOfferReducer,
    keysNavPage: keysMainReducer,
    KeySitePage: KeySiteReducer,
    tarrifSEOPage: tarrifSEORedux,
    mobileServicePage: mobileServiceReducer,
    MobileHeroPage: mobileHeroReducer,
    KeysMainSeoPage: KeysMainSeoReducer,
})

const initStore = ()=>{
    return createStore(reducers, composeWithDevTools(
        applyMiddleware()
    ))
}


export const wrapper = createWrapper(initStore)