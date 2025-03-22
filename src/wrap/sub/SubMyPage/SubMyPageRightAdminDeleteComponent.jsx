import React from 'react';
import '../SubMyPage/scss/SubMyPage.scss'
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SubMyPageTopComponent from './SubMyPageTopComponent'
import SubMyPageLeftMenuComponent from './SubMyPageLeftMenuComponent'
import SubMyPageRightAdminDeleteComponentChild from './SubMyPageRightAdminDeleteComponentChild'
import { signIn } from '../../../reducer/signIn';

export default function SubMyPageRightAdminDeleteComponent () {

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
        <main id='mypage-admin-delete' className='mypage'>
            <section id="section1">
                <div className="container">
                    <SubMyPageTopComponent />
                    <div className="content">
                        <SubMyPageLeftMenuComponent />
                        <SubMyPageRightAdminDeleteComponentChild />
                    </div>
                </div>
            </section>
        </main>
    );
};
