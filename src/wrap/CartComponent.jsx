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

    // const [state, setState] = React.useState({
    //     냉장상품: [],
    //     냉동상품: [],
    //     상온상품: [],
    //     상품금액: 0, 
    //     상품할인금액: 0,
    //     배송비: 0,    
    //     결제예정금액: 0,
    //     cnt: 0 
    // })

    // const [chk, setChk] = React.useState([]);

    // const [isListUl1, setIsListUl1] = React.useState(false);
    // const [isListUl2, setIsListUl2] = React.useState(false);
    // const [isListUl3, setIsListUl3] = React.useState(false);

    // const onClickListUl1=(e)=>{
    //     e.preventDefault();        
    //     setIsListUl1(!isListUl1);
    // }
    // const onClickListUl2=(e)=>{
    //     e.preventDefault();        
    //     setIsListUl2(!isListUl2);
    // }
    // const onClickListUl3=(e)=>{
    //     e.preventDefault();        
    //     setIsListUl3(!isListUl3);
    // }


    // React.useEffect(()=>{
    //     let imsi = [];
    //     imsi = selector.cartReducer.장바구니.map((item)=>item.제품코드);
    //     setChk(imsi);
    //     return;
    // },[]);

    // React.useEffect(()=>{

    //     let 냉장상품 = [];
    //     let 냉동상품 = [];
    //     let 상온상품 = [];
    //     let 상품금액 = 0;
    //     let 상품할인금액 = 0;
    //     let 상품계산금액 = 0;
    //     let 배송비 = 0;
    //     let 결제예정금액 = 0;
        

    //     if(selector.cartReducer.장바구니.length > 0) {                    
    //         냉장상품 = selector.cartReducer.장바구니.filter((item)=>item.보관방법==='냉장');
    //         냉동상품 = selector.cartReducer.장바구니.filter((item)=>item.보관방법==='냉동');
    //         상온상품 = selector.cartReducer.장바구니.filter((item)=>item.보관방법==='상온');
    //         selector.cartReducer.장바구니.map((item)=>{

    //             chk.map((code)=>{
    //                 if(code===item.제품코드){
    //                     상품금액 += (item.수량 * item.정가); 
    //                     상품할인금액 += (Math.round((item.수량 * item.정가) * item.할인율)); 
    //                 }
    //             });
    //         });

            
    //         if(chk.length > 0){
    //             상품계산금액 = 상품금액 - 상품할인금액;
    //             배송비 = (상품계산금액 <= 43000) ? 3000 : 0;
    //             결제예정금액 = 상품계산금액 - 배송비;
    //         }
    //     }

    //     setState({
    //         ...state,
    //         냉장상품: 냉장상품,
    //         냉동상품: 냉동상품,
    //         상온상품: 상온상품,
    //         상품금액: 상품금액,
    //         상품할인금액: 상품할인금액,
    //         배송비: 배송비,    
    //         결제예정금액: 결제예정금액,
    //     })
    //     return;         

    // },[selector.cartReducer.장바구니, chk]);

    // const onClickPlusBtn=(e, 제품코드)=>{
    //     e.preventDefault();            

    //     const 결과 = selector.cartReducer.장바구니.map((item)=>{
    //         return 제품코드===item.제품코드 ? {...item, 수량: item.수량+1} : {...item}
    //     });
    //     dispatch(cartMethod(결과));
    //     localStorage.setItem('CART_PRODUCT', JSON.stringify(결과));

    // }

    // const onClickMinusBtn=(e, 제품코드)=>{
    //     e.preventDefault();

    //     const 결과 = selector.cartReducer.장바구니.map((item)=>{
    //         return 제품코드===item.제품코드 ? {...item, 수량: ((item.수량 <= 1) ? (1) : (item.수량-1))} : {...item}
    //     });
    //     dispatch(cartMethod(결과));
    //     localStorage.setItem('CART_PRODUCT', JSON.stringify(결과));
    // }


    // const onChangeCheck=(e)=>{
    //     if(e.target.checked){
    //         setChk([...chk, e.target.value]);
    //     }
    //     else{
    //         let imsi = chk.filter((item)=>item!==e.target.value);
    //         setChk(imsi);
    //     }
    // }   

    // const onChangeAllCheck=(e)=>{
    //     let imsi = [];
    //     if(e.target.checked){
    //         imsi = selector.cartReducer.장바구니.map((item)=>item.제품코드);
    //         setChk(imsi);
    //     }
    //     else{            
    //         setChk([]);
    //     }
    // }   
    
    // const onClickOneDelete=(e, 제품코드)=>{
    //     e.preventDefault();
    //     let 장바구니 = selector.cartReducer.장바구니;

    //     let 결과 = 장바구니.filter((item)=>item.제품코드!==제품코드);        
    //     dispatch(cartMethod(결과));
    //     localStorage.setItem('CART_PRODUCT', JSON.stringify(결과));
        
    //     결과 = chk.filter((item)=>item!==제품코드);
    //     setChk(결과);
    // }

    // const onClickSelectDelete=(e)=>{
    //     e.preventDefault(); 
    //     let 장바구니 = selector.cartReducer.장바구니;

    //     let 결과 = 장바구니.filter((item)=>!chk.includes(item.제품코드) );
    //     dispatch(cartMethod(결과));
    //     localStorage.setItem('CART_PRODUCT', JSON.stringify(결과));

    //     결과 = 장바구니.filter((item)=>!chk.includes(item.제품코드) );
    //     setChk(결과);
    // }    
    
    // const onClickViewProductPage=(e, item)=>{
    //     e.preventDefault();

    //     dispatch(viewProduct(item));   
    //     localStorage.setItem('viewProduct', JSON.stringify(item));
    //     navigate('/productView');
    // }
        
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
                                <div className="button-box">
                                    <label>
                                        <input 
                                            type="checkbox" 
                                            name='allCheck' 
                                            id='allCheck' 
                                            value='allCheck'
                                        />
                                        <span>전체선택</span>
                                    </label>    
                                    <button>선택삭제</button>
                                </div>
                            </div>
                            <div className="cart-list">
                                <div className="cart-list-wrap">                                    
                                    <div className="list">
                                        <div className="title">                                            
                                            <span>
                                                <input type="checkbox" name='cartChk' />
                                            </span>
                                            <h2><span>특급배송(당일 + 새벽 + 내일)</span></h2>
                                        </div>
                                        <ul className="list-ul">
                                            <li>
                                                <div className="left-box">
                                                    <input type="checkbox" name='cartChk' />
                                                    <span><img src='./images/sub/cart/IMG1690WfJ855704447_100_100.jpg' alt="" /></span>
                                                    <h2>맛있닭 닭가슴살!!</h2>
                                                    <p>28,500원<img src="./images/sub/sub1/post.png" alt="" /></p>
                                                </div>
                                                <div className="right-box">
                                                    <ul>
                                                        <li><button className='minus-btn'><i className="fa fa-minus"></i></button></li>
                                                        <li><span>1</span></li>
                                                        <li><button className='plus-btn'><i className="fa fa-plus"></i></button></li>
                                                    </ul>
                                                    <span>
                                                        <em>28,500원</em>
                                                    </span>
                                                    <button className='cart-delete-btn'><i className="fa fa-close"></i></button>
                                                </div>
                                                <div className="bottom-box">
                                                    <p>
                                                        <span>상품</span>
                                                        <span>28,500원 -</span>
                                                        <span>할인</span>
                                                        <span>0원 =</span>
                                                        <span>28,500원</span>
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
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
                                    <li><strong>총 결제금액</strong><br/><em className='num'>31,500</em><i>원</i></li>
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
                                <button className='order'>원 주문하기</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}