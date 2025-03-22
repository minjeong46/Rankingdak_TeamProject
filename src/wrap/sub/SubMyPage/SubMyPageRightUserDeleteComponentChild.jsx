import React from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { confirmModal } from '../../../reducer/confirmModal';
import { confirmModalSelect } from '../../../reducer/confirmModalSelect';
import { signIn } from '../../../reducer/signIn';

export default function SubMyPageRightUserDeleteComponentChild () {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const selector = useSelector((state)=>state);

    const [ state, setState ] = React.useState({
        아이디: '',
        selectValue: '선택',
        textValue: '',
        selectBox: false,
    })

    const [dropDown, setDropDown] = React.useState(false);

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

    const onClickSelectBox=(e)=>{
        setState({
            ...state,
            selectBox : true
        })
    }

    const onClickNo=(e)=>{
        e.preventDefault();
        navigate('/mypageUserDeletePwCheck');
        
    }

    const onClickList=(e, v)=>{
        e.preventDefault();

        let selectValue = '';
        let prev = false;

        if(v==='배송이 불만이에요'){
            selectValue = '배송이 불만이에요';
            prev = false;
        }
        else if(v==='교환/반품/환불이 만족스럽지 않아요'){
            selectValue = '교환/반품/환불이 만족스럽지 않아요';
            prev = false;
        }
        else if(v==='자주 안 찾게 돼요'){
            selectValue = '자주 안 찾게 돼요';
            prev = false;
        }
        else if(v==='상품 가격이 불만이에요'){
            selectValue = '상품 가격이 불만이에요';
            prev = false;
        }
        else if(v==='상품이 다양하지 않아요'){
            selectValue = '상품이 다양하지 않아요';
            prev = false;
        }
        else if(v==='쇼핑 기능에 오류가 있어요'){
            selectValue = '쇼핑 기능에 오류가 있어요';
            prev = false;
        }
        else if(v==='다른 계정으로 가입할게요'){
            selectValue = '다른 계정으로 가입할게요';
            prev = false;
        }
        else if(v==='기타'){
            selectValue = '기타';
            prev = false;
        }

        setState({
            ...state,
            selectValue: selectValue,
            selectBox: false,
        })
        setDropDown(prev);
    }

    
    const onClickDropDown=(e, prev)=>{
        e.preventDefault();
        setDropDown(!prev);
         
    }


    React.useEffect(()=>{

        if(selector.signIn.로그인정보 !== null){
            setState({
                ...state,
                아이디: selector.signIn.로그인정보.아이디
            })
        }

    },[]);

    const onChangeText=(e)=>{
        setState({
            ...state,
            textValue: e.target.value,
        })
    }

    const onSubmitFormDelete=(e)=>{
        e.preventDefault();

        const formData = new FormData(); 
        formData.append('dId', state.아이디);
        formData.append('dType', state.selectValue);
        formData.append('dContent', state.textValue);

        axios({
            url:'https://mj46.co.kr/rankingdak/rankingdak_user_delete_form_insert.php',
            method:'POST',
            data: formData 
        })
        .then((res)=>{
            if(res.status===200){
                if(res.data===0){
                    confirmModalMethod('다시 시도해주세요');
                }
                else {
                    confirmModalMethod2('정말 탈퇴를 진행하시겠습니까?');
                    
                }
            }
        })
        .catch((err)=>{

        })
    }


    return (
            <div className="right">
                <div className="title">
                    <h2>회원 탈퇴</h2>
                </div>
                <div className="right-content-Delete">
                    <div className="txt-box">
                        <h3>탈퇴 유의사항</h3>
                        <p>
                            * 탈퇴하실 경우 구매내역 확인은 물론 로그인 후 가능한 모든 기능은 사용하실 수 없습니다.<br/>
                            * 탈퇴하신 후에 회원 정보의 복구는 불가능하며, 보유하신 쿠폰이나 적립금도 모두 무효화됩니다.<br/>
                            * 탈퇴하신 후 동일한 이메일, 휴대폰 번호로 재 가입은 탈퇴일로부터 90일 이후 가능합니다.
                        </p>
                    </div>
                    <div className="delete-form-box">
                        <form action="" onSubmit={onSubmitFormDelete}>
                            <strong>탈퇴사유 및 개선점</strong>
                            <div className="select-box" >
                                <div className={`box ${state.selectBox?' on':''}`} onClick={onClickSelectBox}>
                                    {/* <button href="!#" onClick={(e)=>setDropDown((prev)=>!prev)}> */}
                                    <button href="!#" onClick={(e)=>onClickDropDown(e, false)}>
                                        <span>
                                            {state.selectValue}
                                        </span>
                                    
                                        <img src="./images/sub/signup/ico-dlv-arrow.png" alt="" />
                                    </button>
                                </div>
                                {
                                    dropDown && (
                                        <div className="select-list">
                                            <ul>
                                                <li><a href="!#" onClick={(e)=>onClickList(e, '배송이 불만이에요')}>배송이 불만이에요</a></li>
                                                <li><a href="!#" onClick={(e)=>onClickList(e, '교환/반품/환불이 만족스럽지 않아요')}>교환/반품/환불이 만족스럽지 않아요</a></li>
                                                <li><a href="!#" onClick={(e)=>onClickList(e, '자주 안 찾게 돼요')}>자주 안 찾게 돼요</a></li>
                                                <li><a href="!#" onClick={(e)=>onClickList(e, '상품 가격이 불만이에요')}>상품 가격이 불만이에요</a></li>
                                                <li><a href="!#" onClick={(e)=>onClickList(e, '상품이 다양하지 않아요')}>상품이 다양하지 않아요</a></li>
                                                <li><a href="!#" onClick={(e)=>onClickList(e, '쇼핑 기능에 오류가 있어요')}>쇼핑 기능에 오류가 있어요</a></li>
                                                <li><a href="!#" onClick={(e)=>onClickList(e, '다른 계정으로 가입할게요')}>다른 계정으로 가입할게요</a></li>
                                                <li><a href="!#" onClick={(e)=>onClickList(e, '기타')}>기타</a></li>
                                            </ul>
                                        </div>
                                    )    
                                }

                            </div>
                            <div className="textarea-box">
                                <textarea name="textBox" id="textBox" cols="30" rows="10" onChange={onChangeText} placeholder='랭킹닭컴에 해주고 싶은 말씀을 자유롭게 입력해 주세요.'></textarea>
                            </div>
                            <div className="btn-box">
                                <input type="button" id='noBtn' name='noBtn' onClick={onClickNo} value={"취소"} />
                                <input type="submit" id='okBtn' name='okBtn' value={"확인"} />
                            </div>
                        </form>
                    </div>
                    
                </div>
            </div>
    );
};
