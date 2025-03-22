import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function SubCustomerLeft(){

    const navigate = useNavigate();

    // 공지사항
    const onClickNotice=(e)=>{
        e.preventDefault();
        navigate('/customerNotice');
    }
    // 이용안내
    const onClickUseInfo=(e)=>{
        e.preventDefault();
        navigate('/customerUseInfo');
    }
    // 자주묻는 질문
    const onClickFaq=(e)=>{
        e.preventDefault();
        navigate('/customerFaq');
    }

    return (
        <div className="left">
            <div className="left-list">
                <ul>
                    <li onClick={onClickNotice}><a href="!#">공지사항</a></li>
                    <li onClick={onClickUseInfo}><a href="!#">이용안내</a></li>
                    <li onClick={onClickFaq}><a href="!#">자주묻는 FAQ</a></li>
                    <li><a href="!#">1:1 문의</a></li>
                    <li><a href="!#">고객의 소리</a></li>
                </ul>
            </div>
            <div className="guide-box">
                    <div className="tel-box">
                        <h3>랭킹닭컴 고객센터</h3>
                        <strong>02-6405-8088</strong>
                        <span>평일 09:00 ~ 18:00</span>
                        <span>주말, 공휴일 휴무</span>
                    </div>
                    <div className="counsel-box">
                        <h3>실시간 채팅 상담</h3>
                        <span>평일 09:00 ~ 21:00</span>
                        <span>토요일 09:00 ~ 15:00</span>
                        <span>일요일 13:00 ~ 21:00</span>
                    </div>
                </div>
        </div>
    );
};
