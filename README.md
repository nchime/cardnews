# 하네스 엔지니어링 카드뉴스

2026 AI 필수 키워드 "하네스 엔지니어링"을 소개하는 카드뉴스 랜딩페이지입니다.

## 파일 구조

```
harness-app/
├── harness-eng.html    # 메인 HTML (10페이지)
├── harness-eng.css     # 스타일시트
├── harness-eng.js      # 인터랙션 스크립트
├── agent.md           # 에이전트 정의 + 구현 지침
├── setting.md         # 소셜 링크 설정
├── qa.md              # QA 가이드라인
└── README.md          # 이 파일
```

## 슬라이드 구성 (10장)

1. Intro - 2026 AI 필수 키워드
2. 하네스 엔지니어링이란?
3. 왜 지금 하네스 엔지니어링인가?
4. 하네스 엔지니어링 = Agent
5. 핵심 구성 3가지
6. 개발 방법론: Humans Steer, Agents Execute
7. 3단계 개발 방법론
8. 실패를 막는 자동 교정
9. 하네스 환경 시각화
10. 성공 사례: Stripe의 1,300개 AI PR

## 로컬 실행

```bash
python -m http.server 8000
```

브라우저에서 http://localhost:8000/harness-eng.html 접속

## 기능

- 좌→우 슬라이드 방식 페이지 이동
- 마우스 드래그로 페이지 이동
- 키보드 (← →, 스페이스바) 지원
- 우측 점 네비게이션 클릭 이동

## 소셜 링크

| 서비스 | URL |
|--------|-----|
| GitHub | https://github.com/nchime |
| LinkedIn | https://www.linkedin.com/in/nchime |
| Thread | https://www.threads.com/@nchime72 |
| Facebook | https://www.facebook.com/neochime |
| Blog | https://nchime.github.io/ |
| Email | nchime@gmail.com |

## QA 검사

qa.md 파일을 참조하여 텍스트 품질을 유지합니다:
- 한자 사용 금지
- 올바른 띄어쓰기
- 한글 문법 정상

## 커스터마이징

### 텍스트 수정
- harness-eng.html의 각 카드 내용 수정

### 색상 수정
- harness-eng.css의 :root 변수 변경

### 소셜 링크 수정
- setting.md 참조하여 링크 변경