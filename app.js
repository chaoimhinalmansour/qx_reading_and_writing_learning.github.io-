const ROLE_LABELS = {
  difficulty: "表达困难",
  quantity: "表示数量很多",
  accuracy: "强调准确使用",
  result: "导致或引出结果",
  contrast: "形成对比",
  trend: "描述趋势变化",
  proportion: "说明占比/比例",
  concession: "表示让步",
  importance: "强调作用或重要性"
};

const MODULES = [
  {
    id: "source",
    label: "认识单词",
    shortLabel: "认词",
    hint: "听整句，判断词在语境里的中文义。"
  },
  {
    id: "retrieval",
    label: "检索词块",
    shortLabel: "检索",
    hint: "读懂文本或写作语境，再把目标短语写一遍。"
  },
  {
    id: "judge",
    label: "判断含义和作用",
    shortLabel: "判断",
    hint: "判断词块在句中的意思和信息功能。"
  },
  {
    id: "application",
    label: "应用练习",
    shortLabel: "应用",
    hint: "用指定词块改错、改写或微型概括。"
  }
];

const KNOWLEDGE_BASE = [
  {
    word: "struggle",
    chunk: "struggle to do",
    zh: "难以做某事",
    alternatives: ["find it difficult to do", "have difficulty doing"],
    writingTip: "用来说明某个群体在能力或表现上的困难。"
  },
  {
    word: "number",
    chunk: "a large number of",
    zh: "大量的",
    alternatives: ["many", "a considerable number of"],
    writingTip: "后接可数名词复数，用来概括人群或事物数量。"
  },
  {
    word: "accurate",
    chunk: "use sth accurately",
    zh: "准确使用某物",
    alternatives: ["apply sth correctly", "use sth with precision"],
    writingTip: "用副词 accurately 修饰 use、describe、measure 等动作。"
  },
  {
    word: "lead",
    chunk: "lead to",
    zh: "导致",
    alternatives: ["result in", "give rise to"],
    writingTip: "连接原因和结果，to 不能省略。"
  },
  {
    word: "contrast",
    chunk: "in contrast",
    zh: "相比之下",
    alternatives: ["by contrast", "whereas"],
    writingTip: "连接两个相反或明显不同的情况。"
  },
  {
    word: "increase",
    chunk: "a sharp increase in",
    zh: "急剧增长",
    alternatives: ["a dramatic rise in", "a significant growth in"],
    writingTip: "Task 1 中描述某项数据快速上升，常搭配介词 in。"
  },
  {
    word: "account",
    chunk: "account for",
    zh: "占比；解释",
    alternatives: ["make up", "represent"],
    writingTip: "Task 1 中常用来说明某项数据占多少比例。"
  },
  {
    word: "despite",
    chunk: "despite the fact that",
    zh: "尽管事实是",
    alternatives: ["although", "even though"],
    writingTip: "先承认一个事实，再转向更重要的观点。"
  },
  {
    word: "play",
    chunk: "play a crucial role in",
    zh: "在……中发挥关键作用",
    alternatives: ["be essential to", "be central to"],
    writingTip: "强调某因素的重要性，role 后通常接 in。"
  },
  {
    word: "result",
    chunk: "as a result",
    zh: "因此",
    alternatives: ["therefore", "consequently"],
    writingTip: "引出前文原因带来的结果。"
  }
];

const PRACTICE_SETS = [
  {
    title: "词汇量与准确使用",
    sourceCards: [
      {
        word: "number",
        sentence: "Many students know a large number of English words.",
        answer: "大量的",
        choices: ["总数", "大量的", "排名", "编号"]
      },
      {
        word: "struggle",
        sentence: "However, they still struggle to use them accurately in writing.",
        answer: "难以做某事",
        choices: ["长期奋斗", "挣扎着移动", "难以做某事", "努力争取"]
      },
      {
        word: "accurate",
        sentence: "They still struggle to use them accurately in writing.",
        answer: "准确地",
        choices: ["完整地", "恰当地", "准确地", "熟练地"]
      },
      {
        word: "lead",
        sentence: "This habit can lead to unnatural sentences and repeated grammar mistakes.",
        answer: "导致",
        choices: ["引导", "负责", "导致", "处于领先"]
      }
    ],
    reading: {
      contextTitle: "阅读短文：词汇量和写作准确度",
      context:
        "Many students know a large number of English words. However, they still struggle to use them accurately in writing. One reason is that they often learn words as isolated items rather than as chunks. This habit can lead to unnatural sentences and repeated grammar mistakes. In contrast, students who notice phrases in reading are more likely to reuse them in essays.",
      retrieval: [
        {
          sourceWord: "number",
          readingTask: "找出作者说明“学生词汇量不少”的句子。",
          sentenceIndex: 0,
          meaningQuestion: "这句话主要说明什么？",
          meaningOptions: ["学生认识很多英语单词", "学生经常写很多英语句子", "学生学习很多语法规则"],
          meaningAnswer: "学生认识很多英语单词",
          expected: "a large number of",
          targetChunk: "a large number of"
        },
        {
          sourceWord: "struggle",
          readingTask: "找出作者说明“学生知道词，但写作中用不好”的句子。",
          sentenceIndex: 1,
          meaningQuestion: "这句话里的困难具体是什么？",
          meaningOptions: ["学生难以准确使用这些词", "学生完全不认识这些词", "学生不愿意写作文"],
          meaningAnswer: "学生难以准确使用这些词",
          expected: "struggle to use",
          targetChunk: "struggle to do"
        },
        {
          sourceWord: "accurate",
          readingTask: "找出作者说明“问题不只是认识单词，而是使用是否准确”的句子。",
          sentenceIndex: 1,
          meaningQuestion: "accurately 在这句话里修饰哪个动作？",
          meaningOptions: ["使用这些词", "认识这些词", "学习这些词块"],
          meaningAnswer: "使用这些词",
          expected: "use them accurately",
          targetChunk: "use sth accurately"
        },
        {
          sourceWord: "lead",
          readingTask: "找出作者说明“孤立背词会带来后果”的句子。",
          sentenceIndex: 3,
          meaningQuestion: "这个习惯造成了什么后果？",
          meaningOptions: ["句子不自然，并反复出现语法错误", "学生阅读速度明显下降", "学生完全无法理解文章"],
          meaningAnswer: "句子不自然，并反复出现语法错误",
          expected: "lead to",
          targetChunk: "lead to"
        }
      ],
      judge: [
        {
          chunk: "struggle to use",
          targetChunk: "struggle to do",
          sentence: "They still struggle to use them accurately in writing.",
          meaningAnswer: "难以做某事",
          meaningAccepts: ["很难", "困难", "不容易", "做不到"],
          roleAnswer: "difficulty"
        },
        {
          chunk: "lead to",
          targetChunk: "lead to",
          sentence: "This habit can lead to unnatural sentences and repeated grammar mistakes.",
          meaningAnswer: "导致",
          meaningAccepts: ["引起", "造成", "带来", "产生"],
          roleAnswer: "result"
        }
      ],
      application: [
        {
          type: "paraphrase",
          prompt: "用 18-25 词概括短文核心问题，必须使用 struggle to 或 accurately。",
          required: ["struggle to", "accurately"],
          sample: "Many students know many words but struggle to use them accurately because they learn vocabulary as isolated items."
        }
      ]
    },
    writing: {
      contextTitle: "写作语境：解释一个学习问题",
      context:
        "观点：很多学生背了许多单词，但写作中仍然用不准确。请用词块把这个观点写得更自然。",
      retrieval: [
        {
          sourceWord: "number",
          writingTask: "把“很多学生背了许多单词”写得更学术自然。",
          intentionQuestion: "这个表达重点是什么？",
          intentionOptions: ["数量很多", "学习困难", "因果结果"],
          intentionAnswer: "数量很多",
          evidenceQuestion: "这个观点里，学生背了很多什么？",
          evidenceAnswer: "单词",
          evidenceAccepts: ["words", "vocabulary", "英语单词"],
          expected: "a large number of",
          targetChunk: "a large number of"
        },
        {
          sourceWord: "struggle",
          writingTask: "表达“学生写作中仍然用不准确”这个困难。",
          intentionQuestion: "这个表达要完成什么功能？",
          intentionOptions: ["学习困难", "数量很多", "形成对比"],
          intentionAnswer: "学习困难",
          evidenceQuestion: "这个观点要表达的学习困难是什么？",
          evidenceAnswer: "用不准确",
          evidenceAccepts: ["不能准确使用", "写作中用不准", "use accurately"],
          expected: "struggle to do",
          targetChunk: "struggle to do"
        },
        {
          sourceWord: "accurate",
          writingTask: "表达“用词是否准确”这个要求。",
          intentionQuestion: "这个表达重点是什么？",
          intentionOptions: ["准确使用", "数量变化", "让步关系"],
          intentionAnswer: "准确使用",
          evidenceQuestion: "这个词块要解决哪类表达问题？",
          evidenceAnswer: "准确使用",
          evidenceAccepts: ["用得准确", "正确使用", "use accurately"],
          expected: "use sth accurately",
          targetChunk: "use sth accurately"
        },
        {
          sourceWord: "lead",
          writingTask: "如果要补充“这种学习方式会造成问题”，应表达哪类关系？",
          intentionQuestion: "这个表达连接哪两类信息？",
          intentionOptions: ["原因和结果", "两个例子", "相反观点"],
          intentionAnswer: "原因和结果",
          evidenceQuestion: "如果要补充后果，这个词块连接哪两类信息？",
          evidenceAnswer: "原因和结果",
          evidenceAccepts: ["原因结果", "cause and result", "cause and effect"],
          expected: "lead to",
          targetChunk: "lead to"
        }
      ],
      judge: [
        {
          chunk: "a large number of",
          targetChunk: "a large number of",
          sentence: "A large number of students rely on vocabulary lists.",
          meaningAnswer: "大量的",
          meaningAccepts: ["很多", "许多", "数量很多", "大批"],
          roleAnswer: "quantity"
        },
        {
          chunk: "use sth accurately",
          targetChunk: "use sth accurately",
          sentence: "Students need to use new expressions accurately in essays.",
          meaningAnswer: "准确使用某物",
          meaningAccepts: ["正确使用", "准确地用", "用得准确", "准确运用"],
          roleAnswer: "accuracy"
        }
      ],
      application: [
        {
          type: "repair",
          prompt: "改错：Many students struggle in use words accurate.",
          required: ["struggle to", "accurately"],
          sample: "Many students struggle to use words accurately."
        },
        {
          type: "rewrite",
          prompt: "改写：Students know many words, but they cannot use them well.",
          required: ["a large number of", "struggle to", "accurately"],
          sample: "A large number of students know many words, but they struggle to use them accurately."
        }
      ]
    }
  },
  {
    title: "图表趋势与原因表达",
    sourceCards: [
      {
        word: "increase",
        sentence: "The data shows a sharp increase in the use of online courses.",
        answer: "增长",
        choices: ["增长", "提高", "增加量", "扩展"]
      },
      {
        word: "account",
        sentence: "Online courses accounted for only a small proportion of adult education.",
        answer: "占比",
        choices: ["解释", "叙述", "占比", "账户"]
      },
      {
        word: "result",
        sentence: "As a result, more adults were able to study while working full-time.",
        answer: "结果",
        choices: ["结论", "原因", "影响", "结果"]
      },
      {
        word: "lead",
        sentence: "Convenience can lead to major changes in adult education.",
        answer: "导致",
        choices: ["引导", "处于领先", "导致", "负责"]
      }
    ],
    reading: {
      contextTitle: "阅读短文：线上课程趋势",
      context:
        "The data shows a sharp increase in the use of online courses between 2015 and 2025. In 2015, online courses accounted for only a small proportion of adult education. This change was partly caused by flexible schedules and lower costs. As a result, more adults were able to study while working full-time.",
      retrieval: [
        {
          sourceWord: "increase",
          readingTask: "找出短文中描述“线上课程使用量明显上升”的句子。",
          sentenceIndex: 0,
          meaningQuestion: "这句话描述的是哪类数据变化？",
          meaningOptions: ["线上课程使用量急剧增长", "线上课程价格大幅下降", "成人教育人数减少"],
          meaningAnswer: "线上课程使用量急剧增长",
          expected: "a sharp increase in",
          targetChunk: "a sharp increase in"
        },
        {
          sourceWord: "account",
          readingTask: "找出短文中说明“线上课程在成人教育中占比很小”的句子。",
          sentenceIndex: 1,
          meaningQuestion: "这句话说明线上课程在 2015 年的占比怎样？",
          meaningOptions: ["只占成人教育的一小部分", "占成人教育的大部分", "完全没有出现在成人教育中"],
          meaningAnswer: "只占成人教育的一小部分",
          expected: "accounted for",
          targetChunk: "account for"
        },
        {
          sourceWord: "result",
          readingTask: "找出短文中说明“变化带来的结果”的句子。",
          sentenceIndex: 3,
          meaningQuestion: "这个结果具体是什么？",
          meaningOptions: ["更多成年人可以边全职工作边学习", "更多成年人停止学习", "更多学校取消线上课程"],
          meaningAnswer: "更多成年人可以边全职工作边学习",
          expected: "As a result",
          targetChunk: "as a result"
        }
      ],
      judge: [
        {
          chunk: "a sharp increase in",
          targetChunk: "a sharp increase in",
          sentence: "The data shows a sharp increase in the use of online courses.",
          meaningAnswer: "急剧增长",
          meaningAccepts: ["快速增长", "明显上升", "大幅增加", "迅速增加"],
          roleAnswer: "trend"
        },
        {
          chunk: "accounted for",
          targetChunk: "account for",
          sentence: "Online courses accounted for only a small proportion of adult education.",
          meaningAnswer: "占比",
          meaningAccepts: ["占", "占多少", "比例", "构成"],
          roleAnswer: "proportion"
        }
      ],
      application: [
        {
          type: "summary",
          prompt: "用 18-25 词概括这段数据变化，必须使用 a sharp increase in 或 accounted for。",
          required: ["increase", "account"],
          sample: "The passage shows a sharp increase in online courses, which accounted for a growing share of adult education."
        }
      ]
    },
    writing: {
      contextTitle: "写作语境：Task 1 趋势句",
      context:
        "任务：描述 2015 到 2025 年线上课程使用量快速增长，并说明它在成人教育中的占比。",
      retrieval: [
        {
          sourceWord: "increase",
          writingTask: "描述 2015 到 2025 年线上课程使用量的变化。",
          intentionQuestion: "这个表达要完成什么功能？",
          intentionOptions: ["描述上升趋势", "说明占比", "引出结果"],
          intentionAnswer: "描述上升趋势",
          evidenceQuestion: "任务要求描述哪类变化？",
          evidenceAnswer: "线上课程使用量快速增长",
          evidenceAccepts: ["快速增长", "online learning rose", "online courses increased", "增长"],
          expected: "a sharp increase in",
          targetChunk: "a sharp increase in"
        },
        {
          sourceWord: "account",
          writingTask: "说明线上课程在成人教育中的占比。",
          intentionQuestion: "这个表达要完成什么功能？",
          intentionOptions: ["说明占比", "描述上升趋势", "表示让步"],
          intentionAnswer: "说明占比",
          evidenceQuestion: "任务还要求说明它在什么领域中的占比？",
          evidenceAnswer: "成人教育",
          evidenceAccepts: ["adult education", "成年人教育"],
          expected: "account for",
          targetChunk: "account for"
        },
        {
          sourceWord: "result",
          writingTask: "引出前面变化带来的结果。",
          intentionQuestion: "这个表达要完成什么功能？",
          intentionOptions: ["引出结果", "说明占比", "举例说明"],
          intentionAnswer: "引出结果",
          evidenceQuestion: "as a result 通常用来引出哪类信息？",
          evidenceAnswer: "结果",
          evidenceAccepts: ["后果", "therefore", "result"],
          expected: "as a result",
          targetChunk: "as a result"
        }
      ],
      judge: [
        {
          chunk: "as a result",
          targetChunk: "as a result",
          sentence: "As a result, more adults were able to study while working full-time.",
          meaningAnswer: "因此",
          meaningAccepts: ["所以", "结果是", "于是", "由此"],
          roleAnswer: "result"
        },
        {
          chunk: "a sharp increase in",
          targetChunk: "a sharp increase in",
          sentence: "There was a sharp increase in online learning.",
          meaningAnswer: "急剧增长",
          meaningAccepts: ["快速增长", "明显上升", "大幅增加", "迅速增加"],
          roleAnswer: "trend"
        }
      ],
      application: [
        {
          type: "repair",
          prompt: "改错：The chart shows a sharp increase of online learning.",
          required: ["a sharp increase in"],
          sample: "The chart shows a sharp increase in online learning."
        },
        {
          type: "rewrite",
          prompt: "改写：Online learning rose quickly from 2015 to 2025.",
          required: ["a sharp increase in"],
          sample: "There was a sharp increase in online learning from 2015 to 2025."
        }
      ]
    }
  }
];

const state = {
  devMode: false,
  mode: "reading",
  setIndex: 0,
  activeModule: "source",
  checked: {
    source: false,
    retrieval: false,
    judge: false,
    application: false
  },
  sourceIndex: 0,
  sourceAttempts: [],
  sourceListened: [],
  sourceSolved: [],
  sourcePassed: false,
  chunksRevealed: false,
  applicationPassed: false
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function normalise(value) {
  return value.toLowerCase().replace(/[“”"'.;,]/g, "").replace(/\s+/g, " ").trim();
}

function includesLoose(answer, needle) {
  return normalise(answer).includes(normalise(needle));
}

function samePhrase(answer, expected) {
  return normalise(answer).includes(normalise(expected));
}

function copiedPhrase(answer, expected) {
  return normalise(answer) === normalise(expected);
}

function meaningMatches(answer, item) {
  const cleanAnswer = normalise(answer);
  if (!cleanAnswer || cleanAnswer.length < 2) return false;
  return [item.meaningAnswer, ...(item.meaningAccepts || [])].some((accepted) => {
    const cleanAccepted = normalise(accepted);
    return cleanAnswer.includes(cleanAccepted) || cleanAccepted.includes(cleanAnswer);
  });
}

function evidenceMatches(answer, item) {
  const cleanAnswer = normalise(answer);
  if (!cleanAnswer || cleanAnswer.length < 2) return false;
  return [item.evidenceAnswer, ...(item.evidenceAccepts || [])].filter(Boolean).some((accepted) => {
    const cleanAccepted = normalise(accepted);
    return cleanAnswer.includes(cleanAccepted) || cleanAccepted.includes(cleanAnswer);
  });
}

function getSet() {
  return PRACTICE_SETS[state.setIndex];
}

function getBoard() {
  return getSet()[state.mode];
}

function getActiveModule() {
  return MODULES.find((module) => module.id === state.activeModule) || MODULES[0];
}

function getContextSentences(board = getBoard()) {
  return board.context.match(/[^.!?。！？]+[.!?。！？]/g) || [board.context];
}

function getEntryByChunk(chunk) {
  const key = normalise(chunk);
  return KNOWLEDGE_BASE.find((entry) => normalise(entry.chunk) === key);
}

function ensureSourceState(set = getSet()) {
  const length = set.sourceCards.length;
  if (state.sourceAttempts.length !== length) state.sourceAttempts = Array(length).fill(0);
  if (state.sourceListened.length !== length) state.sourceListened = Array(length).fill(false);
  if (state.sourceSolved.length !== length) state.sourceSolved = Array(length).fill(false);
  state.sourceIndex = Math.min(state.sourceIndex, length - 1);
}

function render() {
  const set = getSet();
  const board = getBoard();
  const activeModule = getActiveModule();
  ensureSourceState(set);
  document.body.classList.toggle("dev-mode-on", state.devMode);
  $("#card-title").textContent = `${set.title} · ${state.mode === "reading" ? "阅读练习" : "写作练习"} · ${activeModule.shortLabel}`;
  $("#mode-label").textContent = state.mode === "reading" ? "阅读" : "写作";
  $("#module-label").textContent = activeModule.label;
  $("#retrieval-title").textContent = state.mode === "reading" ? "读懂句子，提取表达" : "明确意图，调用词块";
  $("[data-check='retrieval']").textContent = state.mode === "reading" ? "检查理解与提取" : "检查词块调用";
  const devToggle = $("#dev-mode-toggle");
  if (devToggle) devToggle.checked = state.devMode;
  $$(".tab-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === state.mode);
  });
  renderModuleSelector();
  renderSourceCards(set);
  renderBoard(board);
  renderModuleVisibility();
  updateProgress();
}

function renderModuleSelector() {
  $("#module-list").innerHTML = MODULES.map((module, index) => `
    <button class="module-button ${state.activeModule === module.id ? "is-active" : ""}" type="button" data-module-select="${module.id}">
      <strong>${index + 1}. ${module.label}</strong>
      <small>${module.hint}</small>
    </button>
  `).join("");
}

function renderModuleVisibility() {
  $$(".exercise-card[data-module]").forEach((card) => {
    const active = card.dataset.module === state.activeModule;
    card.classList.toggle("is-hidden", !active);
    card.setAttribute("aria-hidden", active ? "false" : "true");
  });
}

function renderSourceCards(set = getSet()) {
  const index = Math.min(state.sourceIndex, set.sourceCards.length - 1);
  const item = set.sourceCards[index];
  const solved = Boolean(state.sourceSolved[index]);
  const listened = Boolean(state.sourceListened[index]) || state.devMode;
  const attempts = state.sourceAttempts[index] || 0;
  const allSolved = state.sourceSolved.length === set.sourceCards.length && state.sourceSolved.every(Boolean);
  const listenStatus = state.devMode
    ? "开发者模式已开启：可直接选择含义，学生端仍需先听完整句。"
    : listened
    ? "已听完整句，可以选择中文含义。"
    : "先点“听整句”。听完后才会开放选项。";

  $("#source-word-list").innerHTML = `
    <div class="source-card ${solved ? "is-solved" : ""}">
      <div class="source-meta">
        <span class="source-progress">第 ${index + 1} / ${set.sourceCards.length} 个词</span>
        <span class="source-word">${item.word}</span>
      </div>
      <strong>${item.word}</strong>
      <p class="source-sentence" data-source-sentence="${index}">${item.sentence}</p>
      <button class="listen-button" type="button" data-speak-source="${index}" ${solved ? "disabled" : ""}>${listened ? "重听整句" : "听整句"}</button>
      <p class="source-listen-status" data-source-status="${index}">${listenStatus}</p>
      <div class="meaning-options">
        ${item.choices.map((choice) => `
          <label class="meaning-option ${!listened && !solved ? "is-locked" : ""}">
            <input type="radio" name="source-${index}" value="${choice}" ${solved || !listened ? "disabled" : ""} />
            <span>${choice}</span>
          </label>
        `).join("")}
      </div>
      ${attempts === 1 && !solved ? `<p class="mini-feedback warn">再选一次。先用整句判断这个词在此处的具体意思。</p>` : ""}
      ${solved ? `<p class="source-answer">正确含义：${item.answer}</p>` : ""}
    </div>
  `;

  const sourceButton = $("[data-check='source']");
  if (sourceButton) {
    sourceButton.disabled = !state.devMode && allSolved && state.sourcePassed;
    sourceButton.textContent = state.devMode ? "开发跳过认词" : solved && !allSolved ? "下一词" : allSolved ? "认词已完成" : "检查认词";
  }
}

function renderBoard(board = getBoard()) {
  $("#context-title").textContent = board.contextTitle;
  renderRetrieval(board);
  renderChunkPanel(shouldRevealChunkPanel(), board);
  renderJudge(board);
  renderApplication(board);
  renderAnswerKey();
}

function shouldRevealChunkPanel() {
  return state.devMode || state.chunksRevealed || ["judge", "application"].includes(state.activeModule);
}

function lockedCopy(title, body) {
  return `
    <div class="locked-placeholder">
      <strong>${title}</strong>
      <span>${body}</span>
    </div>
  `;
}

function resetBoardState() {
  Object.keys(state.checked).forEach((key) => {
    state.checked[key] = false;
  });
  const set = getSet();
  state.sourceIndex = 0;
  state.sourceAttempts = Array(set.sourceCards.length).fill(0);
  state.sourceListened = Array(set.sourceCards.length).fill(state.devMode);
  state.sourceSolved = Array(set.sourceCards.length).fill(false);
  state.sourcePassed = false;
  state.chunksRevealed = false;
  state.applicationPassed = false;
  $$(".feedback").forEach((node) => {
    node.textContent = "";
    node.className = "feedback";
  });
  const sourceButton = $("[data-check='source']");
  if (sourceButton) {
    sourceButton.disabled = false;
    sourceButton.textContent = "检查认词";
  }
  updateProgress();
}

function renderRetrieval(board = getBoard()) {
  const sentences = getContextSentences(board);
  $("#context-text").innerHTML = state.mode === "reading"
    ? sentences.map((sentence, index) => `<span class="sentence-line"><strong>${index + 1}</strong>${sentence.trim()}</span>`).join("")
    : board.context;
  $("#retrieval-options").innerHTML = board.retrieval
    .map((item, index) => {
      if (state.mode === "reading") {
        return `
          <div class="recognition-input">
            <div class="retrieval-heading">
              <span>信息任务 ${index + 1}</span>
              <small>先读懂句子，再提取表达</small>
            </div>
            <p class="task-prompt">${item.readingTask}</p>
            <div class="sentence-choice-grid">
              ${sentences.map((sentence, sentenceIndex) => `
                <label class="sentence-choice">
                  <input type="radio" name="retrieval-sentence-${index}" value="${sentenceIndex}" />
                  <span>第 ${sentenceIndex + 1} 句</span>
                </label>
              `).join("")}
            </div>
            <label class="answer-input evidence-input">
              <span>${item.meaningQuestion}</span>
              <select data-retrieval-meaning-index="${index}">
                <option value="">选择这句话的意思</option>
                ${(item.meaningOptions || []).map((option) => `<option value="${option}">${option}</option>`).join("")}
              </select>
            </label>
            <div class="copy-target ${state.devMode ? "" : "is-hidden"}" data-copy-target-index="${index}">
              <span>请把这个短语写一遍</span>
              <strong>${item.expected}</strong>
            </div>
            <label class="answer-input">
              <span>照着上面的短语写一遍</span>
              <input type="text" data-retrieval-copy-index="${index}" data-reading-copy-index="${index}" placeholder="先选句和判意，再抄写短语" ${state.devMode ? "" : "disabled"} />
            </label>
            <p class="mini-feedback" data-retrieval-feedback="${index}"></p>
          </div>
        `;
      }
      return `
        <div class="recognition-input">
          <div class="retrieval-heading">
            <span>表达任务 ${index + 1}</span>
            <small>先确定表达意图，再调用词块</small>
          </div>
          <p class="task-prompt">${item.writingTask || item.evidenceQuestion}</p>
          <label class="answer-input evidence-input">
            <span>${item.intentionQuestion || "这个表达要完成什么功能？"}</span>
            <select data-writing-intention-index="${index}">
              <option value="">选择表达意图</option>
              ${(item.intentionOptions || []).map((option) => `<option value="${option}">${option}</option>`).join("")}
            </select>
          </label>
          <div class="copy-target ${state.devMode ? "" : "is-hidden"}" data-copy-target-index="${index}">
            <span>请把这个短语写一遍</span>
            <strong>${item.expected}</strong>
          </div>
          <label class="answer-input">
            <span>照着上面的短语写一遍</span>
            <input type="text" data-retrieval-copy-index="${index}" data-writing-copy-index="${index}" placeholder="先判断表达意图，再抄写短语" ${state.devMode ? "" : "disabled"} />
          </label>
          <p class="mini-feedback" data-retrieval-feedback="${index}"></p>
        </div>
      `;
    })
    .join("");
  $("[data-check='retrieval']").disabled = false;
  updateReadingExtractionLocks();
  updateWritingExtractionLocks();
}

function updateReadingExtractionLocks() {
  if (state.mode !== "reading" || state.devMode) return;
  getBoard().retrieval.forEach((item, index) => {
    const hasSentence = Boolean($(`input[name='retrieval-sentence-${index}']:checked`));
    const meaningNode = $(`[data-retrieval-meaning-index='${index}']`);
    const canCopy = hasSentence && meaningNode && meaningNode.value;
    const target = $(`[data-copy-target-index='${index}']`);
    if (target) target.classList.toggle("is-hidden", !canCopy);
    $$(`[data-reading-copy-index='${index}']`).forEach((input) => {
      input.disabled = !canCopy;
      if (!canCopy) input.value = "";
      input.placeholder = canCopy ? "照着上面的短语写一遍" : "先完成选句和判意";
    });
  });
}

function updateWritingExtractionLocks() {
  if (state.mode !== "writing" || state.devMode) return;
  getBoard().retrieval.forEach((item, index) => {
    const intentionNode = $(`[data-writing-intention-index='${index}']`);
    const canCopy = Boolean(intentionNode && intentionNode.value);
    const target = $(`[data-copy-target-index='${index}']`);
    if (target) target.classList.toggle("is-hidden", !canCopy);
    $$(`[data-writing-copy-index='${index}']`).forEach((input) => {
      input.disabled = !canCopy;
      if (!canCopy) input.value = "";
      input.placeholder = canCopy ? "照着上面的短语写一遍" : "先判断表达意图";
    });
  });
}

function renderChunkPanel(revealed, board = getBoard()) {
  if (!revealed) {
    $("#chunk-list").innerHTML = lockedCopy("完成后揭示", "完成理解和表达后，这里会整理“原句短语 -> 可套用形式 -> 替代表达”。");
    return;
  }

  $("#chunk-list").innerHTML = board.retrieval
    .map((item) => {
      const entry = getEntryByChunk(item.targetChunk) || {};
      return `
        <div class="reveal-card">
          <span class="source-expression">${state.mode === "reading" ? "原句短语" : "本次表达"}：${item.expected}</span>
          <strong>${item.targetChunk}</strong>
          <span>${(entry.alternatives || []).join(" / ") || "暂无替代表达"}</span>
          <em>${entry.writingTip || "应用时保持词块完整。"}</em>
        </div>
      `;
    })
    .join("");
}

function renderJudge(board = getBoard()) {
  $("#judge-questions").innerHTML = board.judge
    .map((item, index) => `
      <div class="question-block">
        <p class="question-title">${item.chunk}</p>
        <p class="example-line">${item.sentence}</p>
        <div class="judge-grid">
          <label class="answer-input">
            <span>含义</span>
            <input type="text" data-meaning-index="${index}" placeholder="写中文含义" />
          </label>
          <label class="answer-input">
            <span>作用</span>
            <select data-role-index="${index}">
              <option value="">选择作用</option>
              ${Object.entries(ROLE_LABELS).map(([value, label]) => `<option value="${value}">${label}</option>`).join("")}
            </select>
          </label>
        </div>
      </div>
    `)
    .join("");
  $("[data-check='judge']").disabled = false;
}

function renderApplication(board = getBoard()) {
  $("#application-questions").innerHTML = board.application
    .map((item, index) => `
      <div class="question-block">
        <p class="question-title">${item.type === "repair" ? "改错" : item.type === "rewrite" ? "改写" : "应用"}</p>
        <p class="example-line">${item.prompt}</p>
        <p class="example-line">必须使用：${item.required.join(" / ")}</p>
        <textarea rows="3" data-application-index="${index}" placeholder="Write your answer..."></textarea>
      </div>
    `)
    .join("");
  $("[data-check='application']").disabled = false;
}

function renderAnswerKey() {
  const board = getBoard();
  $("#answer-key-content").className = "answer-key-content";
  $("#answer-key-content").innerHTML = `
    <p><strong>板块：</strong>${state.mode === "reading" ? "阅读练习" : "写作练习"}</p>
    <p><strong>词块检索参考：</strong>${board.retrieval.map((item) => `${item.expected} -> ${item.targetChunk}`).join(" | ")}</p>
    <p><strong>应用参考：</strong>${board.application.map((item) => item.sample).join(" | ")}</p>
  `;
}

function markChecked(section) {
  state.checked[section] = true;
  updateProgress();
}

function updateProgress() {
  const activeModule = getActiveModule();
  if (state.devMode) {
    $("#progress-fill").style.width = "100%";
    $("#progress-copy").textContent = "开发者模式：可直接进入任一模块";
    $("#transfer-status").textContent = "开发模式";
    return;
  }
  const total = Object.keys(state.checked).length;
  const completed = Object.values(state.checked).filter(Boolean).length;
  $("#progress-fill").style.width = `${(completed / total) * 100}%`;
  $("#progress-copy").textContent = `${completed}/${total} 个模块已检查`;
  if (state.checked[state.activeModule]) {
    $("#transfer-status").textContent = `${activeModule.shortLabel}已检查`;
  } else {
    $("#transfer-status").textContent = state.applicationPassed ? "已应用" : state.chunksRevealed ? "待应用" : "待完成";
  }
}

function speakSourceSentence(index) {
  const set = getSet();
  const sentence = set.sourceCards[index] && set.sourceCards[index].sentence;
  const sentenceNode = $(`[data-source-sentence='${index}']`);
  const statusNode = $(`[data-source-status='${index}']`);

  if (sentenceNode) sentenceNode.classList.remove("is-hidden");
  if (statusNode) statusNode.textContent = "已显示整句，正在尝试朗读。";

  if (!sentence || !("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") {
    state.sourceListened[index] = true;
    renderSourceCards(set);
    setFeedback("#feedback-source", "warn", "当前浏览器不支持自动朗读，已用显示的整句作为备用，现在可以选择含义。");
    return;
  }

  const synth = window.speechSynthesis;
  synth.cancel();
  const utterance = new SpeechSynthesisUtterance(sentence);
  utterance.lang = "en-US";
  utterance.rate = 0.88;
  utterance.pitch = 1;
  utterance.volume = 1;

  const voices = synth.getVoices();
  const englishVoice = voices.find((voice) => /^en[-_]/i.test(voice.lang));
  if (englishVoice) utterance.voice = englishVoice;

  let finished = false;
  let fallbackTimer;
  const finishListening = (type, text) => {
    if (finished) return;
    finished = true;
    if (fallbackTimer) window.clearTimeout(fallbackTimer);
    state.sourceListened[index] = true;
    renderSourceCards(set);
    setFeedback("#feedback-source", type, text);
  };

  utterance.onstart = () => {
    if (statusNode) statusNode.textContent = "正在朗读。";
    setFeedback("#feedback-source", "good", "正在朗读整句。听完后会开放选项。");
  };
  utterance.onend = () => {
    finishListening("good", "已听完整句，现在可以选择中文含义。");
  };
  utterance.onerror = () => {
    finishListening("warn", "朗读失败，已用显示的整句作为备用，现在可以选择含义。");
  };

  setTimeout(() => {
    synth.resume();
    synth.speak(utterance);
  }, 0);
  fallbackTimer = window.setTimeout(() => {
    finishListening("good", "已等待完整句播放时长，现在可以选择中文含义。");
  }, Math.max(3000, sentence.split(/\s+/).length * 430));
}

function setFeedback(id, type, text) {
  const node = $(id);
  node.textContent = text;
  node.className = `feedback ${type}`;
}

function checkSource() {
  const set = getSet();
  const index = state.sourceIndex;
  const item = set.sourceCards[index];
  const solved = Boolean(state.sourceSolved[index]);
  const listened = Boolean(state.sourceListened[index]);
  const isLast = index === set.sourceCards.length - 1;

  if (state.devMode) {
    state.sourcePassed = true;
    markChecked("source");
    renderRetrieval();
    renderChunkPanel(true);
    renderJudge();
    renderApplication();
    setFeedback("#feedback-source", "good", "开发者模式：已跳过认词门槛，可直接查看其他模块。");
    return;
  }

  if (state.sourcePassed) {
    setFeedback("#feedback-source", "good", "认词已完成，可以切换到词块检索模块。");
    return;
  }

  if (solved && !isLast) {
    state.sourceIndex += 1;
    renderSourceCards(set);
    setFeedback("#feedback-source", "good", "进入下一个词。先听完整句，再选择含义。");
    return;
  }

  if (solved && isLast) {
    state.sourcePassed = true;
    markChecked("source");
    renderSourceCards(set);
    renderRetrieval();
    setFeedback("#feedback-source", "good", "认词完成，可以切换到词块检索模块。");
    return;
  }

  if (!listened) {
    setFeedback("#feedback-source", "bad", "先听完整句，听完后才可以选择中文含义。");
    return;
  }

  const selected = $(`input[name='source-${index}']:checked`);
  if (!selected) {
    setFeedback("#feedback-source", "bad", "先选一个中文含义。句子已经显示，可以直接根据语境判断。");
    return;
  }

  if (selected.value === item.answer) {
    state.sourceSolved[index] = true;
    if (isLast) {
      state.sourcePassed = true;
      markChecked("source");
      renderSourceCards(set);
      renderRetrieval();
      setFeedback("#feedback-source", "good", "正确。认词完成，可以切换到词块检索模块。");
    } else {
      renderSourceCards(set);
      setFeedback("#feedback-source", "good", "正确。点“下一词”继续。");
    }
    return;
  }

  state.sourceAttempts[index] += 1;
  if (state.sourceAttempts[index] < 2) {
    setFeedback("#feedback-source", "warn", "这次不对，再选一次。先看整句，不要只看单词的常见义。");
    renderSourceCards(set);
    return;
  }

  state.sourceSolved[index] = true;
  if (isLast) {
    state.sourcePassed = true;
    markChecked("source");
    renderSourceCards(set);
    renderRetrieval();
    setFeedback("#feedback-source", "warn", `第二次仍不对，正确含义是“${item.answer}”。认词已完成，可以切换到词块检索模块。`);
  } else {
    renderSourceCards(set);
    setFeedback("#feedback-source", "warn", `第二次仍不对，正确含义是“${item.answer}”。点“下一词”继续。`);
  }
}

function checkRetrieval() {
  const board = getBoard();
  let activeCount = 0;
  let completeCount = 0;

  board.retrieval.forEach((item, index) => {
    const copyAnswer = $(`[data-retrieval-copy-index='${index}']`).value;
    const copyOk = copiedPhrase(copyAnswer, item.expected);
    const feedbackNode = $(`[data-retrieval-feedback='${index}']`);

    feedbackNode.className = "mini-feedback";

    if (state.mode === "reading") {
      const selectedSentence = $(`input[name='retrieval-sentence-${index}']:checked`);
      const sentenceOk = selectedSentence && Number(selectedSentence.value) === item.sentenceIndex;
      const meaningAnswer = $(`[data-retrieval-meaning-index='${index}']`).value;
      const meaningOk = meaningAnswer === item.meaningAnswer;

      if (sentenceOk && meaningOk && copyOk) {
        activeCount += 1;
      }
      if (sentenceOk && meaningOk && copyOk) {
        completeCount += 1;
        feedbackNode.classList.add("good");
        feedbackNode.textContent = "好：先读懂了信息，再把目标短语写了一遍。";
      } else if (!sentenceOk) {
        feedbackNode.classList.add("bad");
        feedbackNode.textContent = "先读整段，判断这个信息具体出现在哪一句。";
      } else if (!meaningOk) {
        feedbackNode.classList.add("warn");
        feedbackNode.textContent = "句子选对了，但这句话的意思还没判断准。先理解语境，再抄写短语。";
      } else {
        feedbackNode.classList.add("bad");
        feedbackNode.textContent = `照着显示的短语写一遍：${item.expected}`;
      }
    } else {
      const intentionAnswer = $(`[data-writing-intention-index='${index}']`).value;
      const intentionOk = intentionAnswer === item.intentionAnswer;

      if (intentionOk && copyOk) {
        activeCount += 1;
      }
      if (!intentionOk) {
        feedbackNode.classList.add("bad");
        feedbackNode.textContent = "先判断表达意图，再抄写短语。";
      } else if (copyOk) {
        completeCount += 1;
        feedbackNode.classList.add("good");
        feedbackNode.textContent = "好：表达意图清楚，也把目标短语写了一遍。";
      } else {
        feedbackNode.classList.add("bad");
        feedbackNode.textContent = `照着显示的短语写一遍：${item.expected}`;
      }
    }
  });

  state.chunksRevealed = activeCount > 0 || state.devMode;
  if (state.chunksRevealed) markChecked("retrieval");
  if (state.chunksRevealed) {
    renderChunkPanel(true);
    renderJudge();
  }
  if (completeCount === board.retrieval.length) {
    setFeedback("#feedback-retrieval", "good", `完成：${completeCount}/${board.retrieval.length} 个短语都写了一遍。`);
  } else if (state.devMode && activeCount === 0) {
    setFeedback("#feedback-retrieval", "warn", "开发者模式：未填写检索也可以查看其他模块。");
  } else if (activeCount > 0) {
    setFeedback("#feedback-retrieval", "warn", `已完成 ${activeCount}/${board.retrieval.length} 个短语抄写。`);
  } else {
    setFeedback(
      "#feedback-retrieval",
      "bad",
      state.mode === "reading"
        ? "先完成“选句子 -> 判意思”，再照着写目标短语。"
        : "先判断表达意图，再照着写目标短语。"
    );
  }
}

function checkJudge() {
  const board = getBoard();
  let correct = 0;

  board.judge.forEach((item, index) => {
    const meaning = $(`[data-meaning-index='${index}']`).value;
    const role = $(`[data-role-index='${index}']`).value;
    if (meaningMatches(meaning, item) && role === item.roleAnswer) {
      correct += 1;
    }
  });

  markChecked("judge");
  if (correct === board.judge.length) {
    renderApplication();
    setFeedback("#feedback-judge", "good", "含义和作用判断准确，可以继续做应用模块。");
  } else if (correct > 0) {
    renderApplication();
    setFeedback("#feedback-judge", "warn", `已有 ${correct} 题判断正确，可以先做应用模块，再回看错题。`);
  } else {
    setFeedback("#feedback-judge", "bad", "先判断词块在句子里的中文义，再判断它承担的信息作用。");
  }
}

function checkApplication() {
  const board = getBoard();
  let correct = 0;
  let firstMiss = null;

  board.application.forEach((item, index) => {
    const answer = $(`[data-application-index='${index}']`).value;
    const hasRequired = item.required.every((required) => includesLoose(answer, required));
    const longEnough = normalise(answer).split(" ").filter(Boolean).length >= 6;
    if (hasRequired && longEnough) {
      correct += 1;
    } else if (!firstMiss) {
      firstMiss = item;
    }
  });

  state.applicationPassed = correct > 0;
  markChecked("application");
  if (correct === board.application.length) {
    setFeedback("#feedback-application", "good", "应用完成：词块已经从识别进入输出。");
  } else if (correct > 0) {
    setFeedback("#feedback-application", "warn", "已有词块应用动作；继续检查另一题的指定词块是否完整。");
  } else {
    setFeedback("#feedback-application", "bad", firstMiss ? `需要使用：${firstMiss.required.join(" / ")}` : "请使用指定词块完成应用。");
  }
  updateProgress();
}

function resetAnswers() {
  resetBoardState();
  render();
}

document.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  if (button.dataset.speakSource) {
    speakSourceSentence(Number(button.dataset.speakSource));
    return;
  }

  if (button.dataset.moduleSelect) {
    state.activeModule = button.dataset.moduleSelect;
    render();
    return;
  }

  if (button.dataset.mode) {
    state.mode = button.dataset.mode;
    resetBoardState();
    render();
    return;
  }

  if (button.id === "next-card") {
    state.setIndex = (state.setIndex + 1) % PRACTICE_SETS.length;
    resetBoardState();
    render();
    return;
  }

  if (button.id === "reset-card") {
    resetAnswers();
    return;
  }

  const checkType = button.dataset.check;
  if (checkType === "source") checkSource();
  if (checkType === "retrieval") checkRetrieval();
  if (checkType === "judge") checkJudge();
  if (checkType === "application") checkApplication();
});

document.addEventListener("change", (event) => {
  if (event.target.id === "dev-mode-toggle") {
    state.devMode = event.target.checked;
    render();
    setFeedback(
      "#feedback-source",
      state.devMode ? "warn" : "good",
      state.devMode ? "开发者模式已开启：可直接查看任一模块。" : "已关闭开发者模式：恢复学生端认词听音限制。"
    );
    return;
  }

  if (event.target.matches("input[name^='retrieval-sentence-'], [data-retrieval-meaning-index]")) {
    updateReadingExtractionLocks();
  }

  if (event.target.matches("[data-writing-intention-index]")) {
    updateWritingExtractionLocks();
  }
});

if ("speechSynthesis" in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
  };
}

resetBoardState();
render();
