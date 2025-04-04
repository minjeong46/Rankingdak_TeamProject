import React from 'react';
import '../SubSignupSignIn/scss/SubLogin.scss'
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { confirmModal } from '../../../reducer/confirmModal';
import { signIn } from '../../../reducer/signIn';

export default function SubUserLoginComponent () {

    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const selector = useSelector((state)=>state);

    const [ state, setState ] = React.useState({
        아이디: '',
        비밀번호: '',
        로그인정보: {},
        
        자동로그인: '',
        아이디저장: '',
    })

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

    React.useEffect(()=>{
        if(localStorage.getItem('RANKING_USER_ID_AUTO')!==null){
            if(localStorage.getItem('RANKING_USER_ID_AUTO')!==''){
                setState({
                    ...state,
                    아이디: JSON.parse(localStorage.getItem('RANKING_USER_ID_AUTO'))
                })
            }
            else {
                setState({
                    ...state,
                    아이디: state.아이디,
                })
            }
        }
            
    },[]);

    const onClickIdSearch=(e)=>{
        e.preventDefault();
        navigate('/userSigninIdSearch');
    }
    const onClickPwSearch=(e)=>{
        e.preventDefault();
        navigate('/userSigninPwSearch');
    }

    const onChangeId=(e)=>{
        setState({
            ...state,
            아이디: e.target.value
        })
    }
    const onChangePw=(e)=>{
        setState({
            ...state,
            비밀번호: e.target.value
        })
    }

    const onClickSignup=(e)=>{
        navigate('/userSignupAgree');
    }

    const onChangeAutoLogin=(e)=>{
        setState({
            ...state,
            자동로그인: e.target.checked
        })
    }
    const onChangeIdSave=(e)=>{
        setState({
            ...state,
            아이디저장: e.target.checked
        })
    }
    

    const onSubmitLogin=(e)=>{
        e.preventDefault();

        const formData = new FormData();
        formData.append('userId', state.아이디);
        formData.append('userPw', state.비밀번호);

        axios({
            url: 'https://rankingdark.store/rankingdak_user_signin.php',
            method: 'POST',
            data: formData,
        })
        .then((res)=>{
            console.log(res.data);
            if(res.status===200){
                if(res.data===0){
                    confirmModalMethod('로그인 실패하였습니다. \n 아이디, 비밀번호가 맞는지 다시 확인해주세요');
                }
                else {
                    let toDay1 = new Date();
                    toDay1.setDate(toDay1.getDate() + 1);
                    let toDay2 = new Date();
                    toDay2.setDate(toDay2.getDate() + 365);

                    const 로그인정보 = {
                        구분: '일반',
                        아이디: res.data.아이디,
                        이름: res.data.이름,
                        휴대폰: res.data.휴대폰,
                        이메일: res.data.이메일,
                        가입일: res.data.가입일,
                        만료일: `${state.자동로그인===true?toDay2.getTime():toDay1.getTime()}`,
                        아이디저장: `${state.아이디저장===true?localStorage.setItem('RANKING_USER_ID_AUTO',JSON.stringify(res.data.아이디)):res.data.아이디}`,
                    }
                    localStorage.setItem('RANKING_SIGNIN_DATA', JSON.stringify(로그인정보));
                    

                    dispatch(signIn(로그인정보));
                    confirmModalMethod('랭킹닭컴에 오신 것을 환영합니다.');

                }
            }

            
        })
        .catch((err)=>{

        })
    }

    

    return (
        <main id='login'>
            <section id="section1">
                <div className="container">
                    <div className="title">
                        <h2>안녕하세요:)</h2>
                        <span><strong><img src="./images/sub/login/logo.png" alt="" /></strong><em>입니다.</em></span>
                    </div>
                    <div className="content">
                        <form onSubmit={onSubmitLogin} action="">
                            <ul>
                                <li>
                                    <div className="gap">
                                        <input
                                            type="text"
                                            id='userId'
                                            name='userId'
                                            placeholder='아이디'
                                            value={state.아이디}
                                            onChange={onChangeId}
                                        />
                                    </div>
                                </li>
                                <li>
                                    <div className="gap">
                                        <input
                                            type="password"
                                            id='userPw'
                                            name='userPw'
                                            placeholder='비밀번호'
                                            value={state.비밀번호}
                                            onChange={onChangePw}
                                        />
                                    </div>
                                </li>
                                <li>
                                    <div className="gap">
                                        <input type="checkbox" id='autoLogin' name='autoLogin' value={'자동로그인'} onChange={onChangeAutoLogin}/>
                                        <label htmlFor="autoLogin">자동로그인</label>
                                        <input type="checkbox" id='idSave' name='idSave' value={'아이디저장'} onChange={onChangeIdSave} />
                                        <label htmlFor="idSave">아이디저장</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="gap">
                                        <input type="submit" id='loginBtn' name='loginBtn' value={'로그인'} />
                                    </div>
                                </li>
                                <li>
                                    <div className="gap idpw-gap">
                                        <a href="!#" onClick={onClickIdSearch}>아이디 찾기</a>
                                        <i>|</i>
                                        <a href="!#" onClick={onClickPwSearch}>비밀번호 찾기</a>
                                    </div>
                                </li>
                                <li>
                                    <div className="gap">
                                        <ul className="login-icon-box">
                                            <li>
                                                <a href="!#" className='blind'>네이버 로그인</a>
                                            </li>
                                            <li>
                                                <a href="!#" className='blind'>아이폰 로그인</a>
                                            </li>
                                            <li>
                                                <a href="!#" className='blind'>카카오톡 로그인</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div className="gap">
                                        <input onClick={onClickSignup} type="button" id='signinBtn' name='signinBtn' value={'간편회원가입'} />
                                    </div>
                                </li>
                                <li>
                                    <div className="gap idpw-gap">
                                        <span><p>비회원주문조회</p></span>
                                    </div>
                                </li>
                                <li>
                                    <div className="gap idpw-gap">
                                        <img src="./images/sub/login/IMG1659ZBD516953587.png" alt="" />
                                    </div>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};
