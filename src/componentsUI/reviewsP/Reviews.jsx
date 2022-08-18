import React, {useState} from 'react';
import cl from '../../style/Reviews.module.css';
import ReviewsItem from './ReviewsItem';
import MyTitle from '../UI/titlepage/MyTitle';
import { useSelector } from 'react-redux';
import MyAdminInput from '../UI/admininput/MyAdminInput';
import MyAddElement from '../UI/adminaddel/MyAddElement';
const Reviews = ()=>{
    const reviewsInfo = useSelector(state=>state.Reviews)
    const adminTexts = useSelector(state=>state.AdminTexts)
    const {isAdmin} = useSelector(state=>state.AdminKey)
    const [reviewsData, setReviewsData] = useState({title: {width:0,height:0}})
    return (
        <>
            <section className={cl.reviewsSection}>
            <div className={["container", cl.container].join` `}>
                <div className={cl.reviewsCont}>
                    <MyTitle title={adminTexts.reviewsTexts.title} typeAction={'TITLE_REVIEWS_PAGE_CHANGE'} classes={cl.reviewsTitle}></MyTitle>
                   
                    <div className={cl.reviewsListBlock}>
                        {isAdmin ? <MyAddElement typeAction={'ADD_REVIEWS_ELEMENT'}/>:''}
                        <ul className={cl.reviewsList}>
                        {reviewsInfo.map((review, i) => <ReviewsItem key={i} id={review.id} imgPerson={review.photo} namePerson={review.name} commentPerson={review.comment} positionPerson={review.position}/>)}
                        </ul>
                    </div>
                </div>
               
            </div>
        </section>
        </>
        
    )
}

export default Reviews