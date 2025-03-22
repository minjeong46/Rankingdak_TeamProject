import React from 'react';
import './scss/ConfirmModalSelect.scss'

import { useDispatch,useSelector } from 'react-redux';
import { confirmModalSelect } from '../reducer/confirmModalSelect';
import { signIn } from '../reducer/signIn';
import { useNavigate } from 'react-router-dom';
import { confirmModal } from '../reducer/confirmModal';

import axios from 'axios';


export default function ConfirmModalSelectComponent(){

    const dispatch = useDispatch();
    const selector = useSelector((state)=>state)
    const navigate = useNavigate();

    const confirmModalMsg = selector.confirmModalSelect.confirmModalSelectMsg;

    const onClickModalClose=(e)=>{
        e.preventDefault();
            const 컨펌모달설정 = {
                isConfirmModalSelect: false,
                confirmModalSelectMsg : '',
                id: '',
            }
            dispatch(confirmModalSelect(컨펌모달설정));
        const htmlEl = document.getElementsByTagName('html')[0]; 
        htmlEl.classList.remove('on');
    }

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


    
    const confirmModalMethod2=(msg)=>{
        const 컨펌모달설정 = {
            isConfirmModalSelect: false,
            confirmModalSelectMsg : msg,
            deleteId : '',
        }
        dispatch(confirmModalSelect(컨펌모달설정));

        const htmlEl = document.getElementsByTagName('html')[0]; 
        htmlEl.classList.add('on');
    }

    const onClickDelete=(e)=>{
        e.preventDefault();

        const formData = new FormData(); 
        selector.signIn.로그인정보.구분==='일반'?formData.append('userId', selector.confirmModalSelect.deleteId):formData.append('adminId', selector.confirmModalSelect.deleteId);;
        


        axios({
            url:selector.signIn.로그인정보.구분==='일반'?'https://mj46.co.kr/rankingdak/rankingdak_user_delete.php':'https://mj46.co.kr/rankingdak/rankingdak_admin_delete.php',
            method:'POST',
            data: formData 
        })
        .then((res)=>{
            if(res.status===200){
                if(res.data===1){
                    e.preventDefault();
                    const 컨펌모달설정 = {
                        isConfirmModalSelect: false,
                        confirmModalSelectMsg : '',
                        id: '',
                    }
                    dispatch(confirmModalSelect(컨펌모달설정));
                    const htmlEl = document.getElementsByTagName('html')[0]; 
                    htmlEl.classList.remove('on');
                    confirmModalMethod('탈퇴 됐습니다.')
                    localStorage.removeItem('RANKING_SIGNIN_DATA');
                    setTimeout(()=>{
                        navigate('/index');
                    },100);
                }
                else {
                    e.preventDefault();
                    const 컨펌모달설정 = {
                        isConfirmModalSelect: false,
                        confirmModalSelectMsg : '',
                        id: '',
                    }
                    dispatch(confirmModalSelect(컨펌모달설정));
                    const htmlEl = document.getElementsByTagName('html')[0]; 
                    htmlEl.classList.remove('on');
                }
            }
        })
        .catch((err)=>{

        })
    }

    return (
        <div id='confirmModalSelect'>
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
                                <div className="btn-box">
                                    <button onClick={onClickModalClose}>취소</button>
                                    <button onClick={onClickDelete}>확인</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};
