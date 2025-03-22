# 의존성 프로그램

 *  @reduxjs/toolkit: "^1.9.7"
 *  axios: "^1.5.0"
 *  react: "^18.2.0"
 *  react-dom: "^18.2.0"
 *  react-redux: "^8.1.3"
 *  react-router-dom: "^6.17.0"
 *  react-scripts: "5.0.1"
 *  sass: "^1.66.1"

# 정적 파일
 - public
    - css
        - fonts.css
        - reset.css
        - style.css
    - data : json 모델 데이터
        - intro
            - section1.json
            - section3.json
            - section4.json
            - section5.json
            - section6.json
            - section7.json
            - section8.json
            - section9.json
            - section10.json
            - section11.json
            - section12.json
            - section13.json
            - sectionCount.json
        - sub
            - faq.json
            - sub1.json
            - sub2.json
            - sub3_9.json
            - sub3_10.json
            - sub3_11.json
            - sub4.json
            - sub5.json
            - sub6_2.json
            - sub6.json
            - sub7.json
    - fonts : 글꼴
    - images
        - intro
        - sub
    - js
    - scss
        - style.scss
    index.html

# 동적파일
- src
    - reducer : 최상위 스토어 상태관리(state) 리덕스 구현
        confirmModal.js
        confirmModalSelect.js
        mainModal.js
        quickMenuViewProduct.js
        section1Modal.js
        signIn.js
        sub4Modal.js
        topModal.js
        viewproduct.js
        viewProductIsFlag.js
        cartReducer.js
    - WrapComponent.jsx 
    - wrap : 전체 컴포넌트 폴더
        - main
            - main
                - Section1Component.jsx : 메인슬라이드 컴포넌트
                - Section1ComponentChild.jsx : 메인슬라이드 자식 컴포넌트
                - Section1Modal.jsx : 메인슬라이드 모달
                - Section2Component.jsx : 메인 네비바 컴포넌트
                - Section4Component.jsx : 메인 '지금 이순간 깜짝 타임세일!' 섹션 컴포넌트
                - Section4ComponentChild.jsx : 메인 '지금 이순간 깜짝 타임세일!' 섹션 자식 컴포넌트
                - Section6Component.jsx : 메인 '테마별 추천상품' 탭메뉴 섹션 컴포넌트
                - Section10Component.jsx : 메인 '뭘 살지 고민된다면, 추천패키지' 배너 슬라이드 컴포넌트
                - Section13Component.jsx : 메인 '인기 카테고리 상품'
                - SectionSlideComponent.jsx : 메인 상품 슬라이드 섹션 컴포넌트(섹션 3,5,7,8,9,11)
                - SectionSlideComponentChild.jsx : 메인 상품 슬라이드 섹션 자식 컴포넌트(섹션 3,5,7,8,9,11)
                - scss : 리액트 사스
            - sub
                - Sub1Component.jsx : 서브 랭킹 컴포넌트
                - Sub2Component.jsx : 서브 이달의 특가 컴포넌트
                - Sub3Component.jsx : 서브 혜택정리 컴포넌트
                - Sub3ComponentChild.jsx : 서브 혜택정리 자식 컴포넌트
                - Sub4Component.jsx : 서브 1팩 담기 컴포넌트
                - Sub4Component
                    - Sub4ComponentBest.jsx
                    - Sub4ComponentModal.jsx
                    - Sub4ComponentOnePack.jsx
                - Sub5Component.jsx : 서브 브랜드관 컴포넌트
                - Sub5Component
                    - Sub5ChildSection1.jsx
                    - Sub5ChildSection2.jsx
                    - Sub5ChildSection3.jsx
                    - Sub5ChildSection4.jsx
                    - Sub5ChildSection5.jsx
                    - Sub5ChildSection6.jsx
                - Sub6Component.jsx : 서브 이벤트 컴포넌트
                - Sub6Component
                    -Sub6ChildCongrats.jsx
                - Sub7ExpressDeliveryComponent.jsx : 서브 특급배송 카테고리 컴포넌트
                - SubCouponComponent : 서브 쿠폰 컴포넌트
                - SubPedometerComponent : 서브 만보기 컴포넌트
                - SubCustomerComponent.jsx : 서브 고객센터 자주묻는질문 컴포넌트
                - SubCustomerComponent
                    - SubCustomerFaq.jsx : 서브 고객센터 자주묻는 FAQ 컴포넌트
                    - SubCustomerFaq2.jsx : 서브 고객센터 자주묻는 FAQ 컴포넌트
                    - SubCustomerFaq3.jsx : 서브 고객센터 자주묻는 FAQ 컴포넌트
                    - SubCustomerFaq4.jsx : 서브 고객센터 자주묻는 FAQ 컴포넌트
                    - SubCustomerFaq5.jsx : 서브 고객센터 자주묻는 FAQ 컴포넌트
                    - SubCustomerFaq6.jsx : 서브 고객센터 자주묻는 FAQ 컴포넌트
                    - SubCustomerFaq7.jsx : 서브 고객센터 자주묻는 FAQ 컴포넌트
                    - SubCustomerFaq8.jsx : 서브 고객센터 자주묻는 FAQ 컴포넌트
                    - SubCustomerInsert.jsx : 서브 고객센터 공지사항 입력 컴포넌트
                    - SubCustomerLeft.jsx : 서브 고객센터 왼쪽 메뉴 컴포넌트
                    - SubCustomerNotice.jsx : 서브 고객센터 공지사항 입력 컴포넌트
                    - SubCustomerUpdate.jsx : 서브 고객센터 공지사항 수정 컴포넌트
                    - SubCustomerUseInfo.jsx : 서브 고객센터 이용안내 컴포넌트
                    - SubCustomerView.jsx : 서브 고객센터 공지사항 뷰어 컴포넌트
                - SubMyPage
                    - SubMyPageLeftMenuComponent.jsx : 서브 마이페이지 왼쪽메뉴 컴포넌트
                    - SubMyPageRightAdminDeleteComponent.jsx : 서브 마이페이지 어드민 삭제 컴포넌트
                    - SubMyPageRightAdminDeleteComponentChild.jsx : 서브 마이페이지 어드민 삭제 자식 컴포넌트
                    - SubMyPageRightAdminDeletePwCheckComponent.jsx : 서브 마이페이지 어드민 삭제 비밀번호확인 컴포넌트
                    - SubMyPageRightAdminDeletePwCheckComponentChild.jsx : 서브 마이페이지 어드민 삭제 비밀번호확인 자식 컴포넌트
                    - SubMyPageRightAdminUpdateComponent.jsx : 서브 마이페이지 어드민 수정 컴포넌트
                    - SubMyPageRightAdminUpdateComponentChild.jsx : 서브 마이페이지 어드민 수정 자식 컴포넌트
                    - SubMyPageRightAdminUpdatePwCheckComponent.jsx : 서브 마이페이지 어드민 수정 비밀번호확인 컴포넌트
                    - SubMyPageRightAdminUpdatePwCheckComponentChild.jsx : 서브 마이페이지 어드민 수정 비밀번호확인 자식 컴포넌트
                    - SubMyPageRightAdminUserListComponent.jsx : 서브 마이페이지 어드민 유저목록 컴포넌트
                    - SubMyPageRightAdminUserListComponentChild.jsx : 서브 마이페이지 어드민 유저목록 자식 컴포넌트
                    - SubMyPageRightAdminUserUpdateComponent.jsx : 서브 마이페이지 어드민 유저 수정 컴포넌트
                    - SubMyPageRightAdminUserUpdateComponentChild. : 서브 마이페이지 어드민 유저 수정 자식 컴포넌트
                    - SubMyPageRightUserDeleteComponent.jsx : 서브 마이페이지 유저 탈퇴 컴포넌트
                    - SubMyPageRightUserDeleteComponentChild.jsx : 서브 마이페이지 유저 탈퇴 자식 컴포넌트
                    - SubMyPageRightUserDeletePwCheckComponent.jsx : 서브 마이페이지 유저 탈퇴 비밀번호확인 컴포넌트
                    - SubMyPageRightUserDeletePwCheckComponentChild.jsx : 서브 마이페이지 유저 탈퇴 비밀번호확인 자식 컴포넌트
                    - SubMyPageRightUserUpdateComponent.jsx : 서브 마이페이지 유저 수정 컴포넌트
                    - SubMyPageRightUserUpdateComponentChild.jsx  : 서브 마이페이지 유저 수정 자식 컴포넌트
                    - SubMyPageRightUserUpdatePwCheckComponent.jsx : 서브 마이페이지 유저 수정 비밀번호확인 컴포넌트
                    - SubMyPageRightUserUpdatePwCheckComponentChild.jsx : 서브 마이페이지 유저 수정 비밀번호확인 자식 컴포넌트
                    - SubMyPageTopComponent.jsx : 서브 마이페이지 위쪽 컴포넌트
                    - scss : 리액트 사스
                - SubSignupSignIn
                    - SubAdminLoginComponent.jsx : 서브 어드민 로그인 컴포넌트
                    - SubAdminSignInIdSearchComponent.jsx : 서브 어드민 아이디찾기 컴포넌트
                    - SubAdminSignInIdSearchResultComponent.jsx : 서브 어드민 아이디찾기 결과 컴포넌트
                    - SubAdminSignInPwResetComponent.jsx : 서브 어드민 비밀번호변경 컴포넌트
                    - SubAdminSignInPwSearchComponent.jsx : 서브 어드민 비밀번호 찾기 컴포넌트
                    - SubAdminSignupAgreementComponent.jsx : 서브 회원가입 약관동의 컴포넌트
                    - SubAdminSignupComponent.jsx : 서브 어드민 회원가입 컴포넌트
                    - SubUserLoginComponent.jsx : 서브 유저 로그인 컴포넌트
                    - SubUserSignInIdSearchComponent.jsx : 서브 유저 아이디찾기 컴포넌트
                    - SubUserSignInIdSearchResultComponent.jsx : 서브 유저 아이디찾기 결과 컴포넌트
                    - SubUserSignInPwResetComponent.jsx : 서브 유저 비밀번호변경 컴포넌트
                    - SubUserSignInPwSearchComponent.jsx : 서브 유저 비밀번호찾기 컴포넌트
                    - SubUseSignupAgreementComponent.jsx : 서브 유저 회원가입 약관동의 컴포넌트
                    - SubUserSignupComponent.jsx : 서브 유저 회원가입 컴포넌트
                    - scss: 리액트 사스
        - CartComponent.jsx : 카트 컴포넌트
        - ConfirmModalComponent.jsx : 컴펌모달 컴포넌트
        - ConfirmModalSelectComponent.jsx : 컴펌모달 컴포넌트
        - FooterComponent.jsx : 푸터 컴포넌트
        - HeaderComponent.jsx : 헤더 컴포넌트
        - MainComponent.jsx : 메인 컴포넌트
        - MainModalComponent.jsx : 메인모달 컴포넌트
        - QuickModalComponent.jsx : 퀵모달 컴포넌트
        - ProductPageComponent.jsx : 상품 상세페이지 컴포넌트
        - TopModalComponent.jsx : 탑모달컴포넌트세션스토리지 
            - scss : 리액트 사스
        - scss : 리액트 사스
    - index.js

## 프로젝트 웹사이트 전체 구조

    - 탑모달
        - 개발구현 : 버튼 클릭 시 1일 동안 열리지 않도록 만료일 설정
        - 기술구현 : 브라우저 저장소 세션스토리지 사용
    
     - 헤더영역
        - 개발구현 : 검색창 확장, 카테고리 호버 시 세부 카테고리 오픈
        - 기술구현
            - 검색창 클릭 시 사이즈 증가
            - 상태변수값을 사용하여 숨긴 항목 열기 닫기 구현
    
    - 메인영역
        
        - 섹션1
            - 개발구현 : 클릭 시 이동 및 일정 초마다 자동으로 이동
            - 기술구현
                - ref사용를 사용하여 이미지 이동
                - setInterval를 사용하여 4초마다 자동으로 이미지 전환
            - MVC 패턴 구현
        
        - 섹션2
            - 개발구현 : 클릭 시 이동
            - 기술구현 : ref사용를 사용하여 아이콘 이동
        
        - 섹션3,5,7,8,9,11
            - 개발구현 : 상품 이미지, 상품명, 상품설명, 할인, 가격, 정가, 1팩당 가격, 배송, 별점, 배송스티커, 스티커(추가증정,한정수량...)
            - 기술구현
                - 다음, 이전 슬라이드 상품 4개씩 볼 수 있는 버튼
                - 양쪽 끝에 도달하면 버튼 투명도 조절
                - 상품 클릭시 최근 본 상품 등록
                - 상품 클릭시 상세페이지 구현
                - 상세 페이지에서 장바구니에 등록
            - MVC 패턴 구현
                - 모델(Model) : 배너 이미지 추가, 삭제 등 언제든지 반응하는 슬라이드 구현하도록 JSON 데이터 구현(업데이트 자동화)
                - 모델(Model) : 슬라이드 갯수에 반응하는 자동화 슬라이드(슬라이드번호 자동 넘버링)
                - 모델(Model) : 하나의 컴포넌트로 여러 JSON 데이터 파일을 이용하여 상품 목록 슬라이드 구현
                - 모델(View) : JSX 뷰템플릿 제작, 반복, 재사용 구현
                - 컨트롤러(Control) : REST API AXIOS 구현, 상태관리, 프롭스 구현
        
        - 섹션4
            - 개발구현 : 상품 이미지, 상품명, 상품설명, 할인, 가격, 정가, 1팩당 가격, 배송, 별점, 배송스티커, 스티커(추가증정,한정수량...) , 상품별 남은 시간
            - 기술구현
                - 다음, 이전 슬라이드 상품 2개씩 볼 수 있는 버튼
                - 양쪽 끝에 도달하면 버튼 투명도 조절
                - 3초마다 자동으로 다음 슬라이드로 이동하도록 setInterval 설정
                - 상품 클릭시 최근 본 상품 등록
                - 상품 클릭시 상세페이지 구현
                - 상세 페이지에서 장바구니에 등록
            - MVC 패턴 구현
                - 모델(Model) : 배너 이미지 추가, 삭제 등 언제든지 반응하는 슬라이드 구현하도록 JSON 데이터 구현(업데이트 자동화)
                - 모델(Model) : 슬라이드 갯수에 반응하는 자동화 슬라이드(슬라이드번호 자동 넘버링)
                - 모델(Model) : 하나의 컴포넌트로 여러 JSON 데이터 파일을 이용하여 상품 목록 슬라이드 구현
                - 모델(View) : JSX 뷰템플릿 제작, 반복, 재사용 구현
                - 컨트롤러(Control) : REST API AXIOS 구현, 상태관리, 프롭스 구현
        
        - 섹션6
            - 개발구현 : 테마별 추천상품 탭메뉴
            - 기술구현 
                - 텍스트 박스 position : absolute 로 위치 설정
                - 탭메뉴 버튼 클릭시 버튼 색상 구현
                - 탭메뉴 버튼 클릭시 상품데이터 구현
            - MVC 패턴 구현
                - 컨트롤러(Control) : REST API AXIOS 구현, 상태관리
        
        - 섹션10
            - 개발구현 : 배너 슬라이드
            - 기술구현 
                - 다음, 이전 버튼 클릭시 이미지 3개씩 이동
                - 마지막 슬라이드에서 이미지 1개만 이동하도록 설정
                - 상태변수 값에 따라 버튼 활성화 설정
            - MVC 패턴 구현
                - 컨트롤러(Control) : 상태관리
        - 섹션13
            - 개발구현 : 상품 카테고리, 상품 이미지, 상품명, 상품설명, 할인율, 가격, 정가, 단위당 가격, 배송, 별점, 배송스티커, 스티커(추가증정,한정수량...)
            - 기술구현
                - 카테고리 클릭 버튼
                - 상품 클릭시 최근 본 상품 등록
                - 상품 클릭시 상세페이지 구현
                - 상세 페이지에서 장바구니에 등록
            - MVC 패턴 구현
                - 모델(Model) : 하나의 컴포넌트로 여러 JSON 데이터 파일을 이용하여 상품 목록 슬라이드 구현
                - 모델(Model) : 카테고리 클릭 시 해당 카테고리에 맞는 상품 데이터를 출력하도록 구현
                - 뷰(View) : JSX 뷰템플릿 제작, 반복, 재사용 구현
                - 컨트롤러(Control) : REST API AXIOS 구현, 상태관리 구현
    - 서브영역
        - 서브1
            - 개발 구현 : 카테고리 마다 상품 변경 및 랭킹 변경
            - 기술 구현 
                - json을 사용한 상품 배열
                - 온클릭 이벤트 사용하여 상태변수값 변경
             - MVC 패턴 구현
                - 모델(Model) : 언제든지 반응하는 슬라이드 구현하도록 JSON 데이터 구현(업데이트 자동화)
                - 모델(View) : JSX 뷰템플릿 제작, 반복, 재사용 구현
                - 컨트롤러(Control) : REST API AXIOS 구현, 상태관리, 프롭스 구현

        - 서브2 
            - 개발 구현 : 리스트 박스 클릭 시 해당하는 위치로 이동
            - 기술 구현 
                - window.scrool 값을 사용 y값 변경
            - MVC 패턴 구현
                - 모델(Model) : 언제든지 반응하는 슬라이드 구현하도록 JSON 데이터 구현(업데이트 자동화)
                - 모델(View) : JSX 뷰템플릿 제작, 반복, 재사용 구현
                - 컨트롤러(Control) : REST API AXIOS 구현, 상태관리, 프롭스 구현

        - 서브3
            - 개발구현 : 월마다 각각 다른 내용/이미지/상품을 볼 수 있도록
            - 기술구현
                - useSearchParams 를 이용하여 각 월호마다 데이터가 달라지면 안에 내용만 바뀌도록 구현
                - 금액 0원 시 이미지 흐린 효과
            - MVC 패턴 구현
                - 모델(Model) : 배너 이미지 추가, 삭제 등 언제든지 반응하는 슬라이드 구현하도록 JSON 데이터 구현(업데이트 자동화)
                - 모델(View) : JSX 뷰템플릿 제작, 반복, 재사용 구현
                - 컨트롤러(Control) : REST API AXIOS 구현, 상태관리, 프롭스 구현

        - 서브4
            - 개발구현 : 모달창, 카테고리, 상품명, 가격, 배송, 별점, 배송스티커, 스티커(추가증정,한정수량...)
            - 기술구현
                - 버튼 클릭 시 좌우로 상품 5개 단위로 이동하는 슬라이드 버튼
                - 상품 클릭시 최근 본 상품 등록
                - 카테고리 클릭 버튼
            - MVC 패턴 구현
                - 모델(Model) : 배너 이미지 추가, 삭제 등 언제든지 반응하는 슬라이드 구현하도록 JSON 데이터 구현(업데이트 자동화)
                - 모델(View) : JSX 뷰템플릿 제작, 반복, 재사용 구현
                - 컨트롤러(Control) : REST API AXIOS 구현, 상태관리, 프롭스 구현
        - 서브5
            - 개발구현 : 브랜드이미지, 브랜드명, 상품이미지, 상품가격, 검색상자, 필터링버튼
            - 기술구현
                - 버튼 클릭 시 좌우로 상품 5개 단위로 이동하는 슬라이드 버튼
                - 상품 클릭시 최근 본 상품 등록
                - 카테고리 클릭 버튼
            - MVC 패턴 구현
                - 모델(Model) : 배너 이미지 추가, 삭제 등 언제든지 반응하는 슬라이드 구현하도록 JSON 데이터 구현(업데이트 자동화)
                - 모델(View) : JSX 뷰템플릿 제작, 반복, 재사용 구현
                - 컨트롤러(Control) : REST API AXIOS 구현, 상태관리, 프롭스 구현
        - 서브6
            - 개발구현 : 이벤트이미지, 이벤트명, 이벤트기간, 당첨자발표버튼, 번호, 제목, 작성자, 작성일
            - 기술구현
                - 당첨자발표 버튼 클릭 시 당첨자 발표 페이지로 이동
            - MVC 패턴 구현
                - 모델(Model) : JSON 데이터 구현
                - 모델(View) : JSX 뷰템플릿 제작, 반복, 재사용 구현
                - 컨트롤러(Control) : REST API AXIOS 구현, 상태관리 구현
         - 서브7
            - 개발구현 : 카테고리 클릭 시 상품데이터 보여줌
            - 기술구현
                - 카테고리 메뉴를 scss에서 sticky로 고정
                - 카테고리 메뉴 클릭시 메뉴 색상 변경
                - 카테고리 메뉴 클릭시 카테고리 상품데이터 구현
            - MVC 패턴 구현
                - 컨트롤러(Control): REST API AXIOS 구현, 상태관리

        - 만보기
            - 개발 구현 : 걸음 수 증가
            - 기술 구현 : 리액트유즈이펙트로 setInterval 사용하여 설정 한 수치까지 증가

        - 쿠폰
            - 개발구현 : 쿠폰 페이지 디자인 구현

        - 고객센터
            - 고객센터
                - 개발구현: 자주묻는 질문 검색, 랭킹닭컴 이용안내, 자주묻는 FAQ, 공지사항
                - 기술구현
                    - 자주묻는 FAQ 내용 클릭 시 마우스 방향이 토글방식으로 바뀌도록 구현
                    - 자주묻는 FAQ 내용 클릭 시 세부내용 출력, 토글방식으로 구현
                    - 전체보기 클릭 시 자주묻는 FAQ 페이지로 이동
            - 공지사항
                - 개발구현: 공지유형, 공지제목, 공지내용, 작성일, 글보기, 글쓰기, 글수정, 글삭제
                - 기술구현
                    - 데이터베이스에 있는 공지사항 내용을 가져와서 출력
                    - 공지사항 클릭 시 해당 공지의 내용이 출력되는 글보기 페이지로 이동
                    - 글보기 페이지에서 목록버튼 클릭 시 공지사항 페이지로 이동하도록 구현
                    - 관리자 로그인 시 글쓰기 버튼이 나타나도록 구현
                    - 글쓰기 조건에 적합하게 작성 후 등록 버튼 클릭 시 데이터베이스에 
                      작성한 내용이 등록되도록 구현
                    - 관리자 로그인 시 글보기 페이지에서 글수정, 글삭제 버튼이 나타나도록 구현
                    - 글수정, 글삭제 시 데이터베이스에 연동된 공지사항이 수정, 삭제되도록 구현
            - 이용안내
                - 개발구현: 질문사항, 질문에 대한 답변
                - 기술구현
                    - FAQ 내용 클릭 시 마우스 방향이 토글방식으로 바뀌도록 구현
                    - FAQ 내용 클릭 시 세부내용 출력, 토글방식으로 구현
            - 자주묻는 FAQ
                - 개발구현: 검색상자, 카테고리, 질문사항, 질문에 대한 답변
                - 기술구현
                    - 카테고리 버튼 클릭 시 해당 카테고리에 맞는 질문 내용이 출력되도록 구현
                    - FAQ 내용 클릭 시 마우스 방향이 토글방식으로 바뀌도록 구현
                    - FAQ 내용 클릭 시 세부내용 출력, 토글방식으로 구현

        - 일반회원관리(권한:일반) 마이페이지
            - 회원가입
                - 개발구현 : 약관동의(필수) 후 아이디,비밀번호,이름,휴대폰,이메일,평생회원를 입력/체크하고 조건에 맞을 시 회원가입 가능
                - 기술구현
                    - 약관동의는 필수 항목이 포함될 시 아래 확인 버튼이 색깔이 변경되며 활성화
                    - 아이디 입력 시 중복 확인 버튼 활성화되며 DB 데이터를 확인하여 중복 확인(모달 창으로 메세지), 가이드 텍스트 출력
                    - 비밀번호 입력 시 조건이 맞는다면 가이드 텍스트 색이 변하며, 비밀번호와 비밀번호확인이 같으면 가이드 텍스트 색이 변한다.
                    - 이름 입력시 1자만 입력 시 가이드 텍스트 출력
                    - 휴대폰 입력시 조건에 맞을 경우 인증번호가 활성화 되며, 인증번호의 정해진 숫자길이를 입력 시 확인 버튼 활성화, 각각 휴대폰이나 인증번호가 맞거나 다를 경우 모달 창으로 메세지,
                    인증이 완료됐지만 수정할 경우 다시 입력
                    - 이메일 주소는 직접입력하거나 셀렉트박스에서 주소를 선택
                    - 평생 회원은 동의/동의안함 중 하나라도 선택
                    - 위 모든 조건을 다 충족 할 시 회원가입 버튼 활성화
                    - DB 에 유저 데이터 추가
                - MVC 패턴 구현
                    - 컨트롤러(Control) : REST API AXIOS 구현, 상태관리, 리듀서(모달)

            - 로그인
                - 개발구현 : DB 데이터에 유저 데이터 정보가 맞을 경우 로그인 시 로컬스토리지에 정보를 저장하며 최상단 헤더 변경
                - 기술구현
                    - 아이디/비밀번호 입력 시 로그인(모달 메시지로 성공 여부)
                    - 체크 박스 자동 로그인 체크 시 365일 동안 로컬스토리지에 유저 데이터 저장
                    - 체크 박스 아이디 저장 체크 시 아이디 로컬스토리지에 저장하며 계속 input 아이디 박스에 나타난다.
                    - DB 에 유저 데이터를 찾기
                - MVC 패턴 구현
                    - 컨트롤러(Control) : REST API AXIOS 구현, 상태관리, 리듀서(모달)

            - 아이디찾기
                - 개발구현 : 휴대폰(이름/휴대폰)/이메일(이름/이메일) 찾기를 이용하여 아이디 확인
                - 기술구현
                    - 휴대폰 찾기, 이메일 찾기 라디오 버튼 클릭 시 SHOW/HIDE 설정
                    - 휴대폰 입력시 조건에 맞을 경우 인증번호가 활성화 되며, 인증번호의 정해진 숫자길이를 입력 시 확인 버튼 활성화, 각각 휴대폰이나 인증번호가 맞거나 다를 경우 모달 창으로 메세지,
                    인증이 완료됐지만 수정할 경우 다시 입력
                    - 이메일 주소는 직접입력하거나 셀렉트박스에서 주소를 선택
                    - 확인 버튼을 클릭하면 DB 에서 아이디를 찾고 아이디 결과 컴포넌트로 이동하여 아이디 확인
                    - DB 유저 아이디 데이터 찾기
                - MVC 패턴 구현
                    - 컨트롤러(Control) : REST API AXIOS 구현, 상태관리, 리듀서(모달)
            - 비밀번호찾기
                - 개발구현 : 휴대폰(아이디/휴대폰)/이메일(아이디/이메일) 찾기를 이용하여 아이디 확인
                - 기술구현
                    - 휴대폰 찾기, 이메일 찾기 라디오 버튼 클릭 시 SHOW/HIDE 설정
                    - 휴대폰 입력시 조건에 맞을 경우 인증번호가 활성화 되며, 인증번호의 정해진 숫자길이를 입력 시 확인 버튼 활성화, 각각 휴대폰이나 인증번호가 맞거나 다를 경우 모달 창으로 메세지,
                    인증이 완료됐지만 수정할 경우 다시 입력
                    - 이메일 주소는 직접입력하거나 셀렉트박스에서 주소를 선택
                    - 확인 버튼을 클릭하면 DB 에서 일치 여부 확인 후 비밀번호 변경 폼으로 이동
                    - 새 비밀번호, 새 비밀번호 일치 시 DB에서 해당 유저 비밀번호 변경
                    - DB 유저 비밀번호 데이터 찾기, 비밀번호 업데이트
                - MVC 패턴 구현
                    - 컨트롤러(Control) : REST API AXIOS 구현, 상태관리, 리듀서(모달)
            - 회원정보수정
                - 개발구현 : 마이페이지에서 비밀번호 확인 후 유저의 데이터 수정
                - 기술구현
                    - 회원가입 폼과 유사
                    - 비밀번호 확인 후 일치하면 수정 폼 이동
                    - DB 유저 비밀번호 확인, 데이터 업데이트
                - MVC 패턴 구현
                    - 컨트롤러(Control) : REST API AXIOS 구현, 상태관리, 리듀서(모달)
            - 회원정보탈퇴
                - 개발구현 : 마이페이지에서 비밀번호 확인 후 탈퇴 사유 선택/입력 후 회원 탈퇴(삭제)
                - 기술구현
                    - 비밀번호 확인 후 일치하면 탈퇴 사유 입력 폼 이동
                    - 확인을 누르면 모달선택이 나오며 확인을 누르면 유저 데이터 삭제
                    - DB 유저 비밀번호 확인, 데이터 삭제
                - MVC 패턴 구현
                    - 컨트롤러(Control) : REST API AXIOS 구현, 상태관리, 리듀서(모달선택)

        - 일반회원관리(권한:관리자) 마이페이지
            - 회원가입
                - 개발구현 : 약관동의(필수) 후 아이디,비밀번호,이름,휴대폰,이메일,평생회원를 입력/체크하고 조건에 맞을 시 회원가입 가능
                - 기술구현
                    - 약관동의는 필수 항목이 포함될 시 아래 확인 버튼이 색깔이 변경되며 활성화
                    - 아이디 입력 시 중복 확인 버튼 활성화되며 DB 데이터를 확인하여 중복 확인(모달 창으로 메세지), 가이드 텍스트 출력
                    - 비밀번호 입력 시 조건이 맞는다면 가이드 텍스트 색이 변하며, 비밀번호와 비밀번호확인이 같으면 가이드 텍스트 색이 변한다.
                    - 이름 입력시 1자만 입력 시 가이드 텍스트 출력
                    - 휴대폰 입력시 조건에 맞을 경우 인증번호가 활성화 되며, 인증번호의 정해진 숫자길이를 입력 시 확인 버튼 활성화, 각각 휴대폰이나 인증번호가 맞거나 다를 경우 모달 창으로 메세지,
                    인증이 완료됐지만 수정할 경우 다시 입력
                    - 이메일 주소는 직접입력하거나 셀렉트박스에서 주소를 선택
                    - 위 모든 조건을 다 충족 할 시 회원가입 버튼 활성화
                    - DB 에 관리자 데이터 추가
                - MVC 패턴 구현
                    - 컨트롤러(Control) : REST API AXIOS 구현, 상태관리, 리듀서(모달)

            - 로그인
                - 개발구현 : DB 데이터에 관리자 데이터 정보가 맞을 경우 로그인 시 로컬스토리지에 정보를 저장하며 최상단 헤더 변경
                - 기술구현
                    - 아이디/비밀번호 입력 시 로그인(모달 메시지로 성공 여부)
                    - 체크 박스 자동 로그인 체크 시 365일 동안 로컬스토리지에 유저 데이터 저장
                    - 체크 박스 아이디 저장 체크 시 아이디 로컬스토리지에 저장하며 계속 input 아이디 박스에 나타난다.
                    - DB 에 관리자 데이터를 찾기
                - MVC 패턴 구현
                    - 컨트롤러(Control) : REST API AXIOS 구현, 상태관리, 리듀서(모달)

            - 아이디찾기
                - 개발구현 : 휴대폰(이름/휴대폰)/이메일(이름/이메일) 찾기를 이용하여 아이디 확인
                - 기술구현
                    - 휴대폰 찾기, 이메일 찾기 라디오 버튼 클릭 시 SHOW/HIDE 설정
                    - 휴대폰 입력시 조건에 맞을 경우 인증번호가 활성화 되며, 인증번호의 정해진 숫자길이를 입력 시 확인 버튼 활성화, 각각 휴대폰이나 인증번호가 맞거나 다를 경우 모달 창으로 메세지,
                    인증이 완료됐지만 수정할 경우 다시 입력
                    - 이메일 주소는 직접입력하거나 셀렉트박스에서 주소를 선택
                    - 확인 버튼을 클릭하면 DB 에서 아이디를 찾고 아이디 결과 컴포넌트로 이동하여 아이디 확인
                    - DB 유저 아이디 데이터 찾기
                - MVC 패턴 구현
                    - 컨트롤러(Control) : REST API AXIOS 구현, 상태관리, 리듀서(모달)
            - 비밀번호찾기
                - 개발구현 : 휴대폰(아이디/휴대폰)/이메일(아이디/이메일) 찾기를 이용하여 아이디 확인
                - 기술구현
                    - 휴대폰 찾기, 이메일 찾기 라디오 버튼 클릭 시 SHOW/HIDE 설정
                    - 휴대폰 입력시 조건에 맞을 경우 인증번호가 활성화 되며, 인증번호의 정해진 숫자길이를 입력 시 확인 버튼 활성화, 각각 휴대폰이나 인증번호가 맞거나 다를 경우 모달 창으로 메세지,
                    인증이 완료됐지만 수정할 경우 다시 입력
                    - 이메일 주소는 직접입력하거나 셀렉트박스에서 주소를 선택
                    - 확인 버튼을 클릭하면 DB 에서 일치 여부 확인 후 비밀번호 변경 폼으로 이동
                    - 새 비밀번호, 새 비밀번호 일치 시 DB에서 해당 유저 비밀번호 변경
                    - DB 관리자 비밀번호 데이터 찾기, 비밀번호 업데이트
                - MVC 패턴 구현
                    - 컨트롤러(Control) : REST API AXIOS 구현, 상태관리, 리듀서(모달)
            - 회원정보수정
                - 개발구현 : 마이페이지에서 비밀번호 확인 후 관리자의 데이터 수정
                - 기술구현
                    - 회원가입 폼과 유사
                    - 비밀번호 확인 후 일치하면 수정 폼 이동
                    - DB 관리자 비밀번호 확인, 데이터 업데이트
                - MVC 패턴 구현
                    - 컨트롤러(Control) : REST API AXIOS 구현, 상태관리, 리듀서(모달)
            - 회원정보탈퇴
                - 개발구현 : 마이페이지에서 비밀번호 확인 후 탈퇴
                - 기술구현
                    - 비밀번호 확인 후 일치하면 탈퇴 사유 입력 폼 이동
                    - 확인을 누르면 모달선택이 나오며 확인을 누르면 관리자 데이터 삭제
                    - DB 관리자 비밀번호 확인, 데이터 삭제
                - MVC 패턴 구현
                    - 컨트롤러(Control) : REST API AXIOS 구현, 상태관리, 리듀서(모달)

            - 회원목록
                - 개발구현 : 마이페이지에서 비밀번호 확인 후 유저 목록 확인
                수정/삭제로 유저 데이터 수정/삭제 가능
                - 기술구현
                    - 수정 / 삭제 버튼 클릭 시 각각 폼으로 이동하며 수정과 삭제 가능
                    - 수정 시 해당 유저의 수정 폼 이동
                    - 삭제는 바로 진행됨으로 신중하게 클릭
                    - DB 유저 데이터 변경, 삭제
                - MVC 패턴 구현
                    - 컨트롤러(Control) : REST API AXIOS 구현, 상태관리, 리듀서(모달)

    - 푸터영역
        - 회사소개
        - 공지사항
        - 입점.휴.광고문의
        - 이용약관
        - 개인정보처리방침
        - 랭킹닭컴 로고
        - (주)푸드나무
        - 사업자 정보
        - 사업자등록번호
        - 고객센터
        - 고객의 제안
        - 1:1 문의
        - 링크 아이콘
  
    - 메인모달
        - 개발구현 : 특정위치에 고정되어 있는 모달창
        - 기술구현 
            - 닫기 버튼 클릭시 상태변수 활성화로 보이지 않게 설정 
            - 새로고침시 다시 보이게 설정
        - MVC 패턴 구현
                - 컨트롤러(Control) : 상태관리, 리듀서(메인모달)

    - 퀵메뉴
        - 개발구현 : 상품클릭시 클릭한 상품 최근 3개까지 보이는 모달창
        - 기술구현 
            - 각 섹션 컴포넌트에서 상품데이터를 AXIOS로 가져와서 로컬스토레이지에 저장
            - 퀵모달컴포넌트애서 저장된 데이터에서 이미지 표시
            - 스크롤이벤트로 높이가 700이상이면 상태변수 활성화로 고정
        - MVC 패턴 구현
            - 컨트롤러(Control) : REST API AXIOS 구현, 상태관리, 리듀서(퀵모달)

    - 고탑버튼
        - 개발구현 : 클릭시 페이지 맨위로 이동 
        - 기술구현 : 클릭이벤트 스크롤이벤트를 통해 TOP:0으로 이동

    - 상품 상세페이지
        - 개발구현 : 클릭한 상품 페이지
        - 기술구현 
            - 리듀서 viewproduct에 저장된 상품 데이터 구현
            - 배너 클릭 시 서브 특급배송 페이지로 이동
            - 옵션 클릭 시 상태변수 list에 저장 / 상태변수 price에 저장
            - 옵션 상품 수량 증감시 상태변수 count 증감 / 상태변수 price에 증감
            - 리듀서 viewproduct 상품데이터와 선택한 옵션 데이터를 리듀서  
               cartMethod에 저장
            - 확인 모달창 구현 
        - MVC 패턴 구현
            - 컨트롤러(Control) : 상태관리, 리듀서(viewproduct, cartMethod)
    - 장바구니
        - 개발구현 : 상세페이지에서 장바구니 담기 할 시 장바구니 추가

    - 컨펌모달
        - 개발구현 : 확인 이벤트 구현 시 메시지 전달 모달창 
        - 기술구현 : 클릭 이벤트 발생 시 모달창 SHOW ,확인 버튼 클릭시 HIDE 설정
        - MVC 패턴 구현 
            - 컨트롤러(Control) : 리듀서

    - 컨펌모달선택
        - 개발구현 : 확인, 취소 이벤트 구현 시 메시지 전달 모달창 
        - 기술구현 : 클릭 이벤트 발생 시 모달창 SHOW ,확인 버튼 클릭시 HIDE 설정하며 다음 동작으로 이동
        - MVC 패턴 구현 
            - 컨트롤러(Control) : 리듀서

# php 백엔드
    - rankingdak_admin_delete.php : 어드민 삭제
    - rankingdak_admin_id_check.php : 어드민 아이디 확인
    - rankingdak_admin_id_search_email.php : 어드민 아이디 찾기 이메일 확인
    - rankingdak_admin_id_search_phone.php : 어드민 아이디 찾기 휴대폰 확인
    - rankingdak_admin_insert.php : 어드민 데이터 추가
    - rankingdak_admin_pw_reset.php : 어드민 비밀번호 변경
    - rankingdak_admin_pw_search_check_update.php : 어드민 비밀번호 검색 비밀번호 확인
    - rankingdak_admin_pw_search_email.php : 어드민 비밀번호 찾기 이메일 확인
    - rankingdak_admin_pw_search_phone.php : 어드민 비밀번호 찾기 휴대폰 확인
    - rankingdak_admin_signin.php : 어드민 로그인
    - rankingdak_admin_update.php : 어드민 데이터 변경
    - rankingdak_admin_user_select.php : 어드민 유저 데이터 확인
    - rankingdak_create_admin_table.php : 어드민 테이블 생성
    - rankingdak_create_user_table.php : 유저 테이블 생성
    - rankingdak_header.php
    - rankingdak_create_notice_table.php : 공지사항 테이블 생성
    - rankingdak_notice_table_delete.php : 공지사항 삭제
    - rankingdak_notice_table_insert.php : 공지사항 글쓰기
    - rankingdak_notice_table_select.php : 공지사항 내용 불러오기
    - rankingdak_notice_table_update.php : 공지사항 수정
    - rankingdak_user_delete.php : 유저 삭제
    - rankingdak_user_delete_form_create_table.php : 유저 삭제 폼 테이블 
    - rankingdak_user_delete_form_insert.php : 유저 삭제 폼 데이터 입력
    - rankingdak_user_id_check.php : 유저 아이디 확인
    - rankingdak_user_id_search_email.php : 유저 아이디 찾기 이메일 확인
    - rankingdak_user_id_search_phone.php : 유저 아이디 찾기 휴대폰 확인
    - rankingdak_user_insert.php : 유저 데이터 추가
    - rankingdak_user_pw_reset.php : 유저 비밀번호 변경
    - rankingdak_user_pw_search_check_update.php : 유저 비밀번호 검색 비밀번호 확인
    - rankingdak_user_pw_search_email.php : 유저 비밀번호 찾기 이메일 확인
    - rankingdak_user_pw_search_phone.php : 유저 비밀번호 찾기 휴대폰 확인
    - rankingdak_user_signin.php : 유저 로그인
    - rankingdak_user_update.php : 유저 데이터 변경


# 배포 아키텍처
  - 깃허브
    * HTTPS 프로토콜(SSL 인증서)
    * 리눅스 운영체제
    * Git Pages

  - 넷틀리파이
    * HTTPS 프로토콜(SSL 인증서)
    * 리눅스 운영체제
    * node.js 계열 호스팅
    * 정적 사이트제공

  - 닷홈
    * HTTP 프로토콜
    * 리눅스 운영체제
    * 아파치 웹서버
    * PHP
    * MYSQL


# 수정보완
    - 서브 '혜택정리'의 데이터 변경이 필요하다, 현재 11월호까지만 반영
    - 시간이 부족해 마이페이지의 여러 목록을 전부 구현할 수 없음
    - 고객센터 페이지의 1:1문의, 마음의 소리 미구현
    - 쿠폰페이지에서 쿠폰 다운시 데이터 저장

# 유지보수 
    - 해당 홈페이지의 데이터가 지속적으로 변함에 따라 변경된 데이터 업데이트 필요

