import React from 'react';
import '../scss/SubCustomer.scss';
import SubCustomerLeft from '../SubCustomerComponent/SubCustomerLeft';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SubCustomerUseInfo(){
    
    const location = useLocation();
    const navigate = useNavigate();


    // 상태관리변수
    const [state, setState] = React.useState({
        isFaq1: false,
        isFaq2: false,
        isFaq3: false,
        isFaq4: false,
        isFaq5: false,
        isFaq6: false,
        isFaq7: false,
        isFaq8: false,
        isFaq9: false
    });

    // 자주하는 질문
    const onClickFaq=(e, p)=>{
        e.preventDefault();
        let isFaq1 = state.isFaq1;
        let isFaq2 = state.isFaq2;
        let isFaq3 = state.isFaq3;
        let isFaq4 = state.isFaq4;
        let isFaq5 = state.isFaq5;
        let isFaq6 = state.isFaq6;
        let isFaq7 = state.isFaq7;
        let isFaq8 = state.isFaq8;
        let isFaq9 = state.isFaq9

        if(p==='포인트'){
            isFaq1 = !isFaq1;
        }
        else if(p==='현금영수증'){
            isFaq2 = !isFaq2;
        }
        else if(p==='주문취소'){
            isFaq3 = !isFaq3;
        }
        else if(p==='한가지'){
            isFaq4 = !isFaq4;
        }
        else if(p==='상품수령'){
            isFaq5 = !isFaq5;
        }
        else if(p==='앱로그인'){
            isFaq6 = !isFaq6;
        }
        else if(p==='쿠폰발행'){
            isFaq7 = !isFaq7;
        }
        else if(p==='배송조회'){
            isFaq8 = !isFaq8;
        }
        else if(p==='특급배송'){
            isFaq9 = !isFaq9;
        }

        setState({
            ...state,
            isFaq1: isFaq1,
            isFaq2: isFaq2,
            isFaq3: isFaq3,
            isFaq4: isFaq4,
            isFaq5: isFaq5,
            isFaq6: isFaq6,
            isFaq7: isFaq7,
            isFaq8: isFaq8,
            isFaq9: isFaq9
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

                        <div className="use-info">
                            <div className="info-header">
                                <h2 className='info-title'>이용안내</h2>
                            </div>
                            <ul className="info-list">
                                <li onClick={(e)=>onClickFaq(e, '포인트')}>
                                    <a href='!#' className='info-question'>
                                        <div className="subject">
                                            <span>[랭킹닭컴]</span>
                                            <p>포인트 적립 안내</p>
                                        </div>
                                        <div className="info-icon">
                                            {state.isFaq1===true?<i className="fa fa-angle-up"></i>:<i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`info-answer${state.isFaq1===true? '' : ' hide'}`}>
                                        <p>포인트 적립은 구매 확정 후 자동 적립 처리됩니다.</p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '현금영수증')}>
                                    <a href='!#' className='info-question'>
                                        <div className="subject">
                                            <span>[랭킹닭컴]</span>
                                            <p>현금영수증 발급 방법 안내 드립니다.</p>
                                        </div>
                                        <div className="info-icon">
                                            {state.isFaq2===true?<i className="fa fa-angle-up"></i>:<i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`info-answer${state.isFaq2===true? '' : ' hide'}`}>
                                        <p>
                                            아래 방법중 택일하여 진행해 주시면 됩니다.<br /><br />
                                            1. 마이페이지 -> 무통장입금 및 계좌이체로 결제하신 주문서 내역(주문번호) 클릭 -> 하단 현금영수증란 현금영수증 발급 버튼 클릭 -> 용도에 따라 소득공제용&지출증빙용(사업자) 선택 -> 정보 입력후 발급버튼을 클릭.<br /><br />
                                            2. 1:1 문의 게시판 또는 랭킹닭컴 고객센터(02-6405-8088)로 연락 주시면 간단한 질문 드리고 발급 진행해 드립니다.
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '주문취소')}>
                                    <a href='!#' className='info-question'>
                                        <div className="subject">
                                            <span>[랭킹닭컴]</span>
                                            <p>주문취소 방법</p>
                                        </div>
                                        <div className="info-icon">
                                            {state.isFaq3===true?<i className="fa fa-angle-up"></i>:<i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`info-answer${state.isFaq3===true? '' : ' hide'}`}>
                                        <p>
                                            <strong>랭킹닭컴은 주문 완료 후 빠른 출고를 위해 구매 내역에서 취소가 불가합니다.<br /><br /></strong>
                                            주문 취소를 원하시는 경우 1:1문의, 실시간채팅 또는 고객센터로 연락주시면 확인 후 안내드리겠습니다.<br /><br />
                                            업무시간 이후의 경우 실시간채팅 또는 1:1문의에 남겨주시면 순차적으로 답변 드리겠습니다.
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '한가지')}>
                                    <a href='!#' className='info-question'>
                                        <div className="subject">
                                            <span>[랭킹닭컴]</span>
                                            <p>한가지 제품만 왔어요</p>
                                        </div>
                                        <div className="info-icon">
                                            {state.isFaq4===true?<i className="fa fa-angle-up"></i>:<i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`info-answer${state.isFaq4===true? '' : ' hide'}`}>
                                        <p>
                                            이용에 불편드려서 죄송합니다.<br /><br />
                                            <strong>
                                                1. 누락- 누락된 상품과 수량을 게시판이나 고객센터(02-6405-8088)로 연락주시면 바로 출고하도록 하겠습니다.<br /><br />
                                                2. 오배송- 오배송된상품의경우 오배송된 상품사진을 게시판에 첨부해주시거나 고객센타로 연락주시면 바로 주문하신 상품으로 출고하도록 하겠습니다.<br /><br />
                                            </strong>
                                            오배송된 상품은 신선식품으로 회수되지 않으니 가능하시면 맛있게 섭취 부탁드립니다(브랜드별 일부제외)<br /><br />
                                            "랭킹닭컴에서 판매되는 제품은 각 브랜드 별로만 묶음 배송이 가능합니다. 주문시에 다른 브랜드의 제품 두가지를 주문하셨을 경우 브랜드에서 직접 출고되기 때문에 각각 따로 다른 배송사로 배송처리 됩니다."
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '상품수령')}>
                                    <a href='!#' className='info-question'>
                                        <div className="subject">
                                            <span>[랭킹닭컴]</span>
                                            <p>주문상품 언제 수령하나요</p>
                                        </div>
                                        <div className="info-icon">
                                            {state.isFaq5===true?<i className="fa fa-angle-up"></i>:<i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`info-answer${state.isFaq5===true? '' : ' hide'}`}>
                                        <p>
                                            <strong>1. 브랜드별 발송 마감시간 체크!<br /></strong>
                                            브랜드에 따라 발송 마감시간이 각각 다르오니 주문하실 제품의 상세페이지 하단의 배송 정보를 꼭 읽어주세요. 발송 마감전 입금이 확인된 주문건만 해당일 발송이 가능합니다.<br /><br />
                                            <strong>2. 주말/공휴일/휴일 전날에는 배송 휴무!<br /></strong>
                                            주말/공휴일/휴일 전날에는 발송업무를 하지 않습니다. 제품의 특성상(냉장/냉동식품) 배송시간을 최대한 짧게 하기 위한 조치입니다.주말/공휴일/휴일 전날에는 발송업무를 하지 않습니다. 제품의 특성상(냉장/냉동식품) 배송시간을 최대한 짧게 하기 위한 조치입니다.<br /><br />
                                            토요일 전에 받아보시려면 꼭 금요일 발송마감시간 이전에는 주문&결제를 완료해 주세요.<br />
                                            <em>*공휴일 관련 배송 안내는 랭킹닭컴 고객센터(공지사항 게시판)을 확인 해 주세요.</em>
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '앱로그인')}>
                                    <a href='!#' className='info-question'>
                                        <div className="subject">
                                            <span>[랭킹닭컴]</span>
                                            <p>앱에서 로그인이 안될때</p>
                                        </div>
                                        <div className="info-icon">
                                            {state.isFaq6===true?<i className="fa fa-angle-up"></i>:<i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`info-answer${state.isFaq6===true? '' : ' hide'}`}>
                                        <p>
                                            [로그인] 페이지 아이디/패스워드 입력란의 우측 하단 [아이디/비밀번호찾기]를 이용하시면 아이디 및 비밀번호를 확인/변경 하실 수 있습니다.<br />[로그인] 페이지 아이디/패스워드 입력란의 우측 하단 [아이디/비밀번호찾기]를 이용하시면 아이디 및 비밀번호를 확인/변경 하실 수 있습니다.<br /><br />
                                            <strong>
                                                1. 브랜드별 발송 마감시간 체크!<br />
                                                2. 아이디/패스워드 입력란의 우측하단 [아이디/비밀번호 찾기] 버튼 클릭<br />
                                                3. 휴대폰 번호 입력 인증번호 받기<br />
                                                4. 인증번호 입력<br />
                                                5. 인증 후 비밀번호 변경<br /><br />
                                            </strong>
                                            위 방법으로도 로그인이 되지 않는 경우 고객센터(02-6405-8088)로 연락주시면 정보 확인 후 임시 비밀번호를 발급해 드립니다.
                                            
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '쿠폰발행')}>
                                    <a href='!#' className='info-question'>
                                        <div className="subject">
                                            <span>[랭킹닭컴]</span>
                                            <p>앱다운로드 후 쿠폰발행</p>
                                        </div>
                                        <div className="info-icon">
                                            {state.isFaq7===true?<i className="fa fa-angle-up"></i>:<i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`info-answer${state.isFaq7===true? '' : ' hide'}`}>
                                        <p>
                                            [로그인] 페이지 아이디/패스워드 입력란의 우측 하단 [아이디/비밀번호찾기]를 이용하시면 아이디 및 비밀번호를 확인/변경 하실 수 있습니다.<br />[로그인] 페이지 아이디/패스워드 입력란의 우측 하단 [아이디/비밀번호찾기]를 이용하시면 아이디 및 비밀번호를 확인/변경 하실 수 있습니다.
                                            <strong>
                                                어플을 설치하시고 로그인 상태에서 다시한번 로그아웃을 해주시고, 재로그인을 해주시면 자동으로 쿠폰이 발급됩니다!<br /><br />
                                            </strong>
                                            <em>마이페이지 > 쿠폰 > 사용가능쿠폰 에서 확인이 가능합니다.<br /><br /></em>
                                            * 재로그인시 쿠폰목록에서 확인이 안되시는경우 고객센터로 문의주시면 확인 후 빠른 처리 도와드리겠습니다.
                                            
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '배송조회')}>
                                    <a href='!#' className='info-question'>
                                        <div className="subject">
                                            <span>[랭킹닭컴]</span>
                                            <p>배송 조회 확인 안내</p>
                                        </div>
                                        <div className="info-icon">
                                            {state.isFaq8===true?<i className="fa fa-angle-up"></i>:<i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`info-answer${state.isFaq8===true? '' : ' hide'}`}>
                                        <p>
                                            
                                            <strong>랭킹닭컴에서는 상품 발송 후 메일 문자를<br />이용하여 택배사/송장번호를 안내드리고 있습니다.<br /><br /></strong>
                                            해당 주문의 조회를 원하시는 경우 아래 방법으로 조회가 가능합니다.<br /><br />
                                            <strong>1. 마이페이지 > 해당 주문번호 클릭 > 택배 송장번호 클릭<br /><br /></strong>
                                            <em>*랭킹닭컴에서는 택배가 두건 이상으로 발송되었을시에는 대표송장번호 조회만 가능합니다.<br /><br /></em>
                                            대표상품 외 조회를 원하시는 경우 문자안내드린 송장번호로 아래 2번과 같이 조회해 주세요.<br /><br />
                                            <strong>2. 메일/문자로 안내드린 택배송장번호로 해당 택배사 홈페이지에서 조회</strong>
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '특급배송')}>
                                    <a href='!#' className='info-question'>
                                        <div className="subject">
                                            <span>[랭킹닭컴]</span>
                                            <p>특급배송 서비스 안내</p>
                                        </div>
                                        <div className="info-icon">
                                            {state.isFaq9===true?<i className="fa fa-angle-up"></i>:<i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`info-answer${state.isFaq9===true? '' : ' hide'}`}>
                                        <p>
                                            
                                            <strong>랭킹닭컴 특급배송은 당일, 새벽, 내일도착 3가지로 이용이 가능합니다.<br /><br /></strong>
                                            <em>오전 11시까지 주문, 오늘 도착!<br /></em>
                                            오전에 주문하면 저녁에 딹!<br /><br />
                                            <em>저녁 8시까지 주문, 내일 새벽 도착!<br /></em>
                                            자고 일어나면 문 앞에 딹!<br /><br />
                                            <em>밤 12시까지 주문, 내일 도착!<br /></em>
                                            밤 늦게 주문해도 내일 딹!<br /><br />
                                            <strong>
                                                ※ 특급배송 상품 35,000원 이상 배송비 무료 (도서산간 제외)<br />
                                                ※ 당일, 새벽도착은 수도권 / 충청권 일부 지역에 한해 이용 가능합니다. (제공지역 확장 예정)
                                            </strong>
                                            <Link to='/sub7'>특급배송 자세히 보러가기&gt;</Link>
                                        </p>
                                    </div>
                                </li>
                            </ul>

                        </div>

                        
                        
                    </div>

                </div>
            </div>
        </div>
    );
};
