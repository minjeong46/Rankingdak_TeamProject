import React from 'react';
import '../SubSignupSignIn/scss/SubSignup.scss'
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { confirmModal } from '../../../reducer/confirmModal';
import { useDispatch, useSelector } from 'react-redux';
import { viewProduct } from '../../../reducer/viewproduct';

export default function SubUserSignupComponent () {

    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const selector = useSelector((state)=>state);

    const refList = React.useRef([]);

    const [state, setState] = React.useState({
        value: '직접입력',
        이용약관동의: location.state.이용약관동의,

        아이디: '',
        아이디중복확인: false,
        인증된아이디: '',
        isIdChck: false,
        idGuidText: '',

        비밀번호: '',
        비밀번호확인: '',

        guidTextBox: false,
        pwGuidText1: true,
        pwGuidText2: true,
        pwGuidText3: '',
        pwGuidText2On: false,

        이름: '',
        nameGuidText: '',

        휴대폰: '',
        인증된휴대폰번호: '', // 인증 완료할 경우 휴대폰 번호 저장 -> 휴대폰 번호를 수정 할 시 비교하여 다시 인증 진행
        입력인증번호: '',
        발급인증번호: '',
        isPhoneSuccess: false, // 인증창
        phoneSuccessCheck: false, // 인증성공여부
        phoneCheck: false, // 폰확인하여 인증번호 받았는지 여부
        isPhoneBtn1: false, // 핸드폰번호 정규표현식에 맞는지 여부
        isPhoneBtn2: false, // 인증번호 정규표현식에 맞는지 여부

        이메일: '',
        추천아이디: '',
        평생회원: '',

        isSignupBtn: false,

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

    const onChangeId=(e)=>{

        let 아이디 = '';
        const {value} = e.target;
        let isIdChck = false;

        const regExp1 = /[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]/g;

        아이디 = e.target.value.replace(regExp1, '');

        if(value.length>=1){
            isIdChck = true;
        }
        else if(value.length===0){
            isIdChck = false;
        }
        else {
            isIdChck = false;
        }

        setState({
            ...state,
            아이디: 아이디,
            isIdChck: isIdChck
        })
    }

    const onClickIdCheck=(e)=>{
        e.preventDefault();

        let value = state.아이디;
        let 아이디중복확인 = false;
        let idGuidText = '';
        let 인증된아이디 = '';

        const regExp2 = /(?=.*[A-Za-z])+(?=.*[0-9])*/g;
        const regExp3 = /[가-힣ㄱ-ㅎㅏ-ㅣ]/g;
        const regExp4 = /\s/g;
        const regExp5 = /^(.){4,16}$/g;
        const regExp6 = /^[^0-9]/g;

        if(regExp2.test(value)===false || regExp3.test(value)===true || regExp4.test(value)===true || regExp5.test(value)===false || regExp6.test(value)===false){
            idGuidText = '4~16자 영문 또는 숫자만 사용 가능합니다. 첫 글자는 숫자가 아니어야 합니다.';
            confirmModalMethod('사용 불가능한 아이디입니다. \n 다시 확인해주세요.')
            아이디중복확인 = false;
        }
        else {
            
            const formDate = new FormData();
            formDate.append('userId', state.아이디)
            axios({
                url:'https://rankingdark.store/rankingdak_user_id_check.php',
                method:'POST',
                data: formDate
            })
            .then((res) => {
                if (res.status === 200) {
                
                    console.log('res.data:', res.data);
                    console.log('타입:', typeof res.data);
                    if (res.data === 0) {
                        console.log('모달 확인 직전');
                        confirmModalMethod('사용가능한 아이디입니다.');
                        console.log('모달 호출 완료');
                        setState((prev) => ({
                        ...prev,
                        아이디중복확인: true,
                        idGuidText: '사용 가능한 아이디입니다.',
                        인증된아이디: state.아이디,
                        }));
                    } else if (res.data === 1) {
                        confirmModalMethod('사용 불가능한 아이디입니다.');
                        console.log('사용불가능 아이디');
                        setState((prev) => ({
                        ...prev,
                        아이디중복확인: false,
                        idGuidText: '사용 불가능한 아이디입니다.',
                        }));
                    }
                }
              })
            .catch((err)=>{
                console.error('axios 에러:', err);
            })

        }
        setState({
            ...state,
            아이디중복확인: 아이디중복확인,
            idGuidText: idGuidText,
        })
    }
    
    React.useEffect(()=>{

        if(state.아이디중복확인 === true){
            if(state.아이디!==state.인증된아이디){
                setState({
                    ...state,
                    아이디중복확인 : false,
                })
                confirmModalMethod('아이디가 수정되었습니다. \n 아이디 중복 확인을 다시 시도하세요');
            }
        }
    },[state.아이디중복확인,state.아이디])


    const onChangePw=(e)=>{

        const {value} = e.target;
        let pwGuidText1 = true;
        let pwGuidText2 = true;
        let pwGuidText3 = false;
        let guidTextBox = false;

        const regExp1 = /^(.){6,16}$/g;
        const regExp2 = /((?=.*[A-Za-z])+(?=.*[0-9])+(?=.*[`~!@#$%^&*])+)/g;
        const regExp3 = /\s/g;
        const regExp4 = /[가-힣ㄱ-ㅎㅏ-ㅣ]/g;

        if(value.length>=1){
            guidTextBox = true;
        }
        
        if(regExp1.test(value)===true && regExp2.test(value)===true && regExp3.test(value)===false && regExp4.test(value)===false){
            pwGuidText1 = false;
        }
        else {
            pwGuidText1 = true;
        }
        if(regExp2.test(value)===true){
            pwGuidText2 = false;
        }
        else {
            pwGuidText2 = true;
        }

        if(value!==state.비밀번호확인){
            pwGuidText3 = '비밀번호가 일치하지 않습니다.';
        }
        else {
            pwGuidText3 = '';
        }

        setState({
            ...state,
            비밀번호: e.target.value,
            pwGuidText1: pwGuidText1,
            pwGuidText2: pwGuidText2,
            pwGuidText3: pwGuidText3,
            guidTextBox: guidTextBox

        })
    }
    const onChangePwCheck=(e)=>{

        const {value} = e.target;

        let pwGuidText3 = '';



        if(value!==state.비밀번호){
            pwGuidText3 = '비밀번호가 일치하지 않습니다.';
        }
        else {
            pwGuidText3 = '';
        }


        setState({
            ...state,
            비밀번호확인: e.target.value, 
            pwGuidText3: pwGuidText3,
        })

    }

    const onChangeName=(e)=>{


        let 이름 = e.target.value;
        let nameGuidText = '';

        const regExp1 = /[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]/g;

        이름 = e.target.value.replace(regExp1, '');

        if(이름.length<2){
            nameGuidText = '이름을 2자 이상 입력하세요.';
        }

        setState({
            ...state,
            이름: 이름,
            nameGuidText: nameGuidText,
        })
    }

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
        let isPhoneSuccess = false;
        let 입력인증번호 = '';

        num = Math.floor(Math.random() * 90000 + 10000);

        if(regExp.test(state.휴대폰)===false){
            confirmModalMethod('잘못된 휴대폰 번호입니다. \n 다시 확인해주세요.');
            phoneCheck = false;
            isPhoneSuccess = false;

        } else {
            confirmModalMethod(`인증번호 \n [ ${num} ] \n 인증번호를 아래 인증번호 입력란에 \n 입력해주세요`);
            phoneCheck = true;
            isPhoneSuccess = true;
            입력인증번호 = '';

            clearInterval(timer.setId);
            phoneSuccessTimer();
        }
        setState({
            ...state,
            발급인증번호: num,
            입력인증번호: 입력인증번호,
            phoneCheck: phoneCheck,
            isPhoneSuccess: isPhoneSuccess,
        })

    }

    const onClickPhoneCheck=(e)=>{
        e.preventDefault();

        let phoneSuccessCheck = false;
        let isPhoneSuccess = false;
        let 발급인증번호 = state.발급인증번호;
        let 입력인증번호 = state.입력인증번호;
        let 인증된휴대폰번호 = state.인증된휴대폰번호;
        let 휴대폰 = state.휴대폰;
        
        if(발급인증번호===Number(입력인증번호)){
            confirmModalMethod('인증에 성공하였습니다.')
            phoneSuccessCheck = true;
            isPhoneSuccess = false;
            인증된휴대폰번호 = 휴대폰;
            clearInterval(timer.setId);
        }
        else {
            confirmModalMethod('잘못된 인증번호입니다. 다시 확인해주세요');
            phoneSuccessCheck = false;
            isPhoneSuccess = true;
            입력인증번호 = '';
        }

        setState({
            ...state,
            phoneSuccessCheck: phoneSuccessCheck,
            isPhoneSuccess : isPhoneSuccess,
            입력인증번호 : 입력인증번호,
            인증된휴대폰번호 : 인증된휴대폰번호,
        })

    }

    React.useEffect(()=>{
        if(timer.M === '00'){

            confirmModalMethod('휴대폰 인증을 다시 시도하세요.');

            setState({
                ...state,
                입력인증번호 : '',
                isPhoneSuccess: false,
                isPhoneBtn2: false,
            })
        }
    },[timer.M])

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


    const onChangeEmail=(e)=>{
        setState({
            ...state,
            이메일: e.target.value,
        })
    }
    
    const onChangeMember=(e)=>{
        setState({
            ...state,
            평생회원: e.target.value
        })
    }

    React.useEffect(()=>{

        let isSignupBtn = false;
        if(state.아이디중복확인===true && state.비밀번호!=='' && state.비밀번호 === state.비밀번호확인 && state.이름.length>1 && state.phoneSuccessCheck === true && state.이메일!=='' && state.평생회원 !== ''){
            isSignupBtn = true;
        }
        else {
            isSignupBtn = false;
        }
        setState({
            ...state,
            isSignupBtn : isSignupBtn
        })

        return;
        
    },[state.아이디중복확인, state.비밀번호, state.비밀번호확인, state.이름, state.이메일, state.평생회원, state.phoneSuccessCheck])

    const onSubmitSignUp=(e)=>{
        e.preventDefault();

        const formData = new FormData();
        formData.append('userId', state.아이디);
        formData.append('userPw', state.비밀번호);
        formData.append('userName', state.이름);
        formData.append('userPhone', state.휴대폰);
        formData.append('userEmail', `${state.이메일}${state.value==='직접입력'?'':'@'+state.value}`);
        formData.append('userLiftMember', state.평생회원);
        formData.append('userAgreement', state.이용약관동의);

        axios({
            url:'https://rankingdark.store/rankingdak_user_insert.php',
            method:'POST',
            data: formData 
        })
        .then((res)=>{
            if(res.status===200){
                console.log(res.data); 
                if(res.data===1){
                    confirmModalMethod('회원가입을 축하드립니다!');
                    
                }
                else if(res.data===0) { 
                    confirmModalMethod('회원가입을 실패하였습니다! \n 다시 시도해주세요.');
                }
            }
            
        })
        .catch((err)=>{
            
        })

    }

    return (
        <div id='signup'>
            <section id="section1">
                <div className="container">
                    <div className="title">
                        <h2>회원가입</h2>
                    </div>
                    <div className="content">
                        <form onSubmit={onSubmitSignUp}>
                            <ul>
                                <li>
                                    <div className="gap">
                                        <div className="label-box">
                                            <label htmlFor="userId">아이디 <i></i></label>
                                        </div>
                                        <div className="input-btn-box">
                                            <input
                                                type="text"
                                                id='userId'
                                                name='userId'
                                                placeholder='4~16자 이상 영문 또는 숫자만 사용 가능'
                                                value={state.아이디}
                                                onChange={onChangeId}
                                                maxLength={16}
                                            />
                                            <button onClick={onClickIdCheck} disabled={!state.isIdChck} className={`${state.isIdChck===true?'on':''}`}>중복확인</button>
                                        </div>
                                        <div className="guid-box1">
                                            <p>{state.idGuidText}</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="gap">
                                        <div className="label-box">
                                            <label htmlFor="">비밀번호 <i></i></label>
                                        </div>
                                        <div className="input-btn-box pw">
                                            <input
                                                type="password"
                                                id='userPw'
                                                name='userPw'
                                                placeholder='6~16자 영문,숫자.특수문자 1개 이상씩 혼용 필수'
                                                value={state.비밀번호}
                                                onChange={onChangePw}
                                            />
                                            <input
                                                type="password"
                                                id='userPwCheck'
                                                name='userPwCheck'
                                                placeholder='비밀번호 확인'
                                                value={state.비밀번호확인}
                                                onChange={onChangePwCheck}
                                            />
                                        </div>
                                        {
                                            state.guidTextBox && (
                                                <div className="guid-box1">
                                                    <p className={state.pwGuidText1? '' : 'on'}>※ 6 ~ 16자 영문, 숫자, 특수문자 1개 이상씩 혼용 필수.</p>
                                                    <p className={state.pwGuidText2? '' : 'on'}>※ 특수문자는 !, @, #, $, %, ^, &, * 만 사용 가능.</p>
                                                </div>
                                            )
                                        }

                                            {/* <em className={`${state.pwGuidText2On?'on':''}`}>{state.pwGuidText2}</em> */}
                                        <div className="guid-box3">
                                            <strong>{state.pwGuidText3}</strong>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="gap">
                                        <div className="label-box">
                                            <label htmlFor="userName">이름 <i></i></label>
                                        </div>
                                        <div className="input-btn-box">
                                            <input
                                                type="text"
                                                id='userName'
                                                name='userName'
                                                placeholder='이름 2자 이상 입력'
                                                value={state.이름}
                                                onChange={onChangeName}
                                                maxLength={30}
                                            />
                                           
                                        </div>
                                        <div className="guid-box1">
                                            <p>{state.nameGuidText}</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="gap">
                                        <div className="label-box">
                                            <label htmlFor="userPhone">휴대폰 <i></i></label>
                                        </div>
                                        <div className="input-btn-box">
                                            <input
                                                type="text"
                                                id='userPhone'
                                                name='userPhone'
                                                placeholder='숫자만 입력'
                                                value={state.휴대폰}
                                                onChange={onChangePhone}
                                                maxLength={11}
                                            />
                                            <button disabled={!state.isPhoneBtn1} onClick={onClickPhoneNum} className={state.isPhoneBtn1?'on':''}>인증번호</button>
                                        </div>
                                        {   
                                            state.isPhoneSuccess && ( 
                                                <div className="input-btn-box phone">
                                                    <input
                                                        type="text"
                                                        id='userPhoneAuthen'
                                                        name='userPhoneAuthen'
                                                        placeholder='인증번호 입력'
                                                        value={state.입력인증번호}
                                                        onChange={onChangePhone2}
                                                    />
                                                    <span className='timer'><p>{timer.M}</p><i>:</i><p>{timer.S}</p></span>
                                                    <button disabled={!state.isPhoneBtn2} onClick={onClickPhoneCheck} className={state.isPhoneBtn2?'on':''}>확인</button>
                                                </div>
                                            )
                                        }
                                    </div>
                                </li>
                            
                                <li>
                                    <div className="gap">
                                        <div className="label-box">
                                            <label htmlFor="userEmail">이메일 <i></i></label>
                                        </div>
                                        <div className="input-btn-box">
                                            <input
                                                type="text"
                                                id='userEmail'
                                                name='userEmail'
                                                placeholder='이메일 주소'
                                                value={state.이메일}
                                                onChange={onChangeEmail}
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
                                    </div>
                                </li>
                                {/* <li>
                                    <div className="gap">
                                        <div className="label-box">
                                            <label htmlFor="">추천 아이디</label>
                                        </div>
                                        <div className="input-btn-box">
                                            <input
                                                type="text"
                                                id='userRecomId'
                                                name='userRecomId'
                                                placeholder='추천아이디 입력'
                                                value={state.추천아이디}
                                                onChange={onChangeRecomId}
                                            />
                                            <button>확인하기</button>
                                        </div>
                                    </div>
                                </li> */}
                                <li>
                                    <div className="gap">
                                        <div className="label-box">
                                            <label htmlFor="userLiftMember">평생회원 <i></i></label>
                                        </div>
                                        <div className="input-btn-box">
                                            
                                            <label htmlFor="userLiftMemberAgree">
                                                <input
                                                    type="radio"
                                                    id='userLiftMemberAgree'
                                                    name='userLiftMember'
                                                    value={'동의'}
                                                    onChange={onChangeMember}
                                                />
                                                <span>동의</span>
                                            </label>
                                            <label htmlFor="userLiftMemberAgreeNone">
                                                <input
                                                    type="radio"
                                                    id='userLiftMemberAgreeNone'
                                                    name='userLiftMember'
                                                    value={'동의안함'}
                                                    onChange={onChangeMember}
                                                />
                                                <span>동의안함</span>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="gap last">
                                        <p>※ 평생회원은 회원탈퇴 전까지 휴면회원으로 전환되지 않습니다.</p>
                                    </div>
                                </li>
                                <li className='btn-box'>
                                    <div className="gap">
                                        <input disabled={!state.isSignupBtn} type="submit" id='signupBtn' name='signupBtn' value={'회원가입'} className={`${state.isSignupBtn?'on':''}`} />
                                    </div>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};
