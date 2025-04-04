import React from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { confirmModal } from '../../../reducer/confirmModal';
import { confirmModalSelect } from '../../../reducer/confirmModalSelect';
import { signIn } from '../../../reducer/signIn';

export default function SubMyPageRightAdminUserListComponentChild ({유저목록}) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const selector = useSelector((state)=>state);

    const [ state, setState ] = React.useState({
        아이디: '',

    })

    const confirmModalMethod=(msg)=>{
        const 컨펌모달설정 = {
            isConfirmModal: true,
            confirmModalMsg: msg,
            signUp : false,
        }
        dispatch(confirmModal(컨펌모달설정));

        const htmlEl = document.getElementsByTagName('html')[0]; 
        htmlEl.classList.add('on');
    }

    const onClickUserUpdate=(e, item)=>{
        e.preventDefault();

        navigate('/mypageAdminUserUpdate', {
            state : {
                아이디: item.아이디,
                비밀번호: item.비밀번호,
                이름: item.이름,
                휴대폰: item.휴대폰,
                이메일: item.이메일,
                평생회원: item.평생회원,
            }
        }) 
 
    }
    const onClickUserDelete=(e, item)=>{
        e.preventDefault();

        const formData = new FormData(); 
        formData.append('userId', item.아이디);

        axios({
            url:'https://rankingdark.store/rankingdak_user_delete.php',
            method:'POST',
            data: formData 
        })
        .then((res)=>{
            if(res.status===200){
                if(res.data===1){
                    
                    confirmModalMethod('탈퇴 처리됐습니다.');

                    setTimeout(()=>{
                        navigate('/mypageAdminUserList');
                    },100);
                }
                else {
                    confirmModalMethod('실패하였습니다.')
                }
            }
        })
        .catch((err)=>{

        })
    }

    return (
            <div className="right">
                <div className="title">
                    <h2>회원 목록</h2>
                </div>
                <div className="right-content-user-list">
                    <div className="txt-box">
                        <h3>회원목록</h3>
                        <p>
                            * 랭킹닭컴 회원 목록을 볼 수 있습니다.<br/>
                            * 관리자만 회원 목록을 볼 수 있습니다.<br/>
                            * 회원 데이터가 노출되지 않도록 주의해주세요.<br/>
                            * 수정 버튼 클릭 시 수정 폼으로 이동하며, 비밀번호를 다시 새로 입력해야 합니다.<br/>
                            * 삭제 버튼 클릭 시 회원 데이터는 바로 삭제되며, 복구할 수 없습니다. 신중하게 선택하세요.<br/>
                        </p>
                    </div>
                    <div className="table-box">
                        <table>
                            <colgroup>
                                <col />
                                <col />
                                <col />
                                <col />
                                <col />
                                <col />
                                <col />
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>아이디</th>
                                    <th>비밀번호</th>
                                    <th>이름</th>
                                    <th>휴대폰</th>
                                    <th>이메일</th>
                                    <th>평생회원</th>
                                    <th>가입일</th>
                                    <th>수정일</th>
                                    <th>수정</th>
                                    <th>삭제</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                유저목록.length > 0 && (
                                    유저목록.map((item, idx)=>{
                                        return (
                                            <tr key={idx}>
                                                <td>{item.아이디}</td>
                                                <td>{item.비밀번호}</td>
                                                <td>{item.이름}</td>
                                                <td>{item.휴대폰}</td>
                                                <td>{item.이메일}</td>
                                                <td>{item.평생회원}</td>
                                                <td>{item.가입일}</td>
                                                <td>{item.수정일}</td>
                                                <td><button className='update' onClick={(e)=>onClickUserUpdate(e, item)}></button></td>
                                                <td><button className='delete' onClick={(e)=>onClickUserDelete(e, item)}></button></td>
                                            </tr>
                                        )
                                    })
                                )
                            }  
                            </tbody>
                        </table>
                    </div>
                    
                </div>
            </div>
    );
};
