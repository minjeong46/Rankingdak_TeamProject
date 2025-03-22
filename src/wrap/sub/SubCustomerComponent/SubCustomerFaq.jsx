import React from 'react';
import '../scss/SubCustomer.scss';
import SubCustomerLeft from './SubCustomerLeft';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SubCustomerFaq(){
    
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

        if(p==='걸음수'){
            isFaq1 = !isFaq1;
        }
        else if(p==='유효기간'){
            isFaq2 = !isFaq2;
        }
        else if(p==='변화'){
            isFaq3 = !isFaq3;
        }
        else if(p==='초기화'){
            isFaq4 = !isFaq4;
        }
        else if(p==='만보기'){
            isFaq5 = !isFaq5;
        }
        else if(p==='걸음이상'){
            isFaq6 = !isFaq6;
        }
        else if(p==='서비스정책'){
            isFaq7 = !isFaq7;
        }
        else if(p==='환불조건'){
            isFaq8 = !isFaq8;
        }
        else if(p==='환불신청'){
            isFaq9 = !isFaq9;
        }
        else if(p==='현금영수증'){
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
                                    <li onClick={onClickCategory} className='category on'><button><span>전체보기</span></button></li>
                                    <li onClick={onClickCategory2} className='category'><button><span>상품 관련</span></button></li>
                                    <li onClick={onClickCategory3} className='category'><button><span>주문 및 결제</span></button></li>
                                    <li onClick={onClickCategory4} className='category'><button><span>배송 관련</span></button></li>
                                    <li onClick={onClickCategory5} className='category'><button><span>포인트/쿠폰</span></button></li>
                                    <li onClick={onClickCategory6} className='category'><button><span>회원/멤버십</span></button></li>
                                    <li onClick={onClickCategory7} className='category'><button><span>만보기 서비스</span></button></li>
                                    <li onClick={onClickCategory8} className='category'><button><span>기타</span></button></li>
                                </ul>
                            </div>
                            <ul className="faq-list">
                            <li onClick={(e)=>onClickFaq(e, '걸음수')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>만보기 서비스</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>기존 걸음수가 없어졌어요</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq1===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq1===true? '' : ' hide'}`}>
                                        <p>랭킹닭컴 앱을 재 설치 한 경우 기존에 걸음수가 초기화 됩니다.</p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '유효기간')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>만보기 서비스</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>만보기 리워드 유효기간이 어떻게 되나요?</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq2===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq2===true? '' : ' hide'}`}>
                                        <p>
                                            만보기 리워드는 <strong>적립 시점부터 한달의 유효기간</strong>이 있습니다. <br />
                                            유효 기간이 지나 소멸된 경우 원복 처리 해드리지 않는 점 참고 부탁드립니다.
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '변화')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>만보기 서비스</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>걸음수에 변화가 없어요</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq3===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq3===true? '' : ' hide'}`}>
                                        <p>
                                            iOS : 아이폰 6 이상부터 만보기 기능을 사용하실 수 있습니다. <br />
                                            그래도 걸음수에 변화가 없다면 단말기 센서 자체의 문제사항이니 A/S센터를 방문하시길 바랍니다.<br /><br />
                                            안드로이드 : 휴대기기 재부팅 이후 사용을 요청드리며, 배터리 최적화 모드에서는 측정이 안될 수 있습니다.<br />
                                            그래도 걸음수 변화가 없다면 단말기 센서 자체의 문제사항이니 A/S 센터를 방문하시길 바랍니다.
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '초기화')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>만보기 서비스</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>걸음수와 받지않은 만보기 리워드가 초기화 됬어요.</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq4===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq4===true? '' : ' hide'}`}>
                                        <p>
                                            매일 자정(24:00)에 걸음수와 보상이 초기화 되며, 자정이 지난경우 초기화 되고 있습니다. (대한민국시간 기준)<br />
                                            자정 전 만보기 리워드를 꼭 수령해 주세요. 수령하지 않을경우 지난일자에 대한 보상은 받을 수 없습니다.
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '만보기')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>만보기 서비스</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>만보기 기능을 끄고 싶어요</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq5===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq5===true? '' : ' hide'}`}>
                                        <p>
                                            아래 내용을 참고하셔서 운영체제별 만보기 미사용 방법을 확인해주세요<br /><br />
                                            *안드로이드 : 만보기 &gt; 우측 상단 설정 &gt; 만보기 기능 미사용<br />
                                            *iOS : 설정 &gt; 랭킹닭컴 &gt; 동작 및 피트니스 &gt; 미설정
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '걸음이상')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>만보기 서비스</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>걸음수가 이상해요</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq6===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq6===true? '' : ' hide'}`}>
                                        <p>
                                            휴대기기의 흔들림으로 걸음수가 측정 되기 때문에 실제 걸음수와 100% 일치 하기 어렵습니다.<br />
                                            고객님 휴대기기의 운영체제와 기종에 따라 오차가 발생될 수 있으며, <em>저전력 모드를 할 경우에도 걸음수 측정이 안될 수</em> 있습니다.<br /><br />
                                            (안드로이드 해당) 배터리 최적화 모드에서는 걸음 수 측정이 되지 않을 수 있으니 최적화 모드에서 랭킹닭컴 앱을 제외해 주세요.<br />
                                            이점 유의하셔서 만보기 서비스 이용을 해주시기 바랍니다.
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '서비스정책')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>기타</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>[CJ 기프트카드] CJ기프트카드 서비스 정책이 궁금해요!</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq7===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq7===true? '' : ' hide'}`}>
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
                                            {state.isFaq8===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq8===true? '' : ' hide'}`}>
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
                                            {state.isFaq9===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq9===true? '' : ' hide'}`}>
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
                                            {state.isFaq10===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq10===true? '' : ' hide'}`}>
                                        <p>
                                            네 가능합니다.<br />
                                            주문서 화면에서 현금영수증 발행 여부 체크 및 발행 받으실 휴대폰번호 또는 사업자번호를 입력해주시고 주문 완료를 하신 후 결제가 되면 자동으로 발행 신청이 됩니다.<br />
                                            주문서 작성 시 발행 신청을 하지 못하셨을 경우에는 결제 후 1:1 문의 또는 랭킹닭컴 고객센터(02-6405-8088)로 연락 주시면 간단한 본인 확인 후에 발급을 진행해 드리고 있습니다. <br /><br />
                                            ※ 현금영수증상의 날짜는 결제하신 날짜가 아닌 영수증 발급 신청을 한 날짜로 발행 되고, 결제한 날로부터 익월 10일까지만 신청이 가능하며 이후 요청은 불가합니다.
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

