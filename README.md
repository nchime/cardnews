# 개발자 프로필 랜딩페이지

하네스엔지니어링 개발자 프로필 페이지입니다.

## 📁 파일 구조

```
harness-app/
├── index.html      # 메인 HTML 페이지
├── index.css       # 스타일시트
├── index.js       # 인터랙션 및 애니메이션 스크립트
├── agent.md       # 에이전트 정의 파일
├── skill.md       # 기술 스택 상세 설명
├── README.md      # 이 파일
└── _workspace/    # 작업 디렉토리
```

## 🚀 로컬 실행 방법

### 방법 1: Python Simple HTTP Server (권장)

```bash
# Python 3
python -m http.server 8000

# 또는
python3 -m http.server 8000
```

브라우저에서 http://localhost:8000 접속

### 방법 2: 다른 포트 사용

```bash
python -m http.server 3000
# → http://localhost:3000
```

### 방법 3: VS Code Live Server extension 사용

1. VS Code에서 폴더 열기
2. `index.html` 우클릭
3. "Open with Live Server" 선택

---

## 📝 파일 설명

### index.html
메인 페이지 구조
- Hero 섹션 (이름, 타이틀)
- About Me 섹션 (자기소개)
- Skills 섹션 (기술 스택)
- Projects 섹션 (프로젝트)
- Experience 섹션 (경력)
- Contact 섹션 (연락처)

### index.css
모던 개발자 테마 스타일
- 색상: Deep Blue & Teal
- 반응형 디자인
- 스크롤 애니메이션

### index.js
인터랙션 기능
- 스킬 태그 동적 생성
- 스크롤 reveals 애니메이션
- 파티클 배경 효과

### agent.md
프로필 기본 정보 정의

### skill.md
기술 스택 상세 설명 (수정 가능)

---

## 🎨 커스터마이징

### 색상 변경
`index.css`의 `:root` 섹션에서 수정:
```css
--primary-color: #2d3748;
--secondary-color: #319795;
--accent-color: #4fd1c5;
```

### 섹션 내용 수정
`index.html`의 각 섹션에서 직접 수정

### 스킬 태그 수정
`index.js`의 `skills` 배열에서 추가/제거:
```javascript
const skills = ['JavaScript', 'TypeScript', ...];
```

---

## 📄 라이선스

MIT License

---

Built with **Harness Engineering** ❤️