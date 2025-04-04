import React from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { confirmModal } from '../../../reducer/confirmModal';
import { signIn } from '../../../reducer/signIn';

export default function SubMyPageRightAdminUpdatePwCheckComponentChild () {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const selector = useSelector((state)=>state);

    const [ state, setState ] = React.useState({
        아이디: '',
        비밀번호: '',
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

    const onChangePw=(e)=>{
        setState({
            ...state,
            비밀번호: e.target.value
        })
    }

    React.useEffect(()=>{

        if(selector.signIn.로그인정보 !== null){
            setState({
                ...state,
                아이디: selector.signIn.로그인정보.아이디
            })
        }

    },[]);

    const onSubmitPwCheck=(e)=>{
        e.preventDefault();

        const formData = new FormData(); 
        formData.append('adminId', state.아이디);
        formData.append('adminPw', state.비밀번호);

        axios({
            url:'http://52.79.74.85/rankingdak_admin_pw_search_check_update.php',
            method:'POST',
            data: formData 
        })
        .then((res)=>{
            if(res.status===200){
                if(res.data===0){
                    confirmModalMethod('일치하지 않습니다. \n다시 확인해주세요.')
                }
                else {
                    console.log(res.data);
                        navigate('/mypageAdminUpdate', {
                            state : {
                                아이디: res.data.아이디,
                                이름: res.data.이름,
                                휴대폰: res.data.휴대폰,
                                이메일: res.data.이메일,
                            }
                        })

                }
            }
        })
        .catch((err)=>{

        })
    }


    return (
            <div className="right">
                <div className="title">
                    <h2>관리자정보수정</h2>
                </div>
                <div className="right-content">
                    <div className="txt-box">
                        <h3>비밀번호를 입력해주세요</h3>
                        <p>회원님의 개인정보 보호를 위해 비밀번호를 다시 한번 확인 합니다.<br/>
                        비밀번호가 노출되지 않도록 주의해주세요.
                        </p>
                    </div>
                    <form action="" onSubmit={onSubmitPwCheck}>
                        <div className="input-box">
                            <input type="password" id='adminPw' name='adminPw' placeholder='비밀번호 입력' value={state.비밀번호} onChange={onChangePw} />
                            <input type="submit" id='pwBtn' name='pwBtn' value={"확인"} />
                        </div>
                    </form>
                </div>
            </div>
    );
};
