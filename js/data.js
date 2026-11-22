/**
 * DAMI KOREAN - Official Learning Data Module
 * 김다미 한국어 선생님 공식 홈페이지 데이터
 * PRD 명세서에 완벽히 부합하도록 설계된 프론트엔드 데이터 모듈
 */

const DAMI_DATA = {
  // 브랜드 메시지 및 슬로건
  brand: {
    name: "DAMI KOREAN",
    title: "김다미 한국어 선생님",
    tagline: "가장 쉬운 한국어, 가장 가까운 한국어",
    heroMain: "가장 쉬운 한국어,\n김다미 선생님과 함께",
    heroSub: "어려운 한국어는 쉽게, 배운 한국어는 실제로 사용할 수 있게.",
    heroBadge: "Korean Educator Dami · 어학당 2,500시간+ · AI × Korean Education",
    aboutTitle: "안녕하세요, 한국어 선생님 김다미입니다.",
    aboutIntro: "대학교 부설 한국어 어학당에서 2,500시간 이상 외국인 학습자들을 가르쳐 온 한국어 교육 전문가입니다. 고려대 교육대학원 한국어교육 석사 과정과 글로벌 비즈니스 20년의 경험을 바탕으로, 학생들이 한국어를 어렵게 느끼지 않고 실제로 사용할 수 있도록 쉽고 재미있게 가르칩니다."
  },

  // 1. 김다미 선생님 전문 자격 및 경력 인증 (Credentials 6종)
  profileCards: [
    {
      icon: "🎓",
      tag: "National Qualification",
      title: "국가공인 한국어교원 자격 취득",
      desc: "문화체육관광부 국립국어원 국가공인 한국어교원 자격 보유 (2024.05) 및 학부 한국어 실습 만점 졸업"
    },
    {
      icon: "🏫",
      tag: "Teaching Experience",
      title: "대학교 부설 어학당 2,500시간+",
      desc: "성신여대 · 명지대 · 경동대 · 서정대 어학당 초급부터 고급, TOPIK 대비반 2,500시간+ 실전 강의 경력"
    },
    {
      icon: "📚",
      tag: "Master's Degree",
      title: "고려대 교육대학원 All A+ & 장학금",
      desc: "고려대학교 교육대학원 한국어교육전공 석사 과정 (3학기 전 과목 All A+ 100점 만점, 2학기 연속 장학금 수혜)"
    },
    {
      icon: "✍️",
      tag: "Academic Leadership",
      title: "고려대 대학원 조교 & 전공대표",
      desc: "지도교수 추천 학부생 논문 서문 쓰기 지원 조교 프로그램 수행 및 한국어교육전공 대학원 전공대표 활동"
    },
    {
      icon: "💯",
      tag: "Awards & Honors",
      title: "학부대표 & 실습 공모전 최우수상(1위)",
      desc: "한국어다문화학부 학부대표 역임, 서술 시험 우수답안 채택 및 전국 한국어실습 후기 공모전 최우수상(1위) 수상"
    },
    {
      icon: "🌐",
      tag: "Global Career",
      title: "전) 글로벌 마케팅 20년+",
      desc: "외국계 기업 20년+ 근무 경험, 싱가포르 거주 및 비즈니스 영어 능통으로 외국인 학습자 눈높이 맞춤 설명"
    }
  ],

  // 2. 교육 철학 (PRD [8. TEACHING PHILOSOPHY])
  philosophy: [
    {
      step: "01",
      keyword: "EASY",
      title: "어렵게 설명하지 않습니다",
      desc: "학습자가 바로 이해할 수 있는 가장 쉬운 언어로 명쾌하게 설명합니다."
    },
    {
      step: "02",
      keyword: "REAL",
      title: "실제로 사용하는 한국어를 가르칩니다",
      desc: "교재 속에만 갇힌 딱딱한 문장이 아니라 실제 한국인의 살아있는 대화와 연결합니다."
    },
    {
      step: "03",
      keyword: "USE",
      title: "배운 한국어를 말하게 합니다",
      desc: "머리로만 알고 있는 지식이 아니라, 학습자가 일상과 학교에서 직접 사용할 수 있는 한국어를 목표로 합니다."
    }
  ],

  // 3. 오늘의 한국어 (PRD [20. TODAY'S KOREAN])
  todaysKorean: [
    {
      expression: "그럴 수도 있죠.",
      pronunciation: "geu-reol su-do it-jyo",
      meaning: "That could happen / It's possible (상대방을 위로하거나 상황을 너그럽게 넘길 때)",
      example: "A: 오늘 버스를 놓쳐서 지각했어요.\nB: 괜찮아요, 그럴 수도 있죠! 다음엔 조심하세요."
    },
    {
      expression: "생각보다 괜찮아요.",
      pronunciation: "saeng-gak-bo-da gwaen-chan-a-yo",
      meaning: "It's better than I thought (걱정했던 것보다 결과가 좋을 때)",
      example: "A: 한국어 시험 많이 어려웠어요?\nB: 아니요, 생각보다 괜찮았어요!"
    },
    {
      expression: "무슨 말인지 알겠어요.",
      pronunciation: "mu-seun ma-rin-ji al-get-eo-yo",
      meaning: "I understand what you mean (상대의 말을 충분히 이해하고 공감할 때)",
      example: "A: 한국어 조사가 너무 헷갈려요.\nB: 네, 무슨 말인지 알겠어요. 처음에 다들 그래요."
    },
    {
      expression: "그런 것 같아요.",
      pronunciation: "geu-reon geot gat-a-yo",
      meaning: "I think so / It seems like it (단정 짓지 않고 부드럽게 의견을 표현할 때)",
      example: "A: 내일 비가 올까요?\nB: 네, 날씨 예보를 보니까 그런 것 같아요."
    },
    {
      expression: "제가 한번 해 볼게요.",
      pronunciation: "je-ga han-beon hae bol-ge-yo",
      meaning: "I will give it a try (자신감 있게 도전하고 참여할 때)",
      example: "A: 이번 문제 읽어볼 사람 있을까요?\nB: 선생님, 제가 한번 해 볼게요!"
    },
    {
      expression: "어떻게 해야 할지 모르겠어요.",
      pronunciation: "eo-tteok-ke hae-ya hal-ji mo-reu-get-eo-yo",
      meaning: "I don't know what to do (도움이 필요하거나 막막할 때)",
      example: "A: 비자 연장 신청을 어떻게 해야 할지 모르겠어요.\nB: 제가 도와드릴게요. 서류 먼저 확인해 봐요."
    },
    {
      expression: "그럴 줄 알았어요.",
      pronunciation: "geu-reol jul al-at-eo-yo",
      meaning: "I knew it! (예상했던 일이 일어났을 때)",
      example: "A: 이번 TOPIK 시험에 합격했어요!\nB: 축하해요! 열심히 공부하더니 그럴 줄 알았어요."
    },
    {
      expression: "그런 적이 있어요.",
      pronunciation: "geu-reon jeog-i it-eo-yo",
      meaning: "I have had that experience (과거의 경험을 공유할 때)",
      example: "A: 한국 식당에서 주문할 때 긴장해 본 적 있어요?\nB: 네, 저도 처음에 그런 적이 있어요."
    },
    {
      expression: "아무래도 그런 것 같아요.",
      pronunciation: "a-mu-rae-do geu-reon geot gat-a-yo",
      meaning: "It really seems so (여러 정황상 그럴 가능성이 높을 때)",
      example: "A: 오늘 도서관에 사람이 정말 많네요.\nB: 시험 기간이라서 아무래도 그런 것 같아요."
    }
  ],

  // 4. 무엇을 배우고 싶어요? - Learn Korean 12개 카테고리 (PRD [9. LEARN KOREAN])
  learnCategories: [
    {
      id: "cat-grammar",
      icon: "📐",
      title: "문법",
      subtitle: "Grammar",
      desc: "의미 → 형태 → 쉬운 설명 → 예문 → 실제 대화 → 연습",
      badge: "핵심 기초",
      details: {
        concept: "문법 규칙을 외우지 않고, 대화 속에서 자연스럽게 체득하는 쉬운 원리 중심 학습",
        examples: ["-아/어서 (이유/순서)", "-는데 (배경/전환)", "-(으)려고 하다 (의도)", "-거든요 (이유 설명)", "-잖아요 (확인)", "-(으)ㄹ 텐데 (추측/배경)", "-더라고요 (직접 경험 회상)"],
        method: "복잡한 문법 용어를 배제하고 외국인 학습자가 가장 직관적으로 이해할 수 있는 비교 공식과 대화문 제시"
      }
    },
    {
      id: "cat-pronunciation",
      icon: "🗣️",
      title: "발음",
      subtitle: "Pronunciation",
      desc: "듣고 따라 말하기 중심의 정확하고 자연스러운 한국어 발음",
      badge: "소리 훈련",
      details: {
        concept: "글자만 보고 익히지 않고, 입 모양과 소리의 리듬으로 배우는 실전 발음",
        examples: ["받침 & 연음 법칙", "비음화 & 유음화 (국물→궁물, 신라→실라)", "된소리되기 & 격음화", "모음 구별 (ㅐ/ㅔ, ㅗ/ㅜ)", "자연스러운 문장 억양과 리듬"],
        method: "음성 듣기와 음절별 시각 가이드를 통해 한국인 발음의 리듬감을 체계적으로 훈련"
      }
    },
    {
      id: "cat-chunks",
      icon: "🧩",
      title: "덩어리 표현",
      subtitle: "Korean Chunks",
      desc: "단어 하나씩 조합하지 않고 한 덩어리로 술술 나오는 필수 표현",
      badge: "유창성 쑥쑥",
      details: {
        concept: "한국인이 매일 쓰는 통표현을 덩어리째 익혀 즉각적으로 말하는 훈련",
        examples: ["그럴 수도 있죠", "그런 것 같아요", "생각보다 괜찮아요", "무슨 말인지 알겠어요", "제가 한번 해 볼게요"],
        method: "문법을 계산하느라 말이 끊기지 않고 원어민처럼 자연스럽게 튀어나오는 패턴 학습"
      }
    },
    {
      id: "cat-discourse",
      icon: "💬",
      title: "담화",
      subtitle: "Real Korean",
      desc: "한 문장이 아니라 대화 전체 맥락과 한국인의 자연스러운 반응 학습",
      badge: "자연스러운 대화",
      details: {
        concept: "단순 문답을 넘어 상대방을 배려하는 완곡한 표현과 후속 발화 익히기",
        examples: ["완곡한 거절 표현", "상대방 칭찬에 겸손하게 대답하기", "맞장구치기와 자연스러운 반응", "상황에 맞는 말투와 억양"],
        method: "실제 한국 생활과 학교에서 일어나는 대화 흐름을 롤플레잉 방식으로 연습"
      }
    },
    {
      id: "cat-vocab",
      icon: "📖",
      title: "어휘",
      subtitle: "Vocabulary",
      desc: "어려운 사전식 정의 대신 쉬운 뜻, 예문, 짝꿍 표현으로 정복",
      badge: "어휘력 확장",
      details: {
        concept: "외국인 학습자가 바로 이해할 수 있는 쉬운 한국어 풀이와 연어(Collocation)",
        examples: ["기초 필수 단어의 쉬운 정의", "자주 함께 쓰는 짝꿍 단어", "비슷한 말과 반대말 비교", "상황별 유의어 뉘앙스 차이"],
        method: "이미지와 쉬운 문맥을 통해 단어를 기억하고 오래 유지하는 학습법"
      }
    },
    {
      id: "cat-idioms",
      icon: "💡",
      title: "관용표현",
      subtitle: "Idioms",
      desc: "단어 뜻만으로는 알 수 없는 실제 숨은 의미와 사용 상황 학습",
      badge: "깊이 있는 한국어",
      details: {
        concept: "한국 문화와 생활 감정이 깃든 관용구를 상황 중심으로 이해",
        examples: ["눈이 높다 (기준이 까다롭다)", "발이 넓다 (아는 사람이 많다)", "입이 무겁다 (비밀을 잘 지킨다)", "귀가 얇다 (남의 말에 쉽게 흔들린다)"],
        method: "언제 써야 하고 언제 쓰면 안 되는지 명확한 사용 상황과 예문 제공"
      }
    },
    {
      id: "cat-proverbs",
      icon: "📜",
      title: "속담",
      subtitle: "Proverbs",
      desc: "선조들의 지혜와 한국 문화적 배경이 담긴 대표 속담 마스터",
      badge: "문화와 지혜",
      details: {
        concept: "단순 암기가 아닌 실제 대화에서 비유로 쓰이는 한국 속담 이해",
        examples: ["시작이 반이다 (시작의 중요성)", "가는 말이 고와야 오는 말이 곱다", "백지장도 맞들면 낫다", "티끌 모아 태산"],
        method: "속담의 유래와 현대 한국인들이 사용하는 맥락을 연결하여 설명"
      }
    },
    {
      id: "cat-listening",
      icon: "🎧",
      title: "듣기",
      subtitle: "Listening",
      desc: "듣기 전 예측 → 1차/2차 듣기 → 의미 확인 → 따라 말하기 5단계",
      badge: "귀가 트이는 연습",
      details: {
        concept: "교재의 인위적인 녹음이 아닌, 실제 일상 대화의 줄임말과 억양 적응 훈련",
        examples: ["5단계 체계적 리스닝 프로세스", "말끝 흐리기와 간접 표현 듣기", "담화 표지(있잖아, 그러니까 등) 파악", "배경 소음이 있는 실생활 듣기"],
        method: "듣기 전-중-후 활동을 통해 들은 내용을 그대로 자기 말로 표현하는 연습"
      }
    },
    {
      id: "cat-speaking",
      icon: "🎙️",
      title: "말하기",
      subtitle: "Speaking",
      desc: "상황별 말하기, 역할극, 자연스러운 리액션과 한국인처럼 이어 말하기",
      badge: "자신감 회화",
      details: {
        concept: "틀릴까 봐 두려워하지 않고 상황에 맞게 생각을 표현하는 스피킹 훈련",
        examples: ["식당/카페 주문 및 요청하기", "친구와의 약속 잡기 및 시간 변경", "대학 과제 및 수업 질문하기", "감정과 의견 조리 있게 말하기"],
        method: "역할극(Role-play)과 질문-대답-이어 말하기 연습으로 끊김 없는 대화 완성"
      }
    },
    {
      id: "cat-reading",
      icon: "📰",
      title: "읽기",
      subtitle: "Reading",
      desc: "생활 안내문, SNS, 공지, 뉴스부터 한국 문화와 TOPIK 자료까지",
      badge: "문해력 훈련",
      details: {
        concept: "교과서 문장뿐 아니라 한국에서 생활할 때 마주치는 실제 텍스트 읽기",
        examples: ["지하철/버스 생활 공지 및 안내문", "인스타그램/SNS 댓글 및 메신저 대화", "대학교 포털 공지사항 읽기", "쉬운 한국 뉴스 및 문화 칼럼"],
        method: "핵심 어휘 확인과 문맥 유추를 통해 빠르고 정확하게 의미를 파악하는 기술"
      }
    },
    {
      id: "cat-writing",
      icon: "✍️",
      title: "쓰기",
      subtitle: "Writing",
      desc: "한 문장 쓰기, 문자 메시지, 이메일, 일기에서 TOPIK 쓰기까지",
      badge: "표현의 완성",
      details: {
        concept: "조사와 띄어쓰기 고민을 덜어주는 명확한 문장 구조 템플릿",
        examples: ["한국 친구/선배에게 보내는 카카오톡", "교수님/선생님께 드리는 정중한 이메일", "하루 일과와 감정을 담은 짧은 일기", "TOPIK 53·54번 논리적 글쓰기"],
        method: "기초 문장 구조화부터 격식체·비격식체의 구별, 문맥 맞춤 피드백 제공"
      }
    },
    {
      id: "cat-culture",
      icon: "🎎",
      title: "한국문화",
      subtitle: "Korean Culture",
      desc: "존댓말, 호칭, 선후배 관계, 식사 예절, 배달문화, 직장문화 탐구",
      badge: "한국 이해하기",
      details: {
        concept: "언어 속에 숨겨진 한국 사회의 관계와 배려 문화를 깊이 이해",
        examples: ["존댓말과 반말의 미묘한 경계", "언니/오빠/누나/형/선배 호칭 사용법", "한국의 독특한 배달 문화와 음식 공유", "상대방 기분을 상하지 않게 하는 완곡 화법"],
        method: "문화적 배경을 이해함으로써 오해 없이 따뜻한 인간관계를 맺도록 지원"
      }
    }
  ],

  // 5. 덩어리 표현 (Korean Chunks) 집중 데이터 (PRD [12. KOREAN CHUNKS])
  koreanChunks: [
    {
      korean: "그럴 수도 있죠.",
      meaning: "That could happen / It's possible",
      category: "공감과 위로",
      desc: "실수나 예상치 못한 상황에서 상대방을 안심시켜 주는 다정한 표현",
      dialogue: "A: 약속에 조금 늦을 것 같아요, 죄송해요.\nB: 괜찮아요! 살다 보면 그럴 수도 있죠."
    },
    {
      korean: "그런 것 같아요.",
      meaning: "I think so / It seems like it",
      category: "부드러운 의견",
      desc: "자기 의견을 너무 단정적으로 말하지 않고 조심스럽게 전달할 때",
      dialogue: "A: 이 방법이 더 빠를까요?\nB: 네, 제가 보기에도 그런 것 같아요."
    },
    {
      korean: "제가 한번 해 볼게요.",
      meaning: "I'll give it a try",
      category: "도전과 참여",
      desc: "어려운 과제나 활동에서 용기를 내어 주도적으로 나설 때 쓰는 멋진 표현",
      dialogue: "A: 이 발표 먼저 해 볼 사람 있을까요?\nB: 선생님, 부족하지만 제가 한번 해 볼게요!"
    },
    {
      korean: "어떻게 해야 할지 모르겠어요.",
      meaning: "I don't know what to do",
      category: "도움 요청",
      desc: "낯선 한국 생활이나 어려운 문법 앞에서 도움을 청할 때 솔직한 표현",
      dialogue: "A: 표정이 안 좋은데 무슨 일 있어요?\nB: 은행 계좌 개설을 어떻게 해야 할지 모르겠어요."
    },
    {
      korean: "생각보다 괜찮아요.",
      meaning: "It's better than I expected",
      category: "긍정 평가",
      desc: "걱정했던 일이나 처음 시도한 일이 예상보다 좋을 때 기분 좋게 쓰는 표현",
      dialogue: "A: 매운 떡볶이 처음 먹어보는데 괜찮아요?\nB: 네! 많이 매울 줄 알았는데 생각보다 괜찮아요."
    },
    {
      korean: "무슨 말인지 알겠어요.",
      meaning: "I get what you mean",
      category: "이해와 소통",
      desc: "상대방의 설명이나 고민을 듣고 깊이 공감하며 이해했음을 표현할 때",
      dialogue: "A: 문법 규칙은 아는데 입에서 바로 안 나와요.\nB: 맞아요, 무슨 말인지 알겠어요. 반복 연습이 필요해요."
    },
    {
      korean: "그럴 줄 알았어요.",
      meaning: "I knew it!",
      category: "예상과 확신",
      desc: "어떤 결과를 미리 확신하고 있었을 때 긍정적인 응원으로 쓰는 표현",
      dialogue: "A: 선생님, 저 이번에 TOPIK 최고 점수 받았어요!\nB: 와, 대단해요! 평소에 워낙 열심히 하셔서 그럴 줄 알았어요."
    },
    {
      korean: "그런 적이 있어요.",
      meaning: "I've had that experience before",
      category: "경험 공유",
      desc: "상대방의 고민을 들으며 나도 비슷한 경험이 있었다고 공감대를 형성할 때",
      dialogue: "A: 발표할 때 너무 떨려서 머리가 하얘졌어요.\nB: 저도 예전에 사람들 앞에서 그런 적이 있어요. 누구나 그래요."
    },
    {
      korean: "아무래도 그런 것 같아요.",
      meaning: "It really seems so",
      category: "정황 추측",
      desc: "여러 상황을 종합해 볼 때 그럴 가능성이 매우 높다고 부드럽게 동의할 때",
      dialogue: "A: 오늘 지하철에 왜 이렇게 사람이 많죠?\nB: 비가 와서 아무래도 그런 것 같아요."
    }
  ],

  // 6. 실전 담화 (Real Korean Discourse) (PRD [13. REAL KOREAN DISCOURSE])
  realDiscourse: {
    title: "교재 속 문장 vs 한국인의 실제 대화",
    subtitle: "문장 하나가 아니라 대화 전체 맥락과 완곡한 배려의 뉘앙스를 배웁니다.",
    topics: [
      {
        title: "약속 거절하기 (완곡한 표현)",
        textbook: "A: 내일 만날 수 있어요?\nB: 아니요, 만날 수 없습니다. 시간이 없습니다.",
        realKorean: "A: 내일 저녁에 시간 괜찮아요? 같이 밥 먹어요!\nB: 아, 내일요? 정말 가고 싶은데, 선약이 있어서 어쩌죠... 다음 주엔 어떠세요?",
        point: "상대방의 제안에 감사하면서도 미안한 마음을 표현하고 대안을 제시하는 배려의 화법"
      },
      {
        title: "칭찬에 반응하기 (자연스러운 반응)",
        textbook: "A: 한국어를 참 잘하시네요.\nB: 감사합니다. 저는 한국어를 잘합니다.",
        realKorean: "A: 어머, 한국어 발음이 정말 좋으시네요!\nB: 아니에요, 아직 많이 부족해요. 그래도 그렇게 말씀해 주시니 기분 좋네요!",
        point: "단순 인정보다 한국 특유의 겸양의 미덕과 감사함을 함께 전하는 자연스러운 대화법"
      },
      {
        title: "도움 부탁하기 (정중한 요청)",
        textbook: "A: 이 문서를 복사해 주십시오.\nB: 알겠습니다.",
        realKorean: "A: 선생님, 바쁘신데 죄송하지만 혹시 이 문서 한 번만 봐주실 수 있을까요?\nB: 그럼요! 지금 잠깐 시간 있으니 같이 확인해 봐요.",
        point: "상대방의 상황을 먼저 살피며 부담을 주지 않게 완곡히 청하는 사회적 담화 기술"
      }
    ]
  },

  // 7. 학생들의 목소리 (PRD [17. STUDENT REVIEWS])
  reviews: [
    {
      stars: 5,
      quote: "수업이 정말 재미있어요.",
      content: "선생님 수업은 50분이 10분처럼 느껴져요. 지루한 문법 설명 대신 실생활 예시로 가르쳐 주셔서 수업 내내 웃으면서 배웁니다.",
      student: "Nguyen T. (베트남 유학생)",
      course: "한국어 어학당 중급반"
    },
    {
      stars: 5,
      quote: "선생님이 항상 열정적으로 가르쳐 주세요.",
      content: "질문 하나를 해도 더 쉽고 깊이 있게 설명해 주시려는 열정이 느껴집니다. 학생 한 명 한 명 발음까지 꼼꼼히 챙겨주셔서 큰 힘이 돼요.",
      student: "Elena K. (러시아 학습자)",
      course: "한국어 어학당 초급반"
    },
    {
      stars: 5,
      quote: "어려운 문법도 쉽게 설명해 주세요.",
      content: "혼자 교재로 공부할 때는 '-는데'나 '-거든요'가 정말 헷갈렸는데, 김다미 선생님 수업 한 번 듣고 바로 이해가 됐어요!",
      student: "Marcus L. (미국 직장인)",
      course: "실전 한국어 회화반"
    },
    {
      stars: 5,
      quote: "수업 시간이 빨리 지나가요.",
      content: "어려운 한국어가 이렇게 재미있을 수 있다는 걸 처음 알았어요. 한국인 친구들과 대화할 때 배운 덩어리 표현을 바로 써먹고 있습니다.",
      student: "Chen W. (중국 대학원생)",
      course: "어학당 TOPIK 대비반"
    }
  ],

  // 8. AI × Korean Education (PRD [18. AI × KOREAN EDUCATION])
  aiEducation: {
    badge: "Future & Innovation",
    title: "AI와 함께 더 쉬운 한국어를 연구합니다.",
    mainMessage: "AI는 교사를 대신하는 것이 아니라 더 좋은 설명과 더 좋은 학습 경험을 만들 수 있도록 도와주는 도구입니다.",
    subMessage: "김다미 선생님은 AI를 활용하여 학습자에게 꼭 맞춘 살아있는 교육 자료를 연구하고 개발하는 한국어교육 전문가로 나아가고 있습니다.",
    areas: [
      { icon: "🎯", title: "학습자 수준별 설명", desc: "초급부터 고급까지 눈높이에 딱 맞는 맞춤 설명 설계" },
      { icon: "📝", title: "맞춤형 예문", desc: "학습자의 국적과 관심사에 최적화된 생생한 예문 생성" },
      { icon: "💬", title: "상황별 대화", desc: "학교, 식당, 병원 등 실제 한국 생활 밀착형 롤플레잉" },
      { icon: "🧩", title: "문법 연습", desc: "학습자가 실수하기 쉬운 취약점을 보완하는 단계별 퀴즈" },
      { icon: "🗣️", title: "발음 연습 자료", desc: "연음과 억양 차이를 시각적·청각적으로 익히는 자료" },
      { icon: "📚", title: "어휘 학습 자료", desc: "외국인 학습자에게 적합한 쉬운 풀이와 연어 맵" },
      { icon: "🎧", title: "듣기 자료", desc: "실제 한국인의 말속도와 자연스러운 담화가 반영된 스크립트" },
      { icon: "🎙️", title: "말하기 활동", desc: "의견을 논리적으로 확장하고 능동적으로 참여하는 인터랙션" },
      { icon: "📊", title: "학습 피드백", desc: "문장 오류를 정확히 짚고 다정하게 교정해 주는 맞춤 피드백" },
      { icon: "📖", title: "한국어 교재", desc: "학습자 중심의 쉽고 직관적인 미래형 한국어 교재 기획" }
    ]
  },

  // 9. DAMI Korean Books (PRD [19. KOREAN BOOKS])
  books: {
    title: "DAMI Korean Books",
    subtitle: "어렵지 않은 한국어 교재를 만들고 싶습니다.",
    intro: "외국인 학습자가 한국어를 포기하지 않고 끝까지 즐겁게 완주할 수 있도록, 가장 친절하고 실용적인 교재 시리즈를 직접 집필하고 있습니다.",
    list: [
      {
        title: "초급 한국어",
        subtitle: "DAMI Basic Korean",
        desc: "한글 자모부터 기초 일상 대화까지, 가장 쉽고 다정하게 시작하는 첫걸음 교재",
        status: "Coming Soon",
        color: "coral"
      },
      {
        title: "실생활 한국어",
        subtitle: "Living in Korea",
        desc: "지하철 타기, 배달 주문, 은행, 병원 등 한국 정착에 꼭 필요한 필수 생존 회화",
        status: "Coming Soon",
        color: "sage"
      },
      {
        title: "Korean Grammar Made Easy",
        subtitle: "쉬운 한국어 문법",
        desc: "복잡한 규칙 대신 쉬운 공식과 대화로 단번에 이해하는 원리 중심 문법서",
        status: "Coming Soon",
        color: "navy"
      },
      {
        title: "Korean Chunks",
        subtitle: "말문이 트이는 덩어리 한국어",
        desc: "한국인이 입에 달고 사는 핵심 덩어리 표현 100개로 유창성 완성하기",
        status: "Coming Soon",
        color: "coral"
      },
      {
        title: "Real Korean Listening",
        subtitle: "귀가 열리는 실전 듣기",
        desc: "교과서 녹음이 아닌 한국인의 실제 말소리와 억양에 적응하는 실전 리스닝",
        status: "Coming Soon",
        color: "sage"
      },
      {
        title: "Real Korean Speaking",
        subtitle: "한국인처럼 이어 말하기",
        desc: "단답형 대답에서 벗어나 상황별로 자연스러운 리액션과 후속 대화를 이끄는 스피킹",
        status: "Coming Soon",
        color: "pink"
      },
      {
        title: "AI Korean Practice",
        subtitle: "AI와 함께하는 한국어 훈련",
        desc: "AI 기술을 접목하여 시공간 제약 없이 1:1 맞춤 피드백을 받는 능동적 워크북",
        status: "Coming Soon",
        color: "navy"
      }
    ]
  },

  // 10. 이야기북 시리즈 (DAMI's Korean Storybook Series)
  storybooks: [
    {
      id: "ep01",
      episode: "Episode 01",
      badge: "추리 & 일상 회화",
      level: "초급~중급 추천",
      title: "새벽 3시, 편의점의 우유 할아버지",
      image: "assets/stories/ep01.jpg",
      summary: "매일 새벽 3시, 편의점에서 흰 우유를 사서 마시지 않고 벤치에 두고 가시는 할아버지. 린과 함께 단서를 찾아 사연을 추리해 보세요!",
      characters: [
        { name: "린 (Rin)", role: "편의점 아르바이트생 · 관찰력이 뛰어남" },
        { name: "점장님 (Manager)", role: "10년 경력의 편의점 점장" },
        { name: "의문의 할아버지", role: "매일 새벽 3시에 흰 우유 1개를 사는 손님" }
      ],
      clues: [
        "매일 새벽 3시, 흰 우유 한 개를 구매",
        "우유를 마시지 않고 편의점 앞 벤치 위에 둔다",
        "길 건너편 어두운 골목에서 10분쯤 기다린다",
        "새벽 3시 10분쯤, 배달 오토바이 소리가 들린다"
      ],
      quiz: {
        question: "할아버지는 왜 매일 새벽 3시에 우유를 벤치에 두고 골목에서 기다리실까요?",
        options: [
          { text: "1. 새벽에 길고양이들이 배고플까 봐 밥을 주려고", correct: false, feedback: "고양이는 우유를 마시면 배탈이 나기 쉬워요! 점장님의 말을 다시 살펴보세요." },
          { text: "2. 새벽에 고생하는 배달원(혹은 가족)에게 따뜻한 응원을 전하려고", correct: true, feedback: "정답입니다! 💡 새벽 3시 10분에 들리는 배달 오토바이 소리와 골목에서 몰래 지켜보시는 모습이 가장 결정적인 단서예요." },
          { text: "3. 벤치에 깜빡 잊고 우유를 두고 온 것을 몰라서", correct: false, feedback: "매일 비가 오나 바람이 부나 똑같이 행동하셨으니 깜빡한 건 아니에요." }
        ],
        hint: "린의 수첩에 적힌 마지막 단서(새벽 3시 10분 오토바이 소리)와 점장님의 말에 귀를 기울여 보세요!"
      },
      grammarPoints: [
        { pattern: "-은/ㄴ 지 [시간]이 되다", meaning: "어떤 동작이 시작된 후 지난 시간을 나타낼 때", example: "린이 편의점에서 일한 지 한 달이 되었다." },
        { pattern: "-나 보다 / -(으)ㄴ가 보다", meaning: "상황을 보고 부드럽게 추측할 때", example: "누군가를 몰래 보고 싶으신가 봐." },
        { pattern: "-다던데", meaning: "남에게 들은 사실을 전달하며 말할 때", example: "고양이는 우유를 먹으면 배가 아프다던데." }
      ],
      keyVocab: [
        { word: "관찰하다", meaning: "to observe", desc: "사물이나 사람을 주의 깊게 자세히 살펴보다" },
        { word: "마찬가지", meaning: "the same / likewise", desc: "사물의 모양이나 일의 형편이 서로 같음" },
        { word: "단서", meaning: "clue / lead", desc: "어떤 문제를 해결할 수 있는 첫 번째 실마리" },
        { word: "추측하다", meaning: "to guess / deduce", desc: "어떤 사실을 바탕으로 미루어 생각하다" },
        { word: "사연", meaning: "story / circumstances", desc: "어떤 일에 얽힌 자세한 이야기나 사정" }
      ]
    },
    {
      id: "ep02",
      episode: "Episode 02",
      badge: "감동 & 일상 회화",
      level: "초급~중급 추천",
      title: "새벽 3시의 우유 - 그다음 이야기 -",
      image: "assets/stories/ep02.jpg",
      summary: "골목에서 우연히 들려온 대화! 할아버지가 매일 새벽 우유를 벤치에 두고 가신 진짜 감동적인 사연이 밝혀집니다.",
      characters: [
        { name: "린 (Rin)", role: "새벽 편의점 아르바이트생 · 따뜻한 관찰자" },
        { name: "할아버지", role: "아픈 아이를 위해 매일 새벽 우유를 챙겨준 다정한 손님" },
        { name: "배달 기사님", role: "새벽에 일하며 아이를 돌보는 성실한 기사님" },
        { name: "점장님 (Manager)", role: "린의 이야기를 듣고 함께 미소 짓는 점장" }
      ],
      clues: [
        "골목에서 들려온 배달 기사님의 감사 인사",
        "\"네 아이가 우유를 좋아한다며? 빨리 낫길 바란다.\"",
        "배달 기사님의 아이가 감기에 걸려 우유를 마시는 중",
        "편의점 벤치 위에 놓인 감사 쪽지와 따뜻한 변화"
      ],
      quiz: {
        question: "할아버지가 매일 새벽 우유를 챙겨 주신 진짜 이유는 무엇이었나요?",
        options: [
          { text: "1. 새벽에 일하는 배달 기사님의 아픈 아이가 빨리 낫기를 바라는 마음으로", correct: true, feedback: "정답입니다! 💖 아이가 우유를 좋아하고 감기에 걸렸다는 소식을 듣고 매일 새벽 몰래 우유를 챙겨 주신 거였어요." },
          { text: "2. 배달 기사님이 길고양이 밥을 대신 주게 하려고", correct: false, feedback: "1화의 추측과 달리, 기사님의 아픈 아이를 위한 따뜻한 배려였답니다." },
          { text: "3. 편의점 매출을 올려주려고", correct: false, feedback: "할아버지의 마음은 매출이 아니라 사람을 향한 따뜻한 관심이었어요." }
        ],
        hint: "할아버지와 배달 기사님의 대화 내용을 다시 읽어보세요!"
      },
      grammarPoints: [
        { pattern: "-다며? / -(이)라며?", meaning: "이미 들은 사실이나 알고 있는 내용을 상대방에게 확인할 때", example: "네 아이가 우유를 좋아한다며?" },
        { pattern: "-길 바라다 / -기를 바라다", meaning: "어떤 일이 잘 이루어지기를 희망하거나 기원할 때", example: "많이 마시고 빨리 낫길 바란다." },
        { pattern: "[명사] 덕분에", meaning: "어떤 대상의 도움으로 좋은 결과가 생겼을 때", example: "할아버지 덕분에 아이가 많이 좋아졌어요." },
        { pattern: "-다니 / -(이)라니", meaning: "어떤 사실을 듣거나 보고 크게 감탄하거나 놀랄 때", example: "누군가를 조용히 생각하는 마음이라니... 정말 멋지다!" }
      ],
      keyVocab: [
        { word: "어김없이", meaning: "without fail / surely", desc: "틀림이나 어긋남이 없이 규칙적으로" },
        { word: "우연히", meaning: "by chance / accidentally", desc: "뜻하지 않게 저절로 마주치거나 일어남" },
        { word: "챙기다", meaning: "to take care of / pack", desc: "필요한 것을 빠짐없이 보살피거나 챙겨 주다" },
        { word: "낫다", meaning: "to recover / get well", desc: "병이나 상처가 치료되어 원래대로 회복되다" },
        { word: "변화", meaning: "change", desc: "사물의 모양이나 상태가 달라짐" }
      ]
    }
  ]
};
