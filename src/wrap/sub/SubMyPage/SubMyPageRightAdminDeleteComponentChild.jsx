import React from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { confirmModalSelect } from '../../../reducer/confirmModalSelect';
import { signIn } from '../../../reducer/signIn';

export default function SubMyPageRightAdminDeleteComponentChild () {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const selector = useSelector((state)=>state);

    const [ state, setState ] = React.useState({
        아이디: '',

    })


    const confirmModalMethod2=(msg)=>{
        const 컨펌모달설정 = {
            isConfirmModalSelect: true,
            confirmModalSelectMsg : msg,
            deleteId : state.아이디,
        }
        dispatch(confirmModalSelect(컨펌모달설정));

        const htmlEl = document.getElementsByTagName('html')[0]; 
        htmlEl.classList.add('on');
    }


    const onClickNo=(e)=>{
        e.preventDefault();
        navigate('/mypageAdminDeletePwCheck');
        
    }

    React.useEffect(()=>{

        if(selector.signIn.로그인정보 !== null){
            setState({
                ...state,
                아이디: selector.signIn.로그인정보.아이디
            })
        }

    },[]);


    const onClickOk=(e)=>{
        e.preventDefault();
        confirmModalMethod2('정말 탈퇴를 진행하시겠습니까?');
    }

    
    return (
            <div className="right">
                <div className="title">
                    <h2>관리자 탈퇴</h2>
                </div>
                <div className="right-content-Delete">
                    <div className="txt-box">
                        <h3>탈퇴 유의사항</h3>
                        <p>
                            * 탈퇴하실 경우 로그인 후 가능한 모든 기능은 사용하실 수 없습니다.<br/>
                            * 탈퇴하신 후에 관리자 정보의 복구는 불가능합니다.<br/>
                        </p>
                    </div>
                    <div className="btn-box">
                        <input type="button" id='noBtn' name='noBtn' onClick={onClickNo} value={"취소"} />
                        <input type="button" id='okBtn' name='okBtn' onClick={onClickOk}value={"확인"} />
                    </div>
                    
                </div>
            </div>
    );
};
