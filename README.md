# Business Card Maker

## 소개
Firebase와 Cloudinary를 활용하여 명함 만드는 기능을 담은 웹페이지

## 진행 기간
210719 ~ 210730

## 페이지 구성
### 1. 로그인
![image](https://user-images.githubusercontent.com/80687334/130809219-f82014c0-58d2-40f7-8600-87cf09f7c24a.png)

Firebase의 Authentication 기능을 활용하여 구글과 깃허브 중 한 가지를 선택해 로그인 할 수 있도록 구현하였다.
로그인이 완료되면 사용자 정보가 history API로 메인화면에 넘어가게 된다.

### 2. 메인화면
![image](https://user-images.githubusercontent.com/80687334/130810043-adcbe820-a16c-49cc-be80-23555527d6e4.png)

기본적으로 좌측에 Editor와 우측에 Preview로 구성되어 있다.
또한, 우측 상단의 로그아웃 버튼을 눌러 로그인 페이지로 돌아갈 수 있다.

![image](https://user-images.githubusercontent.com/80687334/130811013-c40646c4-ae20-4520-9922-bd4cc34b7ec9.png)

좌측의 Editor에 내용을 입력하고, No File 부분을 눌러 Cloudinary에 사진을 추가한 후 Add를 누르면 우측의 Preview에 명함이 출력된다.  
또한 추가된 카드에 대한 내용을 Editor에서 수정하는 즉시 Preview에 실시간으로 반영된다.  
이렇게 추가된 내용은 Firebase Realtime Database에 로그인한 사용자의 정보와 함께 저장되기 때문에,  
로그아웃을 했다가 다시 로그인하면 내용이 그대로 남아있게 된다.

<img width="600" src="https://user-images.githubusercontent.com/80687334/130811454-d396bd04-07be-4413-acfd-1a7bf71c8f77.png" />

화면이 작아지면 반응형 css로 인해 Preview가 Editor의 하단으로 내려가게 되고, 각 구역이 스크롤 가능하게 바뀐다.

## 진행상황
210719: 웹페이지 제작을 위한 초기세팅, Firebase를 활용하여 login 및 logout 기본 구현  
210721: 카드 미리보기 기능, 카드 새로 만들기 기능 구현  
210726: 카드 새로 만들기 기능과 업데이트 기능 개선, 카드 삭제 기능 구현  
210727: Cloudinary를 통한 이미지 업로드 기능 구현, Firebase를 활용하여 실시간 동기화 구현  
210730: 성능 개선 및 코드 정리  
