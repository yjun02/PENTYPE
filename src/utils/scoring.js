import { questions } from '../data/questions';

export const calculateScores = (answers, mbtiFromFastTrack) => {
  const result = {
    EI: 30, // default mid
    SN: 30,
    TF: 30,
    JP: 30,
    WO: 30,
  };

  const counts = { EI: 0, SN: 0, TF: 0, JP: 0, WO: 0 };
  const totals = { EI: 0, SN: 0, TF: 0, JP: 0, WO: 0 };

  // Calculate based on answers
  Object.keys(answers).forEach(qId => {
    const question = questions.find(q => q.id === parseInt(qId));
    if (!question) return;

    let score = answers[qId];
    if (question.reverse) {
      score = 6 - score; // inverse 1->5, 5->1
    }

    totals[question.type] += score;
    counts[question.type] += 1;
  });

  // For Fast Track, handle the MBTI from selection
  if (mbtiFromFastTrack) {
    const m = mbtiFromFastTrack;
    result.EI = m[0] === 'E' ? 40 : 20; // Simulated strong bias
    result.SN = m[1] === 'S' ? 40 : 20;
    result.TF = m[2] === 'T' ? 40 : 20;
    result.JP = m[3] === 'J' ? 40 : 20;
  } else {
    // For Full Track, we should have enough questions for all
    if (counts.EI > 0) result.EI = totals.EI * (10 / counts.EI);
    if (counts.SN > 0) result.SN = totals.SN * (10 / counts.SN);
    if (counts.TF > 0) result.TF = totals.TF * (10 / counts.TF);
    if (counts.JP > 0) result.JP = totals.JP * (10 / counts.JP);
  }

  // WO is always measured
  if (counts.WO > 0) result.WO = totals.WO * (10 / counts.WO);

  return result;
};

export const getPentaCode = (scores) => {
  const e = scores.EI >= 30 ? 'E' : 'I';
  const s = scores.SN >= 30 ? 'S' : 'N';
  const t = scores.TF >= 30 ? 'T' : 'F';
  const p = scores.JP >= 30 ? 'J' : 'P'; // Wait, standard MBTI J is usually upper? No, J vs P.
  // Actually J is usually high score for "Planning".
  const w = scores.WO >= 30 ? 'W' : 'O';
  
  return `${e}${s}${t}${p}-${w}`;
};

export const getPercentage = (score, answers = null, type = null) => {
  // 10 to 50 mapped to 0 to 100
  const p = ((score - 10) / 40) * 100;
  let result = Math.round(Math.max(0, Math.min(100, p)));

  // If result is exactly 50% and we have answers data, try to break the tie
  if (result === 50 && answers && type) {
    let highCount = 0; // count of 4 or 5 (support for this type)
    let lowCount = 0;  // count of 1 or 2 (support for opposite)

    Object.keys(answers).forEach(qId => {
      const q = questions.find(q => q.id === parseInt(qId));
      if (!q || q.type !== type) return;

      let effectiveScore = answers[qId];
      if (q.reverse) {
        effectiveScore = 6 - effectiveScore;
      }

      if (effectiveScore >= 4) highCount++;
      if (effectiveScore <= 2) lowCount++;
    });

    if (highCount > lowCount) return 51;
    if (lowCount > highCount) return 49;
    
    // If still equal, return 50 (Real Half)
    return 50;
  }
  
  // Fallback for when no answer data is passed but we want to avoid 50%
  // (Legacy behavior or safety net, though user wants explicit 50 if truly equal)
  // For now, if no answers passed, return result (50).
  return result;
};

// Simple obfuscation using Base64
// Format: track|mbti|answers
export const encodeResultData = (track, mbti, answersStr) => {
  const raw = `${track}|${mbti || ''}|${answersStr}`;
  return btoa(raw);
};

export const decodeResultData = (encoded) => {
  try {
    const raw = atob(encoded);
    const [track, mbti, answersStr] = raw.split('|');
    return { track, mbti, answersStr };
  } catch (e) {
    return null;
  }
};
