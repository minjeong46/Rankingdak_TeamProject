import React from 'react';
import '../SubMyPage/scss/SubMyPage.scss'
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SubMyPageTopComponent from './SubMyPageTopComponent'
import SubMyPageLeftMenuComponent from './SubMyPageLeftMenuComponent'
import SubMyPageRightAdminUpdateComponentChild from './SubMyPageRightAdminUpdateComponentChild'
import { signIn } from '../../../reducer/signIn';

export default function SubMyPageRightAdminUpdateComponent () {

    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const selector = useSelector((state)=>state);

    const [ state, setState ] = React.useState({
        회원정보 : {
            아이디: location.state.아이디,
            이름: location.state.이름,
            휴대폰: location.state.휴대폰,
            이메일: location.state.이메일,
        }
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
        <main id='mypage-admin-update' className='mypage'>
            <section id="section1">
                <div className="container">
                        <SubMyPageTopComponent />
                    <div className="content">
                        <SubMyPageLeftMenuComponent />
                        <SubMyPageRightAdminUpdateComponentChild 
                            회원정보={state.회원정보}
                            
                            />
                    </div>
                </div>
            </section>
        </main>
    );
};
