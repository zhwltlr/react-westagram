# <p align="center">소셜 네트워크 서비스를 모델링 한 프로젝트</p>

<p align="center"> 📆 2022.10.31~ 2022.11.11 2주간
<p>활용 기술: React</p>

## 배포주소

<a href="https://zhwltlr.github.io/react-westagram/">https://zhwltlr.github.io/react-westagram/</a>

<video src="https://user-images.githubusercontent.com/100506719/211497290-16b61f97-cbfb-43c9-8c47-feb374ba6f0b.mp4" align="center" width="1000px"></video>

## 구현 목적

- 많이 사용하는 SNS 서비스를 모델링하여 유저의 활동을 구현하였습니다.

## 구현 기능

#### <b>1. 하나의 컴포넌트로 관리 가능한 feed 페이지 구현</b>

- 반복되는 UI를 컴포넌트로 관리하여 코드의 가독성

<img src="https://user-images.githubusercontent.com/100506719/211497415-40e55e48-3917-4523-a379-06022aec1e2d.png" align="center" />

#### <b>2. 사용자의 활동을 도와주는 댓글, 좋아요, 삭제 기능 구현</b>

- 댓글 input 값을 저장하고 commentArr에 반영하여 등록한 댓글을 확인할 수 있게 하였습니다.

#### <b>3. 데이터를 filtering하여 검색 결과를 찾아주는 기능 구현</b>

- 등록된 userID와 사용자의 입력값을 includes로 비교하며 찾는 id와 일치하는 id를 보여주게 구현
- 일치하는 id가 없을 경우에는 filtering 박스가 보이지 않게 구현
