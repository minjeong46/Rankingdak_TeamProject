import React from 'react';
import '../scss/SubCustomer.scss';
import SubCustomerLeft from './SubCustomerLeft';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { confirmModal } from '../../../reducer/confirmModal';


export default function SubCustomerUpdate(){
    
    const selector = useSelector((state)=>state);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    // 상태관리변수
    const [state, setState]= React.useState({
        isSelect: false,
        번호: '',
        타입: '',
        작성자: '',
        아이디: '',
        제목: '',
        내용: ''
    });
    
    // 공지내용 불러오기
    React.useEffect(()=>{
        if(location.state.제목!==''){
            setState({
                ...state,
                번호:   location.state.번호,
                타입:   location.state.타입,
                작성자: location.state.작성자,
                아이디: location.state.아이디,
                제목:   location.state.제목,
                내용:   location.state.내용
            });
        }
    },[]);
    console.log(location.state);

    // 구분 클릭시 아이콘 방향 변경
    const onClickSelect=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            isSelect: !state.isSelect
        });
    }

    // 구분
    const onChangeSelect=(e)=>{
        setState({
            ...state,
            타입: e.target.value
        });
    }
    // 제목
    const onChangeSubject=(e)=>{
        setState({
            ...state,
            제목: e.target.value
        });
    }
    // 내용
    const onChangeContents=(e)=>{
        setState({
            ...state,
            내용: e.target.value
        });
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

    // 폼전송
    const onSubmitUpdateForm=(e)=>{
        e.preventDefault();

        if(state.제목===''){
            confirmModalMethod('제목을 입력해주세요');
        }
        else if(state.내용===''){
            confirmModalMethod('내용을 입력해주세요');
        }
        else {

            let formData = new FormData();
            formData.append('idx', state.번호);
            formData.append('wType', state.타입);
            formData.append('wId', state.아이디);
            formData.append('wSubject', state.제목);
            formData.append('wContent', state.내용);

            axios({
                url:'https://rankingdark.store/rankingdak_notice_table_update.php',
                method: 'POST',
                data: formData
            })
            .then((res)=>{               
                if(res.status===200){   
                    if(res.data===1){                        
                        confirmModalMethod('공지사항이 수정되었습니다.');
                        navigate('/customerNotice');
                    }                 
                    else{
                        confirmModalMethod('수정에 실패했습니다.');
                    }
                    
                }
            })
            .catch((err)=>{
                console.log( err );
            });

        }
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
                            <div className="notice-list">
                                <form autoComplete='off' onSubmit={onSubmitUpdateForm}>
                                    <div className="form update-form">
                                        <ul>
                                            <li>
                                                <div className="gap">   
                                                    <label  className='left-label' htmlFor="wType">구분<i>*</i></label>
                                                    <select name="wType" id="wType" onChange={onChangeSelect} onClick={onClickSelect}>
                                                        <option value="">일반</option>
                                                        <option value="공지">공지</option>
                                                    </select>                                                    
                                                    <span className={`icon-arrow-down${state.isSelect?' on':''}`}></span>
                                                </div>                                                
                                            </li>
                                            <li>
                                                <div className="gap">   
                                                    <span className='left-label'>작성자<i>*</i></span>                                                    
                                                    <div className="admin-name">{selector.signIn.로그인정보.이름}</div>
                                                </div>                                                
                                            </li>
                                            <li>
                                                <div className="gap">                                                    
                                                    <span className='left-label'>아이디<i>*</i></span>
                                                    <div className="admin-id">{selector.signIn.로그인정보.아이디}</div> 
                                                </div>                                                
                                            </li>
                                            <li>
                                                <div className="gap">                                                    
                                                    <label className='left-label' htmlFor="subject">제목<i>*</i></label>
                                                    <input type="text" name='subject' id='subject' onChange={onChangeSubject} value={state.제목} />
                                                </div>                                                
                                            </li>
                                            <li>
                                                <div className="gap">                                                    
                                                    <label className='left-label' htmlFor="contents">내용<i>*</i></label>
                                                    <textarea name="contents" id="contents" cols="30" rows="10" onChange={onChangeContents} value={state.내용} ></textarea>
                                                </div>       
                                            </li>
                                        </ul>
                                    </div>  

                                    <div className="button-box">
                                        <button type='submit'>등록</button>
                                    </div>  
                                </form> 
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    );
};
