# IT취업 조언 카드뉴스 랜딩페이지

현업 개발자가 IT취업준비생에게 전하는 7가지 조언을 페이지 단위 스크롤 방식으로 제공하는 웹페이지입니다.

---

## 개요

- **스타일**: 카드뉴스 (1페이지씩 좌→우 슬라이드)
- **총 페이지**: 9개 (인트로 1 + 카드 7 + 마무리 1)
- **폰트**: Noto Serif KR (Google Fonts)
- **색상테마**: 깊은 파랑 + 빨강accent (#1a1a2e, #e94560)

---

## 파일 구성

```
harness-app/
├── index.html    # 메인 구조
├── index.css     # 스타일
├── index.js      # 인터랙션
└── project-guide.md  # 이 파일
```

---

## index.html 구성

### 구조
- `div#app` > `div#scroller` (가로 스크롤 컨테이너)
- 각 페이지는 `section.page` (flex: 0 0 100vw)

### 페이지 순서

1. **intro-page** (첫 화면)
   - badge (Career)
   - h1 타이틀: "IT취업준비생에게 하고 싶은 조언"
   - p 서브타이틀: "현업 개발자가 전하는 현실적인 조언"
   - author 영역: avatar + 이름/역할
   - nav-hint: "우측으로 슬라이드" 표시

2. **card-page** (7개)
   - 카드마다 card-number (01~07)
   - card-title (제목 2줄)
   - card-quote (인용문, 배경 회색, 좌측 accent 테두리)
   - card-body (본문, highlight/tip 스타일 있음)

   카드 내용:
   - 01: IT 기초 역량 (알고리즘, 자료구조, 네트워크)
   - 02: 프로젝트 경험 및 포트폴리오
   - 03: 커뮤니케이션 능력
   - 04: 네트워킹 및 자기 브랜딩
   - 05: 대기업 vs 스타트업
   - 06: 자격증 취득 조언
   - 07: AI 시대 개발자 전망

3. **final-page** (마무리)
   - final-content: 마무리 메시지 + "화이팅!"
   - contact-info: GitHub/Email/Blog 버튼
   - copyright

4. **page-indicator** (우측 점 네비게이션)
   - div.page-indicator (고정 위치)
   - 각 페이지마다 div.dot (클릭 가능)

---

## index.css 스타일

### CSS 변수 (:root)
- `--primary: #1a1a2e` (깊은 파랑)
- `--secondary: #16213e` (더 진한 파랑)
- `--accent: #e94560` (빨강)
- `--text: #333`
- `--text-light: #666`
- `--bg: #faf9f7` (배경 베이지)
- `--card-bg: #fff`
- `--quote-bg: #f5f5f5`

### 주요 스타일

**scrolling-container**
- display: flex
- width/height: 100vw/100vh
- overflow-x: scroll, overflow-y: hidden
- scroll-snap-type: x mandatory
- scroll-behavior: smooth
- cursor: grab

**page**
- flex: 0 0 100vw (화면 너비)
- height: 100vh
- scroll-snap-align: start
- justify-content/align-items: center

**intro-page**
- background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)
- color: #fff

**card-page**
- background: var(--bg)
- card-content (max-width: 480px)

**card-quote**
- background: var(--quote-bg)
- border-left: 3px solid var(--accent)
- font-style: italic

**card-body .highlight**
- background: rgba(233,69,96,0.08~0.15) 그라데이션
- padding: 12px 16px
- border-radius: 8px

**card-body .tip**
- background: rgba(22,33,62,0.05~0.1) 그라데이션
- border-left: 3px solid var(--secondary)

**final-page**
- background: var(--primary)
- color: #fff

**page-indicator**
- position: fixed
- right: 24px, top: 50%
- flex-direction: column, gap: 12px

**dot**
- width/height: 10px
- border-radius: 50%
- background: rgba(0,0,0,0.2)
- active일 때: background: var(--accent), transform: scale(1.3)

**반응형**
- @media (max-width: 480px): 폰트 크기 축소

---

## index.js 기능

### 1. initPageIndicator()
- pageIndicator div 생성
- 페이지 수만큼 dot 생성
- scroll 이벤트 리스너로 현재 페이지 추적
- dot 클릭시 해당 페이지로 smooth 스크롤

### 2. initDotNavigation()
- 키보드 이벤트 리스너
- ArrowRight 또는 스페이스바: 다음 페이지
- ArrowLeft: 이전 페이지

### 3. initMouseDrag()
- mousedown: isDown=true, startX 기록
- mousemove: isDown일 때 드래그 거리 계산, scrollLeft 업데이트
- mouseleave/mouseup: isDown=false
- cursor: grab → grabbing 변경

---

## 실행

```bash
python -m http.server 8000
```

http://localhost:8000 에서 확인

---

## 사용자 입력 가능 부분

### HTML (index.html)
- 각 카드별 텍스트 내용
- contact 버튼 링크
- 이름, 역할 변경

### CSS (index.css)
- :root 색상 변경
- 폰트 변경 (font-family)

### JS (index.js)
- 스킬 없음 (고정)