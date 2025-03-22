import React from 'react';
import '../scss/SubCustomer.scss';
import SubCustomerLeft from './SubCustomerLeft';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SubCustomerFaq2(){
    
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

        if(p==='상품변경'){
            isFaq1 = !isFaq1;
        }
        else if(p==='옵션변경'){
            isFaq2 = !isFaq2;
        }
        else if(p==='증정품'){
            isFaq3 = !isFaq3;
        }
        else if(p==='냉동식품'){
            isFaq4 = !isFaq4;
        }
        else if(p==='사은품'){
            isFaq5 = !isFaq5;
        }
        else if(p==='교환/반품'){
            isFaq6 = !isFaq6;
        }
        else if(p==='야채'){
            isFaq7 = !isFaq7;
        }
        else if(p==='신선애'){
            isFaq8 = !isFaq8;
        }
        else if(p==='조리방법'){
            isFaq9 = !isFaq9;
        }
        else if(p==='뼈'){
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
                                    <li onClick={onClickCategory2} className='category on'><button><span>상품 관련</span></button></li>
                                    <li onClick={onClickCategory3} className='category'><button><span>주문 및 결제</span></button></li>
                                    <li onClick={onClickCategory4} className='category'><button><span>배송 관련</span></button></li>
                                    <li onClick={onClickCategory5} className='category'><button><span>포인트/쿠폰</span></button></li>
                                    <li onClick={onClickCategory6} className='category'><button><span>회원/멤버십</span></button></li>
                                    <li onClick={onClickCategory7} className='category'><button><span>만보기 서비스</span></button></li>
                                    <li onClick={onClickCategory8} className='category'><button><span>기타</span></button></li>
                                </ul>
                            </div>
                            <ul className="faq-list">
                            <li onClick={(e)=>onClickFaq(e, '상품변경')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>상품관련</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>혼합구성으로 선택했는데 구성을 변경하고 싶습니다.</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq1===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq1===true? '' : ' hide'}`}>
                                        <p>
                                            혼합구성 상품은 해당 제품의 맛을 골고루 느껴보실 수 있도록 구성된 상품입니다. <br />
                                            따라서 혼합 구성 내 내품 변경을 불가합니다. 특정 맛의 구매를 원하실 경우 각 맛을 따로 주문하시거나, 골라담기 상품으로 구매 부탁드립니다.
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '옵션변경')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>상품관련</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>구매한 제품의 옵션을 변경하고 싶어요!</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq2===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq2===true? '' : ' hide'}`}>
                                        <p>
                                            주문완료 후 옵션 변경은 불가합니다. <br />
                                            주문 취소 후 재주문을 해 주셔야 합니다. <br/>
                                            주문은 실시간으로 확인 후 출고가 진행되기 때문에 취소 가능여부는 고객센터로 연락 주셔서 확인 부탁드립니다.
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '증정품')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>상품관련</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>증정품이 오지 않았습니다.</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq3===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq3===true? '' : ' hide'}`}>
                                        <p>
                                            랭킹닭컴은 매월 증정 이벤트가 변경되고 있습니다. <br />
                                            각 제품 별 상세페이지 내 이벤트 내용이 기재되어 있으며, 기준에 맞게 주문하셨는지 확인을 부탁드립니다. <br /><br />
                                            만약, 기준에 맞게 주문하셨음에도 증정품을 받지 못하셨을 경우에는 <br />
                                            1:1문의, 실시간채팅 또는 고객센터로 연락 주시면 확인 후 안내드리겠습니다. <br />
                                            업무시간 이후의 경우 실시간채팅 또는 1:1문의에 남겨주시면 순차적으로 답변 드리겠습니다. <br />
                                            랭킹닭컴 고객센터 상담시간은 아래와 같습니다. <br />
                                            상담을 원하시는 고객님께서는 해당 시간을 참고하여 연락 주시면 친절히 안내해 드리겠습니다. <br /><br />
                                            [전화 및 1:1문의 업무] 평일 09:00 ~ 18:00 <br />
                                            [실시간채팅] 평일 09:00 ~ 21:00 토요일 09:00 ~ 15:00 일요일 13:00 ~ 21:00
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '냉동식품')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>상품관련</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>냉동식품을 해동 후 그냥 먹어도 되나요?</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq4===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq4===true? '' : ' hide'}`}>
                                        <p>
                                            상품 유형별로 해동 후 바로 먹어도 되는 상품이 있고, 가열하여 섭취해야 하는 상품도 있어, <br />
                                            자세한 해동 및 섭취방법은 각 상품별 상세페이지 및 패키지에 안내가 되어 있으니, 참고 부탁드리겠습니다.
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '사은품')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>상품관련</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>원하는 사은품으로 직접 고를 수 있나요?</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq5===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq5===true? '' : ' hide'}`}>
                                        <p>
                                        저희 랭킹닭컴은 매월 행사가 변경되고 있습니다. <br />
                                        일부 브랜드 및 제품에만 진행하고 있으니 구매 시 옵션과 추가혜택 내용 확인 후 구매를 부탁드립니다. <br />
                                        또한, 행사는 기존에 지정된 맛 또는 랜덤으로 발송되는 부분이기때문에 직접 지정해서 받기 어려운 점 참고 부탁드립니다.
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '교환/반품')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>상품관련</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>제품을 잘못 선택했습니다. 교환 or 반품이 가능한가요?</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq6===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq6===true? '' : ' hide'}`}>
                                        <p>
                                            냉장, 냉동 식품의 경우 변심에 의한 교환, 반품이 어렵습니다. <br />
                                            식품 특성상 회수 입고 후 전량 폐기가 되는 품목이기 때문에 교환, 반품 접수가 어려운 점 이용에 참고 바랍니다.
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '야채')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>상품관련</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>야채 주문하였는데, 제품이 다 오지 않았습니다.</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq7===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq7===true? '' : ' hide'}`}>
                                        <p>
                                            채소의 2주~4주 패키지 제품은 주문 후 처음 제품을 받으신 요일에 2~4주동안에 걸쳐 제품을 수령하시는 상품입니다. <br />
                                            자세한 내용은 상세페이지에 제품 별 상세 안내가 되어 있으니 참고 바랍니다. <br /><br />
                                            예&#41; 프레쉬홈 한팩 샐러드 2주구성 제품 주문시 → 1주차 4팩 / 2주차 4팩 총 2주간 두 번에 나누어 배송
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '신선애')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>상품관련</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>신선애 100g / 200g / 1kg 포장은 동일한 상품인가요?</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq8===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq8===true? '' : ' hide'}`}>
                                        <p>
                                            해당상품은 내용물은 동일합니다. <br />
                                            소포장이 사용하시기 용이하신 경우에는 100g, 200g 상품으로 구매 부탁드리겠습니다.
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '조리방법')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>상품관련</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>제품 조리방법이 있나요?</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq9===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq9===true? '' : ' hide'}`}>
                                        <p>
                                            상품 유형마다 해동 및 조리방법이 다르므로, <br />
                                            상세한 해동 및 조리방법은 각 상품별 상세페이지에 안내가 되어 있으니 참고 부탁드립니다.
                                        </p>
                                    </div>
                                </li>
                                <li onClick={(e)=>onClickFaq(e, '뼈')}>
                                    <a href='!#' className='faq-question'>
                                        <div className="category">
                                            <span>상품관련</span>
                                        </div>
                                        <div className="subject">
                                            <span>Q</span>
                                            <p>제품에서 뼈가 나왔습니다!</p>
                                        </div>
                                        <div className="faq-icon">
                                            {state.isFaq10===true? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>}
                                        </div>
                                    </a>
                                    <div className={`faq-answer${state.isFaq10===true? '' : ' hide'}`}>
                                        <p>
                                            제품 가공시 겉에 있는 뼈나 힘줄등은 모두 제거 하고 있지만 <br />
                                            정말 간혹 닭가슴살 안에 뼈가 박혀있는 경우가 있습니다. <br />
                                            모두 수작업으로 선별하여 뼈 등은 제거하고 있지만 닭가슴살 안에 있는 경우는 발견이 쉽지 않습니다. <br /><br />
                                            회원님들도 육안으로 보이지 않기때문에 드실때 아는 것이며, <br />
                                            금속검출기에 검출되지 않고, 정말 간혹 있는일이라 전부 해체하여 검수하기도 힘든 상황입니다. <br /><br />
                                            닭가슴살의 특성상 고객님들의 오해를 불러 일으키는것 같습니다. <br />
                                            선별작업에서 최대한 나오지 않도록 꼼꼼히 신경쓰고 있으나 더욱더 신경쓰도록 요청 하겠습니다. <br />
                                            상세페이지 하단 닭뼈관련 주의문구와 포장지 뒷면 닭뼈관련 안내글 참고 부탁드립니다.
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

