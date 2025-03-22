import React from "react";
import '../scss/Sub4.scss';
import {useDispatch, useSelector} from 'react-redux';
import { viewProduct } from '../../../reducer/viewproduct';
import { viewProductIsFlag } from '../../../reducer/viewProductIsFlag';
import { quickMenuViewProduct } from '../../../reducer/quickMenuViewProduct';


export default function Sub4ComponentOnePack({onepackProduct}){

    const selector = useSelector((state)=>state);
    const dispatch = useDispatch();


    // 상태관리변수
    const [state, setState] = React.useState({
        product1: true,
        product2: false,
        product3: false,
        product4: false,
        product5: false,
        product6: false,
        product7: false,
        product8: false,
        product9: false,
        product10: false,
        check1: true,
        check2: false,
        check3: false,
        check4: false,
        check5: false
    });
    

    // 탭메뉴
    const onClickTab=(e, p)=>{
        e.preventDefault();
        let product1 = state.product1;
        let product2 = state.product2;
        let product3 = state.product3;
        let product4 = state.product4;
        let product5 = state.product5;
        let product6 = state.product6;
        let product7 = state.product7;
        let product8 = state.product8;
        let product9 = state.product9;
        let product10 = state.product10;

        if(p==='전체'){
            product1 = true;
            product2 = false;
            product3 = false;
            product4 = false;
            product5 = false;
            product6 = false;
            product7 = false;
            product8 = false;
            product9 = false;
            product10 = false;
        }
        else if(p==='닭가슴살'){
            product1 = false;
            product2 = true;
            product3 = false;
            product4 = false;
            product5 = false;
            product6 = false;
            product7 = false;
            product8 = false;
            product9 = false;
            product10 = false;
        }
        else if(p==='도시락'){
            product1 = false;
            product2 = false;
            product3 = true;
            product4 = false;
            product5 = false;
            product6 = false;
            product7 = false;
            product8 = false;
            product9 = false;
            product10 = false;
        }
        else if(p==='고기'){
            product1 = false;
            product2 = false;
            product3 = false;
            product4 = true;
            product5 = false;
            product6 = false;
            product7 = false;
            product8 = false;
            product9 = false;
            product10 = false;
        }
        else if(p==='간편한끼'){
            product1 = false;
            product2 = false;
            product3 = false;
            product4 = false;
            product5 = true;
            product6 = false;
            product7 = false;
            product8 = false;
            product9 = false;
            product10 = false;
        }
        else if(p==='고구마'){
            product1 = false;
            product2 = false;
            product3 = false;
            product4 = false;
            product5 = false;
            product6 = true;
            product7 = false;
            product8 = false;
            product9 = false;
            product10 = false;
        }
        else if(p==='수산'){
            product1 = false;
            product2 = false;
            product3 = false;
            product4 = false;
            product5 = false;
            product6 = false;
            product7 = true;
            product8 = false;
            product9 = false;
            product10 = false;
        }
        else if(p==='분식'){
            product1 = false;
            product2 = false;
            product3 = false;
            product4 = false;
            product5 = false;
            product6 = false;
            product7 = false;
            product8 = true;
            product9 = false;
            product10 = false;
        }
        else if(p==='베이커리'){
            product1 = false;
            product2 = false;
            product3 = false;
            product4 = false;
            product5 = false;
            product6 = false;
            product7 = false;
            product8 = false;
            product9 = true;
            product10 = false;
        }
        else if(p==='반찬'){
            product1 = false;
            product2 = false;
            product3 = false;
            product4 = false;
            product5 = false;
            product6 = false;
            product7 = false;
            product8 = false;
            product9 = false;
            product10 = true;
        }

        setState({
            ...state,
            product1: product1,
            product2: product2,
            product3: product3,
            product4: product4,
            product5: product5,
            product6: product6,
            product7: product7,
            product8: product8,
            product9: product9,
            product10: product10
        });      
    }


    // 체크버튼
    const onClickFilter1=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            check1: true,
            check2: false,
            check3: false,
            check4: false,
            check5: false
        });
    }
    const onClickFilter2=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            check1: false,
            check2: true,
            check3: false,
            check4: false,
            check5: false
        });
    }
    const onClickFilter3=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            check1: false,
            check2: false,
            check3: true,
            check4: false,
            check5: false
        });
    }
    const onClickFilter4=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            check1: false,
            check2: false,
            check3: false,
            check4: true,
            check5: false
        });
    }
    const onClickFilter5=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            check1: false,
            check2: false,
            check3: false,
            check4: false,
            check5: true
        });
    }


     // 최근본상품 클릭이벤트
     const onClickViewProduct=(e,item,path)=>{
        e.preventDefault();
        let obj = {
            번호: item.번호,
            이미지: `${path}/sub4/${item.이미지}`,
            제품명: item.제품명,
            판매가: item.가격,
        }
        dispatch(viewProduct(obj));
    }


    React.useEffect(()=>{
        let imsi = [];
        if(localStorage.getItem('VIEW-PRODUCT')===null){
            if(Object.keys(selector.viewproduct.current).length > 0){
                imsi = [selector.viewproduct.current];  
                localStorage.setItem("VIEW-PRODUCT", JSON.stringify(imsi));                
                dispatch(viewProductIsFlag(!selector.viewProductIsFlag.isFlag));
            }
        }
        else{
            let result = JSON.parse(localStorage.getItem('VIEW-PRODUCT'));

            let filterResult = result.map((item)=>item.번호===selector.viewproduct.current.번호 ? true : false);
            if(filterResult.includes(true)!==true){
                if(Object.keys(selector.viewproduct.current).length>0){ 
                    result = [selector.viewproduct.current, ...result];
                    localStorage.setItem("VIEW-PRODUCT", JSON.stringify(result));
                    dispatch(viewProductIsFlag(!selector.viewProductIsFlag.isFlag));
                }    
            }   
        }
           
            

    },[selector.viewproduct.current])

    React.useEffect(()=>{
        
        if(localStorage.getItem('VIEW-PRODUCT')!==null) {
            let result = JSON.parse(localStorage.getItem('VIEW-PRODUCT'));
            if(result.length>0){

                dispatch(quickMenuViewProduct(result));              
            }            
        }

    },[selector.viewProductIsFlag.isFlag]);

    return (
        <div className="onepack-wrap">
            <div className="tabmenu">
                <ul>
                    <li onClick={(e)=>onClickTab(e, '전체')} className={state.product1===true? 'on': ''}>
                        <a href="!#">
                            <em className="tab-line"></em>
                            <i className="tab-icon"><img src="./images/sub/sub4/@sample_ico_tab_all.png" alt="" /></i>
                            <span>전체</span>
                        </a>
                    </li>
                    <li onClick={(e)=>onClickTab(e, '닭가슴살')} className={state.product2===true? 'on': ''}>
                        <a href="!#">
                            <em className="tab-line"></em>
                            <i className="tab-icon"><img src="./images/sub/sub4/IMG1678lol443798436.png" alt="" /></i>
                            <span>닭가슴살</span>
                        </a>
                    </li>
                    <li onClick={(e)=>onClickTab(e, '도시락')} className={state.product3===true? 'on': ''}>
                        <a href="!#">
                            <em className="tab-line"></em>
                            <i className="tab-icon"><img src="./images/sub/sub4/IMG1678WnC443879570.png" alt="" /></i>
                            <span>도시락/볶음밥</span>
                        </a>
                    </li>
                    <li onClick={(e)=>onClickTab(e, '고기')} className={state.product4===true? 'on': ''}>
                        <a href="!#">
                            <em className="tab-line"></em>
                            <i className="tab-icon"><img src="./images/sub/sub4/IMG1678zAi444635994.png" alt="" /></i>
                            <span>돼지고기/소고기</span>
                        </a>
                    </li>
                    <li onClick={(e)=>onClickTab(e, '간편한끼')} className={state.product5===true? 'on': ''}>
                        <a href="!#">
                            <em className="tab-line"></em>
                            <i className="tab-icon"><img src="./images/sub/sub4/IMG1678Bbp444104960.png" alt="" /></i>
                            <span>간편한끼</span>
                        </a>
                    </li>
                    <li onClick={(e)=>onClickTab(e, '고구마')} className={state.product6===true? 'on': ''}>
                        <a href="!#">
                            <em className="tab-line"></em>
                            <i className="tab-icon"><img src="./images/sub/sub4/IMG1678Yiz443971200.png" alt="" /></i>
                            <span>고구마/감자</span>
                        </a>
                    </li>
                    <li onClick={(e)=>onClickTab(e, '수산')} className={state.product7===true? 'on': ''}>
                        <a href="!#">
                            <em className="tab-line"></em>
                            <i className="tab-icon"><img src="./images/sub/sub4/IMG1678Wkk444512541.png" alt="" /></i>
                            <span>수산/해산</span>
                        </a>
                    </li>
                    <li onClick={(e)=>onClickTab(e, '분식')} className={state.product8===true? 'on': ''}>
                        <a href="!#">
                            <em className="tab-line"></em>
                            <i className="tab-icon"><img src="./images/sub/sub4/IMG1678cVW444797395.png" alt="" /></i>
                            <span>분식</span>
                        </a>
                    </li>
                    <li onClick={(e)=>onClickTab(e, '베이커리')} className={state.product9===true? 'on': ''}>
                        <a href="!#">
                            <em className="tab-line"></em>
                            <i className="tab-icon"><img src="./images/sub/sub4/IMG1678PCs444574588.png" alt="" /></i>
                            <span>베이커리</span>
                        </a>
                    </li>
                    <li onClick={(e)=>onClickTab(e, '반찬')} className={state.product10===true? 'on': ''}>
                        <a href="!#">
                            <em className="tab-line"></em>
                            <i className="tab-icon"><img src="./images/sub/sub4/IMG1678tgC444722618.png" alt="" /></i>
                            <span>반찬/소스</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="onepack-list">
                <div className="onepack-header">
                    <div className="filter-box">
                        <a href="!#" onClick={onClickFilter1} className={state.check1===true? 'on' : ''}><em className="check"></em>추천순</a>
                        <i>|</i>
                        <a href="!#" onClick={onClickFilter2} className={state.check2===true? 'on' : ''}><em className="check"></em>신상품순</a>
                        <i>|</i>
                        <a href="!#" onClick={onClickFilter3} className={state.check3===true? 'on' : ''}><em className="check"></em>판매량순</a>
                        <i>|</i>
                        <a href="!#" onClick={onClickFilter4} className={state.check4===true? 'on' : ''}><em className="check"></em>낮은가격순</a>
                        <i>|</i>
                        <a href="!#" onClick={onClickFilter5} className={state.check5===true? 'on' : ''}><em className="check"></em>높은가격순</a>
                    </div>
                </div>
                <ul className="onepack-items">
                    {
                        state.product1 && (
                            onepackProduct.pack1.map((item, idx)=>{
                                return (
                                    <li className={`item item${idx+1}`} key={item.번호} onClick={(e)=>onClickViewProduct(e,item, './images/sub')}>
                                        <div className="item-img-box">
                                            <a href="!#">
                                                <img src={`./images/sub/sub4/${item.이미지}`} alt="" />
                                            </a>
                                        </div>
                                        <div className="item-caption">
                                            <div className="row1">
                                                <div className="delivery-box">
                                                    <em className="fast"></em>
                                                </div>
                                                <div className="rating">
                                                    <span className="score">{item.별점}</span>
                                                    <span className="total-num">{item.댓글수}</span>
                                                </div>
                                            </div>
                                            <div className="row2">
                                                <a href="!#">{item.제품명}</a>
                                            </div>
                                            <div className="row3">
                                                <em className="num">{item.가격.toLocaleString('ko-KR')}</em><h6>원</h6>
                                            </div>
                                            { 
                                                item.RACE && (
                                                    <div className="badge-box">
                                                        <img className='race' src="./images/sub/sub4/race.png" alt="" />
                                                    </div>
                                                )
                                            }
                                            <button className="cart-btn"></button>
                                        </div>
                                    </li>
                                )
                            })
                        )
                    }
                    {
                        state.product2 && (
                            onepackProduct.pack2.map((item, idx)=>{
                                return (
                                    <li className={`item item${idx+1}`} key={item.번호} onClick={(e)=>onClickViewProduct(e,item, './images/sub')}>
                                        <div className="item-img-box">
                                            <a href="!#">
                                                <img src={`./images/sub/sub4/${item.이미지}`} alt="" />
                                            </a>
                                        </div>
                                        <div className="item-caption">
                                            <div className="row1">
                                                <div className="delivery-box">
                                                    <em className="fast"></em>
                                                </div>
                                                <div className="rating">
                                                    <span className="score">{item.별점}</span>
                                                    <span className="total-num">{item.댓글수}</span>
                                                </div>
                                            </div>
                                            <div className="row2">
                                                <a href="!#">{item.제품명}</a>
                                            </div>
                                            <div className="row3">
                                                <em className="num">{item.가격.toLocaleString('ko-KR')}</em><h6>원</h6>
                                            </div>
                                            { 
                                                item.RACE && (
                                                    <div className="badge-box">
                                                        <img className='race' src="./images/sub/sub4/race.png" alt="" />
                                                    </div>
                                                )
                                            }
                                            <button className="cart-btn"></button>
                                        </div>
                                    </li>
                                )
                            })
                        )
                    }
                    {
                        state.product3 && (
                            onepackProduct.pack3.map((item, idx)=>{
                                return (
                                    <li className={`item item${idx+1}`} key={item.번호} onClick={(e)=>onClickViewProduct(e,item, './images/sub')}>
                                        <div className="item-img-box">
                                            <a href="!#">
                                                <img src={`./images/sub/sub4/${item.이미지}`} alt="" />
                                            </a>
                                        </div>
                                        <div className="item-caption">
                                            <div className="row1">
                                                <div className="delivery-box">
                                                    <em className="fast"></em>
                                                </div>
                                                <div className="rating">
                                                    <span className="score">{item.별점}</span>
                                                    <span className="total-num">{item.댓글수}</span>
                                                </div>
                                            </div>
                                            <div className="row2">
                                                <a href="!#">{item.제품명}</a>
                                            </div>
                                            <div className="row3">
                                                <em className="num">{item.가격.toLocaleString('ko-KR')}</em><h6>원</h6>
                                            </div>
                                            { 
                                                item.RACE && (
                                                    <div className="badge-box">
                                                        <img className='race' src="./images/sub/sub4/race.png" alt="" />
                                                    </div>
                                                )
                                            }
                                            <button className="cart-btn"></button>
                                        </div>
                                    </li>
                                )
                            })
                        )
                    }
                    {
                        state.product4 && (
                            onepackProduct.pack4.map((item, idx)=>{
                                return (
                                    <li className={`item item${idx+1}`} key={item.번호} onClick={(e)=>onClickViewProduct(e,item, './images/sub')}>
                                        <div className="item-img-box">
                                            <a href="!#">
                                                <img src={`./images/sub/sub4/${item.이미지}`} alt="" />
                                            </a>
                                        </div>
                                        <div className="item-caption">
                                            <div className="row1">
                                                <div className="delivery-box">
                                                    <em className="fast"></em>
                                                </div>
                                                <div className="rating">
                                                    <span className="score">{item.별점}</span>
                                                    <span className="total-num">{item.댓글수}</span>
                                                </div>
                                            </div>
                                            <div className="row2">
                                                <a href="!#">{item.제품명}</a>
                                            </div>
                                            <div className="row3">
                                                <em className="num">{item.가격.toLocaleString('ko-KR')}</em><h6>원</h6>
                                            </div>
                                            { 
                                                item.RACE && (
                                                    <div className="badge-box">
                                                        <img className='race' src="./images/sub/sub4/race.png" alt="" />
                                                    </div>
                                                )
                                            }
                                            <button className="cart-btn"></button>
                                        </div>
                                    </li>
                                )
                            })
                        )
                    }
                    {
                        state.product5 && (
                            onepackProduct.pack5.map((item, idx)=>{
                                return (
                                    <li className={`item item${idx+1}`} key={item.번호} onClick={(e)=>onClickViewProduct(e,item, './images/sub')}>
                                        <div className="item-img-box">
                                            <a href="!#">
                                                <img src={`./images/sub/sub4/${item.이미지}`} alt="" />
                                            </a>
                                        </div>
                                        <div className="item-caption">
                                            <div className="row1">
                                                <div className="delivery-box">
                                                    <em className="fast"></em>
                                                </div>
                                                <div className="rating">
                                                    <span className="score">{item.별점}</span>
                                                    <span className="total-num">{item.댓글수}</span>
                                                </div>
                                            </div>
                                            <div className="row2">
                                                <a href="!#">{item.제품명}</a>
                                            </div>
                                            <div className="row3">
                                                <em className="num">{item.가격.toLocaleString('ko-KR')}</em><h6>원</h6>
                                            </div>
                                            { 
                                                item.RACE && (
                                                    <div className="badge-box">
                                                        <img className='race' src="./images/sub/sub4/race.png" alt="" />
                                                    </div>
                                                )
                                            }
                                            <button className="cart-btn"></button>
                                        </div>
                                    </li>
                                )
                            })
                        )
                    }
                    {
                        state.product6 && (
                            onepackProduct.pack6.map((item, idx)=>{
                                return (
                                    <li className={`item item${idx+1}`} key={item.번호} onClick={(e)=>onClickViewProduct(e,item, './images/sub')}>
                                        <div className="item-img-box">
                                            <a href="!#">
                                                <img src={`./images/sub/sub4/${item.이미지}`} alt="" />
                                            </a>
                                        </div>
                                        <div className="item-caption">
                                            <div className="row1">
                                                <div className="delivery-box">
                                                    <em className="fast"></em>
                                                </div>
                                                <div className="rating">
                                                    <span className="score">{item.별점}</span>
                                                    <span className="total-num">{item.댓글수}</span>
                                                </div>
                                            </div>
                                            <div className="row2">
                                                <a href="!#">{item.제품명}</a>
                                            </div>
                                            <div className="row3">
                                                <em className="num">{item.가격.toLocaleString('ko-KR')}</em><h6>원</h6>
                                            </div>
                                            { 
                                                item.RACE && (
                                                    <div className="badge-box">
                                                        <img className='race' src="./images/sub/sub4/race.png" alt="" />
                                                    </div>
                                                )
                                            }
                                            <button className="cart-btn"></button>
                                        </div>
                                    </li>
                                )
                            })
                        )
                    }
                    {
                        state.product7 && (
                            onepackProduct.pack7.map((item, idx)=>{
                                return (
                                    <li className={`item item${idx+1}`} key={item.번호} onClick={(e)=>onClickViewProduct(e,item, './images/sub')}>
                                        <div className="item-img-box">
                                            <a href="!#">
                                                <img src={`./images/sub/sub4/${item.이미지}`} alt="" />
                                            </a>
                                        </div>
                                        <div className="item-caption">
                                            <div className="row1">
                                                <div className="delivery-box">
                                                    <em className="fast"></em>
                                                </div>
                                                <div className="rating">
                                                    <span className="score">{item.별점}</span>
                                                    <span className="total-num">{item.댓글수}</span>
                                                </div>
                                            </div>
                                            <div className="row2">
                                                <a href="!#">{item.제품명}</a>
                                            </div>
                                            <div className="row3">
                                                <em className="num">{item.가격.toLocaleString('ko-KR')}</em><h6>원</h6>
                                            </div>
                                            { 
                                                item.RACE && (
                                                    <div className="badge-box">
                                                        <img className='race' src="./images/sub/sub4/race.png" alt="" />
                                                    </div>
                                                )
                                            }
                                            <button className="cart-btn"></button>
                                        </div>
                                    </li>
                                )
                            })
                        )
                    }
                    {
                        state.product8 && (
                            onepackProduct.pack8.map((item, idx)=>{
                                return (
                                    <li className={`item item${idx+1}`} key={item.번호} onClick={(e)=>onClickViewProduct(e,item, './images/sub')}>
                                        <div className="item-img-box">
                                            <a href="!#">
                                                <img src={`./images/sub/sub4/${item.이미지}`} alt="" />
                                            </a>
                                        </div>
                                        <div className="item-caption">
                                            <div className="row1">
                                                <div className="delivery-box">
                                                    <em className="fast"></em>
                                                </div>
                                                <div className="rating">
                                                    <span className="score">{item.별점}</span>
                                                    <span className="total-num">{item.댓글수}</span>
                                                </div>
                                            </div>
                                            <div className="row2">
                                                <a href="!#">{item.제품명}</a>
                                            </div>
                                            <div className="row3">
                                                <em className="num">{item.가격.toLocaleString('ko-KR')}</em><h6>원</h6>
                                            </div>
                                            { 
                                                item.RACE && (
                                                    <div className="badge-box">
                                                        <img className='race' src="./images/sub/sub4/race.png" alt="" />
                                                    </div>
                                                )
                                            }
                                            <button className="cart-btn"></button>
                                        </div>
                                    </li>
                                )
                            })
                        )
                    }
                    {
                        state.product9 && (
                            onepackProduct.pack9.map((item, idx)=>{
                                return (
                                    <li className={`item item${idx+1}`} key={item.번호} onClick={(e)=>onClickViewProduct(e,item, './images/sub')}>
                                        <div className="item-img-box">
                                            <a href="!#">
                                                <img src={`./images/sub/sub4/${item.이미지}`} alt="" />
                                            </a>
                                        </div>
                                        <div className="item-caption">
                                            <div className="row1">
                                                <div className="delivery-box">
                                                    <em className="fast"></em>
                                                </div>
                                                <div className="rating">
                                                    <span className="score">{item.별점}</span>
                                                    <span className="total-num">{item.댓글수}</span>
                                                </div>
                                            </div>
                                            <div className="row2">
                                                <a href="!#">{item.제품명}</a>
                                            </div>
                                            <div className="row3">
                                                <em className="num">{item.가격.toLocaleString('ko-KR')}</em><h6>원</h6>
                                            </div>
                                            { 
                                                item.RACE && (
                                                    <div className="badge-box">
                                                        <img className='race' src="./images/sub/sub4/race.png" alt="" />
                                                    </div>
                                                )
                                            }
                                            <button className="cart-btn"></button>
                                        </div>
                                    </li>
                                )
                            })
                        )
                    }
                    {
                        state.product10 && (
                            onepackProduct.pack10.map((item, idx)=>{
                                return (
                                    <li className={`item item${idx+1}`} key={item.번호} onClick={(e)=>onClickViewProduct(e,item, './images/sub')}>
                                        <div className="item-img-box">
                                            <a href="!#">
                                                <img src={`./images/sub/sub4/${item.이미지}`} alt="" />
                                            </a>
                                        </div>
                                        <div className="item-caption">
                                            <div className="row1">
                                                <div className="delivery-box">
                                                    <em className="fast"></em>
                                                </div>
                                                <div className="rating">
                                                    <span className="score">{item.별점}</span>
                                                    <span className="total-num">{item.댓글수}</span>
                                                </div>
                                            </div>
                                            <div className="row2">
                                                <a href="!#">{item.제품명}</a>
                                            </div>
                                            <div className="row3">
                                                <em className="num">{item.가격.toLocaleString('ko-KR')}</em><h6>원</h6>
                                            </div>
                                            { 
                                                item.RACE && (
                                                    <div className="badge-box">
                                                        <img className='race' src="./images/sub/sub4/race.png" alt="" />
                                                    </div>
                                                )
                                            }
                                            <button className="cart-btn"></button>
                                        </div>
                                    </li>
                                )
                            })
                        )
                    }
                </ul>
            </div>
        </div>
    )
}