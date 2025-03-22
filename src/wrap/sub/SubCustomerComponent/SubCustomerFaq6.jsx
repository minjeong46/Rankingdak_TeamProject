import React from 'react';
import '../scss/SubCustomer.scss';
import SubCustomerLeft from './SubCustomerLeft';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SubCustomerFaq6(){
    
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
        let isFaq9 = state.isFaq9;

        if(p==='상해보험'){
            isFaq1 = !isFaq1;
        }
        else if(p==='멤버십변경'){
            isFaq2 = !isFaq2;
        }
        else if(p==='리뉴얼'){
            isFaq3 = !isFaq3;
        }
        else if(p==='변경내용'){
            isFaq4 = !isFaq4;
        }
        else if(p==='변경혜택'){
            isFaq5 = !isFaq5;
        }
        else if(p==='기존회원'){
            isFaq6 = !isFaq6;
        }
        else if(p==='사고접수'){
            isFaq7 = !isFaq7;
        }
        else if(p==='보험혜택'){
            isFaq8 = !isFaq8;
        }
        else if(p==='신규혜택'){
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
                                    <li onClick={onClickCategory6} className='category on'><button><span>회원/멤버십</span></button></li>
                                    <li onClick={onClickCategory7} className='category'><button><span>만보기 서비스</span></button></li>
                                    <li onClick={onClickCategory8} className='category'><button><span>기타</span></button></li>
                                </ul>
                            </div>
                            <ul className="faq-list">
                                <li onClick={(e)=>onClickFaq(e, '상해보험')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>회원/멤버십</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>[오렌지멤버스] 단체 상해보험 혜택에 대해 안내 받지 못했습니다.</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq1===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq1===true? '' : ' hide'}`}>
                                        <p>
                                            운동 중 사고와 관련한 <br />
                                            단체 상해보험 가입 혜택은 <strong>2023년 10월 13일 기준으로 종료</strong>되었습니다.<br /><br />
                                            2022년 10월 13일 ~ 2023년 10월 12일 기간 내<br />
                                            오렌지멤버스에 가입하거나 연장 신청한 고객의 경우,<br />
                                            보험 가입 혜택을 받으실 수 있으니 참고 부탁드립니다.<br /><br />
                                            자세한 문의는 <strong>롯데손해보험 오렌지멤버스 담당자(02-3455-3779)로 문의</strong> 바랍니다.
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '멤버십변경')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>회원/멤버십</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>언제부터 멤버십이 변경되나요?</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq2===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq2===true? '' : ' hide'}`}>
                                        <p>
                                            2023년 4월 1일부터 새로워진 멤버십을 만나볼 수 있습니다.
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '리뉴얼')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>회원/멤버십</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>왜 멤버십이 리뉴얼 되는 건가요?</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq3===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq3===true? '' : ' hide'}`}>
                                        <p>
                                            보다 많은 회원분들께 다양하고 실용적인 혜택을 드리기 위해 리뉴얼 되었습니다.
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '변경내용')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>회원/멤버십</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>어떤 내용이 바뀌었나요?</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq4===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq4===true? '' : ' hide'}`}>
                                        <p>
                                            등급 산정 기준을 완화하면서 보다 쉽게 VIP 혜택을 누릴 수 있습니다. <br />
                                            최근 2년~ 전월까지 구매이력을 기준으로 매월 1일 등급이 선정되며,<br />
                                            등급별 혜택도 확대하여 랭킹닭컴을 이용하는 고객 모두가 다양한 혜택을 받을 수 있도록 개편되었습니다.<br /><br />
                                            등급산정 기준 및 혜택내용은 ‘마이페이지-멤버십 혜택’에서 자세히 확인하실 수 있습니다.
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '변경혜택')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>회원/멤버십</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>변경된 멤버십 혜택은 어디서 볼 수 있나요?</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq5===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq5===true? '' : ' hide'}`}>
                                        <p>
                                            2023년 4월 1일 이후 '마이페이지 - 멤버십 혜택’ 에서 확인 가능합니다.
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '기존회원')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>회원/멤버십</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>[오렌지멤버스] 기존 오렌지멤버스 회원(22.10.13 이전 가입자)도 보험혜택을 받을 수 있나요?</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq6===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq6===true? '' : ' hide'}`}>
                                        <p>
                                            보험 혜택은 22.10.13 이후 가입자부터 적용됩니다.
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '사고접수')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>회원/멤버십</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>[오렌지멤버스] 오렌지멤버스 회원입니다. 운동 중 사고를 접수하려고 합니다. 어떻게 해야하나요?</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq7===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq7===true? '' : ' hide'}`}>
                                        <p>
                                            보험 사고 접수는 롯데손해보험 서비스센터를 통해 진행합니다.<br /><br />
                                            1. 롯데손해보험 오렌지멤버스 담당자(02-3455-3779)에 전화합니다.<br /><br />
                                            2. 랭킹닭컴 오렌지멤버스 회원임을 밝히고, 사고 접수의사를 전달합니다.<br />
                                            <strong>예&#41; "랭킹닭컴 오렌지멤버스 회원인데, 사고를 접수하고 싶어요."</strong><br /><br />
                                            3. 보험사에서 안내해주는 멘트에 따라 피보험자 등록을 마친 뒤, 보험금 청구서류를 작성, 제출합니다.
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '보험혜택')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>회원/멤버십</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>[오렌지멤버스] 단체 상해보험으로 받을 수 있는 혜택은 무엇인가요?</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq8===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq8===true? '' : ' hide'}`}>
                                        <p>
                                            무리한 운동이나 운동 중 부주의로 인해 발생하는 예상치 못한 큰 사고에 대하여,<br />
                                            <strong>[5대 골절 진단비], [5대 골절 수술비], [일상생활 강력범죄 위로금]</strong> 혜택을 받을 수 있습니다.<br />
                                            세부 혜택 내용은 아래와 같습니다.<br /><br />
                                            <strong>&#60;오렌지멤버스 단체 상해 보험 혜택 내용&#62;</strong><br />
                                            5대 골절 진단비 - 200,000원<br />
                                            5대 골절 수술비 - 500,000원<br />
                                            일상생활 강력범죄 위로금 - 1,000,000원
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '신규혜택')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>회원/멤버십</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>신규회원 혜택은 무엇이 있나요?</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq9===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq9===true? '' : ' hide'}`}>
                                        <p>
                                            신규 가입시 가입축하 적립금 1,000점 혜택이 있으며,<br />
                                            회원이 되시면 생일축하쿠폰, 등급별 적립혜택, 리뷰적립금, 매월 이벤트 참여 시 선물을 받으실 기회가 다양하게 준비되어 있습니다.<br />
                                            ★ 가입 후 첫 앱 다운시 1,000원 할인쿠폰도 증정드리고 있는 점 이용에 참고 바랍니다.
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

