import React from 'react';
import TopModalComponent from "./wrap/TopModalComponent";
import MainModalComponent from './wrap/MainModalComponent';
import HeaderComponent from './wrap/HeaderComponent';
import MainComponent from "./wrap/MainComponent";
import QuickModalComponent from "./wrap/QuickModalComponent";
import FooterComponent from './wrap/FooterComponent';
import ProductPageComponent from './wrap/ProductPageComponent';
import CartComponent from './wrap/CartComponent';


import Sub1Component from './wrap/sub/Sub1Component';
import Sub2Component from './wrap/sub/Sub2Component';
import Sub3Component from './wrap/sub/Sub3Component';
import Sub4Component from './wrap/sub/Sub4Component';
import Sub4ComponentModal from "./wrap/sub/Sub4Component/Sub4ComponentModal";
import Sub5Component from './wrap/sub/Sub5Component';
import Sub6Component from './wrap/sub/Sub6Component';
import Sub6ChildCongrats from './wrap/sub/Sub6Component/Sub6ChildCongrats';
import Sub7ExpressDeliveryComponent from './wrap/sub/Sub7ExpressDeliveryComponent';
import SubCouponComponent from './wrap/sub/SubCouponComponent';
import SubPedometerComponent from './wrap/sub/SubPedometerComponent';

import SubUserLoginComponent from './wrap/sub/SubSignupSignIn/SubUserLoginComponent';
import SubUserSignupAgreementComponent from './wrap/sub/SubSignupSignIn/SubUserSignupAgreementComponent';
import SubUserSignupComponent from './wrap/sub/SubSignupSignIn/SubUserSignupComponent';
import SubUserSignInIdSearchComponent from './wrap/sub/SubSignupSignIn/SubUserSignInIdSearchComponent';
import SubUserSignInIdSearchResultComponent from './wrap/sub/SubSignupSignIn/SubUserSignInIdSearchResultComponent';
import SubUserSignInPwResetComponent from './wrap/sub/SubSignupSignIn/SubUserSignInPwResetComponent';
import SubUserSignInPwSearchComponent from './wrap/sub/SubSignupSignIn/SubUserSignInPwSearchComponent';
import SubAdminLoginComponent from './wrap/sub/SubSignupSignIn/SubAdminLoginComponent';
import SubAdminSignupAgreementComponent from './wrap/sub/SubSignupSignIn/SubAdminSignupAgreementComponent';
import SubAdminSignupComponent from './wrap/sub/SubSignupSignIn/SubAdminSignupComponent';
import SubAdminSignInIdSearchComponent from './wrap/sub/SubSignupSignIn/SubAdminSignInIdSearchComponent';
import SubAdminSignInIdSearchResultComponent from './wrap/sub/SubSignupSignIn/SubAdminSignInIdSearchResultComponent';
import SubAdminSignInPwSearchComponent from './wrap/sub/SubSignupSignIn/SubAdminSignInPwSearchComponent';
import SubAdminSignInPwResetComponent from './wrap/sub/SubSignupSignIn/SubAdminSignInPwResetComponent';

import SubMyPageRightUserUpdatePwCheckComponent from './wrap/sub/SubMyPage/SubMyPageRightUserUpdatePwCheckComponent';
import SubMyPageRightUserUpdateComponent from './wrap/sub/SubMyPage/SubMyPageRightUserUpdateComponent';
import SubMyPageRightUserDeletePwCheckComponent from './wrap/sub/SubMyPage/SubMyPageRightUserDeletePwCheckComponent';
import SubMyPageRightUserDeleteComponent from './wrap/sub/SubMyPage/SubMyPageRightUserDeleteComponent';
import SubMyPageRightAdminUpdatePwCheckComponent from './wrap/sub/SubMyPage/SubMyPageRightAdminUpdatePwCheckComponent';
import SubMyPageRightAdminUpdateComponent from './wrap/sub/SubMyPage/SubMyPageRightAdminUpdateComponent';
import SubMyPageRightAdminDeletePwCheckComponent from './wrap/sub/SubMyPage/SubMyPageRightAdminDeletePwCheckComponent';
import SubMyPageRightAdminDeleteComponent from './wrap/sub/SubMyPage/SubMyPageRightAdminDeleteComponent';
import SubMyPageRightAdminUserListComponent from './wrap/sub/SubMyPage/SubMyPageRightAdminUserListComponent';
import SubMyPageRightAdminUserUpdateComponent from './wrap/sub/SubMyPage/SubMyPageRightAdminUserUpdateComponent';

import SubCustomerComponent from './wrap/sub/SubCustomerComponent';
import SubCustomerNotice from './wrap/sub/SubCustomerComponent/SubCustomerNotice';
import SubCustomerInsert from './wrap/sub/SubCustomerComponent/SubCustomerInsert';
import SubCustomerView from './wrap/sub/SubCustomerComponent/SubCustomerView';
import SubCustomerUpdate from './wrap/sub/SubCustomerComponent/SubCustomerUpdate';
import SubCustomerUseInfo from './wrap/sub/SubCustomerComponent/SubCustomerUseInfo';
import SubCustomerFaq from './wrap/sub/SubCustomerComponent/SubCustomerFaq';
import SubCustomerFaq2 from './wrap/sub/SubCustomerComponent/SubCustomerFaq2';
import SubCustomerFaq3 from './wrap/sub/SubCustomerComponent/SubCustomerFaq3';
import SubCustomerFaq4 from './wrap/sub/SubCustomerComponent/SubCustomerFaq4';
import SubCustomerFaq5 from './wrap/sub/SubCustomerComponent/SubCustomerFaq5';
import SubCustomerFaq6 from './wrap/sub/SubCustomerComponent/SubCustomerFaq6';
import SubCustomerFaq7 from './wrap/sub/SubCustomerComponent/SubCustomerFaq7';
import SubCustomerFaq8 from './wrap/sub/SubCustomerComponent/SubCustomerFaq8';

import ConfirmModalComponent from './wrap/ConfirmModalComponent';
import ConfirmModalSelectComponent from './wrap/ConfirmModalSelectComponent';

import {Routes, Route, BrowserRouter} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { topModal } from "./reducer/topModal";
import { signIn } from './reducer/signIn';


export default function WrapComponent() {

    const selector = useSelector((state)=>state);
    const dispatch = useDispatch();

    React.useEffect(()=>{
        if(localStorage.getItem('RANKING_SIGNIN_DATA')!==null) {                        
            const res = JSON.parse(localStorage.getItem('RANKING_SIGNIN_DATA'));
            dispatch(signIn(res));
        }
    },[]);


    React.useEffect(()=>{
        let toDay = new Date();
        if(localStorage.getItem('RANKING_TOP_MODAL') !== null){
            const res = JSON.parse(localStorage.getItem('RANKING_TOP_MODAL'));
            let setDay = new Date(res.expires);

            if(toDay <= setDay){
                dispatch(topModal(false));
        
            }
            else {
                dispatch(topModal(true));
        
            }
        }
        
    },[]);


    return (
        <div id="wrap">
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                {
                    selector.topModal.isTopModal && <TopModalComponent />
                }
                { 
                    selector.mainModal.isMainModal && <MainModalComponent />
                }
                <QuickModalComponent/>
                    <Routes>
                        <Route path='/' element={<HeaderComponent />}>
                            <Route index element={<MainComponent />}/>
                            <Route path='/index' element={<MainComponent />}/>
                            <Route path='/sub1' element={ <Sub1Component />}/>
                            <Route path='/sub2' element={ <Sub2Component />}/>
                            <Route path='/sub3' element={ <Sub3Component />}/>
                            <Route path="/sub4" element={ <Sub4Component /> }/>
                            <Route path="/sub5" element={ <Sub5Component /> }/>
                            <Route path="/sub6" element={ <Sub6Component /> }/>
                            <Route path="/sub6Congrats" element={ <Sub6ChildCongrats /> }/>
                            <Route path='/sub7' element={<Sub7ExpressDeliveryComponent />}/>

                            <Route path='/userLogin' element={<SubUserLoginComponent />}/>
                            <Route path='/userSignupAgree' element={<SubUserSignupAgreementComponent />}/>
                            <Route path='/userSignup' element={<SubUserSignupComponent />}/>
                            <Route path='/userSigninIdSearch' element={<SubUserSignInIdSearchComponent />}/>
                            <Route path='/userSigninIdSearchResult' element={<SubUserSignInIdSearchResultComponent />}/>
                            <Route path='/userSigninPwSearch' element={<SubUserSignInPwSearchComponent />}/>
                            <Route path='/userSigninPwReset' element={<SubUserSignInPwResetComponent />}/>
                            <Route path='/adminLogin' element={<SubAdminLoginComponent />}/>
                            <Route path='/adminSignupAgree' element={<SubAdminSignupAgreementComponent />}/>
                            <Route path='/adminSignup' element={<SubAdminSignupComponent />}/>
                            <Route path='/adminSigninIdSearch' element={<SubAdminSignInIdSearchComponent />}/>
                            <Route path='/adminSigninIdSearchResult' element={<SubAdminSignInIdSearchResultComponent />}/>
                            <Route path='/adminSigninPwSearch' element={<SubAdminSignInPwSearchComponent />}/>
                            <Route path='/adminSigninPwReset' element={<SubAdminSignInPwResetComponent />}/>

                            <Route path='/mypageUserUpdatePwCheck' element={<SubMyPageRightUserUpdatePwCheckComponent />}/>
                            <Route path='/mypageUserUpdate' element={<SubMyPageRightUserUpdateComponent />}/>
                            <Route path='/mypageUserDeletePwCheck' element={<SubMyPageRightUserDeletePwCheckComponent />}/>
                            <Route path='/mypageUserDelete' element={<SubMyPageRightUserDeleteComponent />}/>
                            <Route path='/mypageAdminUpdatePwCheck' element={<SubMyPageRightAdminUpdatePwCheckComponent />}/>
                            <Route path='/mypageAdminUpdate' element={<SubMyPageRightAdminUpdateComponent />}/>
                            <Route path='/mypageAdminDeletePwCheck' element={<SubMyPageRightAdminDeletePwCheckComponent />}/>
                            <Route path='/mypageAdminDelete' element={<SubMyPageRightAdminDeleteComponent />}/>
                            <Route path='/mypageAdminUserList' element={<SubMyPageRightAdminUserListComponent />}/>
                            <Route path='/mypageAdminUserUpdate' element={<SubMyPageRightAdminUserUpdateComponent />}/>
                        
                            <Route path='/customerCenter' element={<SubCustomerComponent />}/>
                            <Route path='/customerNotice' element={<SubCustomerNotice />}/>
                            <Route path='/customerInsert' element={<SubCustomerInsert />}/>
                            <Route path='/customerView' element={<SubCustomerView />}/>
                            <Route path='/customerUpdate' element={<SubCustomerUpdate />}/>
                            <Route path='/customerUseInfo' element={<SubCustomerUseInfo />}/>
                            <Route path='/customerFaq' element={<SubCustomerFaq />}/>
                            <Route path='/customerFaq2' element={<SubCustomerFaq2 />}/>
                            <Route path='/customerFaq3' element={<SubCustomerFaq3 />}/>
                            <Route path='/customerFaq4' element={<SubCustomerFaq4 />}/>
                            <Route path='/customerFaq5' element={<SubCustomerFaq5 />}/>
                            <Route path='/customerFaq6' element={<SubCustomerFaq6 />}/>
                            <Route path='/customerFaq7' element={<SubCustomerFaq7 />}/>
                            <Route path='/customerFaq8' element={<SubCustomerFaq8 />}/>


                            <Route path='/cart' element={<CartComponent />}/>
                            <Route path='/productPage' element={<ProductPageComponent />}/>
                            <Route path='/Pedometer' element={<SubPedometerComponent />}/>
                            <Route path='/coupon' element={<SubCouponComponent />}/>
                        </Route>

                    </Routes>
                    {
                        selector.sub4Modal.isSub4Modal && <Sub4ComponentModal />
                    }
                    {
                        selector.confirmModal.isConfirmModal && <ConfirmModalComponent />
                    }
                    {
                        selector.confirmModalSelect.isConfirmModalSelect && <ConfirmModalSelectComponent />
                    }

                <FooterComponent />
            </BrowserRouter>
        </div>
    );
}
