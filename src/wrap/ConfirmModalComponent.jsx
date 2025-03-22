import React from 'react';
import './scss/ConfirmModal.scss'

import { useDispatch,useSelector } from 'react-redux';
import { confirmModal } from '../reducer/confirmModal';
import { useNavigate, useLocation } from 'react-router-dom';


export default function ConfirmModalComponent(){

    const dispatch = useDispatch();
    const selector = useSelector((state)=>state)
    const navigate = useNavigate();


    const confirmModalMsg = selector.confirmModal.confirmModalMsg;

    const onClickModalClose=(e)=>{
        e.preventDefault();
        if(selector.confirmModal.confirmModalMsg.includes('회원가입을 축하드립니다!')===true){
            const 컨펌모달설정 = {
                isConfirmModal: false,
                confirmMsg: '',
                signUp: true,
            }
            dispatch(confirmModal(컨펌모달설정));
            setTimeout(()=>{
                navigate('/index');
            },100);
            
        }
        else if(selector.confirmModal.confirmModalMsg.includes('랭킹닭컴에 오신 것을 환영합니다.')===true){
            const 컨펌모달설정 = {
                isConfirmModal: false,
                confirmMsg: '',
                signUp: false,
            }
            dispatch(confirmModal(컨펌모달설정));
            setTimeout(()=>{
                navigate('/index');
            },100);
            
        }
        else if(selector.confirmModal.confirmModalMsg==='비밀번호 변경이 완료됐습니다.'){
            const 컨펌모달설정 = {
                isConfirmModal: false,
                confirmMsg: '',
                signUp: false,
            }
            dispatch(confirmModal(컨펌모달설정));
            setTimeout(()=>{
                navigate('/userLogin');
            },100);
            
        }
        else if(selector.confirmModal.confirmModalMsg==='관리자님, 비밀번호 변경이 완료됐습니다.'){
            
            const 컨펌모달설정 = {
                isConfirmModal: false,
                confirmMsg: '',
                signUp: false,
            }
            dispatch(confirmModal(컨펌모달설정));
            setTimeout(()=>{
                navigate('/adminLogin');
            },100);
            
        }
        else if(selector.confirmModal.confirmModalMsg.includes('다시 로그인해주세요.')){
            const 컨펌모달설정 = {
                isConfirmModal: false,
                confirmMsg: '',
                signUp: false,
            }
            localStorage.removeItem('RANKING_SIGNIN_DATA');
            dispatch(confirmModal(컨펌모달설정));
            setTimeout(()=>{
                navigate('/index');
            },100);
            
        }
        else {
            const 컨펌모달설정 = {
                isConfirmModal: false,
                confirmModalMsg : '',
                signUp : false,
            }
            dispatch(confirmModal(컨펌모달설정));
        }
        

        const htmlEl = document.getElementsByTagName('html')[0]; 
        htmlEl.classList.remove('on');
    }

    return (
        <div id='confirmModal'>
            <section id="section1">
                <div className="container">
                    <div className="cofirmModal-box">
                        <ul>
                            <li>
                                <div className="msg-box">
                                        {
                                            confirmModalMsg.split('\n').map((item,idx)=>{
                                                return(
                                                    <p key={idx}>
                                                        {item}
                                                    </p>
                                                )
                                            })
                                        }
                                    
                                </div>
                            </li>
                            <li>
                                <div className="btn-box" onClick={onClickModalClose}>
                                    <button>확인</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};
