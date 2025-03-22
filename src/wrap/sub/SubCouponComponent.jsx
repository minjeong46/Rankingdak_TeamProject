import React from 'react';
import './scss/Subcoupon.scss';
import { useDispatch } from 'react-redux';
import { confirmModal } from '../../reducer/confirmModal';

export default function CouponComponent(){

    const dispatch = useDispatch();


    const confirmModalMethod=(msg)=>{
        const 컨펌모달설정 = {
            isConfirmModal: true,
            confirmModalMsg : msg,
            signUp : false,
        }
        dispatch(confirmModal(컨펌모달설정));

        const htmlEl = document.getElementsByTagName('html')[0]; 
        htmlEl.classList.add('on');
    }


    const onClickCoupon=(e)=>{
        e.preventDefault();
        confirmModalMethod("쿠폰이 발급되었습니다.");
    }

    return (
        <div id='coupon'>
            <div className="container">
                <div className="title-img">
                    <img src="./images/intro/coupon/IMG1701mES324078603.jpg" alt="" />
                </div>
                <div className="contents">
                    <div className="coupon cou1">
                        <div className="title">
                            <em>모든 회원님들을 위한 쿠폰</em>
                            <button><span>전체받기</span></button>
                        </div>
                        <div className="coupon-list">
                            <ul>
                                <li>
                                    <div className="text-box">
                                        <strong>
                                            <em>2,000</em>
                                            원 할인
                                        </strong>
                                        
                                        <button><img src="./images/intro/coupon/ico_info.png" alt="" /></button>
                                        <a href="!#">[특별쿠폰] 중화반점 2,000원 할인</a>
                                        <p>15,000원 이상 구매 시</p>
                                    </div>
                                    <a href="!#">적용상품 보기<i className="material-icons">keyboard_arrow_right</i></a>
                                    <div onClick={onClickCoupon} className="add">
                                        <img src="./images/intro/coupon/ico_download_coupon.png" alt="" />
                                        <span>1장</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="text-box">
                                        <strong>
                                            <em>2,000</em>
                                            원 할인
                                        </strong>
                                        <button><img src="./images/intro/coupon/ico_info.png" alt="" /></button>
                                        <a href="!#">[특별쿠폰] 잇메이트 닭가슴살 소시지</a>
                                        <p>20,000원 이상 구매 시</p>
                                    </div>
                                    <a href="!#">적용상품 보기<i className="material-icons">keyboard_arrow_right</i></a>
                                    <div onClick={onClickCoupon} className="add">
                                        <img src="./images/intro/coupon/ico_download_coupon.png" alt="" />
                                        <span>1장</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="text-box">
                                        <strong>
                                            <em>2,000</em>
                                            원 할인
                                        </strong>
                                        <button><img src="./images/intro/coupon/ico_info.png" alt="" /></button>
                                        <a href="!#">[특별쿠폰] 맛있닭 다이어트 도시락</a>
                                        <p>18,000원 이상 구매 시</p>
                                    </div>
                                    <a href="!#">적용상품 보기<i className="material-icons">keyboard_arrow_right</i></a>
                                    <div onClick={onClickCoupon} className="add">
                                        <img src="./images/intro/coupon/ico_download_coupon.png" alt="" />
                                        <span>1장</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="coupon cou2">
                        <div className="title">
                            <span><strong>오렌지멤버스</strong> 회원이세요?</span>
                            <button><span>전체받기</span></button>
                        </div>
                        <div className="coupon-list">
                            <ul>
                                <li>
                                    <div className="text-box">
                                        <strong>
                                            <em>2,000</em>
                                            원 할인
                                        </strong>
                                        <button><img src="./images/intro/coupon/ico_info.png" alt="" /></button>
                                        <a href="!#">[ONLY오렌지멤버스] 소스IN 닭가슴살</a>
                                        <p>20,000원 이상 구매 시</p>
                                    </div>
                                    <a href="!#">적용상품 보기<i className="material-icons">keyboard_arrow_right</i></a>
                                    <div onClick={onClickCoupon} className="add">
                                        <img src="./images/intro/coupon/ico_download_coupon.png" alt="" />
                                        <span>1장</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="text-box">
                                        <strong>
                                            <em>2,000</em>
                                            원 할인
                                        </strong>
                                        <button><img src="./images/intro/coupon/ico_info.png" alt="" /></button>
                                        <a href="!#">[ONLY오렌지멤버스] NEW 더블 덮밥</a>
                                        <p>10,000원 이상 구매 시</p>
                                    </div>
                                    <a href="!#">적용상품 보기<i className="material-icons">keyboard_arrow_right</i></a>
                                    <div onClick={onClickCoupon} className="add">
                                        <img src="./images/intro/coupon/ico_download_coupon.png" alt="" />
                                        <span>1장</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="coupon cou2">

                    </div>
                    <div className="coupon cou3">

                    </div>
                </div>
            </div>
        </div>
    );
};
