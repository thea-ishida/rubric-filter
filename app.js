(function () {
  const C = window.CRITERIA, R = window.RUBRICS, P = window.PITCHES;
  const $ = (id) => document.getElementById(id);
  let current = "course";
  let timers = [];

  function score(pitch, rubric) {
    let got = 0, max = 0, worst = null, worstLoss = -1;
    for (const key of Object.keys(C)) {
      const w = rubric.weights[key] || 0;
      const s = pitch.scores[key] || 0;
      got += w * s; max += w * 3;
      const loss = w * (3 - s);
      if (loss > worstLoss) { worstLoss = loss; worst = key; }
    }
    const share = max ? got / max : 0;
    return { share, passed: share >= rubric.threshold, worst };
  }

  function card(pitch, result) {
    const li = document.createElement("li");
    li.className = "card" + (pitch.mine ? " mine" : "");
    const t = document.createElement("div");
    t.className = "title"; t.textContent = pitch.title;
    li.appendChild(t);
    if (pitch.mine) {
      const m = document.createElement("div");
      m.className = "mine-tag"; m.textContent = "My CS 3307 pitch";
      li.appendChild(m);
    }
    if (result) {
      const meta = document.createElement("div");
      meta.className = "meta"; meta.textContent = "Score " + Math.round(result.share * 100) + "%";
      li.appendChild(meta);
      const tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = result.passed ? "Fits the rubric" : C[result.worst].fail;
      li.appendChild(tag);
    }
    return li;
  }

  function renderRubric() {
    const r = R[current];
    $("rubric-name").textContent = r.name;
    $("rubric-blurb").textContent = r.blurb;
    $("threshold").textContent = Math.round(r.threshold * 100) + "%";
    const ul = $("weights"); ul.innerHTML = "";
    for (const key of Object.keys(C)) {
      const w = r.weights[key] || 0;
      const li = document.createElement("li");
      const n = document.createElement("span");
      n.className = "name" + (w === 0 ? " zero" : ""); n.textContent = C[key].label;
      const d = document.createElement("span");
      d.className = "dots"; d.setAttribute("aria-label", "weight " + w + " of 3");
      d.textContent = "●".repeat(w) + "○".repeat(3 - w);
      li.append(n, d); ul.appendChild(li);
    }
    document.querySelectorAll("[data-rubric]").forEach((b) =>
      b.setAttribute("aria-pressed", String(b.dataset.rubric === current)));
  }

  function reset() {
    timers.forEach(clearTimeout); timers = [];
    $("queue").innerHTML = ""; $("pass").innerHTML = ""; $("discard").innerHTML = "";
    P.forEach((p) => $("queue").appendChild(card(p)));
    $("queue-count").textContent = P.length;
    $("pass-count").textContent = "0"; $("discard-count").textContent = "0";
    $("run").disabled = false;
  }

  function run() {
    reset();
    $("run").disabled = true;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const step = reduce ? 0 : 320;
    const rubric = R[current];
    let passed = 0, failed = 0;
    P.forEach((p, i) => {
      timers.push(setTimeout(() => {
        const res = score(p, rubric);
        const q = $("queue");
        if (q.firstChild) q.removeChild(q.firstChild);
        $("queue-count").textContent = P.length - i - 1;
        if (res.passed) { $("pass").appendChild(card(p, res)); passed++; }
        else { $("discard").appendChild(card(p, res)); failed++; }
        $("pass-count").textContent = passed; $("discard-count").textContent = failed;
        if (i === P.length - 1) $("run").disabled = false;
      }, step * i));
    });
  }

  document.querySelectorAll("[data-rubric]").forEach((b) =>
    b.addEventListener("click", () => { current = b.dataset.rubric; renderRubric(); reset(); }));
  $("run").addEventListener("click", run);

  window.__rubricFilter = { score };
  renderRubric(); reset();
})();
