import React from 'react';
import './scss/ProductPage.scss';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { cartMethod } from '../reducer/cartReducer';
import { confirmModal } from '../reducer/confirmModal';
import { signIn } from "../reducer/signIn";



export default function ProductPageComponent(){

    const selector = useSelector((state)=>state);
    const dispatch = useDispatch();

    const [state,setState] = React.useState({
        isList:false,
        cart: []
    });

    const [totpay, setTotpay] = React.useState({
        totPay:0,
    });

    const confirmModalMethod=(msg)=>{
        const 컨펌모달설정 = {
            isConfirmModal: true,
            confirmModalMsg : msg,
            signUp : false, 
        }
        dispatch(confirmModal(컨펌모달설정));

        const htmlEl = document.getElementsByTagName('html')[0]; 
        htmlEl.classList.add('on');
    }


    const [price, setPrice] = React.useState(0);
    const [cnt, setCnt] = React.useState(1);
    const [count, setCount] = React.useState([]);
    const [list,setList] = React.useState([]);



    localStorage.getItem('productPage');


    const onclickList=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            isList:!state.isList
        })
    }

    const onClickOption=(e, item, idx)=>{
        e.preventDefault();

        const res = list.map((n)=>n.옵션명===item.옵션명);
        
        if(!res.includes(true)){ // true 가 아니면
            const obj = {
                idx: idx,
                번호: item.번호,
                옵션명: item.옵션명,
                옵션가격: Number(item.옵션가격),
                판매가: Math.round(Number(item.옵션가격) * (1-Number(selector.viewproduct.current.할인율))),
            }
            setList([obj, ...list]);
            setCount([1, ...count]);
            
            setState({
                ...state,
                isList:false
            })
        }
        else { // true 이면(중복이면)
            confirmModalMethod('이미 선택한 옵션입니다.')
                setState({
                ...state,
                isList:false
            })
            setList([...list]);
        }

        // if(res.includes(true)){
        //     setState({
        //         ...state,
        //         isList:false
        //     })
        //     setList([...list]);

        //     confirmModalMethod('이미 선택한 옵션입니다.');
        // }
        // else{
        //     setList([item, ...list]);
        //     setCount([1, ...count]);
            
        //     setState({
        //         ...state,
        //         isList:false
        //     })
        

    }

    React.useEffect(()=>{
        let price = 0;
        if(list.length > 0){
            list.map((item)=>{
                price += Number(item.옵션가격);
            })
        }
        setTotpay({
            totPay: price
        })

    },[list]);

    const optionListCountArray=((idx)=>{
        let result = null;
        result = list.filter((item, id)=> id !== idx);
        setList(result);

        result = count.filter((item, id)=> id !== idx);
        setCount(result);
    })

        
    const onClickDel=(e, idx)=>{
        e.preventDefault();
        optionListCountArray(idx);
    }

    const onClickMinus=(e, n)=>{
        e.preventDefault();
        
        
        count[n] = count[n] - 1;
        setCount([...count]);

        let totPay = totpay.totPay;
        let currentPrice  = 0;
        currentPrice = totPay  - Number(list[n].옵션가격);

        setTotpay({
            totPay: currentPrice
        })

        if(count[n] < 1){
            optionListCountArray(n);
        }
        if(cnt!==1){
            setCnt(cnt-1);
        }
        
    }

    const onClickPlus=(e, n)=>{
        e.preventDefault();

        count[n] = count[n] + 1;
        setCount([...count]);

        let currentPrice  = 0;
        let totPay = totpay.totPay;
        currentPrice = totPay + Number(list[n].옵션가격);

        setTotpay({
            totPay: currentPrice
        })

        setCnt(cnt+1);

    }


    const onClickCart=(e)=>{
        e.preventDefault();
        let cart=selector.viewproduct.current;
        let cartData = [];
        let 카트_로컬저장소 = [];

        list.map((item, idx)=>{
            cart = {
                ...cart,
                제품코드:`${selector.viewproduct.current.번호}, ${item.옵션명}, ${selector.viewproduct.current.판매처}`,
                장바구니제품명: selector.viewproduct.current.제품명,
                옵션명: item.옵션명,
                옵션가격: item.옵션가격,
                수량: count[idx]
            }
            cartData = [
                ...cartData,
                cart
            ]
        });

           
              
            if(localStorage.getItem('CART_PRODUCT')!==null){
                카트_로컬저장소 = JSON.parse(localStorage.getItem('CART_PRODUCT'));
            }
            let res = null;
            res = 카트_로컬저장소.map((item)=>cartData.map((item2)=>item.제품코드===item2.제품코드 ? 1 : 0));

            if(res.map((item)=>item.includes(1)).includes(true)){

                cartData.map((item)=>{
                    카트_로컬저장소.map((item2, idx)=>{
                        if(item.제품코드===item2.제품코드){
                            return 카트_로컬저장소[idx] = {...item2, 수량: item2.수량 + item.수량}
                            
                        }
                        else {
                            return 카트_로컬저장소[idx] = {...item2}
                        }
                        
                    })
                })
            }
            else {

                cartData.map((item)=>{
                    카트_로컬저장소 = [ ...카트_로컬저장소, item ]
                })

            };

            // // 중복된 데이터가 없는 경우 -> 바로 추가
            localStorage.setItem('CART_PRODUCT',JSON.stringify(카트_로컬저장소));
            setState({
                ...state,
                cart: 카트_로컬저장소
            })
            
            dispatch(cartMethod(카트_로컬저장소));
        
        
        confirmModalMethod('장바구니에 추가하였습니다.');
        
    }



    return (
        <main id='productPage'>
            <section id='section1'>
                <div className="container">
                    <div className="content">
                        <div className="left">
                            <img src={selector.viewproduct.current.이미지} alt="" />
                            <Link to="/sub7">
                                <img src="./images/product_detail/pc_delivery_banner2.jpg" alt="" />
                            </Link>
                        </div>
                        <div className="right">
                            <div className="right-top">
                                <div className="title">
                                    <h1>{selector.viewproduct.current.제품명}</h1>
                                </div>
                                <div className="review">
                                    <img src="./images/intro/ico_star.png" alt="" />
                                    <h3><span>{selector.viewproduct.current.별점}</span>점</h3>
                                    <span>({selector.viewproduct.current.리뷰})</span>
                                </div>
                                <div className="price-box">
                                    <div className="price">
                                        {
                                            selector.viewproduct.current.할인율!==0 && (
                                            <>
                                                <p><em>{Math.round(selector.viewproduct.current.할인율*100)}</em>%</p>
                                            </>
                                            )
                                        }
                                        <span><em>{Number(selector.viewproduct.current.판매가).toLocaleString('ko-KR')}</em>원</span>
                                        {
                                            selector.viewproduct.current.할인율!==0 &&
                                                <span>{Number(selector.viewproduct.current.정가).toLocaleString('ko-KR')}원</span>
                                        }
                                        
                                    </div>
                                    
                                    <div className="button-box">
                                        
                                        <a href="!#"><img src="./images/product_detail/ico_form.png" alt="" /></a>
                                        <a href="!#"><img src="./images/product_detail/icon_share.png" alt="" /></a>
                                        
                                    </div>
                                </div>
                                <div className="price2">
                                    <p>{selector.viewproduct.current.개별가격}</p>
                                </div>
                            </div>
                            <div className="right-bottom">
                                <ul>
                                    <li>
                                        <p>배송방법</p>
                                        <img src="./images/intro/header/IMG1648CEL614146730.png" alt="" />
                                    </li>
                                    <li>
                                        <p>상품구성</p>
                                        <span>스테이크 혼합 15팩 : 오리지널3, 갈릭3, 고추3, 호박3, 야채3</span>
                                    </li>
                                    <li>
                                        <p>보관방법</p>
                                        <span>냉동 보관</span>
                                    </li>
                                    <li>
                                        <p>공지사항</p>
                                        <span>
                                            [수량 한정] 재고 소진 시, 조기 종료됩니다. <br/>
                                            ※ 본 상품은 오렌지 멤버스 혜택 적용이 불가합니다.
                                        </span>
                                    </li>
                                </ul>
                                <div className="option">
                                    <a onClick={onclickList} className={state.isList?'on':''} href="!#">
                                        <span>상품옵션선택</span>
                                        <i className="fa fa-angle-down"></i>
                                    </a>
                                </div>
                                {
                                    state.isList && (
                                        <div className="option-list">
                                            <ul>
                                                {
                                                    selector.viewproduct.current.옵션목록.map((item, idx)=>{
                                                        return(
                                                            <li key={item.번호} onClick={(e)=>onClickOption(e, item, idx)}>
                                                                <div className="product-name">
                                                                    <span>{item.옵션명}</span>
                                                                </div>
                                                                <div className="product-price">
                                                                    <p><em>{Number(item.옵션가격).toLocaleString('ko-KR')}</em>원</p>
                                                                </div>
                                                            </li>
                                                        )
                                                    })
                                                
                                                }
                                            </ul>
                                        </div>
                                    )
                                }
                                <div className="option-product">
                                    <ul>
                                        {
                                            list.map((item, idx)=>{
                                                return(
                                                    <li key={item.제품명}>
                                                        <div className="row1">
                                                            <span>{item.옵션명}</span>
                                                            <a href="!#" onClick={(e)=>onClickDel(e, idx)}><i className="material-icons">close</i></a>
                                                        </div>
                                                        <div className="row2">
                                                            <ul>
                                                                <li><button onClick={(e)=>onClickMinus(e, idx)}><img src="./images/product_detail/icon_minus.svg" alt="" /></button></li>
                                                                <li><span>{count[idx]}</span></li>
                                                                <li><button onClick={(e)=>onClickPlus(e,idx)}><i className="material-icons">add</i></button></li>

                                                            </ul>
                                                            <p><em>{Number(item.옵션가격).toLocaleString('ko-KR')}</em>원</p>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        
                                        }
                                    </ul>
                                </div>
                                <div className="price3">
                                    <span>총 상품금액</span>
                                    <p><strong>{Number(totpay.totPay).toLocaleString('ko-KR')}</strong>원</p>
                                </div>
                                <div className="cart-box">
                                    <button onClick={onClickCart}>장바구니</button>
                                </div>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};
