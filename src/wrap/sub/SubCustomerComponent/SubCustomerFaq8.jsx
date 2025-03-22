import React from 'react';
import '../scss/SubCustomer.scss';
import SubCustomerLeft from './SubCustomerLeft';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SubCustomerFaq8(){
    
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
        isFaq9: false,
        isFaq10: false
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
        let isFaq9 = state.isFaq9;
        let isFaq10 = state.isFaq10;

        if(p==='기프트정책'){
            isFaq1 = !isFaq1;
        }
        else if(p==='환불조건'){
            isFaq2 = !isFaq2;
        }
        else if(p==='환불신청'){
            isFaq3 = !isFaq3;
        }
        else if(p==='현금영수증'){
            isFaq4 = !isFaq4;
        }
        else if(p==='금액제한'){
            isFaq5 = !isFaq5;
        }
        else if(p==='사용내역'){
            isFaq6 = !isFaq6;
        }
        else if(p==='포인트적립'){
            isFaq7 = !isFaq7;
        }
        else if(p==='여러장결제'){
            isFaq8 = !isFaq8;
        }
        else if(p==='카드등록'){
            isFaq9 = !isFaq9;
        }
        else if(p==='상품권정책'){
            isFaq10 = !isFaq10;
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
            isFaq9: isFaq9,
            isFaq10: isFaq10
        });
    }

    // 페이지이동
    const onClickCategory=(e)=>{
        e.preventDefault();
        navigate('/customerFaq');
    }
    const onClickCategory2=(e)=>{
        e.preventDefault();
        navigate('/customerFaq2');
    }
    const onClickCategory3=(e)=>{
        e.preventDefault();
        navigate('/customerFaq3');
    }
    const onClickCategory4=(e)=>{
        e.preventDefault();
        navigate('/customerFaq4');
    }
    const onClickCategory5=(e)=>{
        e.preventDefault();
        navigate('/customerFaq5');
    }
    const onClickCategory6=(e)=>{
        e.preventDefault();
        navigate('/customerFaq6');
    }
    const onClickCategory7=(e)=>{
        e.preventDefault();
        navigate('/customerFaq7');
    }
    const onClickCategory8=(e)=>{
        e.preventDefault();
        navigate('/customerFaq8');
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

                        <div className="faq">
                            <div className="faq-header">
                                <h2 className='faq-title'>자주묻는 FAQ</h2>
                            </div>
                            <div className="faq-box">
                                <div className="input-box">
                                    <input type="text" name='searchFaq' id='searchFaq' placeholder='궁금하신 내용을 입력해 주세요'/>
                                    <button className='search-btn'>
                                        <i className='search-icon'></i>
                                    </button>
                                </div>
                                <ul className="category-box">
                                    <li onClick={onClickCategory} className='category'><button><span>전체보기</span></button></li>
                                    <li onClick={onClickCategory2} className='category'><button><span>상품 관련</span></button></li>
                                    <li onClick={onClickCategory3} className='category'><button><span>주문 및 결제</span></button></li>
                                    <li onClick={onClickCategory4} className='category'><button><span>배송 관련</span></button></li>
                                    <li onClick={onClickCategory5} className='category'><button><span>포인트/쿠폰</span></button></li>
                                    <li onClick={onClickCategory6} className='category'><button><span>회원/멤버십</span></button></li>
                                    <li onClick={onClickCategory7} className='category'><button><span>만보기 서비스</span></button></li>
                                    <li onClick={onClickCategory8} className='category on'><button><span>기타</span></button></li>
                                </ul>
                            </div>
                            <ul className="faq-list">
                            <li onClick={(e)=>onClickFaq(e, '기프트정책')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>기타</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>[CJ 기프트카드] CJ기프트카드 서비스 정책이 궁금해요!</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq1===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq1===true? '' : ' hide'}`}>
                                        <p>
                                            자세한 문의는 CJ기프트카드 고객센터(1577-8888, 평일 09시~18시)로 전화주시면 상담가능합니다.
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '환불조건')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>기타</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>[CJ 기프트카드] 잔액 환불 조건이 어떻게 되나요?</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq2===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq2===true? '' : ' hide'}`}>
                                        <p>
                                            최종 충전 시점의 잔액을 기준으로 1만원 이하는 80%, 1만원 이상은 60% 이상 사용 후 잔액이 환불 가능합니다.<br />
                                            (단, 결제 후 해당 건의 취소이력이 있을 경우에는 취소 불가)<br /><br />
                                            예시&#41;<br />
                                            1월 1일 / 10만원 충전 : 환불 불가 <br />
                                            1월 2일 / 6만원 결제 -&gt; 잔액 4만원 : 전액 환불 가능<br /><br />
                                            * 프로모션으로 제공된 기프트카드는 환불이 불가합니다.<br />
                                            자세한 문의는 CJ기프트카드 고객센터(1577-8888, 평일 09시~18시)로 전화주시면 상담가능합니다.
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '환불신청')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>기타</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>[CJ 기프트카드] 잔액 환불을 신청하고 싶은데 어디서 해야 하나요?</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq3===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq3===true? '' : ' hide'}`}>
                                        <p>
                                            CJ ONE 홈페이지에서 가능합니다.<br />
                                            https://www.cjone.com/cjmweb/cash/cashinfo.do<br /><br />
                                            환불 신청은 신청일로부터 영업일 기준 5~7일 내 지정하신 계좌로 입금됩니다.<br />
                                            단, 사정에 따라 다소 지연될 수 있는점 양해바랍니다.
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '현금영수증')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>기타</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>[CJ 기프트카드] CJ기프트카드 사용 시 현금영수증 발행이 가능한가요?</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq4===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq4===true? '' : ' hide'}`}>
                                        <p>
                                            네 가능합니다.<br />
                                            주문서 화면에서 현금영수증 발행 여부 체크 및 발행 받으실 휴대폰번호 또는 사업자번호를 입력해주시고 주문 완료를 하신 후 결제가 되면 자동으로 발행 신청이 됩니다.<br />
                                            주문서 작성 시 발행 신청을 하지 못하셨을 경우에는 결제 후 1:1 문의 또는 랭킹닭컴 고객센터(02-6405-8088)로 연락 주시면 간단한 본인 확인 후에 발급을 진행해 드리고 있습니다. <br /><br />
                                            ※ 현금영수증상의 날짜는 결제하신 날짜가 아닌 영수증 발급 신청을 한 날짜로 발행 되고, 결제한 날로부터 익월 10일까지만 신청이 가능하며 이후 요청은 불가합니다.
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '금액제한')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>기타</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>[CJ 기프트카드] CJ기프트카드 사용 시 최소~최대 금액 제한이 있나요?</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq5===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq5===true? '' : ' hide'}`}>
                                        <p>
                                            최소 10원 이상 10원 단위로 사용 가능하며, 최대 금액은 제한이 없습니다.
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '사용내역')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>기타</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>[CJ 기프트카드] CJ기프트카드 사용 내역을 보고 싶은데, 어디서 확인할 수 있나요?</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq6===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq6===true? '' : ' hide'}`}>
                                        <p>
                                            CJ ONE 웹사이트(www.cjone.com), CJ ONE 앱(ios, Android), 모바일 웹(m.cjone.com)의<br />
                                            [기프트카드 &#62; 나의 기프트카드 &#62; 이용내역] 메뉴에서 사용 내역을 조회 할 수 있습니다.
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '포인트적립')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>기타</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>[CJ 기프트카드] CJ기프트카드 사용시 포인트가 적립되나요?</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq7===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq7===true? '' : ' hide'}`}>
                                        <p>
                                            CJ ONE 포인트 적립 대상에서는 제외됩니다.<br />
                                            ※ 단, 기프트카드는 현금성이므로 기존 포인트 적립제도와 동일하게 구매 확정 후 자동 적립되며, 2,000점부터 사용이 가능합니다. 
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '여러장결제')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>기타</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>[CJ 기프트카드] 여러 장으로 결제가 가능한가요?</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq8===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq8===true? '' : ' hide'}`}>
                                        <p>
                                            네 가능합니다.<br /><br />
                                            CJ ONE에 등록해 놓은 기프트카드의 합산금액이 조회되며, 아래 순위에 따라 우선 사용처리 됩니다.<br />
                                            ① 유효기간 짧은 순 <br />
                                            ② 잔액이 적은 순 <br />
                                            ③ 유효기간/잔액 동일 시 랜덤 <br /><br />
                                            ※ CJ 기프트카드 번호 직접 입력 방식 선택 시 계정당 최대 3장까지 조회/적용할 수 있으며 등록된 기프트카드에서 소진 시 제한 수량 3장 내에서 추가 등록이 가능합니다.
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '카드등록')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>기타</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>[CJ 기프트카드] CJ기프트카드 등록은 어디서 하나요?</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq9===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq9===true? '' : ' hide'}`}>
                                        <p>
                                            CJ ONE 홈페이지에서 가능합니다.<br />
                                            https://www.cjone.com/cjmweb/cash/cashreg.do<br /><br />
                                            기프트카드를 등록하시면 랭킹닭컴에서 금액 조회 후 편리하게 사용 가능합니다.<br />
                                            등록하지 않고도 사용 가능합니다.
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '상품권정책')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>기타</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>[랭킹닭컴 상품권] 서비스 정책이 궁금해요!</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq10===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq10===true? '' : ' hide'}`}>
                                        <p>
                                            랭킹닭컴에 회원가입 후 상품권 번호를 등록(조회)해야만 사용(결제)이 가능한(분할 사용 가능)<br />
                                            잔액 관리형 상품권으로 자세한 서비스 정책 문의는 기프티콘 이용약관 확인 및 기프티콘 APP 통하여 확인이 가능합니다. 
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

