# 하네스 엔지니어링 카드뉴스

AI 코딩 에이전트를 안전하고 예측 가능하게 제어하는 시스템을 설계하는 기술에 대한 카드뉴스입니다.

---

## 개요

- **스타일**: 카드뉴스 (1페이지씩 좌→우 슬라이드)
- **총 페이지**: 10개 (인트로 1 + 본문 8 + 마무리 1)
- **대상**: 개발자, AI 엔지니어, 기술 리더, CTO
- **폰트**: Noto Serif KR (Google Fonts)
- **색상테마**: 깊은 파랑 + 빨강accent (#1a1a2e, #e94560)

---

## 파일 구성

```
harness-app/
├── harness-eng.html   # 메인 HTML
├── harness-eng.css    # 스타일
├── harness-eng.js     # 인터랙션
└── harness-eng.md     # 이 파일 (계획)
```

---

## 카드 구성 (10장)

### 1. intro-page (첫 화면)
- badge: "AI 2026"
- h1: "2026 AI 필수 키워드 하네스 엔지니어링"
- p subtitle: "AI 코딩 에이전트를 안전하게 제어하는 기술"
- author: avatar + 이름/역할
- nav-hint: "우측으로 슬라이드"

### 2. card-page: 하네스 엔지니어링이란?
- card-number: "01"
- card-title: "하네스 엔지니어링이란?"
- card-quote: "말의 고삐나 안장으로 안전을 설계하다"
- card-body:
  - 하네스: 말의 고삐나 안장 의미
  - 엔지니어링: AI 에이전트가 안전하게 일하도록 환경 설계
  - highlight: 단순히 더 좋은 모델을 기다리는 것이 아니라 시스템 개선으로 성능 2배

### 3. card-page: 왜 지금 하네스 엔지니어링인가?
- card-number: "02"
- card-title: "왜 지금 하네스 엔지니어링인가?"
- card-quote: "AI 모델이 좋아도 제어 시스템 없이는 실수를 반복한다"
- card-body:
  - AI 모델 성능 좋아도 제어 없이는 돌발 행동 반복
  - "에이전트가 실수할 때마다 시스템을 고쳐라"
  - highlight: 1000페이지 매뉴얼 대신 구조화된 지도

### 4. card-page: 하네스 엔지니어링 = Agent
- card-number: "03"
- card-title: "하네스 엔지니어링 = Agent"
- card-quote: "모델(말) + 하네스(고삐) = 완벽한 에이전트"
- card-body:
  - 모델(AI): 지능과 판단력
  - 하네스(구조): 컨텍스트, 규칙, 도구, 피드백 루프
  - tip: 모델 변경 없이 하네스 설계만으로 성능 상승

### 5. card-page: 핵심 구성 3가지
- card-number: "04"
- card-title: "핵심 구성 3가지"
- card-quote: "도구, 환경, 제약을 한자리에서 관리"
- card-body:
  - 컨텍스트: MCP 등을 통한 실시간 정보 전달
  - 도구: 코드를 수정, 테스트, 반영하는 실행 루프
  - highlight: AGENTS.md로 자유 행동 제한

### 6. card-page: 개발 방법론
- card-number: "05"
- card-title: "Humans Steer, Agents Execute"
- card-quote: "사람은 감독자, AI는 실행자"
- card-body:
  - 사람: 환경 설계자(감독자)로 전환
  - 사람이 방향 설정, AI가 코딩/테스트 실행
  - tip: AGENTS.md에 컨벤션, 규칙 명시

### 7. card-page: 3단계 개발 방법론
- card-number: "06"
- card-title: "3단계 개발 방법론"
- card-quote: "정보 → 실행 → 피드백, 완전한 루프 시스템"
- card-body:
  - 1단계: docs 폴더에 구조화된 지식 배치
  - 2단계: 커스텀 린터로 자동화된 검증
  - highlight: AI 실수 시 환경을 고쳐 반복 방지

### 8. card-page: 자동 교정
- card-number: "07"
- card-title: "실패를 막는 자동 교정"
- card-quote: "랄프 윅검 루프: 실수를 자동 교정하는 시스템"
- card-body:
  - 에러 발생 시 AI가 자동으로 재작업
  - 수정 → 검토 → 테스트 반복
  - tip: Simpsons의 랄프 윅검 캐릭터처럼 반복 교정

### 9. card-page: 하네스 환경 시각화
- card-number: "08"
- card-title: "하네스 환경 시각화"
- card-quote: "실제 운영에서 어떻게 활용하는가?"
- card-body:
  - Codebase: Cursor Rules로 규칙 버전 관리
  - DevOps: CI/CD와 결합하여 PR 자동 생성
  - tip: 모노레포로 전체 시스템 구조 파악

### 10. card-page: 성공 사례
- card-number: "09"
- card-title: "성공 사례: Stripe의 1,300개 AI PR"
- card-quote: "체계적인 시스템이 대규모 작업을 가능하게 한다"
- card-body:
  - Stripe: 주당 1,300개 AI 생성 PR 안정적 처리
  - highlight: 체계적인 시스템 설계가 모델 성능보다 중요

### 11. final-page (마무리)
- final-content:
  - h2: "결론"
  - p: "단순 프롬프트에서 하네스 환경 구축으로"
  - "AI를 제어하는 시스템 구축이 미래 개발의 핵심"
  - cheer: "화이팅!"
- contact-info: AGENTS.md, 문서, Contact 버튼
- copyright

---

## CSS/JS

기존 harness-eng.css, harness-eng.js와 동일합니다 (같은 구조 사용)

---

## 실행

```bash
python -m http.server 8000
```

http://localhost:8000/harness-eng.html 에서 확인

---

## 커스터마이징

### 텍스트 수정
- 각 card-body의 내용
- contact 버튼 링크

### 색상 수정
- harness-eng.css의 :root 변수