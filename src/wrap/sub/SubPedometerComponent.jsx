import React from 'react';
import './scss/SubPedometer.scss';

export default function SubPedometerComponent (){

    const [count, setCount] = React.useState([0]);

    React.useEffect(()=>{
        const maxcount = 280000000;
        const animationDuration = 2000;
        const time = 1000; 
        const stepValue = maxcount / time;

        let step = 0;

        const intervalId = setInterval(() => {
          step++;
          const num = numberWithCommas(Math.floor(step * stepValue));
          setCount(num);

          if (step >= time) {
            clearInterval(intervalId);
          }
        }, animationDuration / time);

        // 3자리마다 , 찍기
        function numberWithCommas(x) {
          return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    },[])



    return (
        <div id='pedometer' className='sub-pedometer'>
            <section id='section'>
                <div className="container">
                    <div className="sec1">
                        <div className="gr-box">
                            <h2>랭킹닭컴 만보기</h2>
                            <p>
                                걸을수록 커지는 포인트,
                                <br/>
                                지금 시작해보세요.
                            </p>
                            <div className="txt-box">
                                랭킹닭컴 만보기로
                                <br />
                                건강도 챙기고 포인트도 챙겨요!            
                            </div>
                            <div className="count-box">
                                <h3>
                                    <span>누적 걸음수 </span>
                                    <span id='counter'>{count}</span>
                                    걸음
                                    <input type="hidden" />
                                </h3>
                            </div>                            
                        </div>
                        <div className="img-box">
                            <img src="./images/sub/pedometer/pc-sec01.png" alt="" />
                        </div>
                    </div>
                    <div className="sec2">
                        <div className="img-box">
                            <img src="./images/sub/pedometer/app-left.png" alt="" />
                            <img src="./images/sub/pedometer/app-right.png" alt="" />
                        </div>
                    </div>
                    <div className="sec3">
                        <div className="img-box">
                            <img src="./images/sub/pedometer/pc-sec02.png" alt="" />
                        </div>
                        <div className="txt-box">
                            <h2>한눈에 보는 걸음 보고서</h2>
                            <div className="sub-box">
                                하루동안 이동한 거리와 소모 칼로리까지
                                <br />
                                한눈에 확인할 수 있어요.
                            </div>
                        </div>
                    </div>
                    <div className="sec4">
                        <div className="txt-box">
                            <h2>조금만 걸어도 포인트 지급</h2>
                            <div className="sub-box">
                                만보를 채우지 않아도 괜찮아요!
                                <br/>
                                1,000걸음 걸을 때 마다 포인트를 드려요.            
                            </div>
                        </div>
                        <div className="img-box">
                            <img src="./images/sub/pedometer/pc-sec03-re.png" alt="" />
                        </div>
                    </div>
                    <div className="sec5">
                        <div className="img-box">
                            <img src="./images/sub/pedometer/pc-sec04.png" alt="" />
                        </div>
                        <div className="txt-box">
                            <h2>동기부여 콘텐츠</h2>
                            <div className="sub-box">
                                또래 대비 나는 얼마나 걸었을까?
                                <br/>
                                만보걷기를 더 즐겁게 해주는 동기부여 콘텐츠!            
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};