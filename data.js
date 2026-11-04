// Editable content for Rubric Filter.
// Change weights, thresholds, or pitches here; app.js reads everything from this file.
//
// STAND-IN NOTE: every pitch except "Trading simulator with a market maker" is an
// invented example written with AI help. Replace or edit them with your own.

window.CRITERIA = {
  stages:   { label: "Clear stages",      fail: "No clear stages" },
  grading:  { label: "Easy to grade",     fail: "Hard to grade" },
  familiar: { label: "Familiar genre",    fail: "Unfamiliar genre" },
  risk:     { label: "Takes a risk",      fail: "Plays it safe" },
  research: { label: "Outside research",  fail: "No outside research" },
  personal: { label: "Personal reason",   fail: "No personal reason" }
};

// Weights go from 0 (ignored) to 3 (counts most). An idea passes when its
// weighted score is at or above `threshold` (a share of the maximum, 0 to 1).
window.RUBRICS = {
  course: {
    name: "Course rubric",
    blurb: "Rewards projects that map cleanly onto design, architecture, code and tests.",
    threshold: 0.6,
    weights: { stages: 3, grading: 3, familiar: 2, risk: 0, research: 0, personal: 0 }
  },
  open: {
    name: "Open rubric",
    blurb: "Rewards risk, research beyond the course, and a reason to care.",
    threshold: 0.6,
    weights: { stages: 1, grading: 0, familiar: 0, risk: 3, research: 3, personal: 2 }
  }
};

// Each pitch scores 0 to 3 on every criterion.
window.PITCHES = [
  { title: "Platformer with a level editor",          scores: { stages: 3, grading: 3, familiar: 3, risk: 0, research: 1, personal: 1 } },
  { title: "Trading simulator with a market maker",   scores: { stages: 1, grading: 1, familiar: 0, risk: 3, research: 3, personal: 3 }, mine: true },
  { title: "To-do list app",                          scores: { stages: 3, grading: 3, familiar: 3, risk: 0, research: 0, personal: 0 } },
  { title: "Wheelchair route map for campus",         scores: { stages: 2, grading: 2, familiar: 1, risk: 2, research: 3, personal: 3 } },
  { title: "Turn-based card game",                    scores: { stages: 3, grading: 3, familiar: 2, risk: 1, research: 1, personal: 1 } },
  { title: "Live music visualizer",                   scores: { stages: 1, grading: 1, familiar: 1, risk: 3, research: 2, personal: 2 } },
  { title: "Library book tracker",                    scores: { stages: 3, grading: 3, familiar: 3, risk: 0, research: 1, personal: 1 } },
  { title: "Lab notebook that credits every contributor", scores: { stages: 1, grading: 1, familiar: 0, risk: 3, research: 3, personal: 2 } }
];
