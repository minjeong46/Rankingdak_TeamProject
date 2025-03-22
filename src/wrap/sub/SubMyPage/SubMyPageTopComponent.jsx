import React from 'react';
import '../SubMyPage/scss/SubMyPage.scss'
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signIn } from '../../../reducer/signIn';

export default function SubMyPageTopComponent () {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const selector = useSelector((state)=>state);

    const [ state, setState ] = React.useState({
        아이디: '',
    })

    React.useEffect(()=>{

        if(selector.signIn.로그인정보 !== null){
            setState({
                ...state,
                아이디: selector.signIn.로그인정보.아이디
            })
        }
        else {
            setState({
                ...state,
                아이디: '',
            })
        }
    },[]);


    return (
        <div className="my-info">
            <div className="my-info-box">
                <div className="mybox">
                    <div className="img-box">
                        <i></i>
                    </div>
                    <span className='txt-box'>
                        <h3><strong>{state.아이디}</strong> 님 반갑습니다</h3>
                        <ul>
                            {   
                                selector.signIn.로그인정보!==null && (
                                    selector.signIn.로그인정보.구분==='일반' && (
                                        <li><a href="!#">닭대리<img src="./images/sub/mypage/ico-dlv-arrow.png" alt="" /></a></li>
                                    )
                                )
                            }
                            {   
                               
                                selector.signIn.로그인정보!==null && (
                                    selector.signIn.로그인정보.구분==='관리자' && (
                                        <li><a href="!#">관리자<img src="./images/sub/mypage/ico-dlv-arrow.png" alt="" /></a></li>
                                    )
                                )
                            }
                            <li><a href="!#">1% 적립</a></li>
                            <li><a href="!#"><span><img src="./images/sub/mypage/ico-emblem-orange.png" alt="" /><em>+3% 추가적립!</em></span></a></li>
                        </ul>
                        <a href="!#"><p>100,000원 더 구매 시, 닭과장 진급!</p></a>
                    </span>
                </div>
                <div className="order-delivery box">
                    <h4 className="title">주문/배송</h4>
                    <a href="!#"><em>0</em><strong>건</strong></a>
                </div>
                <div className="coupon box">
                    <h4 className="title">쿠폰</h4>
                    <a href="!#"><em>0</em><strong>개</strong></a>
                </div>
                <div className="point box">
                    <h4 className="title">포인트</h4>
                    <a href="!#"><em>1,000</em><strong>P</strong></a>
                </div>
            </div>
        </div>
    );
};
