import React from 'react';
import '../SubMyPage/scss/SubMyPage.scss'
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SubMyPageTopComponent from './SubMyPageTopComponent'
import SubMyPageLeftMenuComponent from './SubMyPageLeftMenuComponent'
import SubMyPageRightAdminUserUpdateComponentChild from './SubMyPageRightAdminUserUpdateComponentChild'
import { signIn } from '../../../reducer/signIn';

export default function SubMyPageRightAdminUserUpdateComponent() {

    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const selector = useSelector((state)=>state);

    const [ state, setState ] = React.useState({
        회원정보: {
            아이디: location.state.아이디,
            비밀번호: location.state.비밀번호,
            이름: location.state.이름,
            휴대폰: location.state.휴대폰,
            이메일: location.state.이메일,
            평생회원: location.state.평생회원,
        }
    })

    return (
        <main id='mypage-admin-user-update' className='mypage'>
            <section id="section1">
                <div className="container">
                    <SubMyPageTopComponent />
                    <div className="content">
                        <SubMyPageLeftMenuComponent />
                        <SubMyPageRightAdminUserUpdateComponentChild 회원정보={state.회원정보} />
                    </div>
                </div>
            </section>
        </main>
    );
};
