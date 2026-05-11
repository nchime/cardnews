# 설정 파일 - 소셜 링크

하네스 엔지니어링 카드뉴스의 소셜 링크 설정입니다.

---

## 프로필 정보

| 항목 | 값 |
|------|-----|
| 이름 | 하네스엔지니어 |
| 역할 | AI Systems Architect |
| 아바타 | https://nchime.github.io/static/images/nchime_avatar.jpg |

---

## 소셜 링크

| 서비스 | URL | 아이콘 |
|--------|-----|--------|
| GitHub | https://github.com/nchime | GitHub 아이콘 |
| LinkedIn | https://www.linkedin.com/in/nchime | LinkedIn 아이콘 |
| Thread | https://www.threads.com/@nchime72 | Thread 아이콘 |
| Facebook | https://www.facebook.com/neochime | Facebook 아이콘 |
| Blog | https://nchime.github.io/ | B 글자 |
| Email | nchime@gmail.com | 이메일 아이콘 |

---

## HTML 적용 코드

```html
<div class="social-links">
    <a href="https://github.com/nchime" class="social-btn" title="GitHub" target="_blank">
        <svg>...</svg>
    </a>
    <a href="https://www.linkedin.com/in/nchime" class="social-btn" title="LinkedIn" target="_blank">
        <svg>...</svg>
    </a>
    <a href="https://www.threads.com/@nchime72" class="social-btn" title="Thread" target="_blank">
        <svg>...</svg>
    </a>
    <a href="https://www.facebook.com/neochime" class="social-btn" title="Facebook" target="_blank">
        <svg>...</svg>
    </a>
    <a href="https://nchime.github.io/" class="social-btn" title="Blog" target="_blank">
        <span class="blog-icon">B</span>
    </a>
    <a href="mailto:nchime@gmail.com" class="social-btn" title="Email">
        <svg>...</svg>
    </a>
</div>
```

---

## CSS 스타일

```css
.social-links {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 20px 0 40px;
}

.social-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.3);
    color: #fff;
    transition: all 0.3s ease;
}

.social-btn:hover {
    background: var(--accent);
    border-color: var(--accent);
    transform: translateY(-3px);
}

.blog-icon {
    font-family: Georgia, serif;
    font-size: 1.3rem;
    font-weight: bold;
}
```

---

## 업데이트 시

1. 이 파일을 참조하여 링크 수정
2. HTML의 href 값을 변경
3. 테스트