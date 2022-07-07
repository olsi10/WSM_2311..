# HTML 기본 틀

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

# CSS 기본틀

```css
selector {
  property: value; /* decalaruation */
}
```

---

<br />

# CSS 선택자

- '\*' : 전체 선택자
- tag : 태그 선택자 (a, h1, img ...)
- #id : 아이디 선택자
- .class : 클래스 선택자

### 자손 선택자

- '>' : 자식 (body > li)
- 띄어쓰기 : 자손 (body li)
- , : 함께
- - : 마주하는 첫 자매
- ~ : 마주하는 모든 자매

---

<br />

```css
property: value;

color: crimson;

text-decoration: underline;

font-size: 50px;

text-align: center;

padding

border-width: 5px;

border-style: solid;

border-color: red;

border: 5px solid red;    /* 순서 중요하지 않음 */

margin
```

<br />

**우선순위: 포괄 < 구체, 위 < 아래, HTML TAG < class < id < (HTML 파일 안 태그의 style 속성) <<< !important**

우선순위 : 태그 < 클래스
우선순위 : 동급에 있는 클래스 위 < 아래

---

<br />

# 크롬 개발자 도구

- F12, ctrl + shift + i

<br />

# box model

display: block/inline;

<br />

### block

h1

<br />
### inline

a

---

link:css

하위 목록

body > li, body li, ,, +, ~, 속성

// 미션: 아이브 멤버들 목록에만 배경색깔 hotpink

css selector 찾기: 개발자도구<br />
->![image](https://user-images.githubusercontent.com/87300199/177863465-2afb25fe-d556-4fdf-8f49-e4466e5b0f2c.png)
![image](https://user-images.githubusercontent.com/87300199/177863500-0488026c-ea03-4db6-bd32-400aab5dbded.png)

prettier 설치, formatOnSave: [v]

크롬 팁: 다음, 네이버 검색, 유튜브 검색, 사전 검색, 이미지 검색

<br />
<br />

# 반응형 개요 (\*)

- 반응형 <br />
  반응형 사이트란 화면의 가로, 세로를 줄일 때 사이트 화면이 사용자가 편하게 변하는 사이트를 말한다.

- 스크린 크기의 역사 <br />
  = 2007 iphone이 나온 이래로 여러 해상도를 가진 단말기들이 나왔다. <br />
  = 매번 단말기가 새로 나오면 또 만들어야하니까
  반응형웹사이트가 나왔다.

- m.[주소] 를 하면 모바일 버전으로 볼 수 있음.
  모바일 버전과 pc 버전은 따로 있음.

- 반응형웹사이트 장점 <br />
  한 소스로 다양한 스크린 지원 <br />
  검색엔진 최적화<br />
  유지보수 쉬움<br />
  미래 대비<br />
  모바일 점유율 증가

- 호스팅 <br />
  직접 운영하는 서버 <br />
  호스팅 서버<br />
  클라우드 호스팅

- 반응형 기술 <br />
  반응형 웹 제작에 필요한 기능<br />
  화면 크기나 환경의 변화 감지하는 기술<br />
  화면 크기를 정확하게 제어하는 기술<br />
  감지한 화면 크기로 변환하는 기술<br />

px → %

뷰포트: 화면을 제어

화면에 보이는 영역을 제어

미디어 쿼리: 화면의 크기나 환경을 감지하여 구조를 바꿈

어떤 종류의 미디어?

미디어의 화면 크기는 몇이야?

<br />

png : 픽셀 이미지 파일
svg : 벡터 이미지 파일

---

<br />

# 반응형 속성

flex-direction : 방향
justify-content : 메인 축의 배치
align-items : 교차축의 배치
order : 자기자리에서 순서 변경
align-self : 그 아이템 교차축의 배치
flex-wrap : 내려쓰기
flex-flow : flex direction flex-wrap
align-content : 내려썼을 때 교차 축의 배치

% : 부모의 %
vh : viewport의 height
vw : viewport의 width
rem : root가 되는 크기 어디서든 16px 2rem = 32px
em : 부모의 폰트 사이즈를 기준으로 함 16px

---

<br />
<br />

# WSM 과목 필수 암기

- html 기본 태그
- css 사용법, 선택자, html과 연결하는 법, 특정 요소 속성 바꾸기
- 크롬 개발자 도구, 크롬 검색 팁
- vs code 확장앱, prettier 설치 formatOnSave : 체크
- box model

---

- 반응형 개요 : 스크린 크기, PC, 모바일, n-screen
- 역사 : 2007 아이폰, m 사이트, 아이패드, 다양한 해상도
- 반응형 장점
- 호스팅 뜻, 종류
- 반응형 기능
- 뷰포트, 미디어 쿼리

---

- icon 적용법 (Feather icons, Fontawesome, Flatiocon uicons, Boxicons)
- 사용법 : zip 압축풀기, 링크 걸어서 연결하기

---

- css flex (개구리, flex-grow, flex-shrink, flex-basis)
- css 단위 (절대, 상대 단위)

---

- 뷰포트 : (태그, 의미)
- 미디어 쿼리 : (태그, 의미, 조건, 순서)

---

# 문제 예상

- 반응형 역사 (객)
- 반응형 장점 (서)
- 요소 보여주고 조건에 맞게 속성 바꾸기 (서)
- 절대, 상대 단위 계산 (객)
- icon 적용법 (객)
- vs code 사용법 (객)
- 뷰포트, 미디어 쿼리 조건에 맞게 쓰기 (서)
