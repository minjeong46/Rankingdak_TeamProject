import React from 'react';
import '../scss/SubCustomer.scss';
import SubCustomerLeft from './SubCustomerLeft';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SubCustomerFaq7(){
    
    const location = useLocation();
    const navigate = useNavigate();


    // 상태관리변수
    const [state, setState] = React.useState({
        isFaq1: false,
        isFaq2: false,
        isFaq3: false,
        isFaq4: false,
        isFaq5: false,
        isFaq6: false
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
        else if(p==='기능끄기'){
            isFaq5 = !isFaq5;
        }
        else if(p==='걸음수이상'){
            isFaq6 = !isFaq6;
        }
        
        
        

        setState({
            ...state,
            isFaq1: isFaq1,
            isFaq2: isFaq2,
            isFaq3: isFaq3,
            isFaq4: isFaq4,
            isFaq5: isFaq5,
            isFaq6: isFaq6
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
                                    <li onClick={onClickCategory7} className='category on'><button><span>만보기 서비스</span></button></li>
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
                                        <p>
                                            랭킹닭컴 앱을 재 설치 한 경우 기존에 걸음수가 초기화 됩니다.
                                        </p>
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
                                            자정 전 만보기 리워드를 꼭 수령해 주세요. 수령하지 않을 경우 지난 일자에 대한 보상은 받을 수 없습니다.
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '기능끄기')}>
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
                                <li onClick={(e)=>onClickFaq(e, '걸음수이상')}>
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
                            </ul>

                            
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

