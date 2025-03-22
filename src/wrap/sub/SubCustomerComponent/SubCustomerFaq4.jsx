import React from 'react';
import '../scss/SubCustomer.scss';
import SubCustomerLeft from './SubCustomerLeft';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SubCustomerFaq4(){
    
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

        if(p==='특급배송'){
            isFaq1 = !isFaq1;
        }
        else if(p==='배송미루기'){
            isFaq2 = !isFaq2;
        }
        else if(p==='배송실수'){
            isFaq3 = !isFaq3;
        }
        else if(p==='생수'){
            isFaq4 = !isFaq4;
        }
        else if(p==='공동현관'){
            isFaq5 = !isFaq5;
        }
        else if(p==='배송진행'){
            isFaq6 = !isFaq6;
        }
        else if(p==='배송일'){
            isFaq7 = !isFaq7;
        }
        else if(p==='택배사'){
            isFaq8 = !isFaq8;
        }
        else if(p==='배송지변경'){
            isFaq9 = !isFaq9;
        }
        else if(p==='여러주소'){
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
                                    <li onClick={onClickCategory4} className='category on'><button><span>배송 관련</span></button></li>
                                    <li onClick={onClickCategory5} className='category'><button><span>포인트/쿠폰</span></button></li>
                                    <li onClick={onClickCategory6} className='category'><button><span>회원/멤버십</span></button></li>
                                    <li onClick={onClickCategory7} className='category'><button><span>만보기 서비스</span></button></li>
                                    <li onClick={onClickCategory8} className='category'><button><span>기타</span></button></li>
                                </ul>
                            </div>
                            <ul className="faq-list">
                            <li onClick={(e)=>onClickFaq(e, '특급배송')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>배송관련</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>정기배송은 특급배송이 가능한가요?</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq1===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq1===true? '' : ' hide'}`}>
                                        <p>
                                            정기배송은 일반배송만 가능하며, 특급배송은 불가합니다.
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '배송미루기')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>배송관련</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>정기배송 상품의 배송미루기는 어떻게 변경하나요?</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq2===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq2===true? '' : ' hide'}`}>
                                        <p>
                                            [ 마이페이지 - 정기배송관리 ] 에 배송미루기를 통해 배송일 변경이 가능합니다.<br /><br />
                                            정기배송 잔여 회차에 대하여 배송 미루기가 가능합니다.<br />
                                            배송 미루기 시 잔여 회차의 모든 배송예정일이 일주일씩 미뤄집니다.<br />
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '배송실수')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>배송관련</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>상품이 주문한 것과 다르게 배송되었습니다.</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq3===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq3===true? '' : ' hide'}`}>
                                        <p>
                                            이용에 불편을 드려 죄송합니다.<br />
                                            받으신 제품의 사진을 찍어 1:1문의, 실시간채팅, 고객센터로 연락주시면 확인 후 안내드리겠습니다.<br />
                                            ( ※누락, 오배송의 경우 상품 수령 후 2주 이내에 교환 가능합니다. )
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '생수')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>배송관련</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>얼음 생수가 같이 왔어요. 먹을 수 있나요?</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq4===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq4===true? '' : ' hide'}`}>
                                        <p>
                                            랭킹닭컴에서는 혹서기(7월-9월초)에 맞춰 더욱 신선 냉동 배송을 위해<br />
                                            얼음 생수를 함께 배송하고 있습니다. 먹을 수 있는 생수이니, 드셔도 됩니다 :&#41;
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '공동현관')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>배송관련</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>특급배송을 주문했는데 공동현관에 배송됐습니다. 왜 그런가요?</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq5===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq5===true? '' : ' hide'}`}>
                                        <p>
                                            공동현관 출입 불가 시, 공동현관 또는 경비실에 배송될 수 있습니다. <br />
                                            분실될 우려가 있으니 공동현관 출입 방법을 정확히 남겨주세요. <br />
                                            공동현관 출입 방법을 선택해주시더라도 배송시간에 경비 호출 부재 및 비밀번호 오기재로 인해 대응배송 될 수 있습니다.<br /><br />
                                            공동현관 비밀번호는 배송 완료 후 안전하게 삭제됩니다.<br />
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '배송진행')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>배송관련</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>특급배송은 어떻게 진행되나요?</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq6===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq6===true? '' : ' hide'}`}>
                                        <p>
                                            <strong>랭킹닭컴 특급배송은 당일, 새벽, 내일 도착 3가지로 이용이 가능합니다.</strong><br /><br />
                                            <strong className='orange'>오전 11시까지 주문, 오늘 도착!</strong><br />
                                            오전에 주문하면 저녁에 딹!<br /><br />
                                            <strong className='orange'>저녁 8시까지 주문, 내일 새벽 도착!</strong><br />
                                            자고 일어나면 문 앞에 딹! <br /><br />
                                            <strong className='orange'>밤 12시까지 주문, 내일 도착!</strong><br />
                                            밤 늦게 주문해도 내일 딹!<br /><br />
                                            ※ 특급배송 상품 35,000원 이상 배송비 무료 (도서산간 제외) <br />
                                            ※ 당일, 새벽도착은 수도권 / 충청권 일부 지역에 한해 이용 가능합니다. (제공지역 확장 예정)
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '배송일')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>배송관련</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>배송일을 지정하고 싶어요!</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq7===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq7===true? '' : ' hide'}`}>
                                        <p>
                                            랭킹닭컴의 모든 주문들은 대부분 마감시간 이전 결제 시 당일 출고가 진행되고 있습니다.<br />
                                            당일 출고를 위해 거의 실시간으로 주문서가 전달되고 있다보니 주문해주신 제품의 업체로 주문서가 전달된 후에는 배송일 지정이 불가한 점 참고 바랍니다.
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '택배사')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>배송관련</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>택배사를 지정해서 배송 받을 수 있나요?</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq8===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq8===true? '' : ' hide'}`}>
                                        <p>
                                            각각의 제품 상세페이지 하단에 안내가 되어있는 택배사 이외에 임의로 지정하여 발송은 불가능한점 참고 부탁드립니다.
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '배송지변경')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>배송관련</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>배송지를 변경하고 싶어요!</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq9===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq9===true? '' : ' hide'}`}>
                                        <p>
                                            주문 접수 후에는 당일 배송을 위해 실시간 주문서가 수집되고 있어 배송지 및 수취인정보 변경이 어렵습니다.<br />
                                            한번 접수 된 주문의 수취인 정보를 변경 원하실 경우 해당 주문 취소 후 재주문을 부탁드립니다.
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '여러주소')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>배송관련</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>여러 주소로 배송하려고 하는데 한번에 결제가 가능한가요?</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq10===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq10===true? '' : ' hide'}`}>
                                        <p>
                                            여러 주소로 배송을 받으셔야하는 경우에는 주소별로 각각 주문해 주셔야 합니다.<br />
                                            주소지는 주문 한 건당 하나의 주소지로만 적용 후 배송이 가능한 점 참고 부탁드립니다.
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

