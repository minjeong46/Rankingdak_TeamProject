import React from 'react';
import './scss/Cart.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cartMethod } from '../reducer/cartReducer';
import { viewProduct } from '../reducer/viewproduct';

export default function CartComponent(){

    const selector = useSelector((state)=>state);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [state, setState] = React.useState({
        맛있닭:[],
        잇메이트: [],
        랭커: [],

        상품금액: 0,
        할인금액: 0,
        배송비: 0,
        총결제금액:0,

        cnt: 0,
    })

    const [check, setCheck] = React.useState([]);
    const [check2, setCheck2] = React.useState([]);

    React.useEffect(()=>{
        let 맛있닭=[];
        let 잇메이트=[];
        let 랭커=[];


        let 상품금액 = 0;
        let 할인금액 = 0;
        let 상품계산금액 = 0;
        let 배송비= 0;
        let 총결제금액= 0;
        let imsi = [];

        if(selector.cartMethod.cart.length > 0){
            // console.log('장바구니 상품 갯수'+selector.cart.장바구니.length);
            맛있닭=selector.cartMethod.cart.filter((item)=>item.판매처==='맛있닭');
            잇메이트=selector.cartMethod.cart.filter((item)=>item.판매처==='잇메이트');
            랭커=selector.cartMethod.cart.filter((item)=>item.판매처==='랭커');
            
            // 상품금액, 상품할인금액 계산완료되면
            // 계산금액 = 상품금액-상품할인금액
            // 계산금액 <- 43,000원 이하이면 배송비 3,000원, 계산금액 <- 43,000원 이상이면 배송비 없음
            // 결제예정금액  = 상품금액 - 상품할인금액 - 배송비
            // if(chk.length > 0){
            //     상품계산금액 = 상품금액 - 상품할인금액;
            //     배송비 = (상품계산금액 <= 43000) ? 3000 : 0;
            //     결제예정금액 = 상품계산금액 + 배송비;
            // }
            
        }

        setState({
            ...state,
            맛있닭: 맛있닭,
            잇메이트: 잇메이트,
            랭커: 랭커,
            상품금액: 상품금액,
            할인금액: 할인금액,
            배송비: 배송비,
            총결제금액: 총결제금액,
        })
        return;

    },[selector.cartMethod.cart])

    const onClickPlus=(e, 제품코드)=>{
        e.preventDefault();            

        const res = selector.cartMethod.cart.map((item)=>{
            return 제품코드===item.제품코드 ? {...item, 수량: Number(item.수량)+1} : {...item}
        });
        dispatch(cartMethod(res));
        localStorage.setItem('CART_PRODUCT',JSON.stringify(res));

    }
    
    const onClickMinus=(e, 제품코드)=>{
        e.preventDefault();

        const res = selector.cartMethod.cart.map((item)=>{
            return 제품코드===item.제품코드 ? {...item, 수량: ((Number(item.수량) <= 1) ? (1) : (Number(item.수량)-1))} : {...item}
        });
        dispatch(cartMethod(res));
        localStorage.setItem('CART_PRODUCT',JSON.stringify(res));

    }

    React.useEffect(()=>{
        let imsi = [];
        imsi = selector.cartMethod.cart.map((item)=>item.제품코드);           
        setCheck(imsi);
        return;

        
    },[]);

    // 개별
    const onChangeCheck=(e)=>{
        if(e.target.checked){
            setCheck([...check, e.target.value]);
        }
        else{
            let imsi = check.filter((item)=>item!==e.target.value);
            setCheck(imsi);
        }
    }

    // 그룹
    const onChangeCartGroupCheck=(e)=>{
        let imsi = [];
        if(e.target.checked){
            imsi = selector.cartMethod.cart.map((item)=>item.판매처===item.제품코드.includes());

            setCheck(imsi);
        }
        else {
            let imsi = check.filter((item)=>item!==e.target.value);
            setCheck(imsi);
        }
    }

    // 전체
    const onChangeCartAllCheck=(e)=>{
        let imsi = [];
        if(e.target.checked){
            imsi = selector.cartMethod.cart.map((item)=>item.제품코드);
            setCheck(imsi);
        }
        else{            
            setCheck([]);
        }
    }
        
    return (
        <main id='cart'>
            <section id="section1">
                <div className="container">
                    <div className="tittle">
                        <h2>장바구니</h2>
                    </div>
                    <div className="content">
                        <div className="left">
                            <div className="cart-btn cart-header">
                                <div className="check-box">
                                    <label>
                                        <input 
                                            type="checkbox" 
                                            id='cartAllCheck' 
                                            name='cartAllCheck' 
                                            value={'cartAllCheck'} 
                                            onChange={onChangeCartAllCheck}
                                            checked={ selector.cartMethod.cart.length > 0 && check.length===selector.cartMethod.cart.length }
                                        />
                                        <span>전체선택</span>
                                    </label>
                                </div>
                                <div className="btn-box">
                                    <button>선택삭제</button>
                                </div> 
                            </div>
                            <div className="cart-list">
                                <div className="cart-list-wrap">                                    
                                    {
                                        state.맛있닭.length > 0 && (
                                            <div className="list">
                                                <div className="title">                                            
                                                    <span>
                                                        <input 
                                                            type="checkbox" 
                                                            id='cartGroupCheck' 
                                                            name='cartGroupCheck' 
                                                            value={'cartGropCheck'}
                                                            checked={selector.cartMethod.cart.제품코드}
                                                            onChange={onChangeCartGroupCheck}
                                                         />
                                                    </span>
                                                    <span><h3 className='title-txt'>맛있닭</h3></span>
                                                </div>
                                                <ul className="list-ul">
                                                
                                                    {
                                                        state.맛있닭.map((item,idx)=>{
                                                            return (
                                                                <li>
                                                                    <div className="product-box">
                                                                        <div className="left-box">
                                                                            <input 
                                                                                type="checkbox" 
                                                                                name='cartCheck' 
                                                                                id={item.제품코드} 
                                                                                value={item.제품코드} 
                                                                                checked={check.includes(item.제품코드)}
                                                                                onChange={onChangeCheck}
                                                                            />
                                                                            <div className='img-box'><img src={item.이미지} alt="" /></div>
                                                                            <div className="product-info">
                                                                                <a href="!#"><h4>{item.제품명}</h4></a>
                                                                                <h5>{item.옵션명}</h5>
                                                                                <span><strong>{Number(item.옵션가격).toLocaleString('ko-KR')}원</strong></span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="right-box">
                                                                            <ul>
                                                                                <li><button onClick={(e)=>onClickMinus(e, item.제품코드)} className='minus-btn'><i className="fa fa-minus"></i></button></li>
                                                                                <li><span>{Number(item.수량)}</span></li>
                                                                                <li><button onClick={(e)=>onClickPlus(e, item.제품코드)} className='plus-btn'><i className="fa fa-plus"></i></button></li>
                                                                            </ul>
                                                                            <span>
                                                                                <em>{(Number(item.옵션가격) * Number(item.수량)).toLocaleString('ko-KR')}원</em>
                                                                            </span>
                                                                            <div className="btn-box">
                                                                                <button className='cart-delete-btn'></button>
                                                                            </div>
                                                                            
                                                                        </div>
                                                                    </div>
                                                                    
                                                                </li>
                                                            )
                                                        })
                                                        
                                                    }
                                                </ul>
                                                <div className="group-price">
                                                    <p>
                                                        상품 16,000원 - 할인 0원 = <strong>16,000</strong>원
                                                    </p>
                                                </div>
                                            </div>
                                        )    
                                    }
                                    {
                                        state.잇메이트.length > 0 && (
                                            <div className="list">
                                                <div className="title">                                            
                                                    <span>
                                                        <input type="checkbox" id='cartGroupCheck' name='cartGroupCheck' value={'cartGroupCheck'} onChange={onChangeCartGroupCheck} />
                                                    </span>
                                                    <span><h3 className='title-txt'>잇메이트</h3></span>
                                                </div>
                                                <ul className="list-ul">
                                                
                                                    {
                                                        state.잇메이트.map((item,idx)=>{
                                                            return (
                                                                <li>
                                                                    <div className="product-box">
                                                                        <div className="left-box">
                                                                            <input 
                                                                                    type="checkbox" 
                                                                                    name='cartCheck' 
                                                                                    id={item.제품코드} 
                                                                                    value={item.제품코드} 
                                                                                    checked={check.includes(item.제품코드)}
                                                                                    onChange={onChangeCheck}
                                                                            />
                                                                            <div className='img-box'><img src={item.이미지} alt="" /></div>
                                                                            <div className="product-info">
                                                                                <a href="!#"><h4>{item.제품명}</h4></a>
                                                                                <h5>{item.옵션명}</h5>
                                                                                <span><strong>{Number(item.옵션가격).toLocaleString('ko-KR')}원</strong></span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="right-box">
                                                                            <ul>
                                                                                <li><button onClick={(e)=>onClickMinus(e, item.제품코드)} className='minus-btn'><i className="fa fa-minus"></i></button></li>
                                                                                <li><span>{Number(item.수량)}</span></li>
                                                                                <li><button onClick={(e)=>onClickPlus(e, item.제품코드)} className='plus-btn'><i className="fa fa-plus"></i></button></li>
                                                                            </ul>
                                                                            <span>
                                                                                <em>{(Number(item.옵션가격) * Number(item.수량)).toLocaleString('ko-KR')}원</em>
                                                                            </span>
                                                                            <div className="btn-box">
                                                                                <button className='cart-delete-btn'></button>
                                                                            </div>
                                                                            
                                                                        </div>
                                                                    </div>
                                                                    
                                                                    </li>
                                                            )
                                                        })
                                                        
                                                    }
                                                </ul>
                                                <div className="group-price">
                                                    <p>
                                                        상품 16,000원 - 할인 0원 = <strong>16,000</strong>원
                                                    </p>
                                                </div>
                                            </div>
                                        )    
                                    }
                                    {
                                        state.랭커.length > 0 && (
                                            <div className="list">
                                                <div className="title">                                            
                                                    <span>
                                                        <input type="checkbox" id='cartGroupCheck' name='cartGroupCheck' value={'cartGroupCheck'} onChange={onChangeCartGroupCheck} />
                                                    </span>
                                                    <span><h3 className='title-txt'>랭커</h3></span>
                                                </div>
                                                <ul className="list-ul">
                                                
                                                    {
                                                        state.랭커.map((item,idx)=>{
                                                            return (
                                                                <li>
                                                                    <div className="product-box">
                                                                        <div className="left-box">
                                                                            <input 
                                                                                type="checkbox" 
                                                                                name='cartCheck' 
                                                                                id={item.제품코드} 
                                                                                value={item.제품코드} 
                                                                                checked={check.includes(item.제품코드)}
                                                                                onChange={onChangeCheck}
                                                                            />
                                                                            <div className='img-box'><img src={item.이미지} alt="" /></div>
                                                                            <div className="product-info">
                                                                                <a href="!#"><h4>{item.제품명}</h4></a>
                                                                                <h5>{item.옵션명}</h5>
                                                                                <span><strong>{Number(item.옵션가격).toLocaleString('ko-KR')}원</strong></span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="right-box">
                                                                            <ul>
                                                                                <li><button onClick={(e)=>onClickMinus(e, item.제품코드)} className='minus-btn'><i className="fa fa-minus"></i></button></li>
                                                                                <li><span>{Number(item.수량)}</span></li>
                                                                                <li><button onClick={(e)=>onClickPlus(e, item.제품코드)} className='plus-btn'><i className="fa fa-plus"></i></button></li>
                                                                            </ul>
                                                                            <span>
                                                                                <em>{(Number(item.옵션가격) * Number(item.수량)).toLocaleString('ko-KR')}원</em>
                                                                            </span>
                                                                            <div className="btn-box">
                                                                                <button className='cart-delete-btn'></button>
                                                                            </div>
                                                                            
                                                                        </div>
                                                                    </div>
                                                                    
                                                                    </li>
                                                            )
                                                        })
                                                        
                                                    }
                                                </ul>
                                                <div className="group-price">
                                                    <p>
                                                        상품 16,000원 - 할인 0원 = <strong>16,000</strong>원
                                                    </p>
                                                </div>
                                            </div>
                                        )    
                                    }
                                </div>
                            </div>
                                                                                
                        </div>
                        <div className="right">
                            <div className="payment-box">
                                <ul>
                                    <li><strong>상품금액</strong><br/><em className='num'>28,500</em><i>원</i><p className='minusimg' /></li>
                                    {/* <li><strong>상품금액</strong><br/><em className='num'>0</em><i>{(item.정가 * item.수량).toLocaleString('ko-KR')}원</i><p className='minusimg' /></li> */}
                                    <li><strong>할인금액</strong><br/><em className='num'>0</em><i>원</i><p className='plusimg' /></li>
                                    <li><strong>배송비</strong><br/><em className='num'>3,000</em><i>원</i><p className='result' /></li>
                                    <li><strong>총 결제금액</strong><br/><em className='num num2'>31,500</em><i>원</i></li>
                                    {/* <li><strong>총 결제금액</strong><br/><em className='num'>0</em><i>{Math.round(item.정가 * (1-item.할인율) * item.수량).toLocaleString('ko-KR')}원</i></li> */}
                                </ul>
                            </div>
                            
                            <div className="info-box">
                                <div className="text-box">
                                    <p>
                                        - 배송방법 선택 또는 배송지에 따라 배송비가 달라질 수 있습니다.<br/>
                                        - 제품별로 출고지 및 출고일정이 상이하여 합포장 또는 개별발송될 수 있습니다.<br/>
                                        - 상온과 냉동 합배송이 가능한 품목의 경우에는 상온 마감시간 기준으로 합배송 출고될 수 있습니다.
                                    </p>
                                </div>
                            </div>
                            <div className="button-box">
                                <button className='shop'>쇼핑계속하기</button>
                                <button className='order'>65,500원 주문하기</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}