const elements = {
  textarea: document.getElementById("text-input"),
  all: document.getElementById("all-count"),
  noBreak: document.getElementById("no-break-count"),
  noSpace: document.getElementById("no-space-count"),
};

const normalizeNewlines = (value) => value.replace(/\r\n/g, "\n");

const updateCounts = () => {
  const raw = normalizeNewlines(elements.textarea.value);
  
  // 数値計算
  const all = raw.length;
  const noBreak = raw.replace(/\n/g, "").length;
  const noSpace = raw.replace(/\s/g, "").length;

  // 表示更新
  elements.all.textContent = all.toLocaleString("ja-JP");
  elements.noBreak.textContent = noBreak.toLocaleString("ja-JP");
  elements.noSpace.textContent = noSpace.toLocaleString("ja-JP");
};

if (elements.textarea) {
  elements.textarea.addEventListener("input", updateCounts);
  // 初期ロード時にも実行（ブラウザが値を記憶している場合のため）
  window.addEventListener("DOMContentLoaded", updateCounts);
}
