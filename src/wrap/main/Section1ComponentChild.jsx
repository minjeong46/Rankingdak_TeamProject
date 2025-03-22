import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { section1Modal } from '../../reducer/section1Modal';

export default function Section1ComponentChild({슬라이드,n}) {


    const dispatch = useDispatch();

    const slideWrap = React.useRef(<ul></ul>);  

        
    React.useEffect(()=>{
        slideWrap.current.style.width = `${100 * n}%`; 
    },[n]);

    
    const [cnt, setCnt] = React.useState(0);
    const [toggle, setToggle] = React.useState(0);
    const [isArrow, setIsArrow] = React.useState(false);  


    const mainSlide=()=>{
        slideWrap.current.style.transition = 'all 0.6s ease-in-out';
        slideWrap.current.style.left = `${-100 * cnt}%`;
        if(cnt!==0){ 
            returnSlide();
        }
    }
        
        const returnSlide=()=>{
        
            if(cnt>(n-2)){ 
                setToggle(1);
                setCnt(1); 
                slideWrap.current.style.transition = 'none';
                slideWrap.current.style.left = `${-100 * 0}%`;
            }
            
            if(cnt<0){
                setToggle(1);
                setCnt(n-2-1); 
                slideWrap.current.style.transition = 'none';
                slideWrap.current.style.left = `${-(100*(n-2))}%`;
            }
        }
    
    React.useEffect(()=>{
        if(toggle===0){ 
            mainSlide();
        }
        else {  
            setToggle(0); 
            setTimeout(()=>{ 
                mainSlide();
            },100);
        }
    },[cnt]);

    const onClickNext=(e)=>{
        e.preventDefault();
        setCnt(cnt => cnt+1);  
    }

    const onClickPrev=(e)=>{
        e.preventDefault();
        setCnt(cnt => cnt-1);
    }

    React.useEffect(()=>{
        if(isArrow===false){    
            let setId = 0;
            setId = setInterval(()=>{
                setCnt(cnt => cnt+1); 
            }, 4000);
            return () => clearInterval(setId); 
        }
    },[isArrow]); 

    const onClickBanner=(e)=>{
        e.preventDefault();

        dispatch(section1Modal(true));

    }

   
    return (
        <div className="slide-container">
            <div className="slide-view">
                <ul ref={slideWrap}  className="slide-wrap">  
                    {
                        슬라이드.map((item, idx)=>{
                            return (
                                <li className="slide" key={item.번호}>
                                    <img src={`./images/intro/section1/${item.이미지}`} alt="" />
                                </li>
                            )
                        })
                    }   
                </ul>
            </div>
            <div className="button-box">
                <span className='page-num-box'><em>{cnt+1>n-2?1:cnt+1}</em><i>/</i><em>{n-2}</em></span>
                <a href="!#" onClick={onClickPrev} className={'prev-arrow-btn'}>＜</a>
                <a href="!#" onClick={onClickNext} className={'next-arrow-btn'}>＞</a>
                <button onClick={onClickBanner}>+</button>
            </div>


        </div>
    );
};
