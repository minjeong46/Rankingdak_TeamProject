import React from 'react';
import '../SubMyPage/scss/SubMyPage.scss'
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SubMyPageTopComponent from './SubMyPageTopComponent'
import SubMyPageLeftMenuComponent from './SubMyPageLeftMenuComponent'
import SubMyPageRightAdminUserListComponentChild from './SubMyPageRightAdminUserListComponentChild'
import { signIn } from '../../../reducer/signIn';

export default function SubMyPageRightAdminUserListComponent () {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const selector = useSelector((state)=>state);

    const [ state, setState ] = React.useState({
        아이디: '',
        유저목록: [],
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

    React.useEffect(()=>{

        axios({
            url:'https://mj46.co.kr/rankingdak/rankingdak_admin_user_select.php',
            method: 'GET'
        })
        .then((res)=>{
            if(res.status===200){
                setState({
                    ...state,
                    유저목록: res.data
                })
            }
        })
        .catch((err)=>{

        })

    },[])




    return (
        <main id='mypage-admin-user-list' className='mypage'>
            <section id="section1">
                <div className="container">
                    <SubMyPageTopComponent />
                    <div className="content">
                        <SubMyPageLeftMenuComponent />
                        <SubMyPageRightAdminUserListComponentChild 유저목록={state.유저목록} />
                    </div>
                </div>
            </section>
        </main>
    );
};
