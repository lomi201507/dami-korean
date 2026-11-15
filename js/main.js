/**
 * DAMI KOREAN - Official Main Application Logic
 * 김다미 한국어 선생님 공식 웹사이트 프론트엔드 인터랙션 스크립트
 * Python/백엔드 없는 순수 HTML5, CSS3, Vanilla JavaScript 구현
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileMenu();
  renderProfileCards();
  renderPhilosophy();
  initTodaysKorean();
  renderLearnCategories();
  renderChunks();
  renderDiscourse();
  renderReviews();
  renderAIEducation();
  renderBooks();
  initModal();
  initContactForm();
});

/* ==========================================================================
   1. 헤더 스크롤 & 활성 메뉴 트래킹
   ========================================================================== */
function initHeader() {
  const header = document.getElementById('mainHeader');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    // 50px 이상 스크롤 시 헤더 그림자/배경 강조
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // 스크롤 위치에 따라 메뉴 active 상태 업데이트
    let currentId = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

/* ==========================================================================
   2. 모바일 햄버거 메뉴 토글
   ========================================================================== */
function initMobileMenu() {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!navToggle || !navMenu) return;

  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.classList.toggle('active');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ==========================================================================
   3. 김다미 선생님 프로필 카드 (About Section)
   ========================================================================== */
function renderProfileCards() {
  const container = document.getElementById('aboutGrid');
  if (!container || !DAMI_DATA.profileCards) return;

  container.innerHTML = DAMI_DATA.profileCards.map(item => `
    <div class="about-card">
      <div class="about-card-icon-wrap">
        <span class="about-card-icon">${item.icon}</span>
      </div>
      <span class="about-card-tag">${item.tag}</span>
      <h3 class="about-card-title">${item.title}</h3>
      <p class="about-card-desc">${item.desc}</p>
    </div>
  `).join('');
}

/* ==========================================================================
   4. 교육 철학 (Teaching Philosophy - 01 EASY, 02 REAL, 03 USE)
   ========================================================================== */
function renderPhilosophy() {
  const container = document.getElementById('philosophyGrid');
  if (!container || !DAMI_DATA.philosophy) return;

  container.innerHTML = DAMI_DATA.philosophy.map(item => `
    <div class="philosophy-card">
      <div class="philo-step-badge">${item.step} ${item.keyword}</div>
      <h3 class="philo-card-title">${item.title}</h3>
      <p class="philo-card-desc">${item.desc}</p>
    </div>
  `).join('');
}

/* ==========================================================================
   5. 오늘의 한국어 (Today's Korean) - 랜덤 추천 및 음성 발음 재생
   ========================================================================== */
function initTodaysKorean() {
  const exprEl = document.getElementById('tkExpression');
  const pronEl = document.getElementById('tkPronunciation');
  const meanEl = document.getElementById('tkMeaning');
  const exEl = document.getElementById('tkExample');
  const refreshBtn = document.getElementById('refreshKoreanBtn');
  const audioBtn = document.getElementById('tkAudioBtn');

  if (!exprEl || !DAMI_DATA.todaysKorean || DAMI_DATA.todaysKorean.length === 0) return;

  let currentIndex = 0;

  function showExpression(index) {
    const item = DAMI_DATA.todaysKorean[index];
    if (!item) return;

    exprEl.textContent = item.expression;
    pronEl.textContent = item.pronunciation;
    meanEl.textContent = item.meaning;
    exEl.innerHTML = item.example.replace(/\n/g, '<br>');
  }

  // 초기 표현 표시
  showExpression(currentIndex);

  // '다른 표현 보기' 버튼 클릭 이벤트 (순수 JavaScript 랜덤)
  if (refreshBtn) {
    refreshBtn.addEventListener('click', () => {
      let nextIndex;
      do {
        nextIndex = Math.floor(Math.random() * DAMI_DATA.todaysKorean.length);
      } while (nextIndex === currentIndex && DAMI_DATA.todaysKorean.length > 1);

      currentIndex = nextIndex;
      showExpression(currentIndex);

      // 버튼 회전 효과
      const icon = refreshBtn.querySelector('svg');
      if (icon) {
        icon.style.transform = 'rotate(360deg)';
        icon.style.transition = 'transform 0.4s ease';
        setTimeout(() => {
          icon.style.transform = 'none';
          icon.style.transition = 'none';
        }, 400);
      }
    });
  }

  // 발음 듣기 (Web Speech API)
  if (audioBtn) {
    audioBtn.addEventListener('click', () => {
      speakKorean(exprEl.textContent);
    });
  }
}

/* ==========================================================================
   6. 12개 학습 카테고리 (Learn Korean) + 모달 연동
   ========================================================================== */
function renderLearnCategories() {
  const container = document.getElementById('learnGrid');
  if (!container || !DAMI_DATA.learnCategories) return;

  container.innerHTML = DAMI_DATA.learnCategories.map((item, idx) => `
    <div class="learn-category-card" data-cat-idx="${idx}" tabindex="0" role="button" aria-label="${item.title} 상세 내용 보기">
      <div class="lc-card-header">
        <span class="lc-icon">${item.icon}</span>
        <span class="lc-badge">${item.badge}</span>
      </div>
      <h3 class="lc-title">${item.title} <span class="lc-subtitle">${item.subtitle}</span></h3>
      <p class="lc-desc">${item.desc}</p>
      <div class="lc-footer">
        <span class="lc-more-link">자세히 보기 &rarr;</span>
      </div>
    </div>
  `).join('');

  // 클릭 시 모달 열기 이벤트
  const cards = container.querySelectorAll('.learn-category-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const idx = card.getAttribute('data-cat-idx');
      openCategoryModal(DAMI_DATA.learnCategories[idx]);
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const idx = card.getAttribute('data-cat-idx');
        openCategoryModal(DAMI_DATA.learnCategories[idx]);
      }
    });
  });
}

function openCategoryModal(category) {
  const modal = document.getElementById('learnModal');
  const modalBody = document.getElementById('modalBody');
  if (!modal || !modalBody || !category) return;

  modalBody.innerHTML = `
    <div class="modal-cat-header">
      <span class="modal-cat-icon">${category.icon}</span>
      <div>
        <span class="modal-cat-badge">${category.badge}</span>
        <h2 class="modal-cat-title">${category.title} (${category.subtitle})</h2>
      </div>
    </div>
    
    <p class="modal-cat-summary">${category.desc}</p>

    <div class="modal-detail-block">
      <h4 class="modal-block-title">💡 수업 접근 방식 & 특징</h4>
      <p class="modal-block-text">${category.details.concept}</p>
    </div>

    <div class="modal-detail-block">
      <h4 class="modal-block-title">📚 대표 학습 콘텐츠 및 예시</h4>
      <ul class="modal-example-list">
        ${category.details.examples.map(ex => `<li>${ex}</li>`).join('')}
      </ul>
    </div>

    <div class="modal-detail-block">
      <h4 class="modal-block-title">🎯 김다미 선생님의 지도 포인트</h4>
      <p class="modal-block-text">${category.details.method}</p>
    </div>

    <div class="modal-footer-action">
      <button class="btn btn-primary" onclick="closeModal()">
        확인하고 닫기
      </button>
    </div>
  `;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

/* ==========================================================================
   7. 덩어리 표현 (Korean Chunks) 9종 렌더링
   ========================================================================== */
function renderChunks() {
  const container = document.getElementById('chunksGrid');
  if (!container || !DAMI_DATA.koreanChunks) return;

  container.innerHTML = DAMI_DATA.koreanChunks.map(chunk => `
    <div class="chunk-card">
      <div class="chunk-card-top">
        <span class="chunk-cat-tag">${chunk.category}</span>
        <button class="chunk-audio-btn" data-speak="${chunk.korean}" title="발음 듣기" aria-label="${chunk.korean} 발음 듣기">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
        </button>
      </div>
      <h3 class="chunk-korean">"${chunk.korean}"</h3>
      <p class="chunk-meaning">${chunk.meaning}</p>
      <p class="chunk-desc">${chunk.desc}</p>
      <div class="chunk-dialogue-box">
        <span class="chunk-dialogue-tag">실전 대화</span>
        <div class="chunk-dialogue-text">${chunk.dialogue.replace(/\n/g, '<br>')}</div>
      </div>
    </div>
  `).join('');

  // 덩어리 표현 오디오 버튼 이벤트 연결
  container.querySelectorAll('.chunk-audio-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const text = btn.getAttribute('data-speak');
      speakKorean(text);
    });
  });
}

/* ==========================================================================
   8. 실전 담화 (Real Korean Discourse) - 교재 문장 vs 실제 대화
   ========================================================================== */
function renderDiscourse() {
  const container = document.getElementById('discourseGrid');
  if (!container || !DAMI_DATA.realDiscourse) return;

  container.innerHTML = DAMI_DATA.realDiscourse.topics.map(topic => `
    <div class="discourse-card">
      <h3 class="discourse-topic-title">${topic.title}</h3>
      <div class="discourse-compare-grid">
        <div class="discourse-box textbook-box">
          <span class="box-badge tb-badge">교재의 딱딱한 문장</span>
          <p class="box-text">${topic.textbook.replace(/\n/g, '<br>')}</p>
        </div>
        <div class="discourse-box real-box">
          <span class="box-badge real-badge">한국인의 실제 대화</span>
          <p class="box-text">${topic.realKorean.replace(/\n/g, '<br>')}</p>
        </div>
      </div>
      <div class="discourse-point">
        <span class="point-icon">💡</span>
        <span class="point-text"><strong>배움 포인트:</strong> ${topic.point}</span>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   9. 학생들의 목소리 (Student Reviews)
   ========================================================================== */
function renderReviews() {
  const container = document.getElementById('reviewsGrid');
  if (!container || !DAMI_DATA.reviews) return;

  container.innerHTML = DAMI_DATA.reviews.map(rev => `
    <div class="review-card">
      <div class="review-stars">
        ${'★'.repeat(rev.stars)}
      </div>
      <h3 class="review-quote">"${rev.quote}"</h3>
      <p class="review-content">${rev.content}</p>
      <div class="review-author">
        <div class="review-avatar">${rev.student.charAt(0)}</div>
        <div class="review-meta">
          <strong class="review-name">${rev.student}</strong>
          <span class="review-course">${rev.course}</span>
        </div>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   10. AI × Korean Education 10개 영역
   ========================================================================== */
function renderAIEducation() {
  const container = document.getElementById('aiAreasGrid');
  if (!container || !DAMI_DATA.aiEducation) return;

  container.innerHTML = DAMI_DATA.aiEducation.areas.map(area => `
    <div class="ai-area-card">
      <span class="ai-area-icon">${area.icon}</span>
      <h3 class="ai-area-title">${area.title}</h3>
      <p class="ai-area-desc">${area.desc}</p>
    </div>
  `).join('');
}

/* ==========================================================================
   11. DAMI Korean Books (교재 라인업 + Coming Soon)
   ========================================================================== */
function renderBooks() {
  const container = document.getElementById('booksGrid');
  if (!container || !DAMI_DATA.books) return;

  container.innerHTML = DAMI_DATA.books.list.map(book => `
    <div class="book-card book-${book.color}">
      <div class="book-cover-mockup">
        <span class="book-badge-coming">${book.status}</span>
        <div class="book-cover-inner">
          <span class="book-cover-brand">DAMI KOREAN</span>
          <h4 class="book-cover-title">${book.title}</h4>
          <span class="book-cover-sub">${book.subtitle}</span>
        </div>
      </div>
      <div class="book-info">
        <h3 class="book-title">${book.title}</h3>
        <p class="book-subtitle-text">${book.subtitle}</p>
        <p class="book-desc">${book.desc}</p>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   12. 모달 열기/닫기 공통 처리
   ========================================================================== */
function initModal() {
  const modal = document.getElementById('learnModal');
  const closeBtn = document.getElementById('modalCloseBtn');

  if (!modal) return;

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  // 모달 배경 클릭 시 닫기
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // ESC 키로 닫기
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
}

function closeModal() {
  const modal = document.getElementById('learnModal');
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

/* ==========================================================================
   13. 문의 폼 (Contact Form) 정적 피드백
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');

  if (!form || !feedback) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('userName').value.trim();

    feedback.className = 'form-feedback success';
    feedback.innerHTML = `
      <strong>감사합니다, ${name}님!</strong><br>
      소중한 문의 메시지가 잘 접수되었습니다. 김다미 선생님께서 확인 후 기재해주신 이메일로 빠르게 답변드리겠습니다.
    `;
    form.reset();

    setTimeout(() => {
      feedback.className = 'form-feedback';
      feedback.innerHTML = '';
    }, 6000);
  });
}

/* ==========================================================================
   14. 한국어 음성 읽기 (Web Speech API)
   ========================================================================== */
function speakKorean(text) {
  if (!('speechSynthesis' in window)) {
    alert('현재 브라우저에서는 음성 듣기 기능을 지원하지 않습니다.');
    return;
  }

  // 이전 음성 중단
  window.speechSynthesis.cancel();

  const cleanText = text.replace(/["']/g, '').trim();
  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = 'ko-KR';
  utterance.rate = 0.9; // 외국인 학습자를 위한 차분하고 명확한 속도
  utterance.pitch = 1.0;

  window.speechSynthesis.speak(utterance);
}
