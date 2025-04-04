import React from 'react';
import '../scss/SubCustomer.scss';
import SubCustomerLeft from './SubCustomerLeft';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export default function SubCustomerNotice(){
    
    const selector = useSelector((state)=>state);
    const navigate = useNavigate();

    // 상태관리변수
    const [state, setState] = React.useState({
        공지사항: [],
        공지수: 0,
        n: 0
    });

    // 공지 가져오기
    React.useEffect(()=>{
        axios({
            url:'https://rankingdark.store/rankingdak_notice_table_select.php',
            method:'GET'
        })
        .then((res)=>{
            console.log( 'AXIOS 성공!' );
            console.log( res );
            console.log( res.data );
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

    // 공지사항 숫자세기
    React.useEffect(()=>{
        if(state.공지사항.length>0){
            let cnt=0;
            state.공지사항.map((item, idx)=>{
                if(item.타입==='공지'){
                    cnt++;
                }
            });
            setState({
                ...state,
                공지수: cnt,
                n: state.공지사항.length
            })
        }
    },[state.공지사항]);


    // 내용보기
    const onClickList=(e, item)=>{
        e.preventDefault();
        navigate('/customerView', {state: item});
    }

    // 글쓰기
    const onClickInsert=(e)=>{
        e.preventDefault();
        navigate('/customerInsert');
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
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

                        <div className="notice">
                            <div className="notice-header">
                                <h3>공지사항</h3>
                            </div>
                            <ul className="list-data">
                            {
                                state.공지사항.length > 0 && (
                                    state.공지사항.map((item, idx)=>{
                                        return(
                                            <li key={item.번호} onClick={(e)=>onClickList(e, item)}>
                                                <ul className='column-box'>
                                                    <li className='col col1'><span>{ item.타입==='공지'?<i className="notice"></i>:state.n-idx}</span></li>
                                                    <li className='col col2'><span><a href="!#">{item.제목}</a></span></li>
                                                    <li className='col col3'><span>{`${new Date(item.작성일).getFullYear()}.${new Date(item.작성일).getMonth()+1}.${new Date(item.작성일).getDate()}`}</span></li>
                                                </ul>
                                            </li>
                                        )
                                    })
                                )
                            }   
                            </ul>
                            {
                                selector.signIn.로그인정보!==null && (
                                    selector.signIn.로그인정보.구분==='관리자' && (
                                        <div className="button-box">
                                            <button onClick={onClickInsert}>글쓰기</button>
                                        </div>
                                    )
                                )
                            }
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    );
};
