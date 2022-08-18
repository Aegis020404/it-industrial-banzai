import React, {useState, useCallback} from "react";
import cl from '../../style/Reviews.module.css';
import MyViewElement from "../UI/viewelement/MyViewElement";
import { useDispatch, useSelector } from "react-redux";
import MyDeleteElement from '../UI/admindelel/MyDeleteElement'
import MyAdminInput from "../UI/admininput/MyAdminInput";


import {useDropzone} from 'react-dropzone'

const ReviewsItem = ({imgPerson, namePerson, positionPerson, commentPerson, id})=>{
    const reviewsInfo = useSelector(state=>state.Reviews)
    const [changeImg, setChangeImg] = useState(false)
    const dispatch = useDispatch()
    const {isAdmin} = useSelector(state=>state.AdminKey)
    const [reviewsData, setReviewsData] = useState({name: {width:0,height:0}, position: {width:0,height:0}, descr: {width:0,height:0}})
    const replacerComments = (str, find, replace)=>{
        let parts = str.split(find);
        let res = []
        for(let i = 0, result = []; i < parts.length; i++) {
            result.push(parts[i]);
            result.push(replace);
            res = result
        }
        return (
            <>{res}</>
        );
    }

    const onDrop = useCallback(acceptedFiles => { 
        dispatch({type: 'IMG_REVIEWS_CHANGE', info: {text:acceptedFiles[0].path, id: id}})
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})


    const descrItem = replacerComments(commentPerson, '_', < br/>)
    return (
        <MyViewElement element={
            <li className={cl.reviewsItem}>
                 {isAdmin ? 
                    <span className={'changeItemBtn'} onClick={e=>setChangeImg(!changeImg)}>изменить</span>
                :'' }
                <MyDeleteElement typeAction={'DELETE_REVIEWS_ELEMENT'} id={id}></MyDeleteElement>
                <div className={cl.reviewsLeft}>
                    <div className={cl.reviewsImgCard}>
                        <div className={cl.reviewsImgBlock}>
                        {isAdmin && changeImg ? 
                            <div className={cl.imgBlock}>
                                <div {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    {
                                        isDragActive ?
                                        <p className={cl.drop}>Отпустите файл</p> :
                                        <p className={cl.drag}>Переместите изображение</p>
                                    }
                                </div>
                            </div>
                            :
                            <img src={'/img/'+imgPerson} alt="Personality image"  className={cl.reviewsImg}/>
                        }
                          
                        </div>
                        {isAdmin ?
                            <MyAdminInput width={reviewsData.name.width} id={id} height={reviewsData.name.height} typeAction={'INITIALS_REVIEWS_CHANGE'}>
                                <h4 className={cl.reviewsTitleItem} onClick={e=>setReviewsData({...reviewsData, name: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{namePerson}</h4>
                            </MyAdminInput>
                        :
                            <h4 className={cl.reviewsTitleItem}>{namePerson}</h4>
                        }
                    </div>
                        {isAdmin ?
                            <MyAdminInput width={reviewsData.position.width} id={id} height={reviewsData.position.height} typeAction={'POSITION_REVIEWS_CHANGE'}>
                                <p className={cl.reviewsDescrItem} onClick={e=>setReviewsData({...reviewsData, position: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{positionPerson}</p>
                            </MyAdminInput>
                        :
                        <p className={cl.reviewsDescrItem}>{positionPerson}</p>
                        }
                    
                </div>
                <div className={cl.reviewsRight}>
                    {isAdmin ?
                            <MyAdminInput width={reviewsData.descr.width} id={id} height={reviewsData.descr.height} typeAction={'COMMENT_REVIEWS_CHANGE'}>
                                <div className={cl.reviewsDescr} onClick={e=>setReviewsData({...reviewsData, descr: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{commentPerson}</div>
                            </MyAdminInput>
                        :
                            <div className={cl.reviewsDescr}>{descrItem}</div>
                        }
                    
                </div>
            </li>
        }/>
         
       
       
    )
}

export default ReviewsItem