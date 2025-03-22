import React from 'react';
import '../scss/SubCustomer.scss';
import SubCustomerLeft from './SubCustomerLeft';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { confirmModal } from '../../../reducer/confirmModal';


export default function SubCustomerView(){
    
    const selector = useSelector((state)=>state);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    // 목록
    const onClickList=(e)=>{
        e.preventDefault();
        navigate('/customerNotice');
    }

    // 수정
    const onClickUpdate=(e)=>{
        e.preventDefault();
        navigate('/customerUpdate',{state: location.state});
    }
    
    // 컨펌모달
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

    // 삭제
    const onClickDelete=(e)=>{
        e.preventDefault();
        let formData = new FormData();
        formData.append('idx', location.state.번호);

        axios({
            url:'https://mj46.co.kr/rankingdak/rankingdak_notice_table_delete.php',
            method: 'POST',
            data: formData
        })
        .then((res)=>{               
            if(res.status===200){   
                if(res.data===1){                        
                    confirmModalMethod('공지사항이 삭제되었습니다.');
                    navigate('/customerNotice');
                }                 
                else{
                    confirmModalMethod('삭제에 실패했습니다.');
                }
                
            }
        })
        .catch((err)=>{
            console.log( err );
        });
    }

    return (
        <div id="sub-customer">
            <div className="container">
                <div className="title">
                    <Link to="/customerCenter">
                        <h2>고객센터</h2>
                    </Link>
                </div>
                <div className="content">
                
                    <SubCustomerLeft />

                    <div className="right">

                        <div className="notice">
                            <div className="notice-header">
                                <h3>공지사항</h3>
                            </div>
                            <div className="view-box">
                                <div className="view-title">
                                    <span>{location.state.제목}</span>
                                    <span>{`${new Date(location.state.작성일).getFullYear()}.${new Date(location.state.작성일).getMonth()+1}.${new Date(location.state.작성일).getDate()}`}</span>
                                </div>
                                <div className="gap">
                                    <div className='contents'>
                                        {
                                            location.state.내용.split('<br />').map((item)=>{
                                                return(
                                                    <p>{item}</p>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="view-button-box">
                                {
                                    selector.signIn.로그인정보!==null && (
                                        selector.signIn.로그인정보.구분==='관리자' && (
                                        <>
                                        <button type='button' onClick={onClickDelete}>삭제</button>
                                        <button type='button' onClick={onClickUpdate}>수정</button>
                                        </>
                                        )
                                    )
                                }
                                <button type='button' onClick={onClickList}>목록</button>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    );
};
