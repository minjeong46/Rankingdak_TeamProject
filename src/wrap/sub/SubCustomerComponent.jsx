import React from 'react';
import './scss/SubCustomer.scss';
import SubCustomerLeft from './SubCustomerComponent/SubCustomerLeft';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SubCustomerComponent(){
    
    const location = useLocation();
    const navigate = useNavigate();


    // 상태관리변수
    const [state, setState] = React.useState({
        isFaq1: false,
        isFaq2: false,
        isFaq3: false,
        isFaq4: false,
        isFaq5: false,
        공지사항: []
    });

    // 자주하는 질문
    const onClickFaq=(e, p)=>{
        e.preventDefault();
        let isFaq1 = state.isFaq1;
        let isFaq2 = state.isFaq2;
        let isFaq3 = state.isFaq3;
        let isFaq4 = state.isFaq4;
        let isFaq5 = state.isFaq5;

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

        setState({
            ...state,
            isFaq1: isFaq1,
            isFaq2: isFaq2,
            isFaq3: isFaq3,
            isFaq4: isFaq4,
            isFaq5: isFaq5
        });
    }

    // FAQ 페이지로 이동
    const onClickGoFaq=(e)=>{
        e.preventDefault();
        navigate('/customerFaq');
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        });
    }

    // 공지사항 보기
    const onClickView=(e)=>{
        e.preventDefault();
        navigate('/customerNotice');
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        });
    }

    // 공지 가져오기
    React.useEffect(()=>{
        axios({
            url:'http://eyou46.dothome.co.kr/rankingdak/rankingdak_notice_table_select.php',
            method:'GET'
        })
        .then((res)=>{
            // console.log( 'AXIOS 성공!' );
            // console.log( res );
            // console.log( res.data );
            if(res.status===200){
                setState({
                    ...state,
                    공지사항: res.data                   
                })
            }
            
        })
        .catch((err)=>{
            console.log( 'AXIOS 실패!' );
            console.log( err );
        });
        return;
    },[]);

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

                        <div className="search-box">
                            <h3>자주묻는 질문 검색</h3>
                            <div className="input-gap">
                                <div className="input-box">
                                    <input type="text" name='question' id='question' placeholder='궁금하신 내용을 입력해 주세요'/>
                                    <button className='search-btn'>
                                        <i className='search-icon'></i>
                                    </button>
                                </div>
                            </div>
                            <ul>
                                <li><button>주문</button></li>
                                <li><i>|</i></li>
                                <li><button>배송</button></li>
                                <li><i>|</i></li>
                                <li><button>특급배송</button></li>
                                <li><i>|</i></li>
                                <li><button>포인트</button></li>
                            </ul>
                        </div>

                        <div className="use-guide">
                            <h2 className='guide-title'>랭킹닭컴 이용안내</h2>
                            <ul>
                                <li>
                                    <a href="!#">
                                        <i className='icon-use-guide1'></i>
                                        <span>배송조회 안내</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="!#">
                                        <i className='icon-use-guide2'></i>
                                        <span>배송오류 안내</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="!#">
                                        <i className='icon-use-guide3'></i>
                                        <span>현금영수증 안내</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="!#">
                                        <i className='icon-use-guide4'></i>
                                        <span>포인트 안내</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="!#">
                                        <i className='icon-use-guide5'></i>
                                        <span>특급배송 안내</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="faq faq-top5">
                            <div className="faq-header">
                                <h2 className='faq-title'>자주묻는 FAQ TOP5</h2>
                                <a onClick={onClickGoFaq} href="!#" className='go-faq'>
                                    <span>전체보기</span>
                                    <i className="fa fa-angle-right"></i>
                                </a>    
                            </div>
                            <ul className="faq-list top5">
                                <li onClick={(e)=>onClickFaq(e, '걸음수')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>기존 걸음수가 없어졌어요</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq1===true && <i className="fa fa-angle-up"></i>}
                                            {state.isFaq1===false && <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq1===true? '' : ' hide'}`}>
                                        <p className='answer-txt'>랭킹닭컴 앱을 재 설치 한 경우 기존에 걸음수가 초기화 됩니다.</p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '유효기간')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>만보기 리워드 유효기간이 어떻게 되나요?</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq2===true && <i className="fa fa-angle-up"></i>}
                                            {state.isFaq2===false && <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq2===true? '' : ' hide'}`}>
                                        <p className='answer-txt'>
                                            만보기 리워드는 <strong>적립 시점부터 한달의 유효기간</strong>이 있습니다. <br />
                                            유효 기간이 지나 소멸된 경우 원복 처리 해드리지 않는 점 참고 부탁드립니다.
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '변화')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>걸음수에 변화가 없어요</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq3===true && <i className="fa fa-angle-up"></i>}
                                            {state.isFaq3===false && <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq3===true? '' : ' hide'}`}>
                                        <p className='answer-txt'>
                                            iOS : 아이폰 6 이상부터 만보기 기능을 사용하실 수 있습니다. <br />
                                            그래도 걸음수에 변화가 없다면 단말기 센서 자체의 문제사항이니 A/S센터를 방문하시길 바랍니다.<br /><br />
                                            안드로이드 : 휴대기기 재부팅 이후 사용을 요청드리며, 배터리 최적화 모드에서는 측정이 안될 수 있습니다.<br />
                                            그래도 걸음수 변화가 없다면 단말기 센서 자체의 문제사항이니 A/S 센터를 방문하시길 바랍니다.
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '초기화')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>걸음수와 받지않은 만보기 리워드가 초기화 됬어요.</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq4===true && <i className="fa fa-angle-up"></i>}
                                            {state.isFaq4===false && <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq4===true? '' : ' hide'}`}>
                                        <p className='answer-txt'>
                                            매일 자정(24:00)에 걸음수와 보상이 초기화 되며, 자정이 지난경우 초기화 되고 있습니다. (대한민국시간 기준)<br />
                                            자정 전 만보기 리워드를 꼭 수령해 주세요. 수령하지 않을경우 지난일자에 대한 보상은 받을 수 없습니다.
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '만보기')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>만보기 기능을 끄고 싶어요</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq5===true && <i className="fa fa-angle-up"></i>}
                                            {state.isFaq5===false && <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq5===true? '' : ' hide'}`}>
                                        <p className='answer-txt'>
                                            아래 내용을 참고하셔서 운영체제별 만보기 미사용 방법을 확인해주세요<br /><br />
                                            *안드로이드 : 만보기 &gt; 우측 상단 설정 &gt; 만보기 기능 미사용<br />
                                            *iOS : 설정 &gt; 랭킹닭컴 &gt; 동작 및 피트니스 &gt; 미설정
                                        </p>
                                    </div>
                                </li>
                            </ul>

                        </div>

                        <div className="gap-box">
                            <div className="notice-preview">
                                <div className="preview-header">
                                    <h3>공지사항</h3>
                                    <a href="!#" onClick={onClickView} className='notice-nav'>
                                        <span>전체보기</span>
                                        <i className="fa fa-angle-right"></i>
                                    </a>
                                </div>
                                <ul>
                                {
                                    state.공지사항.length > 0 && (
                                        state.공지사항.map((item, idx)=>{
                                            return (
                                                <li key={item.번호}>
                                                    <div className="preview-left">
                                                        <a href="!#">{item.제목}</a>
                                                    </div>
                                                    <div className="preview-right">
                                                        <span>{`${new Date(item.작성일).getFullYear()}.${new Date(item.작성일).getMonth()+1}.${new Date(item.작성일).getDate()}`}</span>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    )
                                }
                                </ul>
                            </div>
                            <div className="customer-box">
                                <div className="customer-gap">
                                    <ul className="customer-info">
                                        <li className="info-list list1">
                                            <a href="!#">
                                                <i className='info-icon icon1'></i>
                                                <span>1:1 문의</span>
                                            </a>
                                        </li>
                                        <em>|</em>
                                        <li className="info-list list2">
                                            <a href="!#">
                                                <i className='info-icon icon2'></i>
                                                <span>실시간 문의</span>
                                            </a>
                                        </li>
                                        <em>|</em>
                                        <li className="info-list list3">
                                            <a href="!#">
                                                <i className='info-icon icon3'></i>
                                                <span>고객의 소리</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="tel-box">
                                        <strong>02-6405-8088</strong>
                                        <ul className='business-hours'>
                                            <li>평일 09:00 ~ 18:00</li>
                                            <em>|</em>
                                            <li>점심 12:00 ~ 13:00</li>
                                        </ul>
                                        <p>주말, 휴일에는 실시간 채팅 상담을 이용해주세요.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    );
};
