import React from 'react';
import '../scss/SubCustomer.scss';
import SubCustomerLeft from './SubCustomerLeft';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SubCustomerFaq5(){
    
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
        isFaq7: false
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
        
        if(p==='생일쿠폰'){
            isFaq1 = !isFaq1;
        }
        else if(p==='상품평'){
            isFaq2 = !isFaq2;
        }
        else if(p==='쿠폰'){
            isFaq3 = !isFaq3;
        }
        else if(p==='포인트'){
            isFaq4 = !isFaq4;
        }
        else if(p==='유효기간'){
            isFaq5 = !isFaq5;
        }
        else if(p==='사용제한'){
            isFaq6 = !isFaq6;
        }
        else if(p==='포인트차감'){
            isFaq7 = !isFaq7;
        }

        setState({
            ...state,
            isFaq1: isFaq1,
            isFaq2: isFaq2,
            isFaq3: isFaq3,
            isFaq4: isFaq4,
            isFaq5: isFaq5,
            isFaq6: isFaq6,
            isFaq7: isFaq7
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
                                    <li onClick={onClickCategory5} className='category on'><button><span>포인트/쿠폰</span></button></li>
                                    <li onClick={onClickCategory6} className='category'><button><span>회원/멤버십</span></button></li>
                                    <li onClick={onClickCategory7} className='category'><button><span>만보기 서비스</span></button></li>
                                    <li onClick={onClickCategory8} className='category'><button><span>기타</span></button></li>
                                </ul>
                            </div>
                            <ul className="faq-list">
                            <li onClick={(e)=>onClickFaq(e, '생일쿠폰')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>포인트/쿠폰</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>생일쿠폰은 어떻게 받나요?</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq1===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq1===true? '' : ' hide'}`}>
                                        <p>
                                            생일 쿠폰은 생일 7일 전 쿠폰함에 자동으로 발급됩니다.<br />
                                            발급 후 30일 이내 쿠폰 사용이 가능하며, 자세한 내용은 쿠폰함에서 확인 부탁드립니다.
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '상품평')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>포인트/쿠폰</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>상품평은 어떻게 남기고, 포인트는 얼마나 적립되나요?</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq2===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq2===true? '' : ' hide'}`}>
                                        <p>
                                            구매하신 상품에 10일이내 상품평을 남기실 수 있으며, 일반 리뷰 작성 시 100포인트, 포토리뷰 작성 시 300포인트가 적립됩니다.<br />
                                            상품과 무관한 사진(캡쳐사진 포함), 내용은 통보없이 삭제 및 적립이 회수될 수 있습니다.
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '쿠폰')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>포인트/쿠폰</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>앱다운로드 쿠폰이 발행되지 않습니다.</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq3===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq3===true? '' : ' hide'}`}>
                                        <p>
                                            APP을 설치하시고 로그인 상태에서 다시 한 번 로그아웃을 해주시고, 재로그인을 해주시면 자동으로 쿠폰이 발급됩니다!<br />
                                            발급이 되지 않았을 경우 재로그인을 부탁드리며, 재시도를 해주셨는데도 쿠폰이 발급되지 않을 경우 고객센터로 문의주시면 확인 후 빠른 처리 도와드리겠습니다.
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '포인트')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>포인트/쿠폰</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>포인트 적립은 언제되나요?</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq4===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq4===true? '' : ' hide'}`}>
                                        <p>
                                            포인트 적립은 구매 확정 후 자동 적립 처리됩니다.
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '유효기간')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>포인트/쿠폰</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>포인트 유효기간이 있나요?</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq5===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq5===true? '' : ' hide'}`}>
                                        <p>
                                            구매 적립 포인트의 유효기간은 1년입니다.<br />
                                            1년 이내 사용하셔야 하며 마케팅 목적으로 지급되는 포인트는 별도의 유효기간이 부여될 수 있으니 참고 바랍니다.
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '사용제한')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>포인트/쿠폰</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>적립금(포인트) 사용 제한이 있나요?</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq6===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq6===true? '' : ' hide'}`}>
                                        <p>
                                            포인트는 2,000점부터 사용이 가능합니다. <br />
                                            2,000점 이상 보유하고 있으신 경우에만 주문서에 자동으로 나타납니다. 또한 사용금액에 대한 제한은 없습니다.
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '포인트차감')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>포인트/쿠폰</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>결제 실패로 포인트가 차감되었어요 이럴땐 어떻게 하죠?</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq7===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq7===true? '' : ' hide'}`}>
                                        <p>
                                            결제 실패로 인해 포인트가 본의 아니게 차감되는 경우 아래 안내를 따라 진행하시면 포인트 복구가 가능합니다.<br /><br />
                                            1. 마이페이지 -&gt; 포인트를 사용하신 내역 "주문번호" 클릭 -&gt; 주문내역 하단 "주문취소"버튼 클릭<br />
                                            2. 주문 실패한 주문건 취소와 동시에 차감된 포인트는 복구 처리 됩니다. <br /><br />
                                            또는, 1:1 문의, 랭킹닭컴 고객센터(02-6405-8088)로 연락을 주시면 진행을 실패한 주문의 전체 취소 및 사용하신 포인트금액을 복구 처리 해드리고 있습니다.<br /><br />
                                            * 정해진 일정에 따라 회원님께서 놓치신 결제 실패로 인해 차감된 포인트를 복구하는 작업을 진행하고 있습니다.<br />
                                            * 결제가 실패하였더라도 마이페이지 -&gt; 해당주문번호 클릭 -&gt; 결재 재시도가 가능하오니 이점 참고 바랍니다.
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

