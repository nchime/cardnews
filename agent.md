# Agent

## Identity
- Name: 하네스엔지니어
- Role: AI Systems Architect
- Based on: Harness Engineering Profile

## Goals
1. 하네스 엔지니어링 개념을 카드뉴스 형태로 소개
2. 10장의 슬라이드로 AI 에이전트 제어 기술 전달
3. 소셜 링크를 통한 네트워크 확장

## Tone
- Professional yet approachable
- Korean language with English tech terms
- Clean and modern design

---

# 프로젝트 개요

## 프로젝트명
하네스 엔지니어링 카드뉴스 랜딩페이지

## 파일 구조
```
harness-app/
├── harness-eng.html    # 메인 HTML (10페이지)
├── harness-eng.css     # 스타일시트
├── harness-eng.js      # 인터랙션 스크립트
├── agent.md           # 이 파일 (에이전트 정의 및 프로젝트 지침)
├── setting.md         # 소셜 링크 설정
├── qa.md             # QA 가이드라인
└── project-guide.md  # 프로젝트策划 (legacy)
```

---

# 구현 상세 지침

## 1. HTML (harness-eng.html)

### 기본 구조
```html
<!-- QA: 텍스트에 한자가 포함되지 않았는지 확인 후 저장 (qa.md 참조) -->
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>2026 AI 필수 키워드: 하네스 엔지니어링</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="harness-eng.css">
</head>
<body>
    <div id="app">
        <div class="scrolling-container" id="scroller">
            <!-- 페이지들 -->
        </div>
        <div class="page-indicator" id="pageIndicator"></div>
    </div>
    <script src="harness-eng.js"></script>
</body>
</html>
```

### 페이지 구성 (10페이지)

1. **intro-page**: 배너, 제목, 부제, 작성자, 스크롤 힌트
2. **card-page 01**: 하네스 엔지니어링이란?
3. **card-page 02**: 왜 지금 하네스 엔지니어링인가?
4. **card-page 03**: 하네스 엔지니어링 = Agent
5. **card-page 04**: 핵심 구성 3가지
6. **card-page 05**: 개발 방법론
7. **card-page 06**: 3단계 개발 방법론
8. **card-page 07**: 자동 교정
9. **card-page 08**: 하네스 환경 시각화
10. **card-page 09**: 성공 사례

### 마지막 페이지 (final-page)
- 결론 텍스트
- 아바타 이미지: https://nchime.github.io/static/images/nchime_avatar.jpg
- 소셜 링크 (6개)

### 소셜 링크 (setting.md 참조)
| 서비스 | URL | 아이콘 |
|--------|-----|--------|
| GitHub | https://github.com/nchime | SVG 아이콘 |
| LinkedIn | https://www.linkedin.com/in/nchime | SVG 아이콘 |
| Thread | https://www.threads.com/@nchime72 | SVG 아이콘 |
| Facebook | https://www.facebook.com/neochime | SVG 아이콘 |
| Blog | https://nchime.github.io/ | B 글자 |
| Email | nchime@gmail.com | SVG 아이콘 |

SVG 아이콘 크기: width="20" height="20" fill="currentColor"

---

## 2. CSS (harness-eng.css)

### CSS 변수
```css
:root {
    --primary: #1a1a2e;
    --secondary: #16213e;
    --accent: #e94560;
    --text: #333;
    --text-light: #666;
    --bg: #faf9f7;
    --card-bg: #fff;
    --quote-bg: #f5f5f5;
}
```

### 핵심 스타일

1. **scrolling-container**: 가로 스크롤, snap 타입
2. **page**: 100vw 너비, 100vh 높이, flex центрирование
3. **intro-page**: gradient 배경 (primary → secondary)
4. **card-page**: 흰색 배경
5. **final-page**: primary 배경
6. **card-quote**: 회색 배경, 좌측 accent 테두리
7. **highlight/tip**: 배경색 구분
8. **social-links**: flex 정렬, 원형 버튼
9. **blog-icon**: Georgia 폰트, Bold

---

## 3. JavaScript (harness-eng.js)

### 기능

1. **initPageIndicator()**
   - 페이지 수만큼 dot 생성
   - scroll 이벤트 리스너로 현재 페이지 추적
   - dot 클릭 시 해당 페이지로 스크롤

2. **initDotNavigation()**
   - 키보드: ArrowRight, ArrowLeft, 스페이스바

3. **initMouseDrag()**
   - 마우스 드래그로 페이지 이동
   - cursor: grab → grabbing

---

## QA 검사 (qa.md 참조)

### 필수 확인
- [ ] 한자 없음
- [ ] 띄어쓰기 정상
- [ ] 문장 자연스러움

### 실행 전 체크리스트
1. 텍스트 전체를 검토하여 한자 포함 여부 확인
2. 띄어쓰기 검사
3. 문장 검사
4. 파일 저장 전 최종 확인

---

## 실행 방법

```bash
python -m http.server 8000
```

브라우저에서 http://localhost:8000/harness-eng.html 접속

---

## 커스터마이zej

### 텍스트 수정
- 각 카드별 card-body의 p 태그 내용
- contact 버튼 링크

### 색상 수정
- harness-eng.css의 :root 변수 값 변경

### 소셜 링크 수정
- setting.md 파일 참조하여 링크 변경
- HTML의 href 값 업데이트