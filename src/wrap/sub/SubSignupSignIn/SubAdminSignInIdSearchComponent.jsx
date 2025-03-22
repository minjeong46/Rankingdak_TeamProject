import React from 'react';
import '../SubSignupSignIn/scss/SubSigninIdPwSearch.scss'
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { confirmModal } from '../../../reducer/confirmModal';
import { useDispatch, useSelector } from 'react-redux';

export default function SubAdminSignInIdSearchComponent () {

    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const selector = useSelector((state)=>state);

    const [state, setState] = React.useState({
        value: '직접입력',

        휴대폰: '',
        인증된휴대폰번호: '', // 인증 완료할 경우 휴대폰 번호 저장 -> 휴대폰 번호를 수정 할 시 비교하여 다시 인증 진행
        입력인증번호: '',
        발급인증번호: '',
        isPhoneSuccess: false,
        isEmailSuccess: false,

        isPhoneSuccess2: false, // 인증창
        phoneSuccessCheck: false, // 인증성공여부
        phoneCheck: false, // 폰확인하여 인증번호 받았는지 여부
        isPhoneBtn1: false, // 핸드폰번호 정규표현식에 맞는지 여부
        isPhoneBtn2: false, // 인증번호 정규표현식에 맞는지 여부

        이메일: '',
        이름: '',
        아이디: '',

        isPhone: true,
        isEmail: false,

        isServiceIcon: false,

        인증선택: '휴대폰',

    })

    const [timer, setTimer] = React.useState({
        setId : 0,
        M: 3,
        S: 0,
    });

    const [dropDown, setDropDown] = React.useState(false);

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


    const onClickServiceIconBtn=(e)=>{
        e.preventDefault();
        if(state.isServiceIcon===true){
            setState({
                ...state,
                isServiceIcon: false
            })
        }
        else {
            setState({
                ...state,
                isServiceIcon: true
            })
        }
    }

    React.useEffect(()=>{

        if(state.phoneSuccessCheck === true){
            if(state.휴대폰!==state.인증된휴대폰번호){
                setState({
                    ...state,
                    phoneSuccessCheck : false,
                })
                confirmModalMethod('휴대폰 번호가 수정되었습니다. \n 휴대폰 인증을 다시 시도하세요');
            }
        }
    },[state.인증된휴대폰번호,state.휴대폰])

    const onChangePhone=(e)=>{
        const {value} = e.target;
        let isPhoneNum = false;
        let isPhoneBtn1 = false;
        const regExp = /^01[0-9]{1}[0-9]{3,4}[0-9]{4}$/g

        if(e.target.value.length > 0 ){
            isPhoneNum = true;
        }
        else {
            isPhoneNum = false;
        }
        if(regExp.test(value)===true){
            isPhoneBtn1 = true;
        }

        setState({
            ...state,
            휴대폰: value,
            isPhoneNum: isPhoneNum,
            isPhoneBtn1: isPhoneBtn1,
        })
    }


    const onChangePhone2=(e)=>{
        const {value} = e.target;
        let isPhoneBtn2 = false;

        if(value.length===5 && state.phoneCheck===true){
            isPhoneBtn2 = true;
        }
        else {
            isPhoneBtn2 = false;
        }
        setState({
            ...state,
            입력인증번호: value,
            isPhoneBtn2: isPhoneBtn2,
        })
    }

    const phoneSuccessTimer=()=>{
        let timer = 3;
        let M = 0;
        let S = 0;
        let now = new Date();
        let end = now.setMinutes(now.getMinutes() + timer);

        let setId = 0;

        setId = setInterval(()=>{
            now = new Date();
            const timer = end - now;

            if (now >= end){
                clearInterval(setId);
                M = 0;
                S = 0;

            }
            else {
                M = Math.floor(timer/(60*1000))%3;
                S = Math.floor(timer/(1000))%60;
            }
            setTimer({
                ...timer,
                M : M < 10 ? `0${M}` : M,
                S : S < 10 ? `0${S}` : S,
                setId : setId
            })

        },1000)
    }

    const onClickPhoneNum=(e)=>{
        e.preventDefault();

        const regExp = /^01[0-9]{1}[0-9]{3,4}[0-9]{4}$/g
        let num = null;
        let phoneCheck = false;
        let isPhoneSuccess2 = false;
        let 입력인증번호 = '';

        num = Math.floor(Math.random() * 90000 + 10000);

        if(regExp.test(state.휴대폰)===false){
            confirmModalMethod('잘못된 휴대폰 번호입니다. \n 다시 확인해주세요.');
            phoneCheck = false;
            isPhoneSuccess2 = false;

        } else {
            confirmModalMethod(`인증번호 \n [ ${num} ] \n 인증번호를 아래 인증번호 입력란에 \n 입력해주세요`);
            phoneCheck = true;
            isPhoneSuccess2 = true;
            입력인증번호 = '';

            clearInterval(timer.setId);
            phoneSuccessTimer();
        }
        setState({
            ...state,
            발급인증번호: num,
            입력인증번호: 입력인증번호,
            phoneCheck: phoneCheck,
            isPhoneSuccess2: isPhoneSuccess2,
        })

    }

    const onClickPhoneCheck=(e)=>{
        e.preventDefault();

        let isPhoneSuccess = false;

        let phoneSuccessCheck = false;
        let isPhoneSuccess2 = false;
        let 발급인증번호 = state.발급인증번호;
        let 입력인증번호 = state.입력인증번호;
        let 인증된휴대폰번호 = state.인증된휴대폰번호;
        let 휴대폰 = state.휴대폰;
        
        if(발급인증번호===Number(입력인증번호)){
            confirmModalMethod('인증에 성공하였습니다.')
            phoneSuccessCheck = true;
            isPhoneSuccess = true;
            isPhoneSuccess2 = false;
            인증된휴대폰번호 = 휴대폰;
            clearInterval(timer.setId);
        }
        else {
            confirmModalMethod('잘못된 인증번호입니다. 다시 확인해주세요');
            phoneSuccessCheck = false;
            isPhoneSuccess = false;
            isPhoneSuccess2 = true;
            입력인증번호 = '';
        }

        setState({
            ...state,
            phoneSuccessCheck: phoneSuccessCheck,
            isPhoneSuccess: isPhoneSuccess,
            isPhoneSuccess2 : isPhoneSuccess2,
            입력인증번호 : 입력인증번호,
            인증된휴대폰번호 : 인증된휴대폰번호,
        })

    }

    React.useEffect(()=>{

        if(state.phoneSuccessCheck === true){
            if(state.휴대폰!==state.인증된휴대폰번호){
                setState({
                    ...state,
                    phoneSuccessCheck : false,
                    isPhoneBtn2: false,
                })
                confirmModalMethod('휴대폰 번호가 수정되었습니다. \n 휴대폰 인증을 다시 시도하세요');
            }
        }
    },[state.인증된휴대폰번호,state.휴대폰])

    React.useEffect(()=>{
        if(timer.M === '00'){

            confirmModalMethod('휴대폰 인증을 다시 시도하세요.');

            setState({
                ...state,
                입력인증번호 : '',
                isPhoneSuccess2: false,
                isPhoneBtn2: false,
            })
        }
    },[timer.M])



    const onClickList=(e, d)=>{
        e.preventDefault();

        let value = '';
        let prev = false;

        if(d==='직접입력'){
            value = '직접입력';
            prev = false;
        }
        else if(d==='naver.com'){
            value = 'naver.com';
            prev = false;
        }
        else if(d==='daum.net'){
            value = 'daum.net';
            prev = false;
        }
        else if(d==='hanmail.net'){
            value = 'hanmail.net';
            prev = false;
        }
        else if(d==='daum.net'){
            value = 'daum.net';
            prev = false;
        }
        else if(d==='gmail.com'){
            value = 'gmail.com';
            prev = false;
        }
        else if(d==='hotmail.com'){
            value = 'hotmail.com';
            prev = false;
        }
        else if(d==='empal.com'){
            value = 'empal.com';
            prev = false;
        }
        else if(d==='freechal.com'){
            value = 'freechal.com';
            prev = false;
        }
        else if(d==='hitel.net'){
            value = 'hitel.net';
            prev = false;
        }
        else if(d==='hanmir.com'){
            value = 'hanmir.com';
            prev = false;
        }
        else if(d==='hanafos.com'){
            value = 'hanafos.com';
            prev = false;
        }
        else if(d==='korea.com'){
            value = 'korea.com';
            prev = false;
        }
        else if(d==='nate.com'){
            value = 'nate.com';
            prev = false;
        }
        else if(d==='netian.com'){
            value = 'netian.com';
            prev = false;
        }
        else if(d==='paran.com'){
            value = 'paran.com';
            prev = false;
        }
        else if(d==='unitel.co.kr'){
            value = 'unitel.co.kr';
            prev = false;
        }

        setState({
            ...state,
            value: value,
        })
        setDropDown(prev);
    }

    const onClickDropDown=(e, prev)=>{
        e.preventDefault();
        setDropDown(!prev);
         
    }

    const onChangeEmail=(e)=>{
        setState({
            ...state,
            이메일: e.target.value,
        })
    }

    const onChangeName=(e)=>{



        setState({
            ...state,
            이름: e.target.value,
        })
    }

    const onChangeCheck=(e)=>{
        setState({
            ...state,
            인증선택: e.target.value
        })
    }

    React.useEffect(()=>{
        let isPhone = true;
        let isEmail = true;

        if (state.인증선택==="휴대폰"){
            isPhone = true;
            isEmail = false;
        }
        else if(state.인증선택==="이메일") {
            isPhone = false;
            isEmail = true;
        }

        setState({
            ...state,
            isPhone: isPhone,
            isEmail: isEmail,
        })

    },[state.인증선택])

    const onSubmitPhone=(e)=>{
        e.preventDefault();

        const formData = new FormData(); 
        formData.append('adminPhone', state.휴대폰);
        formData.append('adminName', state.이름);

        axios({
            url:'https://mj46.co.kr/rankingdak/rankingdak_admin_id_search_phone.php',
            method:'POST',
            data: formData 
        })
        .then((res)=>{
            if(res.status===200){
                if(res.data===0){
                    confirmModalMethod('입력하신 이름과 휴대폰이 일치하는 회원이 없거나 다른 방법(이메일/휴대폰)으로 가입 인증된 회원입니다.');
                    
                }
                else {

                    console.log(res.data.아이디)
                    // setState({
                    //     아이디: res.data.아이디
                    // })

                        navigate('/adminSigninIdSearchResult', {
                            state : {
                                아이디: res.data.아이디
                            }
                        })


                }
            }
        })
        .catch((err)=>{

        })
    }



    React.useEffect(()=>{

        let isEmailSuccess = false;
        if(state.이름!=='' && state.이메일!==''){
            isEmailSuccess = true;
        }
        else {
            isEmailSuccess = false;
        }

        setState({
            ...state,
            isEmailSuccess: isEmailSuccess
        })
    },[state.이름,state.이메일])

    const onSubmitEmail=(e)=>{
        e.preventDefault();
        const formData = new FormData(); 
        formData.append('adminEmail', `${state.이메일}${state.value==='직접입력'?'':'@'+state.value}`);
        formData.append('adminName', state.이름);

        axios({
            url:'http://eyou46.dothome.co.kr/rankingdak/rankingdak_admin_id_search_email.php',
            method:'POST',
            data: formData 
        })
        .then((res)=>{
            if(res.status===200){
                if(res.data===0){
                    confirmModalMethod('입력하신 이름과 이메일이 일치하는 회원이 없거나 다른 방법(이메일/휴대폰)으로 가입 인증된 회원입니다.');
                }
                else {

                    navigate('/adminSigninIdSearchResult', {
                        state : {
                            아이디: res.data.아이디
                        }
                    })
                }
            }
        })
        .catch((err)=>{

        })
    }

    return (
        <main id='signin-admin-id-search' className='signin-search'>
            <section id="section1">
                <div className="container">
                    <div className="title">
                        <h2><em>관리자</em><br/> 아이디찾기</h2>
                    </div>
                    <div className="content">
                        <form onSubmit={onSubmitPhone} >
                            <ul>
                                <li>
                                    <div className="gap">
                                        <div className="input-radio-box">
                                            <input
                                                type="radio"
                                                id='adminPhoneSearch'
                                                name='adminSearch'
                                                value={'휴대폰'}
                                                onChange={onChangeCheck}
                                                checked={state.인증선택.includes('휴대폰')}
                                            />
                                            <label htmlFor='adminPhoneSearch'>
                                                휴대폰번호로 찾기
                                            </label>
                                            <button className='icon-btn' onClick={onClickServiceIconBtn}>
                                                <i className='blind'>아이콘</i>
                                            </button>
                                            {
                                                state.isServiceIcon && (
                                                    <button className='tool-btn' onClick={onClickServiceIconBtn}>
                                                        <div className="tool-box">
                                                            <div className="tool">
                                                                <p>휴대폰 인증에 문제가 있으신 경우,<br/>고객센터로 문의 주시기 바랍니다.</p>
                                                            </div>
                                                        </div>
                                                    </button>
                                                )
                                            }
                                            
                                        </div>
                                        {
                                            state.isPhone && (
                                                <>
                                                    <div className="input-phone-box">
                                                        <input
                                                                type="text"
                                                                id='adminName'
                                                                name='adminName'
                                                                placeholder='이름 2자이상 입력'
                                                                value={state.이름}
                                                                onChange={onChangeName}
                                                                maxLength={50}
                                                            />
                                                    </div>
                                                    <div className="input-phone-box input-phone-box1">
                                                        <input
                                                                type="text"
                                                                id='adminPhone'
                                                                name='adminPhone'
                                                                placeholder='숫자만 입력'
                                                                value={state.휴대폰}
                                                                onChange={onChangePhone}
                                                                maxLength={11}
                                                            />
                                                        <button disabled={!state.isPhoneBtn1} onClick={onClickPhoneNum} className={state.isPhoneBtn1?'on':''}>인증번호</button>
                                                    </div>
                                                    {   
                                                        state.isPhoneSuccess2 && ( 
                                                            <div className="input-phone-box">
                                                                <input
                                                                    type="text"
                                                                    id='adminPhoneAuthen'
                                                                    name='adminPhoneAuthen'
                                                                    placeholder='인증번호 입력'
                                                                    value={state.입력인증번호}
                                                                    onChange={onChangePhone2}
                                                                />
                                                                <span className='timer'><p>{timer.M}</p><i>:</i><p>{timer.S}</p></span>
                                                                <button disabled={!state.isPhoneBtn2} onClick={onClickPhoneCheck} className={state.isPhoneBtn2?'on':''}>확인</button>
                                                            </div>
                                                        )
                                                    }
                                                            <div className="input-btn-box">
                                                                <input type="submit" value={'확인'} disabled={!state.phoneSuccessCheck} className={state.phoneSuccessCheck?'on':''} />
                                                            </div>
                                                   
                                                </>
                                            )
                                        }
                                    </div>
                                </li>
                            </ul>
                        </form>

                        <div className="line">
                            <hr />
                        </div>

                        <form onSubmit={onSubmitEmail}>
                            <ul>
                                <li>
                                    <div className="gap">
                                        <div className="input-radio-box">
                                            <input
                                                type="radio"
                                                id='adminEmailSearch'
                                                name='adminSearch'
                                                value={'이메일'}
                                                onChange={onChangeCheck}
                                                checked={state.인증선택.includes('이메일')}
                                            />
                                            <label htmlFor='adminEmailSearch'>이메일로 찾기<i></i></label>
                                        </div>
                                       { 
                                            state.isEmail && (
                                                <>
                                                    <div className="input-email-box">
                                                        <input
                                                                type="text"
                                                                id='adminName'
                                                                name='adminName'
                                                                placeholder='이름 2자이상 입력'
                                                                value={state.이름}
                                                                onChange={onChangeName}
                                                                maxLength={50}
                                                            />
                                                    </div>
                                                    <div className="input-email-box">
                                                        <input
                                                            type="text"
                                                            id='adminEmail'
                                                            name='adminEmail'
                                                            placeholder='이메일 주소'
                                                            value={state.이메일}
                                                            onChange={onChangeEmail}
                                                            className='email'
                                                        />
                                                        <div className="select-box" >
                                                            <div className="box" >
                                                                {/* <button href="!#" onClick={(e)=>setDropDown((prev)=>!prev)}> */}
                                                                <button href="!#" onClick={(e)=>onClickDropDown(e, false)}>
                                                                    <span>
                                                                        {state.value}
                                                                    </span>
                                                                
                                                                    <img src="./images/sub/signup/ico-dlv-arrow.png" alt="" />
                                                                </button>
                                                            </div>
                                                            {
                                                                    dropDown && (
                                                                    <div className="select-list">
                                                                        <ul>
                                                                            <li><a href="!#" onClick={(e)=>onClickList(e, '직접입력')}>직접입력</a></li>
                                                                            <li><a href="!#" onClick={(e)=>onClickList(e, 'naver.com')}>naver.com</a></li>
                                                                            <li><a href="!#" onClick={(e)=>onClickList(e, 'daum.net')}>daum.net</a></li>
                                                                            <li><a href="!#" onClick={(e)=>onClickList(e, 'hanmail.net')}>hanmail.net</a></li>
                                                                            <li><a href="!#" onClick={(e)=>onClickList(e, 'gmail.com')}>gmail.com</a></li>
                                                                            <li><a href="!#" onClick={(e)=>onClickList(e, 'hotmail.com')}>hotmail.com</a></li>
                                                                            <li><a href="!#" onClick={(e)=>onClickList(e, 'empal.com')}>empal.com</a></li>
                                                                            <li><a href="!#" onClick={(e)=>onClickList(e, 'freechal.com')}>freechal.com</a></li>
                                                                            <li><a href="!#" onClick={(e)=>onClickList(e, 'hitel.net')}>hitel.net</a></li>
                                                                            <li><a href="!#" onClick={(e)=>onClickList(e, 'hanmir.com')}>hanmir.com</a></li>
                                                                            <li><a href="!#" onClick={(e)=>onClickList(e, 'hanafos.com')}>hanafos.com</a></li>
                                                                            <li><a href="!#" onClick={(e)=>onClickList(e, 'korea.com')}>korea.com</a></li>
                                                                            <li><a href="!#" onClick={(e)=>onClickList(e, 'nate.com')}>nate.com</a></li>
                                                                            <li><a href="!#" onClick={(e)=>onClickList(e, 'netian.com')}>netian.com</a></li>
                                                                            <li><a href="!#" onClick={(e)=>onClickList(e, 'paran.com')}>paran.com</a></li>
                                                                            <li><a href="!#" onClick={(e)=>onClickList(e, 'unitel.co.kr')}>unitel.co.kr</a></li>
                                                                        </ul>
                                                                    </div>

                                                                        )    
                                                            }

                                                        </div>
                                                        
                                                    </div>
                                                    <div className="input-btn-box">
                                                        <input type="submit" value={'확인'}  disabled={!state.isEmailSuccess} className={state.isEmailSuccess?'on':''} />
                                                    </div>
                                                </>
                                            )
                                        }
                                    </div>
                                </li>
                            </ul>
                        </form>
                        <div className="service-box">
                            <img src="./images/sub/login/img_cs_bnr01.png" alt="" />
                            <img src="./images/sub/login/img_cs_bnr02.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};
