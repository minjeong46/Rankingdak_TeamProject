import React from 'react';
import '../SubMyPage/scss/SubMyPage.scss'
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SubMyPageTopComponent from './SubMyPageTopComponent'
import SubMyPageLeftMenuComponent from './SubMyPageLeftMenuComponent'
import SubMyPageRightUserDeletePwCheckComponentChild from './SubMyPageRightUserDeletePwCheckComponentChild'
import { signIn } from '../../../reducer/signIn';

export default function SubMyPageRightUserDeletePwCheckComponent () {

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
        <main id='mypage-user-delete-pw-Check' className='mypage'>
            <section id="section1">
                <div className="container">
                    <SubMyPageTopComponent />
                    <div className="content">
                        <SubMyPageLeftMenuComponent />
                        <SubMyPageRightUserDeletePwCheckComponentChild />
                    </div>
                </div>
            </section>
        </main>
    );
};
