import React from 'react';
import '../SubMyPage/scss/SubMyPage.scss'
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signIn } from '../../../reducer/signIn';

export default function SubMyPageLeftMenuComponent () {

    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const selector = useSelector((state)=>state);

    const [userUpdate,setUserUpdate] = React.useState();
    const [userDelete,setUserDelete] = React.useState();



    return (

            <div className="left nav">
                <nav>
                    <ul className='main-list'>
                        {/* <li className='list list1'>
                            <a href="!#">주문관리</a>
                            <ul className='sub-list'>
                                <li><a href="!#">주문내역</a></li>
                                <li><a href="!#">취소/반품 내역</a></li>
                                <li><a href="!#">정기배송 관리</a></li>
                                <li><a href="!#">재입고 알림 상품</a></li>
                            </ul>
                        </li>
                        <li className='list list1'>
                            <a href="!#">혜택관리</a>
                            <ul className='sub-list'>
                                <li><a href="!#">쿠폰</a></li>
                                <li><a href="!#">포인트</a></li>
                                <li><a href="!#">랭킹닭컴 상품권 관리</a></li>
                            </ul>
                        </li>
                        <li className='list list1'>
                            <a href="!#">활동관리</a>
                            <ul className='sub-list'> 
                                <li><a href="!#">최근 본 상품</a></li>
                                <li><a href="!#">찜한상품</a></li>
                                <li><a href="!#">관심브랜드</a></li>
                                <li><a href="!#">1:1문의</a></li>
                                <li><a href="!#">상품후기</a></li>
                                <li><a href="!#">상품문의내역</a></li>
                                <li><a href="!#">식단상담 목록</a></li>
                            </ul>
                        </li>
                        <li className='list list1'>
                            <a href="!#">VIP전용관</a>
                        </li> */}
                        {/* <li className='list list1'>
                            <a href="!#">오렌지멤버스</a>
                        </li> */}
                        {
                            selector.signIn.로그인정보!==null && (
                                selector.signIn.로그인정보.구분==='일반' && (
                                    <li className='list list2'>
                                        <Link to="/mypageUserUpdatePwCheck">회원정보관리</Link>
                                        <ul className='sub-list'>
                                            <li><Link to="/mypageUserUpdatePwCheck" className={location.pathname==='/mypageUserUpdatePwCheck'?"on":''}>정보 수정</Link></li>
                                            <li><Link to="/mypageUserDeletePwCheck" className={location.pathname==='/mypageUserDeletePwCheck'?"on":''}>회원 탈퇴</Link></li>
                                        </ul>
                                    </li>
                                )
                            )
                        }
                        {   
                            selector.signIn.로그인정보!==null && (
                                selector.signIn.로그인정보.구분==='관리자' && (
                                    <li className='list list3'>
                                        <Link to="/mypageAdminUpdatePwCheck">관리자관리</Link>
                                        <ul className='sub-list'>
                                            <li><Link to="/mypageAdminUpdatePwCheck" className={location.pathname==='/mypageAdminUpdatePwCheck'?"on":''}>정보 수정</Link></li>
                                            <li><Link to="/mypageAdminUserList" className={location.pathname==='/mypageAdminUserList'?"on":''}>회원 목록</Link></li>
                                            <li><Link to="/mypageAdminDeletePwCheck" className={location.pathname==='/mypageAdminDeletePwCheck'?"on":''}>관리자 탈퇴</Link></li>
                                        </ul>
                                    </li>
                                )
                            )
                        }
                    </ul>
                    <div className="user-service-box">
                        <Link to='/customerCenter'>
                            <i></i>
                            <p>고객의 소리</p>
                        </Link>
                        <img src="./images/sub/mypage/ico-dlv-arrow.png" alt="" />
                    </div>
                </nav>
            </div>


    );
};
