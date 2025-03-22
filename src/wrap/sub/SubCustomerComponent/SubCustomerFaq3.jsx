import React from 'react';
import '../scss/SubCustomer.scss';
import SubCustomerLeft from './SubCustomerLeft';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SubCustomerFaq3(){
    
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

        if(p==='할인율'){
            isFaq1 = !isFaq1;
        }
        else if(p==='증정품'){
            isFaq2 = !isFaq2;
        }
        else if(p==='쿠폰적용'){
            isFaq3 = !isFaq3;
        }
        else if(p==='가능상품'){
            isFaq4 = !isFaq4;
        }
        else if(p==='배송확인'){
            isFaq5 = !isFaq5;
        }
        else if(p==='수량변경'){
            isFaq6 = !isFaq6;
        }
        else if(p==='결제일'){
            isFaq7 = !isFaq7;
        }
        else if(p==='정기신청'){
            isFaq8 = !isFaq8;
        }
        else if(p==='카드변경'){
            isFaq9 = !isFaq9;
        }
        else if(p==='배송지'){
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
                                    <li onClick={onClickCategory3} className='category on'><button><span>주문 및 결제</span></button></li>
                                    <li onClick={onClickCategory4} className='category'><button><span>배송 관련</span></button></li>
                                    <li onClick={onClickCategory5} className='category'><button><span>포인트/쿠폰</span></button></li>
                                    <li onClick={onClickCategory6} className='category'><button><span>회원/멤버십</span></button></li>
                                    <li onClick={onClickCategory7} className='category'><button><span>만보기 서비스</span></button></li>
                                    <li onClick={onClickCategory8} className='category'><button><span>기타</span></button></li>
                                </ul>
                            </div>
                            <ul className="faq-list">
                            <li onClick={(e)=>onClickFaq(e, '할인율')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>주문 및 결제</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>정기배송 할인율은 모두 동일한가요?</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq1===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq1===true? '' : ' hide'}`}>
                                        <p>
                                            정기배송 할인율은 제품에 따라 다릅니다.<br />
                                            정기배송 신청을 통해 할인율을 확인 부탁드립니다.
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '증정품')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>주문 및 결제</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>정기배송을 주문했는데 증정품이 안왔어요!</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq2===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq2===true? '' : ' hide'}`}>
                                        <p>
                                            정기배송은 결제 시점에 따라 행사가 적용됩니다.<br />
                                            실제 결제된 시점의 행사 내용을 참고해주세요.
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '쿠폰적용')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>주문 및 결제</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>정기배송에 포인트나 쿠폰 적용이 안됩니다.</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq3===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq3===true? '' : ' hide'}`}>
                                        <p>
                                            정기배송 서비스는 포인트 및 쿠폰 적용이 불가합니다.
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '가능상품')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>주문 및 결제</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>정기배송 가능한 상품이 따로 있나요?</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq4===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq4===true? '' : ' hide'}`}>
                                        <p>
                                            제품 페이지에 정기배송 아이콘을 확인 부탁드립니다.
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '배송확인')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>주문 및 결제</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>제가 신청한 정기배송을 확인할 수 있나요?</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq5===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq5===true? '' : ' hide'}`}>
                                        <p>
                                            [ 마이페이지 - 정기배송관리 ] 에서 확인 가능합니다.
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '수량변경')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>주문 및 결제</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>정기배송 상품의 수량은 어떻게 변경하나요?</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq6===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq6===true? '' : ' hide'}`}>
                                        <p>
                                            정기배송 상품 수량, 구성 품목 변경은 불가하며 남은 회차 전체 취소 후 재주문을 부탁드립니다.
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '결제일')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>주문 및 결제</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>정기배송은 언제 결제되나요?</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq7===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq7===true? '' : ' hide'}`}>
                                        <p>
                                            정기배송은 출고일에  오전10시에 자동 결제 됩니다.<br /><br />
                                            결제 실패 시 오전 11시에 추가 결제를 진행하며,<br />
                                            최종 결제 실패 시 정오 12시에 알림톡을 발송해드리고 있습니다.<br /><br />
                                            결제 실패 주문 건은 당일에 한해 새 카드 등록 후 재결제 가능합니다.
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '정기신청')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>주문 및 결제</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>정기배송은 어떻게 신청하나요?</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq8===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq8===true? '' : ' hide'}`}>
                                        <p>
                                            정기 배송이 표시된 제품만 가능하며, <br />
                                            주문 시 [ 정기배송 신청 ] 버튼을 클릭 후  배송 횟수와 요일 선택 후 주문이 가능합니다.
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '카드변경')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>주문 및 결제</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>정기배송 결제 카드를 변경할 수 있나요?</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq9===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq9===true? '' : ' hide'}`}>
                                        <p>
                                            [ 마이페이지 - 정기배송관리 - 결제카드관리 ] 에서 카드 등록, 변경이 가능합니다.<br />
                                            <strong>*카드 최대 2개까지 등록 가능합니다*</strong>
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '배송지')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>주문 및 결제</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>정기배송 상품별로 배송지를 다르게 설정할 수 있나요?</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq10===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq10===true? '' : ' hide'}`}>
                                        <p>
                                            같은 주문번호에 배송지는 1개만 설정이 가능합니다.<br />
                                            중복 배송지 설정은 불가하며, 따로 주문을 부탁드립니다.
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

