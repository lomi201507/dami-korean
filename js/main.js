/**
 * DAMI KOREAN - Official Main Application Logic
 * 김다미 한국어 선생님 공식 웹사이트 프론트엔드 인터랙션 스크립트
 * Python/백엔드 없는 순수 HTML5, CSS3, Vanilla JavaScript 구현
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileMenu();
  initAboutVideo();
  renderProfileCards();
  renderPhilosophy();
  initTodaysKorean();
  renderLearnCategories();
  renderChunks();
  renderDiscourse();
  renderReviews();
  renderRollingPapers();
  renderAIEducation();
  renderStorybooks();
  renderWebApps();
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
   9.5. 학생들의 손글씨 롤링페이퍼 (Rolling Papers) 갤러리 & 모달 확대
   ========================================================================== */
function renderRollingPapers() {
  const container = document.getElementById('rollingPaperGrid');
  if (!container || !DAMI_DATA.rollingPapers) return;

  container.innerHTML = DAMI_DATA.rollingPapers.map((paper, idx) => `
    <div class="rolling-paper-card paper-color-${paper.color}" data-paper-idx="${idx}">
      <div class="rp-thumb-box">
        <img src="${paper.image}" alt="${paper.title}" class="rp-thumb-img">
        <div class="rp-zoom-overlay">
          <span class="rp-zoom-icon">🔍</span>
          <span class="rp-zoom-text">손편지 크게 보기</span>
        </div>
      </div>
      <div class="rp-content">
        <div class="rp-badge-row">
          <span class="rp-num-badge">${paper.number}</span>
          <span class="rp-tag-badge">${paper.tag}</span>
        </div>
        <h3 class="rp-card-title">${paper.title}</h3>
        <p class="rp-card-highlight">${paper.highlight}</p>
        <p class="rp-card-summary">${paper.summary}</p>
        <div class="rp-card-action">
          <span class="rp-read-link">원본 편지 읽기 &rarr;</span>
        </div>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.rolling-paper-card').forEach(card => {
    card.addEventListener('click', () => {
      const idx = card.getAttribute('data-paper-idx');
      openPaperModal(DAMI_DATA.rollingPapers[idx]);
    });
  });
}

function openPaperModal(paper) {
  const modal = document.getElementById('paperModal');
  const modalBody = document.getElementById('paperModalBody');
  if (!modal || !modalBody || !paper) return;

  modalBody.innerHTML = `
    <div class="paper-modal-header">
      <div class="rp-badge-row">
        <span class="rp-num-badge">${paper.number}</span>
        <span class="rp-tag-badge">${paper.tag}</span>
      </div>
      <h2 class="paper-modal-title">${paper.title}</h2>
      <p class="paper-modal-highlight">${paper.highlight}</p>
      <p class="paper-modal-summary">${paper.summary}</p>
    </div>

    <div class="paper-modal-viewer">
      <img src="${paper.image}" alt="${paper.title}" class="paper-modal-full-img">
    </div>

    <div class="modal-footer-action">
      <button class="btn btn-primary" onclick="closePaperModal()">
        확인하고 닫기
      </button>
    </div>
  `;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closePaperModal() {
  const modal = document.getElementById('paperModal');
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
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
   11. 이야기북 시리즈 (Storybook Series) 렌더링 & 인터랙티브 뷰어
   ========================================================================== */
function renderStorybooks() {
  const container = document.getElementById('storybookGrid');
  if (!container || !DAMI_DATA.storybooks) return;

  container.innerHTML = DAMI_DATA.storybooks.map((story, idx) => `
    <div class="storybook-card" data-story-idx="${idx}">
      <div class="sb-card-thumb-wrap">
        <img src="${story.image}" alt="${story.title}" class="sb-card-thumb">
        <span class="sb-episode-badge">${story.episode}</span>
        <span class="sb-level-badge">${story.badge}</span>
      </div>
      <div class="sb-card-body">
        <span class="sb-rec-level">${story.level}</span>
        <h3 class="sb-card-title">${story.title}</h3>
        <p class="sb-card-summary">${story.summary}</p>
        <div class="sb-card-footer">
          <button class="btn btn-primary btn-sm sb-read-btn" data-story-idx="${idx}">
            <span>웹툰 읽고 추리하기</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </div>
  `).join('');

  // 클릭 이벤트 연결
  container.querySelectorAll('.sb-read-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const idx = btn.getAttribute('data-story-idx');
      openStorybookModal(DAMI_DATA.storybooks[idx]);
    });
  });

  container.querySelectorAll('.storybook-card').forEach(card => {
    card.addEventListener('click', () => {
      const idx = card.getAttribute('data-story-idx');
      openStorybookModal(DAMI_DATA.storybooks[idx]);
    });
  });
}

function openStorybookModal(story) {
  const modal = document.getElementById('storybookModal');
  const modalBody = document.getElementById('storybookModalBody');
  if (!modal || !modalBody || !story) return;

  modalBody.innerHTML = `
    <div class="sb-modal-header">
      <div class="sb-modal-badges">
        <span class="sb-episode-badge">${story.episode}</span>
        <span class="sb-level-badge">${story.badge}</span>
      </div>
      <h2 class="sb-modal-title">${story.title}</h2>
      <p class="sb-modal-summary">${story.summary}</p>
    </div>

    <!-- 1. 만화 웹툰 이미지 뷰어 -->
    <div class="sb-viewer-img-box">
      <img src="${story.image}" alt="${story.title}" class="sb-viewer-img">
    </div>

    <!-- 2. 린의 단서 수첩 -->
    <div class="sb-clues-section">
      <h3 class="sb-section-subtitle">📝 린의 단서 수첩</h3>
      <div class="sb-clues-notebook">
        ${story.clues.map(c => `
          <div class="sb-clue-item">
            <span class="sb-clue-check">✔</span>
            <span class="sb-clue-text">${c}</span>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- 3. 인터랙티브 추리 퀴즈 -->
    <div class="sb-quiz-section">
      <div class="sb-quiz-badge">🔍 잠깐, 추리! 여러분의 생각은?</div>
      <h4 class="sb-quiz-question">${story.quiz.question}</h4>
      <p class="sb-quiz-hint">💡 힌트: ${story.quiz.hint}</p>

      <div class="sb-quiz-options">
        ${story.quiz.options.map((opt, oIdx) => `
          <button class="sb-quiz-opt-btn" data-correct="${opt.correct}" data-feedback="${encodeURIComponent(opt.feedback)}" data-opt-idx="${oIdx}">
            ${opt.text}
          </button>
        `).join('')}
      </div>

      <div class="sb-quiz-result" id="sbQuizResult"></div>
    </div>

    <!-- 4. 웹툰 속 핵심 문법 & 덩어리 표현 -->
    <div class="sb-learning-section">
      <h3 class="sb-section-subtitle">🎯 이 웹툰에서 배운 핵심 문법</h3>
      <div class="sb-grammar-list">
        ${story.grammarPoints.map(g => `
          <div class="sb-grammar-card">
            <div class="sb-grammar-pattern">${g.pattern}</div>
            <div class="sb-grammar-meaning">${g.meaning}</div>
            <div class="sb-grammar-example"><strong>예문:</strong> "${g.example}"</div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- 5. 필수 어휘장 -->
    <div class="sb-learning-section">
      <h3 class="sb-section-subtitle">📚 웹툰 속 필수 어휘</h3>
      <div class="sb-vocab-grid">
        ${story.keyVocab.map(v => `
          <div class="sb-vocab-card">
            <div class="sb-vocab-word">${v.word} <span class="sb-vocab-eng">${v.meaning}</span></div>
            <div class="sb-vocab-desc">${v.desc}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="modal-footer-action">
      <button class="btn btn-primary" onclick="closeStorybookModal()">
        확인하고 닫기
      </button>
    </div>
  `;

  // 퀴즈 옵션 버튼 클릭 이벤트
  modalBody.querySelectorAll('.sb-quiz-opt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const isCorrect = btn.getAttribute('data-correct') === 'true';
      const feedback = decodeURIComponent(btn.getAttribute('data-feedback'));
      const resultEl = document.getElementById('sbQuizResult');

      // 기존 선택 스타일 초기화
      modalBody.querySelectorAll('.sb-quiz-opt-btn').forEach(b => {
        b.classList.remove('selected-correct', 'selected-wrong');
      });

      if (isCorrect) {
        btn.classList.add('selected-correct');
        resultEl.className = 'sb-quiz-result result-correct';
        resultEl.innerHTML = `<strong>🎉 정답입니다!</strong><br>${feedback}`;
      } else {
        btn.classList.add('selected-wrong');
        resultEl.className = 'sb-quiz-result result-wrong';
        resultEl.innerHTML = `<strong>🧐 아쉬워요! 다시 생각해 볼까요?</strong><br>${feedback}`;
      }
      resultEl.style.display = 'block';
    });
  });

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeStorybookModal() {
  const modal = document.getElementById('storybookModal');
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

/* ==========================================================================
   12. DAMI Interactive Lab (한국어 웹 앱 쇼케이스)
   ========================================================================== */
function renderWebApps() {
  const container = document.getElementById('webAppsGrid');
  if (!container || !DAMI_DATA.webApps) return;

  container.innerHTML = DAMI_DATA.webApps.map(app => `
    <div class="webapp-card ${app.active ? 'webapp-card-active' : 'webapp-card-pending'}" id="${app.id}">
      <div class="webapp-card-header">
        <div class="webapp-badge-group">
          <span class="webapp-badge webapp-badge-${app.badgeColor}">${app.badge}</span>
          <span class="webapp-level-tag">${app.level}</span>
        </div>
        <div class="webapp-icon-box">${app.icon}</div>
      </div>

      <div class="webapp-card-body">
        <div class="webapp-title-wrap">
          <h3 class="webapp-title">${app.title}</h3>
          <span class="webapp-edition">${app.edition}</span>
        </div>
        <p class="webapp-subtitle">${app.subtitle}</p>
        <p class="webapp-desc">${app.desc}</p>

        <div class="webapp-features-box">
          <span class="webapp-features-title">주요 인터랙션 & 기능</span>
          <ul class="webapp-features-list">
            ${app.features.map(f => `
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>${f}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>

      <div class="webapp-card-footer">
        ${app.active ? `
          <button class="btn btn-primary webapp-launch-btn" onclick="openAppModal('${app.id}')">
            <span>🚀 라이브 앱 체험하기</span>
          </button>
          <a href="${app.url}" target="_blank" rel="noopener noreferrer" class="btn btn-outline webapp-external-btn" title="새 탭에서 전체 화면으로 열기">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            <span>새 탭</span>
          </a>
        ` : `
          <div class="webapp-coming-soon-btn">
            <span>✨ 두 번째 / 세 번째 웹앱 연결 준비 중</span>
          </div>
        `}
      </div>
    </div>
  `).join('');
}

function openAppModal(appId) {
  const app = DAMI_DATA.webApps.find(a => a.id === appId);
  if (!app || !app.url) return;

  const modal = document.getElementById('appModal');
  const titleEl = document.getElementById('appModalTitle');
  const badgeEl = document.getElementById('appModalBadge');
  const extBtn = document.getElementById('appModalExternalBtn');
  const iframe = document.getElementById('appModalIframe');
  const spinner = document.getElementById('appLoadingSpinner');

  if (!modal || !iframe) return;

  titleEl.textContent = app.title;
  badgeEl.textContent = app.edition || 'Interactive Web App';
  extBtn.href = app.url;

  // 로딩 스피너 표시
  if (spinner) spinner.style.display = 'flex';

  iframe.onload = () => {
    if (spinner) spinner.style.display = 'none';
  };

  iframe.src = app.url;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeAppModal() {
  const modal = document.getElementById('appModal');
  const iframe = document.getElementById('appModalIframe');
  if (!modal) return;

  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  if (iframe) iframe.src = ''; // 리소스 및 오디오 중단
  document.body.style.overflow = '';
}

/* ==========================================================================
   13. DAMI Korean Books (교재 라인업 + Coming Soon)
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
  const sbModal = document.getElementById('storybookModal');
  const sbCloseBtn = document.getElementById('storybookCloseBtn');
  const paperModal = document.getElementById('paperModal');
  const paperCloseBtn = document.getElementById('paperCloseBtn');
  const appModal = document.getElementById('appModal');
  const appCloseBtn = document.getElementById('appModalCloseBtn');

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (sbCloseBtn) sbCloseBtn.addEventListener('click', closeStorybookModal);
  if (paperCloseBtn) paperCloseBtn.addEventListener('click', closePaperModal);
  if (appCloseBtn) appCloseBtn.addEventListener('click', closeAppModal);

  // 모달 배경 클릭 시 닫기
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }
  if (sbModal) {
    sbModal.addEventListener('click', (e) => {
      if (e.target === sbModal) closeStorybookModal();
    });
  }
  if (paperModal) {
    paperModal.addEventListener('click', (e) => {
      if (e.target === paperModal) closePaperModal();
    });
  }
  if (appModal) {
    appModal.addEventListener('click', (e) => {
      if (e.target === appModal) closeAppModal();
    });
  }

  // ESC 키로 닫기
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (modal && modal.classList.contains('open')) closeModal();
      if (sbModal && sbModal.classList.contains('open')) closeStorybookModal();
      if (paperModal && paperModal.classList.contains('open')) closePaperModal();
      if (appModal && appModal.classList.contains('open')) closeAppModal();
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
   14. 문의 폼 (Contact Form) - lomisvoice@naver.com 자동 연동
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');
  const submitBtn = document.getElementById('contactSubmitBtn');

  if (!form || !feedback) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('userName').value.trim();
    const email = document.getElementById('userEmail').value.trim();
    const level = document.getElementById('userLevel').value;
    const message = document.getElementById('userMessage').value.trim();

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>메일 전송 중...</span>`;
    }

    try {
      const response = await fetch('https://formsubmit.co/ajax/lomisvoice@naver.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          "보낸 사람 (Name)": name,
          "답변받을 이메일 (Email)": email,
          "한국어 수준 (Level)": level,
          "문의 내용 (Message)": message,
          "_subject": `[DAMI KOREAN] ${name}님의 새로운 홈페이지 문의가 도착했습니다!`,
          "_template": "table"
        })
      });

      if (response.ok) {
        feedback.className = 'form-feedback success';
        feedback.innerHTML = `
          <strong>💌 문의가 성공적으로 전송되었습니다!</strong><br>
          ${name}님의 메시지가 김다미 선생님(<strong>lomisvoice@naver.com</strong>)께 안전하게 전달되었습니다.<br>
          확인 후 남겨주신 이메일(${email})로 정성껏 답변드리겠습니다.
        `;
        form.reset();
      } else {
        throw new Error('전송 실패');
      }
    } catch (err) {
      // 혹시라도 네트워크 오류 시 직접 메일 열기 안내
      feedback.className = 'form-feedback success';
      feedback.innerHTML = `
        <strong>접수 안내</strong><br>
        혹시 메일 클라이언트를 바로 열어 직접 보내시려면 아래 링크를 눌러주세요.<br>
        👉 <a href="mailto:lomisvoice@naver.com?subject=[DAMI KOREAN 문의] ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}" style="color: var(--coral-main); font-weight: bold; text-decoration: underline;">lomisvoice@naver.com으로 메일 바로 보내기</a>
      `;
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `
          <span>문의 메시지 보내기</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
        `;
      }
    }
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

/* ==========================================================================
   15. 김다미 선생님 시그니처 인트로 비디오 사운드 토글
   ========================================================================== */
function initAboutVideo() {
  const video = document.getElementById('damiIntroVideo');
  const soundBtn = document.getElementById('videoSoundBtn');
  if (!video || !soundBtn) return;

  soundBtn.addEventListener('click', () => {
    video.muted = !video.muted;
    const soundIcon = soundBtn.querySelector('.sound-icon');
    if (soundIcon) {
      soundIcon.textContent = video.muted ? '🔇' : '🔊';
    }
    soundBtn.setAttribute('title', video.muted ? '소리 켜기' : '소리 끄기');
  });
}

