# Open Graph 설정 가이드

링크 공유 시 소셜 미디어에서 썸네일, 제목, 설명이 표시되도록 하는 메타 태그 설정입니다.

---

## Open Graph 메타 태그

### 필수 속성

| 속성 | 설명 | 예시값 |
|------|------|--------|
| og:title | 웹페이지 제목 | 2026 AI 필수 키워드: 하네스 엔지니어링 |
| og:description | 웹페이지 설명 (2-4문장) | AI 코딩 에이전트를 안전하게 제어하는 기술 |
| og:image | 썸네일 이미지 URL (1200x630 이상 권장) | https://nchime.github.io/static/images/nchime_avatar.jpg |
| og:url | 웹페이지 정규 URL | https://nchime.github.io/cardnews/ |
| og:type | 콘텐츠 유형 | website, article, blog 등 |
| og:site_name | 사이트 이름 | 하네스 엔지니어링 |

### 선택 속성

| 속성 | 설명 | 예시값 |
|------|------|--------|
| og:locale | 언어 코드 | ko_KR, en_US |
| og:article:author | 글쓴이 | https://github.com/nchime |
| og:article:published_time |.publish 시간 | 2026-05-11 |

---

## Twitter Card 메타 태그

### 속성

| 속성 | 설명 | 예시값 |
|------|------|--------|
| twitter:card | 카드 유형 | summary, summary_large_image |
| twitter:title | 트위터용 제목 | (og:title과 동일) |
| twitter:description | 트위터용 설명 | (og:description과 동일) |
| twitter:image | 트위터용 썸네일 | (og:image와 동일) |
| twitter:site | 트위터 핸들 | @nchime72 |

---

## HTML 적용 예시

```html
<head>
    <title>2026 AI 필수 키워드: 하네스 엔지니어링</title>
    <meta name="description" content="AI 코딩 에이전트가 안전하고 예측 가능하게 일할 수 있도록 시스템을 설계하는 기술">
    
    <!-- Open Graph -->
    <meta property="og:title" content="2026 AI 필수 키워드: 하네스 엔지니어링">
    <meta property="og:description" content="AI 코딩 에이전트를 안전하게 제어하는 기술 - 현업 개발자가 전하는 하네스 엔지니어링의 모든 것">
    <meta property="og:image" content="https://nchime.github.io/static/images/nchime_avatar.jpg">
    <meta property="og:url" content="https://nchime.github.io/cardnews/">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="하네스 엔지니어링">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="2026 AI 필수 키워드: 하네스 엔지니어링">
    <meta name="twitter:description" content="AI 코딩 에이전트를 안전하게 제어하는 기술">
    <meta name="twitter:image" content="https://nchime.github.io/static/images/nchime_avatar.jpg">
</head>
```

---

## 이미지 가이드라인

### 권장 사항
- 해상도: 1200x630 이상 (최소 600x315)
- 파일 형식: JPG, PNG
- 파일 크기: 1MB 이하
- 텍스트가 포함된 이미지는 피하기

---

## 검증 도구

- Facebook: https://developers.facebook.com/tools/debug/
- Twitter: https://cards-dev.twitter.com/validator
- Google: https://search.google.com/search-console

---

## 프로젝트 적용 현황

| 파일 | 적용 여부 |
|------|----------|
| index.html | ✅ 완료 |
| harness-eng.html | 파일 없음 (index.html 사용)