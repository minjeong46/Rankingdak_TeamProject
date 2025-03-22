import React from 'react';
import './scss/section13.scss';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import { viewProduct } from '../../reducer/viewproduct';
import { viewProductIsFlag } from '../../reducer/viewProductIsFlag';
import { quickMenuViewProduct } from '../../reducer/quickMenuViewProduct';
import { useNavigate } from 'react-router-dom';

export default function Section13Component(){

    const dispatch = useDispatch();
    const selector = useSelector((state)=>state);
    const navigate = useNavigate();
    
    // 상태관리변수
    const [state, setState] = React.useState({
        product1: [],
        product2: [],
        product3: [],
        product4: [],
        product5: [],
        product6: [],
        product7: [],
        product8: [],
        product9: [],
        product10: [],
        slide1: true,
        slide2: false,
        slide3: false,
        slide4: false,
        slide5: false,
        slide6: false,
        slide7: false,
        slide8: false,
        slide9: false,
        slide10: false,
    });
    
    // 탭메뉴 클릭버튼
    const onClickTabMenu=(e, p)=>{
        e.preventDefault();
        let slide1 = state.slide1;
        let slide2 = state.slide2;
        let slide3 = state.slide3;
        let slide4 = state.slide4;
        let slide5 = state.slide5;
        let slide6 = state.slide6;
        let slide7 = state.slide7;
        let slide8 = state.slide8;
        let slide9 = state.slide9;
        let slide10 = state.slide10;

        if(p==='닭가슴살'){
            slide1 = true;
            slide2 = false;
            slide3 = false;
            slide4 = false;
            slide5 = false;
            slide6 = false;
            slide7 = false;
            slide8 = false;
            slide9 = false;
            slide10 = false;
        }
        else if(p==='간편식'){
            slide1 = false;
            slide2 = true;
            slide3 = false;
            slide4 = false;
            slide5 = false;
            slide6 = false;
            slide7 = false;
            slide8 = false;
            slide9 = false;
            slide10 = false;
        }
        else if(p==='도시락'){
            slide1 = false;
            slide2 = false;
            slide3 = true;
            slide4 = false;
            slide5 = false;
            slide6 = false;
            slide7 = false;
            slide8 = false;
            slide9 = false;
            slide10 = false;
        }
        else if(p==='닭안심살'){
            slide1 = false;
            slide2 = false;
            slide3 = false;
            slide4 = true;
            slide5 = false;
            slide6 = false;
            slide7 = false;
            slide8 = false;
            slide9 = false;
            slide10 = false;
        }
        else if(p==='샐러드'){
            slide1 = false;
            slide2 = false;
            slide3 = false;
            slide4 = false;
            slide5 = true;
            slide6 = false;
            slide7 = false;
            slide8 = false;
            slide9 = false;
            slide10 = false;
        }
        else if(p==='음료'){
            slide1 = false;
            slide2 = false;
            slide3 = false;
            slide4 = false;
            slide5 = false;
            slide6 = true;
            slide7 = false;
            slide8 = false;
            slide9 = false;
            slide10 = false;
        }
        else if(p==='계란'){
            slide1 = false;
            slide2 = false;
            slide3 = false;
            slide4 = false;
            slide5 = false;
            slide6 = false;
            slide7 = true;
            slide8 = false;
            slide9 = false;
            slide10 = false;
        }
        else if(p==='수산'){
            slide1 = false;
            slide2 = false;
            slide3 = false;
            slide4 = false;
            slide5 = false;
            slide6 = false;
            slide7 = false;
            slide8 = true;
            slide9 = false;
            slide10 = false;
        }
        else if(p==='견과'){
            slide1 = false;
            slide2 = false;
            slide3 = false;
            slide4 = false;
            slide5 = false;
            slide6 = false;
            slide7 = false;
            slide8 = false;
            slide9 = true;
            slide10 = false;
        }
        else if(p==='패키지'){
            slide1 = false;
            slide2 = false;
            slide3 = false;
            slide4 = false;
            slide5 = false;
            slide6 = false;
            slide7 = false;
            slide8 = false;
            slide9 = false;
            slide10 = true;
        }

        setState({
            ...state,
            slide1: slide1,
            slide2: slide2,
            slide3: slide3,
            slide4: slide4,
            slide5: slide5,
            slide6: slide6,
            slide7: slide7,
            slide8: slide8,
            slide9: slide9,
            slide10: slide10
        });
    }
    
    
    // AXIOS
    React.useEffect(()=>{

        axios({
            url: './data/intro/section13.json',
            method: 'GET'
        })
        .then((res)=>{
            // console.log(res.data);
            setState({
                ...state,
                product1: res.data.product1,
                product2: res.data.product2,
                product3: res.data.product3,
                product4: res.data.product4,
                product5: res.data.product5,
                product6: res.data.product6,
                product7: res.data.product7,
                product8: res.data.product8,
                product9: res.data.product9,
                product10: res.data.product10,
            });
        })
        .catch((err)=>{
            console.log(err);
        })

    },[])



    // 최근본상품 클릭이벤트
    const onClickViewProduct=(e,item,path)=>{
        e.preventDefault();

        let obj = {
            번호: item.번호,
            이미지: `${path}section13/${item.이미지}`,
            제품명: item.제품명,
            판매가: (Math.round(item.가격*(1-item.할인율)/100)*100),
            할인율: item.할인율,
            정가: item.가격,
            별점: item.별점,
            리뷰: item.댓글수,
            개별가격: item.개별가격,
            옵션목록: item.옵션목록,
        }
        dispatch(viewProduct(obj));
        localStorage.setItem('productPage',JSON.stringify(obj));
        navigate('/productPage');
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
        <section id="section13" className="section">
            <div className="container">
                {/* 섹션7과 이어지는 이미지 배너 */}
                <div className="banner-img">
                    <a href="!#"><img src="./images/intro/section13/IMG1699ZuF526050889.jpg" alt="" /></a>
                </div>
                <div className="category-product">
                    {/* 섹션 타이틀 */}
                    <div className="title">
                        <h1>인기 카테고리 상품</h1>
                    </div>
                    <div className="content">
                        {/* 카테고리 탭메뉴 */}
                        <ul className="tab-menu">
                            <li onClick={(e)=>onClickTabMenu(e, '닭가슴살')} className={state.slide1===true? 'on' : ''}><a href="!#">닭가슴살</a></li>
                            <li onClick={(e)=>onClickTabMenu(e, '간편식')} className={state.slide2===true? 'on' : ''}><a href="!#">즉석 간편식</a></li>
                            <li onClick={(e)=>onClickTabMenu(e, '도시락')} className={state.slide3===true? 'on' : ''}><a href="!#">도시락·볶음밥</a></li>
                            <li onClick={(e)=>onClickTabMenu(e, '닭안심살')} className={state.slide4===true? 'on' : ''}><a href="!#">닭안심살</a></li>
                            <li onClick={(e)=>onClickTabMenu(e, '샐러드')} className={state.slide5===true? 'on' : ''}><a href="!#">샐러드·과일</a></li>
                            <li onClick={(e)=>onClickTabMenu(e, '음료')} className={state.slide6===true? 'on' : ''}><a href="!#">음료·차·프로틴</a></li>
                            <li onClick={(e)=>onClickTabMenu(e, '계란')} className={state.slide7===true? 'on' : ''}><a href="!#">계란·난백·콩</a></li>
                            <li onClick={(e)=>onClickTabMenu(e, '수산')} className={state.slide8===true? 'on' : ''}><a href="!#">수산·해산</a></li>
                            <li onClick={(e)=>onClickTabMenu(e, '견과')} className={state.slide9===true? 'on' : ''}><a href="!#">견과·고구마·감자</a></li>
                            <li onClick={(e)=>onClickTabMenu(e, '패키지')} className={state.slide10===true? 'on' : ''}><a href="!#">식단·패키지</a></li>
                        </ul>
                        {/* 카테고리 상품 */}
                        <div className="category-box">
                        {
                                state.slide1 && (
                                    <ul className="product-box">
                                        {
                                            state.product1.map((item, idx)=>{
                                                return (
                                                    <li className={`product-list list${idx+1}`} key={item.번호}>
                                                        <div className="gap"  onClick={(e)=>onClickViewProduct(e,item,'./images/intro/')} >
                                                            <div className="product-img">
                                                                <a href="!#">
                                                                    <div className="image">
                                                                        <img src={`./images/intro/section13/${item.이미지}`} alt="" />
                                                                    </div>
                                                                    <div className="img-badge">
                                                                        { item.뱃지!=='' && <img src={`./images/intro/section13/${item.뱃지}`} /> }
                                                                    </div>

                                                                </a>
                                                            </div>
                                                            <div className="product-caption">
                                                                <div className="top">
                                                                    <em className='delivery-box'>
                                                                        { item.배송종류==="특급배송" && <em className='fast'></em> }
                                                                        { item.배송종류==="무료배송" && <em className='free'></em> }
                                                                    </em>
                                                                    <div className="score">
                                                                        <span><img src="./images/intro/section13/ico_star.png" alt="" />{item.별점}</span>
                                                                        <span>({item.댓글수})</span>
                                                                    </div>
                                                                </div>
                                                                <div className="middle">
                                                                    <a href="!#">{item.제품명}</a>
                                                                </div>
                                                                <div className="bottom">
                                                                    <span className="price">
                                                                        {
                                                                            item.할인율!==0 && <><em style={{color: '#F15220'}}>{Math.round(item.할인율*100)}</em><h6 style={{color: '#F15220'}}>%</h6></>
                                                                        }
                                                                        {
                                                                            item.할인율=== 0 && <><em>{item.가격.toLocaleString('ko-KR')}</em><h6>원</h6></>
                                                                        }
                                                                        {
                                                                            item.할인율!== 0 && <><em>{(Math.ceil(item.가격*(1-item.할인율)/100)*100).toLocaleString('ko-KR')}</em><h6>원</h6></>
                                                                        }
                                                                        {
                                                                            item.할인율!==0 && <><em style={{color: '#999', fontSize: '13px', fontWeight: 'normal', textDecoration: 'line-through'}}>{item.가격.toLocaleString('ko-KR')}원</em></>
                                                                        }
                                                                    </span>
                                                                    <p>{item.개별가격}</p>
                                                                    <div className="badge-box">
                                                                        { item.신상품 && <img className='new' src="./images/intro/section13/new.png" alt="" /> }
                                                                        { item.추가적립 && <img className='add' src="./images/intro/section13/add_point.png" alt="" /> }
                                                                        { item.추가증정 && <img className='add' src="./images/intro/section13/more.png" alt="" /> }
                                                                        { item.RACE && <img className='race' src="./images/intro/section13/race.png"   alt="" /> }
                                                                        { item.MD추천 && <img className='add' src="./images/intro/section13/md.png" alt="" /> }
                                                                        { item.오렌지할인 && <img className='add' src="./images/intro/section13/orange.png" alt="" /> }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                )
                            }
                            {
                                state.slide2 && (
                                    <ul className="product-box">
                                        {
                                            state.product2.map((item, idx)=>{
                                                return (
                                                    <li className={`product-list list${idx+1}`} key={item.번호}>
                                                        <div className="gap"  onClick={(e)=>onClickViewProduct(e,item,'./images/intro/')} >
                                                            <div className="product-img">
                                                                <a href="!#">
                                                                    <div className="image">
                                                                        <img src={`./images/intro/section13/${item.이미지}`} alt="" />
                                                                    </div>
                                                                    <div className="img-badge">
                                                                        { item.뱃지!=='' && <img src={`./images/intro/section13/${item.뱃지}`} /> }
                                                                    </div>

                                                                </a>
                                                            </div>
                                                            <div className="product-caption">
                                                                <div className="top">
                                                                    <em className='delivery-box'>
                                                                        { item.배송종류==="특급배송" && <em className='fast'></em> }
                                                                        { item.배송종류==="무료배송" && <em className='free'></em> }
                                                                    </em>
                                                                    <div className="score">
                                                                        <span><img src="./images/intro/section13/ico_star.png" alt="" />{item.별점}</span>
                                                                        <span>{item.댓글수}</span>
                                                                    </div>
                                                                </div>
                                                                <div className="middle">
                                                                    <a href="!#">{item.제품명}</a>
                                                                </div>
                                                                <div className="bottom">
                                                                    <span className="price">
                                                                        {
                                                                            item.할인율!==0 && <><em style={{color: '#F15220'}}>{Math.round(item.할인율*100)}</em><h6 style={{color: '#F15220'}}>%</h6></>
                                                                        }
                                                                        {
                                                                            item.할인율=== 0 && <><em>{item.가격.toLocaleString('ko-KR')}</em><h6>원</h6></>
                                                                        }
                                                                        {
                                                                            item.할인율!== 0 && <><em>{(Math.ceil(item.가격*(1-item.할인율)/100)*100).toLocaleString('ko-KR')}</em><h6>원</h6></>
                                                                        }
                                                                        {
                                                                            item.할인율!==0 && <><em style={{color: '#999', fontSize: '13px', fontWeight: 'normal', textDecoration: 'line-through'}}>{item.가격.toLocaleString('ko-KR')}원</em></>
                                                                        }
                                                                    </span>
                                                                    <p>{item.개별가격}</p>
                                                                    <div className="badge-box">
                                                                        { item.신상품 && <img className='new' src="./images/intro/section13/new.png" alt="" /> }
                                                                        { item.추가적립 && <img className='add' src="./images/intro/section13/add_point.png" alt="" /> }
                                                                        { item.추가증정 && <img className='add' src="./images/intro/section13/more.png" alt="" /> }
                                                                        { item.RACE && <img className='race' src="./images/intro/section13/race.png"   alt="" /> }
                                                                        { item.MD추천 && <img className='add' src="./images/intro/section13/md.png" alt="" /> }
                                                                        { item.오렌지할인 && <img className='add' src="./images/intro/section13/orange.png" alt="" /> }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                )
                            }
                            {
                                state.slide3 && (
                                    <ul className="product-box">
                                        {
                                            state.product3.map((item, idx)=>{
                                                return (
                                                    <li className={`product-list list${idx+1}`} key={item.번호}>
                                                        <div className="gap"  onClick={(e)=>onClickViewProduct(e,item,'./images/intro/')} >
                                                            <div className="product-img">
                                                                <a href="!#">
                                                                    <div className="image">
                                                                        <img src={`./images/intro/section13/${item.이미지}`} alt="" />
                                                                    </div>
                                                                    <div className="img-badge">
                                                                        { item.뱃지!=='' && <img src={`./images/intro/section13/${item.뱃지}`} /> }
                                                                    </div>

                                                                </a>
                                                            </div>
                                                            <div className="product-caption">
                                                                <div className="top">
                                                                    <em className='delivery-box'>
                                                                        { item.배송종류==="특급배송" && <em className='fast'></em> }
                                                                        { item.배송종류==="무료배송" && <em className='free'></em> }
                                                                    </em>
                                                                    <div className="score">
                                                                        <span><img src="./images/intro/section13/ico_star.png" alt="" />{item.별점}</span>
                                                                        <span>{item.댓글수}</span>
                                                                    </div>
                                                                </div>
                                                                <div className="middle">
                                                                    <a href="!#">{item.제품명}</a>
                                                                </div>
                                                                <div className="bottom">
                                                                    <span className="price">
                                                                        {
                                                                            item.할인율!==0 && <><em style={{color: '#F15220'}}>{Math.round(item.할인율*100)}</em><h6 style={{color: '#F15220'}}>%</h6></>
                                                                        }
                                                                        {
                                                                            item.할인율=== 0 && <><em>{item.가격.toLocaleString('ko-KR')}</em><h6>원</h6></>
                                                                        }
                                                                        {
                                                                            item.할인율!== 0 && <><em>{(Math.ceil(item.가격*(1-item.할인율)/100)*100).toLocaleString('ko-KR')}</em><h6>원</h6></>
                                                                        }
                                                                        {
                                                                            item.할인율!==0 && <><em style={{color: '#999', fontSize: '13px', fontWeight: 'normal', textDecoration: 'line-through'}}>{item.가격.toLocaleString('ko-KR')}원</em></>
                                                                        }
                                                                    </span>
                                                                    <p>{item.개별가격}</p>
                                                                    <div className="badge-box">
                                                                        { item.신상품 && <img className='new' src="./images/intro/section13/new.png" alt="" /> }
                                                                        { item.추가적립 && <img className='add' src="./images/intro/section13/add_point.png" alt="" /> }
                                                                        { item.추가증정 && <img className='add' src="./images/intro/section13/more.png" alt="" /> }
                                                                        { item.RACE && <img className='race' src="./images/intro/section13/race.png"   alt="" /> }
                                                                        { item.MD추천 && <img className='add' src="./images/intro/section13/md.png" alt="" /> }
                                                                        { item.오렌지할인 && <img className='add' src="./images/intro/section13/orange.png" alt="" /> }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                )
                            }
                            {
                                state.slide4 && (
                                    <ul className="product-box">
                                        {
                                            state.product4.map((item, idx)=>{
                                                return (
                                                    <li className={`product-list list${idx+1}`} key={item.번호}>
                                                        <div className="gap"  onClick={(e)=>onClickViewProduct(e,item,'./images/intro/')} >
                                                            <div className="product-img">
                                                                <a href="!#">
                                                                    <div className="image">
                                                                        <img src={`./images/intro/section13/${item.이미지}`} alt="" />
                                                                    </div>
                                                                    <div className="img-badge">
                                                                        { item.뱃지!=='' && <img src={`./images/intro/section13/${item.뱃지}`} /> }
                                                                    </div>

                                                                </a>
                                                            </div>
                                                            <div className="product-caption">
                                                                <div className="top">
                                                                    <em className='delivery-box'>
                                                                        { item.배송종류==="특급배송" && <em className='fast'></em> }
                                                                        { item.배송종류==="무료배송" && <em className='free'></em> }
                                                                    </em>
                                                                    <div className="score">
                                                                        <span><img src="./images/intro/section13/ico_star.png" alt="" />{item.별점}</span>
                                                                        <span>{item.댓글수}</span>
                                                                    </div>
                                                                </div>
                                                                <div className="middle">
                                                                    <a href="!#">{item.제품명}</a>
                                                                </div>
                                                                <div className="bottom">
                                                                    <span className="price">
                                                                        {
                                                                            item.할인율!==0 && <><em style={{color: '#F15220'}}>{Math.round(item.할인율*100)}</em><h6 style={{color: '#F15220'}}>%</h6></>
                                                                        }
                                                                        {
                                                                            item.할인율=== 0 && <><em>{item.가격.toLocaleString('ko-KR')}</em><h6>원</h6></>
                                                                        }
                                                                        {
                                                                            item.할인율!== 0 && <><em>{(Math.ceil(item.가격*(1-item.할인율)/100)*100).toLocaleString('ko-KR')}</em><h6>원</h6></>
                                                                        }
                                                                        {
                                                                            item.할인율!==0 && <><em style={{color: '#999', fontSize: '13px', fontWeight: 'normal', textDecoration: 'line-through'}}>{item.가격.toLocaleString('ko-KR')}원</em></>
                                                                        }
                                                                    </span>
                                                                    <p>{item.개별가격}</p>
                                                                    <div className="badge-box">
                                                                        { item.신상품 && <img className='new' src="./images/intro/section13/new.png" alt="" /> }
                                                                        { item.추가적립 && <img className='add' src="./images/intro/section13/add_point.png" alt="" /> }
                                                                        { item.추가증정 && <img className='add' src="./images/intro/section13/more.png" alt="" /> }
                                                                        { item.RACE && <img className='race' src="./images/intro/section13/race.png"   alt="" /> }
                                                                        { item.MD추천 && <img className='add' src="./images/intro/section13/md.png" alt="" /> }
                                                                        { item.오렌지할인 && <img className='add' src="./images/intro/section13/orange.png" alt="" /> }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                )
                            }
                            {
                                state.slide5 && (
                                    <ul className="product-box">
                                        {
                                            state.product5.map((item, idx)=>{
                                                return (
                                                    <li className={`product-list list${idx+1}`} key={item.번호}>
                                                        <div className="gap"  onClick={(e)=>onClickViewProduct(e,item,'./images/intro/')} >
                                                            <div className="product-img">
                                                                <a href="!#">
                                                                    <div className="image">
                                                                        <img src={`./images/intro/section13/${item.이미지}`} alt="" />
                                                                    </div>
                                                                    <div className="img-badge">
                                                                        { item.뱃지!=='' && <img src={`./images/intro/section13/${item.뱃지}`} /> }
                                                                    </div>

                                                                </a>
                                                            </div>
                                                            <div className="product-caption">
                                                                <div className="top">
                                                                    <em className='delivery-box'>
                                                                        { item.배송종류==="특급배송" && <em className='fast'></em> }
                                                                        { item.배송종류==="무료배송" && <em className='free'></em> }
                                                                    </em>
                                                                    <div className="score">
                                                                        <span><img src="./images/intro/section13/ico_star.png" alt="" />{item.별점}</span>
                                                                        <span>{item.댓글수}</span>
                                                                    </div>
                                                                </div>
                                                                <div className="middle">
                                                                    <a href="!#">{item.제품명}</a>
                                                                </div>
                                                                <div className="bottom">
                                                                    <span className="price">
                                                                        {
                                                                            item.할인율!==0 && <><em style={{color: '#F15220'}}>{Math.round(item.할인율*100)}</em><h6 style={{color: '#F15220'}}>%</h6></>
                                                                        }
                                                                        {
                                                                            item.할인율=== 0 && <><em>{item.가격.toLocaleString('ko-KR')}</em><h6>원</h6></>
                                                                        }
                                                                        {
                                                                            item.할인율!== 0 && <><em>{(Math.ceil(item.가격*(1-item.할인율)/100)*100).toLocaleString('ko-KR')}</em><h6>원</h6></>
                                                                        }
                                                                        {
                                                                            item.할인율!==0 && <><em style={{color: '#999', fontSize: '13px', fontWeight: 'normal', textDecoration: 'line-through'}}>{item.가격.toLocaleString('ko-KR')}원</em></>
                                                                        }
                                                                    </span>
                                                                    <p>{item.개별가격}</p>
                                                                    <div className="badge-box">
                                                                        { item.신상품 && <img className='new' src="./images/intro/section13/new.png" alt="" /> }
                                                                        { item.추가적립 && <img className='add' src="./images/intro/section13/add_point.png" alt="" /> }
                                                                        { item.추가증정 && <img className='add' src="./images/intro/section13/more.png" alt="" /> }
                                                                        { item.RACE && <img className='race' src="./images/intro/section13/race.png"   alt="" /> }
                                                                        { item.MD추천 && <img className='add' src="./images/intro/section13/md.png" alt="" /> }
                                                                        { item.오렌지할인 && <img className='add' src="./images/intro/section13/orange.png" alt="" /> }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                )
                            }
                            {
                                state.slide6 && (
                                    <ul className="product-box">
                                        {
                                            state.product6.map((item, idx)=>{
                                                return (
                                                    <li className={`product-list list${idx+1}`} key={item.번호}>
                                                        <div className="gap"  onClick={(e)=>onClickViewProduct(e,item,'./images/intro/')} >
                                                            <div className="product-img">
                                                                <a href="!#">
                                                                    <div className="image">
                                                                        <img src={`./images/intro/section13/${item.이미지}`} alt="" />
                                                                    </div>
                                                                    <div className="img-badge">
                                                                        { item.뱃지!=='' && <img src={`./images/intro/section13/${item.뱃지}`} /> }
                                                                    </div>

                                                                </a>
                                                            </div>
                                                            <div className="product-caption">
                                                                <div className="top">
                                                                    <em className='delivery-box'>
                                                                        { item.배송종류==="특급배송" && <em className='fast'></em> }
                                                                        { item.배송종류==="무료배송" && <em className='free'></em> }
                                                                    </em>
                                                                    <div className="score">
                                                                        <span><img src="./images/intro/section13/ico_star.png" alt="" />{item.별점}</span>
                                                                        <span>{item.댓글수}</span>
                                                                    </div>
                                                                </div>
                                                                <div className="middle">
                                                                    <a href="!#">{item.제품명}</a>
                                                                </div>
                                                                <div className="bottom">
                                                                    <span className="price">
                                                                        {
                                                                            item.할인율!==0 && <><em style={{color: '#F15220'}}>{Math.round(item.할인율*100)}</em><h6 style={{color: '#F15220'}}>%</h6></>
                                                                        }
                                                                        {
                                                                            item.할인율=== 0 && <><em>{item.가격.toLocaleString('ko-KR')}</em><h6>원</h6></>
                                                                        }
                                                                        {
                                                                            item.할인율!== 0 && <><em>{(Math.ceil(item.가격*(1-item.할인율)/100)*100).toLocaleString('ko-KR')}</em><h6>원</h6></>
                                                                        }
                                                                        {
                                                                            item.할인율!==0 && <><em style={{color: '#999', fontSize: '13px', fontWeight: 'normal', textDecoration: 'line-through'}}>{item.가격.toLocaleString('ko-KR')}원</em></>
                                                                        }
                                                                    </span>
                                                                    <p>{item.개별가격}</p>
                                                                    <div className="badge-box">
                                                                        { item.신상품 && <img className='new' src="./images/intro/section13/new.png" alt="" /> }
                                                                        { item.추가적립 && <img className='add' src="./images/intro/section13/add_point.png" alt="" /> }
                                                                        { item.추가증정 && <img className='add' src="./images/intro/section13/more.png" alt="" /> }
                                                                        { item.RACE && <img className='race' src="./images/intro/section13/race.png"   alt="" /> }
                                                                        { item.MD추천 && <img className='add' src="./images/intro/section13/md.png" alt="" /> }
                                                                        { item.오렌지할인 && <img className='add' src="./images/intro/section13/orange.png" alt="" /> }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                )
                            }
                            {
                                state.slide7 && (
                                    <ul className="product-box">
                                        {
                                            state.product7.map((item, idx)=>{
                                                return (
                                                    <li className={`product-list list${idx+1}`} key={item.번호}>
                                                        <div className="gap"  onClick={(e)=>onClickViewProduct(e,item,'./images/intro/')} >
                                                            <div className="product-img">
                                                                <a href="!#">
                                                                    <div className="image">
                                                                        <img src={`./images/intro/section13/${item.이미지}`} alt="" />
                                                                    </div>
                                                                    <div className="img-badge">
                                                                        { item.뱃지!=='' && <img src={`./images/intro/section13/${item.뱃지}`} /> }
                                                                    </div>

                                                                </a>
                                                            </div>
                                                            <div className="product-caption">
                                                                <div className="top">
                                                                    <em className='delivery-box'>
                                                                        { item.배송종류==="특급배송" && <em className='fast'></em> }
                                                                        { item.배송종류==="무료배송" && <em className='free'></em> }
                                                                    </em>
                                                                    <div className="score">
                                                                        <span><img src="./images/intro/section13/ico_star.png" alt="" />{item.별점}</span>
                                                                        <span>{item.댓글수}</span>
                                                                    </div>
                                                                </div>
                                                                <div className="middle">
                                                                    <a href="!#">{item.제품명}</a>
                                                                </div>
                                                                <div className="bottom">
                                                                    <span className="price">
                                                                        {
                                                                            item.할인율!==0 && <><em style={{color: '#F15220'}}>{Math.round(item.할인율*100)}</em><h6 style={{color: '#F15220'}}>%</h6></>
                                                                        }
                                                                        {
                                                                            item.할인율=== 0 && <><em>{item.가격.toLocaleString('ko-KR')}</em><h6>원</h6></>
                                                                        }
                                                                        {
                                                                            item.할인율!== 0 && <><em>{(Math.ceil(item.가격*(1-item.할인율)/100)*100).toLocaleString('ko-KR')}</em><h6>원</h6></>
                                                                        }
                                                                        {
                                                                            item.할인율!==0 && <><em style={{color: '#999', fontSize: '13px', fontWeight: 'normal', textDecoration: 'line-through'}}>{item.가격.toLocaleString('ko-KR')}원</em></>
                                                                        }
                                                                    </span>
                                                                    <p>{item.개별가격}</p>
                                                                    <div className="badge-box">
                                                                        { item.신상품 && <img className='new' src="./images/intro/section13/new.png" alt="" /> }
                                                                        { item.추가적립 && <img className='add' src="./images/intro/section13/add_point.png" alt="" /> }
                                                                        { item.추가증정 && <img className='add' src="./images/intro/section13/more.png" alt="" /> }
                                                                        { item.RACE && <img className='race' src="./images/intro/section13/race.png"   alt="" /> }
                                                                        { item.MD추천 && <img className='add' src="./images/intro/section13/md.png" alt="" /> }
                                                                        { item.오렌지할인 && <img className='add' src="./images/intro/section13/orange.png" alt="" /> }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                )
                            }
                            {
                                state.slide8 && (
                                    <ul className="product-box">
                                        {
                                            state.product8.map((item, idx)=>{
                                                return (
                                                    <li className={`product-list list${idx+1}`} key={item.번호}>
                                                        <div className="gap"  onClick={(e)=>onClickViewProduct(e,item,'./images/intro/')} >
                                                            <div className="product-img">
                                                                <a href="!#">
                                                                    <div className="image">
                                                                        <img src={`./images/intro/section13/${item.이미지}`} alt="" />
                                                                    </div>
                                                                    <div className="img-badge">
                                                                        { item.뱃지!=='' && <img src={`./images/intro/section13/${item.뱃지}`} /> }
                                                                    </div>

                                                                </a>
                                                            </div>
                                                            <div className="product-caption">
                                                                <div className="top">
                                                                    <em className='delivery-box'>
                                                                        { item.배송종류==="특급배송" && <em className='fast'></em> }
                                                                        { item.배송종류==="무료배송" && <em className='free'></em> }
                                                                    </em>
                                                                    <div className="score">
                                                                        <span><img src="./images/intro/section13/ico_star.png" alt="" />{item.별점}</span>
                                                                        <span>{item.댓글수}</span>
                                                                    </div>
                                                                </div>
                                                                <div className="middle">
                                                                    <a href="!#">{item.제품명}</a>
                                                                </div>
                                                                <div className="bottom">
                                                                    <span className="price">
                                                                        {
                                                                            item.할인율!==0 && <><em style={{color: '#F15220'}}>{Math.round(item.할인율*100)}</em><h6 style={{color: '#F15220'}}>%</h6></>
                                                                        }
                                                                        {
                                                                            item.할인율=== 0 && <><em>{item.가격.toLocaleString('ko-KR')}</em><h6>원</h6></>
                                                                        }
                                                                        {
                                                                            item.할인율!== 0 && <><em>{(Math.ceil(item.가격*(1-item.할인율)/100)*100).toLocaleString('ko-KR')}</em><h6>원</h6></>
                                                                        }
                                                                        {
                                                                            item.할인율!==0 && <><em style={{color: '#999', fontSize: '13px', fontWeight: 'normal', textDecoration: 'line-through'}}>{item.가격.toLocaleString('ko-KR')}원</em></>
                                                                        }
                                                                    </span>
                                                                    <p>{item.개별가격}</p>
                                                                    <div className="badge-box">
                                                                        { item.신상품 && <img className='new' src="./images/intro/section13/new.png" alt="" /> }
                                                                        { item.추가적립 && <img className='add' src="./images/intro/section13/add_point.png" alt="" /> }
                                                                        { item.추가증정 && <img className='add' src="./images/intro/section13/more.png" alt="" /> }
                                                                        { item.RACE && <img className='race' src="./images/intro/section13/race.png"   alt="" /> }
                                                                        { item.MD추천 && <img className='add' src="./images/intro/section13/md.png" alt="" /> }
                                                                        { item.오렌지할인 && <img className='add' src="./images/intro/section13/orange.png" alt="" /> }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                )
                            }
                            {
                                state.slide9 && (
                                    <ul className="product-box">
                                        {
                                            state.product9.map((item, idx)=>{
                                                return (
                                                    <li className={`product-list list${idx+1}`} key={item.번호}>
                                                        <div className="gap"  onClick={(e)=>onClickViewProduct(e,item,'./images/intro/')} >
                                                            <div className="product-img">
                                                                <a href="!#">
                                                                    <div className="image">
                                                                        <img src={`./images/intro/section13/${item.이미지}`} alt="" />
                                                                    </div>
                                                                    <div className="img-badge">
                                                                        { item.뱃지!=='' && <img src={`./images/intro/section13/${item.뱃지}`} /> }
                                                                    </div>

                                                                </a>
                                                            </div>
                                                            <div className="product-caption">
                                                                <div className="top">
                                                                    <em className='delivery-box'>
                                                                        { item.배송종류==="특급배송" && <em className='fast'></em> }
                                                                        { item.배송종류==="무료배송" && <em className='free'></em> }
                                                                    </em>
                                                                    <div className="score">
                                                                        <span><img src="./images/intro/section13/ico_star.png" alt="" />{item.별점}</span>
                                                                        <span>{item.댓글수}</span>
                                                                    </div>
                                                                </div>
                                                                <div className="middle">
                                                                    <a href="!#">{item.제품명}</a>
                                                                </div>
                                                                <div className="bottom">
                                                                    <span className="price">
                                                                        {
                                                                            item.할인율!==0 && <><em style={{color: '#F15220'}}>{Math.round(item.할인율*100)}</em><h6 style={{color: '#F15220'}}>%</h6></>
                                                                        }
                                                                        {
                                                                            item.할인율=== 0 && <><em>{item.가격.toLocaleString('ko-KR')}</em><h6>원</h6></>
                                                                        }
                                                                        {
                                                                            item.할인율!== 0 && <><em>{(Math.ceil(item.가격*(1-item.할인율)/100)*100).toLocaleString('ko-KR')}</em><h6>원</h6></>
                                                                        }
                                                                        {
                                                                            item.할인율!==0 && <><em style={{color: '#999', fontSize: '13px', fontWeight: 'normal', textDecoration: 'line-through'}}>{item.가격.toLocaleString('ko-KR')}원</em></>
                                                                        }
                                                                    </span>
                                                                    <p>{item.개별가격}</p>
                                                                    <div className="badge-box">
                                                                        { item.신상품 && <img className='new' src="./images/intro/section13/new.png" alt="" /> }
                                                                        { item.추가적립 && <img className='add' src="./images/intro/section13/add_point.png" alt="" /> }
                                                                        { item.추가증정 && <img className='add' src="./images/intro/section13/more.png" alt="" /> }
                                                                        { item.RACE && <img className='race' src="./images/intro/section13/race.png"   alt="" /> }
                                                                        { item.MD추천 && <img className='add' src="./images/intro/section13/md.png" alt="" /> }
                                                                        { item.오렌지할인 && <img className='add' src="./images/intro/section13/orange.png" alt="" /> }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                )
                            }
                            {
                                state.slide10 && (
                                    <ul className="product-box">
                                        {
                                            state.product10.map((item, idx)=>{
                                                return (
                                                    <li className={`product-list list${idx+1}`} key={item.번호}>
                                                        <div className="gap"  onClick={(e)=>onClickViewProduct(e,item,'./images/intro/')} >
                                                            <div className="product-img">
                                                                <a href="!#">
                                                                    <div className="image">
                                                                        <img src={`./images/intro/section13/${item.이미지}`} alt="" />
                                                                    </div>
                                                                    <div className="img-badge">
                                                                        { item.뱃지!=='' && <img src={`./images/intro/section13/${item.뱃지}`} /> }
                                                                    </div>

                                                                </a>
                                                            </div>
                                                            <div className="product-caption">
                                                                <div className="top">
                                                                    <em className='delivery-box'>
                                                                        { item.배송종류==="특급배송" && <em className='fast'></em> }
                                                                        { item.배송종류==="무료배송" && <em className='free'></em> }
                                                                    </em>
                                                                    <div className="score">
                                                                        <span><img src="./images/intro/section13/ico_star.png" alt="" />{item.별점}</span>
                                                                        <span>{item.댓글수}</span>
                                                                    </div>
                                                                </div>
                                                                <div className="middle">
                                                                    <a href="!#">{item.제품명}</a>
                                                                </div>
                                                                <div className="bottom">
                                                                    <span className="price">
                                                                        {
                                                                            item.할인율!==0 && <><em style={{color: '#F15220'}}>{Math.round(item.할인율*100)}</em><h6 style={{color: '#F15220'}}>%</h6></>
                                                                        }
                                                                        {
                                                                            item.할인율=== 0 && <><em>{item.가격.toLocaleString('ko-KR')}</em><h6>원</h6></>
                                                                        }
                                                                        {
                                                                            item.할인율!== 0 && <><em>{(Math.ceil(item.가격*(1-item.할인율)/100)*100).toLocaleString('ko-KR')}</em><h6>원</h6></>
                                                                        }
                                                                        {
                                                                            item.할인율!==0 && <><em style={{color: '#999', fontSize: '13px', fontWeight: 'normal', textDecoration: 'line-through'}}>{item.가격.toLocaleString('ko-KR')}원</em></>
                                                                        }
                                                                    </span>
                                                                    <p>{item.개별가격}</p>
                                                                    <div className="badge-box">
                                                                        { item.신상품 && <img className='new' src="./images/intro/section13/new.png" alt="" /> }
                                                                        { item.추가적립 && <img className='add' src="./images/intro/section13/add_point.png" alt="" /> }
                                                                        { item.추가증정 && <img className='add' src="./images/intro/section13/more.png" alt="" /> }
                                                                        { item.MD추천 && <img className='add' src="./images/intro/section13/md.png" alt="" /> }
                                                                        { item.오렌지할인 && <img className='add' src="./images/intro/section13/orange.png" alt="" /> }
                                                                        { item.RACE && <img className='race' src="./images/intro/section13/race.png"   alt="" /> }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                )
                            }
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    );
};