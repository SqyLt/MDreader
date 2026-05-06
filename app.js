const app = document.querySelector(".app");
const editor = document.querySelector("#editor");
const preview = document.querySelector("#preview");
const outline = document.querySelector("#outline");
const statusText = document.querySelector("#status");
const statsText = document.querySelector("#stats");
const titleInput = document.querySelector("#documentTitle");
const fileInput = document.querySelector("#fileInput");
const languageSelects = [...document.querySelectorAll("[data-language-select]")];
const viewButtons = [...document.querySelectorAll("[data-view-choice]")];
const undoButton = document.querySelector('[data-history-action="undo"]');
const redoButton = document.querySelector('[data-history-action="redo"]');

const translations = {
  en: {
    lang: "en",
    brandSubtitle: "Markdown Editor",
    documentPanel: "Document",
    newDocument: "New document",
    openMd: "Open .md",
    saveMd: "Save .md",
    exportHtml: "Export HTML",
    settingsPanel: "Settings",
    languageLabel: "Language",
    outlinePanel: "Outline",
    documentTitleLabel: "Document title",
    toolbarLabel: "Markdown toolbar",
    viewSwitcherLabel: "View switcher",
    editorLabel: "Markdown editor",
    undoTitle: "Undo",
    redoTitle: "Redo",
    boldTitle: "Bold",
    italicTitle: "Italic",
    headingTitle: "Heading",
    listTitle: "List",
    quoteTitle: "Quote",
    inlineCodeTitle: "Inline code",
    codeBlockTitle: "Code block",
    linkTitle: "Link",
    listButton: "List",
    quoteButton: "Quote",
    linkButton: "Link",
    undoButton: "Undo",
    redoButton: "Redo",
    viewEdit: "Edit",
    viewSplit: "Split",
    viewPreview: "Preview",
    ready: "Ready",
    noHeadings: "No headings yet",
    untitledDocument: "Untitled document",
    titleUpdated: "Title updated",
    confirmNew: "Create a new document and clear the editor?",
    newDocumentCreated: "New document created",
    switchedView: "Switched to {view}",
    openedFile: "Opened {name}",
    savedFile: "Saved {name}",
    exportedFile: "Exported {name}",
    stats: "{chars} chars - {lines} lines",
    selectionText: "text",
    linkInsert: "[Link text](https://example.com)",
    languageChanged: "Language changed"
  },
  "zh-CN": {
    lang: "zh-CN",
    brandSubtitle: "Markdown 编辑器",
    documentPanel: "文档",
    newDocument: "新建文档",
    openMd: "打开 .md",
    saveMd: "保存 .md",
    exportHtml: "导出 HTML",
    settingsPanel: "设置",
    languageLabel: "语言",
    outlinePanel: "目录",
    documentTitleLabel: "文档标题",
    toolbarLabel: "Markdown 工具栏",
    viewSwitcherLabel: "视图切换",
    editorLabel: "Markdown 编辑区",
    undoTitle: "撤销",
    redoTitle: "重做",
    boldTitle: "加粗",
    italicTitle: "斜体",
    headingTitle: "标题",
    listTitle: "列表",
    quoteTitle: "引用",
    inlineCodeTitle: "行内代码",
    codeBlockTitle: "代码块",
    linkTitle: "链接",
    listButton: "列表",
    quoteButton: "引用",
    linkButton: "链接",
    undoButton: "上一步",
    redoButton: "下一步",
    viewEdit: "编辑",
    viewSplit: "分屏",
    viewPreview: "预览",
    ready: "已准备",
    noHeadings: "暂无标题",
    untitledDocument: "未命名文档",
    titleUpdated: "标题已更新",
    confirmNew: "新建文档会清空当前编辑区，继续吗？",
    newDocumentCreated: "已新建文档",
    switchedView: "已切换到{view}",
    openedFile: "已打开 {name}",
    savedFile: "已保存 {name}",
    exportedFile: "已导出 {name}",
    stats: "{chars} 字 · {lines} 行",
    selectionText: "文本",
    linkInsert: "[链接文字](https://example.com)",
    languageChanged: "语言已切换"
  },
  "zh-TW": {
    lang: "zh-TW",
    brandSubtitle: "Markdown 編輯器",
    documentPanel: "文件",
    newDocument: "新增文件",
    openMd: "開啟 .md",
    saveMd: "儲存 .md",
    exportHtml: "匯出 HTML",
    settingsPanel: "設定",
    languageLabel: "語言",
    outlinePanel: "目錄",
    documentTitleLabel: "文件標題",
    toolbarLabel: "Markdown 工具列",
    viewSwitcherLabel: "檢視切換",
    editorLabel: "Markdown 編輯區",
    undoTitle: "復原",
    redoTitle: "重做",
    boldTitle: "粗體",
    italicTitle: "斜體",
    headingTitle: "標題",
    listTitle: "清單",
    quoteTitle: "引用",
    inlineCodeTitle: "行內程式碼",
    codeBlockTitle: "程式碼區塊",
    linkTitle: "連結",
    listButton: "清單",
    quoteButton: "引用",
    linkButton: "連結",
    undoButton: "上一步",
    redoButton: "下一步",
    viewEdit: "編輯",
    viewSplit: "分割",
    viewPreview: "預覽",
    ready: "已就緒",
    noHeadings: "尚無標題",
    untitledDocument: "未命名文件",
    titleUpdated: "標題已更新",
    confirmNew: "新增文件會清空目前編輯區，繼續嗎？",
    newDocumentCreated: "已新增文件",
    switchedView: "已切換到{view}",
    openedFile: "已開啟 {name}",
    savedFile: "已儲存 {name}",
    exportedFile: "已匯出 {name}",
    stats: "{chars} 字 · {lines} 行",
    selectionText: "文字",
    linkInsert: "[連結文字](https://example.com)",
    languageChanged: "語言已切換"
  },
  ja: {
    lang: "ja",
    brandSubtitle: "Markdown エディター",
    documentPanel: "ドキュメント",
    newDocument: "新規ドキュメント",
    openMd: ".md を開く",
    saveMd: ".md を保存",
    exportHtml: "HTML を書き出す",
    settingsPanel: "設定",
    languageLabel: "言語",
    outlinePanel: "アウトライン",
    documentTitleLabel: "ドキュメントタイトル",
    toolbarLabel: "Markdown ツールバー",
    viewSwitcherLabel: "表示切り替え",
    editorLabel: "Markdown エディター",
    undoTitle: "元に戻す",
    redoTitle: "やり直す",
    boldTitle: "太字",
    italicTitle: "斜体",
    headingTitle: "見出し",
    listTitle: "リスト",
    quoteTitle: "引用",
    inlineCodeTitle: "インラインコード",
    codeBlockTitle: "コードブロック",
    linkTitle: "リンク",
    listButton: "リスト",
    quoteButton: "引用",
    linkButton: "リンク",
    undoButton: "戻る",
    redoButton: "進む",
    viewEdit: "編集",
    viewSplit: "分割",
    viewPreview: "プレビュー",
    ready: "準備完了",
    noHeadings: "見出しはまだありません",
    untitledDocument: "無題のドキュメント",
    titleUpdated: "タイトルを更新しました",
    confirmNew: "新しいドキュメントを作成して編集内容を消去しますか？",
    newDocumentCreated: "新規ドキュメントを作成しました",
    switchedView: "{view}に切り替えました",
    openedFile: "{name} を開きました",
    savedFile: "{name} を保存しました",
    exportedFile: "{name} を書き出しました",
    stats: "{chars} 文字 · {lines} 行",
    selectionText: "テキスト",
    linkInsert: "[リンクテキスト](https://example.com)",
    languageChanged: "言語を切り替えました"
  }
};

const starterMarkdowns = {
  en: `# Welcome to MDreader

MDreader is a lightweight Markdown editor prototype with live preview, split writing, outline navigation, and local file import/export.

## Common syntax

- Use the toolbar to insert common Markdown quickly
- Supports **bold**, *italic*, and \`inline code\`
- Supports links: [OpenAI](https://openai.com)

> Keep writing on the left; the rendered document updates on the right.

## Table

| Feature | Status |
| --- | --- |
| Live preview | Ready |
| Local save | Ready |
| HTML export | Ready |

\`\`\`js
function helloMarkdown() {
  return "Hello, MDreader";
}
\`\`\`
`,
  "zh-CN": `# 欢迎使用 MDreader

MDreader 是一个轻量的 Markdown 编辑器原型，支持实时预览、分屏写作、目录导航和本地文件导入导出。

## 常用语法

- 使用工具栏快速插入常见 Markdown
- 支持 **加粗**、*斜体* 和 \`行内代码\`
- 支持链接：[OpenAI](https://openai.com)

> 在左侧写作，右侧会实时渲染文档。
`,
  "zh-TW": `# 歡迎使用 MDreader

MDreader 是一個輕量的 Markdown 編輯器原型，支援即時預覽、分割寫作、目錄導覽和本機檔案匯入匯出。

## 常用語法

- 使用工具列快速插入常見 Markdown
- 支援 **粗體**、*斜體* 和 \`行內程式碼\`
- 支援連結：[OpenAI](https://openai.com)

> 在左側寫作，右側會即時渲染文件。
`,
  ja: `# MDreader へようこそ

MDreader は、ライブプレビュー、分割表示、アウトライン、ローカルファイルの読み書きに対応した軽量 Markdown エディターです。

## よく使う構文

- ツールバーから Markdown をすばやく挿入できます
- **太字**、*斜体*、\`インラインコード\` に対応
- リンクに対応：[OpenAI](https://openai.com)

> 左側で書くと、右側のプレビューがすぐに更新されます。
`
};

let currentLanguage = translations[localStorage.getItem("mdreader.language")]
  ? localStorage.getItem("mdreader.language")
  : "en";
let currentFileName = "untitled.md";
let renderTimer = 0;
let undoStack = [];
let redoStack = [];
let isApplyingHistory = false;

editor.value = localStorage.getItem("mdreader.content") || getStarterMarkdown();
titleInput.value = localStorage.getItem("mdreader.title") || t("untitledDocument");
languageSelects.forEach((select) => {
  select.value = currentLanguage;
});
applyLanguage();
resetHistory();
render();

editor.addEventListener("input", () => {
  if (isApplyingHistory) return;
  recordHistorySnapshot();
  scheduleRender();
});
titleInput.addEventListener("input", () => {
  localStorage.setItem("mdreader.title", titleInput.value);
  setStatus(t("titleUpdated"));
});

document.querySelector("#newDoc").addEventListener("click", () => {
  if (!confirm(t("confirmNew"))) return;
  editor.value = getStarterMarkdown();
  titleInput.value = t("untitledDocument");
  currentFileName = "untitled.md";
  resetHistory();
  render();
  setStatus(t("newDocumentCreated"));
});

languageSelects.forEach((select) => {
  select.addEventListener("change", () => {
    currentLanguage = select.value;
    localStorage.setItem("mdreader.language", currentLanguage);
    applyLanguage();
    render();
    setStatus(t("languageChanged"));
  });
});

document.querySelector("#openDoc").addEventListener("click", () => fileInput.click());
fileInput.addEventListener("change", openFile);
document.querySelector("#saveDoc").addEventListener("click", saveMarkdown);
document.querySelector("#exportHtml").addEventListener("click", exportHtml);

document.querySelector(".toolbar").addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  if (button.dataset.historyAction === "undo") {
    undoEdit();
    return;
  }

  if (button.dataset.historyAction === "redo") {
    redoEdit();
    return;
  }

  if (button.dataset.wrap) wrapSelection(button.dataset.wrap);
  if (button.dataset.prefix) prefixSelection(button.dataset.prefix);
  if (button.dataset.block === "code") insertBlock("```\n", "\n```");
  if (button.dataset.insert) insertText(button.dataset.insert);
});

viewButtons.forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.viewChoice));
});

editor.addEventListener("keydown", (event) => {
  if (event.key === "Tab") {
    event.preventDefault();
    insertText("  ");
  }

  if ((event.ctrlKey || event.metaKey) && !event.altKey && event.key.toLowerCase() === "z") {
    event.preventDefault();
    if (event.shiftKey) {
      redoEdit();
    } else {
      undoEdit();
    }
  }

  if ((event.ctrlKey || event.metaKey) && !event.altKey && event.key.toLowerCase() === "y") {
    event.preventDefault();
    redoEdit();
  }

  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "s") {
    event.preventDefault();
    saveMarkdown();
  }
});

document.addEventListener("dragover", (event) => event.preventDefault());
document.addEventListener("drop", (event) => {
  event.preventDefault();
  const [file] = event.dataTransfer.files;
  if (file) readMarkdownFile(file);
});

outline.addEventListener("click", (event) => {
  const link = event.target.closest("a[data-line]");
  if (!link) return;

  event.preventDefault();
  const line = Number(link.dataset.line);
  const id = link.dataset.id;

  outline.querySelectorAll("a").forEach((item) => item.classList.toggle("active", item === link));
  scrollPreviewToHeading(id);
  scrollEditorToLine(line);
});

function t(key, values = {}) {
  const dictionary = translations[currentLanguage] || translations.en;
  const template = dictionary[key] || translations.en[key] || key;
  return template.replace(/\{(\w+)\}/g, (_, name) => values[name] ?? "");
}

function applyLanguage() {
  const dictionary = translations[currentLanguage] || translations.en;
  document.documentElement.lang = dictionary.lang;
  languageSelects.forEach((select) => {
    select.value = currentLanguage;
    select.setAttribute("aria-label", t("languageLabel"));
  });
  statusText.textContent = t("ready");

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((node) => {
    node.dataset.i18nAttr.split(",").forEach((pair) => {
      const [attribute, key] = pair.split(":");
      node.setAttribute(attribute, t(key));
    });
  });

  viewButtons.forEach((button) => {
    const key = `view${button.dataset.viewKey[0].toUpperCase()}${button.dataset.viewKey.slice(1)}`;
    button.textContent = t(key);
  });

  const linkButton = document.querySelector("[data-insert]");
  if (linkButton) linkButton.dataset.insert = t("linkInsert");
  updateHistoryButtons();
}

function getStarterMarkdown() {
  return starterMarkdowns[currentLanguage] || starterMarkdowns.en;
}

function scheduleRender() {
  clearTimeout(renderTimer);
  renderTimer = setTimeout(render, 80);
}

function render() {
  const source = editor.value;
  const { html, headings } = markdownToHtml(source);
  preview.innerHTML = html;
  renderOutline(headings);
  updateStats(source);
  localStorage.setItem("mdreader.content", source);
  localStorage.setItem("mdreader.title", titleInput.value);
  updateHistoryButtons();
}

function markdownToHtml(markdown) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const headings = [];
  const html = [];
  let paragraph = [];
  let list = null;
  let blockquote = [];
  let code = [];
  let inCode = false;
  let tableBuffer = [];

  const flushParagraph = () => {
    if (!paragraph.length) return;
    html.push(`<p>${inline(paragraph.join(" "))}</p>`);
    paragraph = [];
  };

  const flushList = () => {
    if (!list) return;
    const items = list.items.map((item) => `<li>${inline(item)}</li>`).join("");
    html.push(`<${list.type}>${items}</${list.type}>`);
    list = null;
  };

  const flushQuote = () => {
    if (!blockquote.length) return;
    const items = blockquote.map((item) => `<p>${inline(item)}</p>`).join("");
    html.push(`<blockquote>${items}</blockquote>`);
    blockquote = [];
  };

  const flushCode = () => {
    html.push(`<pre><code>${escapeHtml(code.join("\n"))}</code></pre>`);
    code = [];
  };

  const flushTable = () => {
    if (!tableBuffer.length) return;
    html.push(renderTable(tableBuffer));
    tableBuffer = [];
  };

  const flushBlocks = () => {
    flushParagraph();
    flushList();
    flushQuote();
    flushTable();
  };

  for (let lineIndex = 0; lineIndex < lines.length; lineIndex += 1) {
    const line = lines[lineIndex];

    if (/^```/.test(line.trim())) {
      if (inCode) {
        flushCode();
        inCode = false;
      } else {
        flushBlocks();
        inCode = true;
      }
      continue;
    }

    if (inCode) {
      code.push(line);
      continue;
    }

    if (!line.trim()) {
      flushBlocks();
      continue;
    }

    const heading = /^(#{1,6})\s+(.+)$/.exec(line);
    if (heading) {
      flushBlocks();
      const level = heading[1].length;
      const text = heading[2].trim();
      const id = slugify(text, headings.length);
      headings.push({ level, text, id, line: lineIndex });
      html.push(`<h${level} id="${id}">${inline(text)}</h${level}>`);
      continue;
    }

    if (/^\|(.+)\|$/.test(line.trim())) {
      flushParagraph();
      flushList();
      flushQuote();
      tableBuffer.push(line.trim());
      continue;
    }

    flushTable();

    if (/^---+$/.test(line.trim())) {
      flushBlocks();
      html.push("<hr>");
      continue;
    }

    const quote = /^>\s?(.*)$/.exec(line);
    if (quote) {
      flushParagraph();
      flushList();
      blockquote.push(quote[1]);
      continue;
    }

    const unordered = /^\s*[-*+]\s+(.+)$/.exec(line);
    const ordered = /^\s*\d+\.\s+(.+)$/.exec(line);
    if (unordered || ordered) {
      flushParagraph();
      flushQuote();
      const type = unordered ? "ul" : "ol";
      if (!list || list.type !== type) flushList();
      if (!list) list = { type, items: [] };
      list.items.push((unordered || ordered)[1]);
      continue;
    }

    flushList();
    flushQuote();
    paragraph.push(line.trim());
  }

  if (inCode) flushCode();
  flushBlocks();

  return { html: html.join("\n"), headings };
}

function inline(text) {
  return escapeHtml(text)
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img alt="$1" src="$2">')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>')
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>");
}

function renderTable(lines) {
  const divider = /^\|\s*:?-+:?\s*(\|\s*:?-+:?\s*)+\|$/;
  if (lines.length < 2 || !divider.test(lines[1])) {
    return `<p>${inline(lines.join(" "))}</p>`;
  }

  const rows = lines.map(splitTableRow);
  const head = rows[0].map((cell) => `<th>${inline(cell)}</th>`).join("");
  const body = rows
    .slice(2)
    .map((row) => `<tr>${row.map((cell) => `<td>${inline(cell)}</td>`).join("")}</tr>`)
    .join("");
  return `<table><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table>`;
}

function splitTableRow(line) {
  return line.replace(/^\||\|$/g, "").split("|").map((cell) => cell.trim());
}

function renderOutline(headings) {
  if (!headings.length) {
    outline.innerHTML = `<span class="empty">${t("noHeadings")}</span>`;
    return;
  }

  outline.innerHTML = headings
    .map((heading) => {
      const level = Math.min(heading.level, 3);
      return `<a class="level-${level}" href="#${heading.id}" data-id="${heading.id}" data-line="${heading.line}">${escapeHtml(heading.text)}</a>`;
    })
    .join("");
}

function scrollPreviewToHeading(id) {
  if (!id) return;
  const target = preview.querySelector(`#${CSS.escape(id)}`);
  if (target) {
    target.scrollIntoView({ block: "start", behavior: "smooth" });
  }
}

function scrollEditorToLine(lineIndex) {
  if (!Number.isFinite(lineIndex) || lineIndex < 0) return;
  if (app.dataset.view === "preview") setView("split");

  const sourceLines = editor.value.replace(/\r\n/g, "\n").split("\n");
  const offset = sourceLines.slice(0, lineIndex).reduce((total, line) => total + line.length + 1, 0);
  editor.focus({ preventScroll: true });
  editor.setSelectionRange(offset, offset);

  const lineHeight = getEditorLineHeight();
  const targetTop = Math.max(0, lineIndex * lineHeight - editor.clientHeight * 0.22);
  editor.scrollTo({ top: targetTop, behavior: "smooth" });
}

function getEditorLineHeight() {
  const computed = getComputedStyle(editor);
  const parsed = Number.parseFloat(computed.lineHeight);
  return Number.isFinite(parsed) ? parsed : 27;
}

function updateStats(source) {
  const chars = source.replace(/\s+/g, "").length;
  const lines = source ? source.split("\n").length : 0;
  statsText.textContent = t("stats", { chars, lines });
}

function setView(view) {
  app.dataset.view = view;
  viewButtons.forEach((button) => button.classList.toggle("active", button.dataset.viewChoice === view));
  setStatus(t("switchedView", { view: viewLabel(view) }));
}

function viewLabel(view) {
  return { edit: t("viewEdit"), split: t("viewSplit"), preview: t("viewPreview") }[view] || t("viewSplit");
}

function wrapSelection(token) {
  const start = editor.selectionStart;
  const end = editor.selectionEnd;
  const selection = editor.value.slice(start, end) || t("selectionText");
  replaceSelection(`${token}${selection}${token}`, start + token.length, start + token.length + selection.length);
}

function prefixSelection(prefix) {
  const start = editor.selectionStart;
  const end = editor.selectionEnd;
  const selection = editor.value.slice(start, end) || t("selectionText");
  const prefixed = selection.split("\n").map((line) => `${prefix}${line}`).join("\n");
  replaceSelection(prefixed, start + prefix.length, start + prefixed.length);
}

function insertBlock(before, after) {
  const start = editor.selectionStart;
  const end = editor.selectionEnd;
  const selection = editor.value.slice(start, end) || "code";
  replaceSelection(`${before}${selection}${after}`, start + before.length, start + before.length + selection.length);
}

function insertText(text) {
  replaceSelection(text, editor.selectionStart + text.length, editor.selectionStart + text.length);
}

function replaceSelection(text, nextStart, nextEnd) {
  const start = editor.selectionStart;
  const end = editor.selectionEnd;
  editor.setRangeText(text, start, end, "end");
  editor.focus();
  editor.setSelectionRange(nextStart, nextEnd);
  recordHistorySnapshot();
  render();
}

function openFile(event) {
  const [file] = event.target.files;
  if (file) readMarkdownFile(file);
  event.target.value = "";
}

function readMarkdownFile(file) {
  const reader = new FileReader();
  reader.onload = () => {
    editor.value = String(reader.result || "");
    currentFileName = file.name;
    titleInput.value = file.name.replace(/\.(md|markdown|txt)$/i, "");
    resetHistory();
    render();
    setStatus(t("openedFile", { name: file.name }));
  };
  reader.readAsText(file);
}

function saveMarkdown() {
  const name = normalizeFileName(titleInput.value || currentFileName, "md");
  download(name, editor.value, "text/markdown;charset=utf-8");
  currentFileName = name;
  setStatus(t("savedFile", { name }));
}

async function exportHtml() {
  const name = normalizeFileName(titleInput.value || currentFileName, "html");
  const styles = await readStylesheet();
  const html = `<!doctype html>
<html lang="${escapeHtml(translations[currentLanguage].lang)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(titleInput.value)}</title>
<style>${styles}</style>
</head>
<body>
<main class="markdown-body">${preview.innerHTML}</main>
</body>
</html>`;
  download(name, html, "text/html;charset=utf-8");
  setStatus(t("exportedFile", { name }));
}

async function readStylesheet() {
  const localStyles = [...document.styleSheets]
    .map((sheet) => {
      try {
        return [...sheet.cssRules].map((rule) => rule.cssText).join("\n");
      } catch {
        return "";
      }
    })
    .filter(Boolean)
    .join("\n");

  if (localStyles) return localStyles;

  try {
    const response = await fetch("styles.css");
    return response.ok ? await response.text() : "";
  } catch {
    return "";
  }
}

function normalizeFileName(name, extension) {
  const cleaned = name.trim().replace(/[\\/:*?"<>|]/g, "-") || "untitled";
  return cleaned.replace(/\.[^.]+$/, "") + `.${extension}`;
}

function download(name, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = name;
  link.click();
  URL.revokeObjectURL(url);
}

function setStatus(message) {
  statusText.textContent = message;
  clearTimeout(setStatus.timer);
  setStatus.timer = setTimeout(() => {
    statusText.textContent = t("ready");
  }, 1800);
}

function captureEditorState() {
  return {
    value: editor.value,
    selectionStart: editor.selectionStart,
    selectionEnd: editor.selectionEnd
  };
}

function statesEqual(left, right) {
  return left
    && right
    && left.value === right.value
    && left.selectionStart === right.selectionStart
    && left.selectionEnd === right.selectionEnd;
}

function resetHistory() {
  undoStack = [captureEditorState()];
  redoStack = [];
  updateHistoryButtons();
}

function recordHistorySnapshot() {
  const state = captureEditorState();
  const previous = undoStack[undoStack.length - 1];
  if (statesEqual(previous, state)) return;

  undoStack.push(state);
  if (undoStack.length > 200) undoStack.shift();
  redoStack = [];
  updateHistoryButtons();
}

function applyEditorState(state) {
  if (!state) return;
  isApplyingHistory = true;
  editor.value = state.value;
  editor.focus({ preventScroll: true });
  editor.setSelectionRange(state.selectionStart, state.selectionEnd);
  render();
  isApplyingHistory = false;
}

function undoEdit() {
  if (undoStack.length <= 1) return;
  const current = captureEditorState();
  const previous = undoStack[undoStack.length - 2];
  redoStack.push(current);
  undoStack.pop();
  applyEditorState(previous);
  updateHistoryButtons();
}

function redoEdit() {
  if (!redoStack.length) return;
  const current = captureEditorState();
  const next = redoStack.pop();
  undoStack.push(current);
  applyEditorState(next);
  undoStack[undoStack.length - 1] = next;
  updateHistoryButtons();
}

function updateHistoryButtons() {
  if (undoButton) undoButton.disabled = undoStack.length <= 1;
  if (redoButton) redoButton.disabled = redoStack.length === 0;
}

function slugify(text, index) {
  return `heading-${index}-${text.toLowerCase().replace(/[^\w-]+/g, "-").replace(/^-|-$/g, "")}`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
