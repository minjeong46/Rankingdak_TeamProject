import React from 'react';
import './scss/ProductPage.scss';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { cartMethod } from '../reducer/cartReducer';
import { confirmModal } from '../reducer/confirmModal';



export default function ProductPageComponent(){

    const selector = useSelector((state)=>state);
    const dispatch = useDispatch();

    const [state,setState] = React.useState({
        isList:false
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

    const onClickOption=(e, item)=>{
        e.preventDefault();

        const res = list.map((n)=>n.옵션명===item.옵션명);
        

        if(res.includes(true)){
            setState({
                ...state,
                isList:false
            })
            setList([...list]);

            confirmModalMethod('이미 선택한 옵션입니다.');
        }
        else{
            setList([item, ...list]);

            setCount([1, ...count]);
            
            setState({
                ...state,
                isList:false
            })
        }

        


        setPrice(item.옵션가격)

    }

    React.useEffect(()=>{
        let price = 0;
        if(list.length > 0){
            list.map((item)=>{
                price += item.옵션가격;
            })
        }

        setPrice(price);

    },[list]);


    const onClickMinus=(e, n)=>{
        e.preventDefault();
        
        
        let currentPrice  = price;
        let totPay = currentPrice  - list[n].옵션가격;



        if(count[n] <= 1){
            count[n] = 1;
            setCount([...count]);
        }
        else{
            count[n] = count[n] - 1;
            setCount([...count]);
        }

        setPrice(totPay);
        
    }


    const onClickPlus=(e, n)=>{
        e.preventDefault();

        let currentPrice = price;
        let totPay = currentPrice + list[n].옵션가격;

        count[n] = count[n] + 1;

        

        setCount([...count]);

        setPrice(totPay);

    }


    const onClickDel=(e, item, idx)=>{
        e.preventDefault();
        let result = null;
        result = list.filter((item, id)=> id !== idx);
        setList(result);
        result = count.filter((item, id)=> id !== idx);
        setCount(result);
    }

    React.useEffect(()=>{

    },[])

    const onClickCart=(e)=>{
        e.preventDefault();
        let cart=selector.viewproduct.current;
        let cartData = [];

        list.map((item, idx)=>{
            cart = {
                ...cart,
                제품코드: selector.viewproduct.current.번호,
                장바구니상품명: selector.viewproduct.current.제품명,
                옵션명: item.옵션명,
                옵션가격: item.옵션가격,
                수량: count[idx]
            }
            cartData = [
                ...cartData,
                cart
            ]
        })

        dispatch(cartMethod(cartData));
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
                                            selector.viewproduct.current.할인율!=0 && (
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
                                    <p>({selector.viewproduct.current.개별가격})</p>
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
                                                                    <p><em>{item.옵션가격.toLocaleString('ko-KR')}</em>원</p>
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
                                                            <a href="!#" onClick={(e)=>onClickDel(e, item, idx)}><i className="material-icons">close</i></a>
                                                        </div>
                                                        <div className="row2">
                                                            <ul>
                                                                <li><button onClick={(e)=>onClickMinus(e, idx)}><img src="./images/product_detail/icon_minus.svg" alt="" /></button></li>
                                                                <li><span>{count[idx]}</span></li>
                                                                <li><button onClick={(e)=>onClickPlus(e,idx)}><i className="material-icons">add</i></button></li>

                                                            </ul>
                                                            <p><em>{(item.옵션가격).toLocaleString('ko-KR')}</em>원</p>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        
                                        }
                                    </ul>
                                </div>
                                <div className="price3">
                                    <span>총 상품금액</span>
                                    <p><strong>{price.toLocaleString('ko-KR')}</strong>원</p>
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
