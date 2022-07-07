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
->

prettier 설치, formatOnSave: [v]

크롬 팁: 다음, 네이버 검색, 유튜브 검색, 사전 검색, 이미지 검색
