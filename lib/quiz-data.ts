import type { RoadSign } from "./road-signs-data";
import { roadSigns } from "./road-signs-data";

export interface QuizQuestion {
  id: string;
  sign: RoadSign;
  questionEn: string;
  questionTh: string;
  options: QuizOption[];
  correctAnswerId: string;
  explanationEn: string;
  explanationTh: string;
}

export interface QuizOption {
  id: string;
  textEn: string;
  textTh: string;
}

// Generate quiz questions from road signs
export function generateQuizQuestions(count = 10): QuizQuestion[] {
  const shuffledSigns = [...roadSigns]
    .sort(() => Math.random() - 0.5)
    .slice(0, count);

  return shuffledSigns.map((sign, index) => {
    // Get 3 random wrong answers from other signs
    const otherSigns = roadSigns.filter((s) => s.id !== sign.id);
    const wrongAnswers = [...otherSigns]
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    const correctOption: QuizOption = {
      id: "correct",
      textEn: sign.nameEn,
      textTh: sign.nameTh,
    };

    const wrongOptions: QuizOption[] = wrongAnswers.map((s, i) => ({
      id: `wrong-${i}`,
      textEn: s.nameEn,
      textTh: s.nameTh,
    }));

    // Shuffle options
    const allOptions = [correctOption, ...wrongOptions].sort(
      () => Math.random() - 0.5
    );

    return {
      id: `question-${index}`,
      sign,
      questionEn: "What does this road sign mean?",
      questionTh: "ป้ายจราจรนี้หมายความว่าอะไร?",
      options: allOptions,
      correctAnswerId: "correct",
      explanationEn: sign.descriptionEn,
      explanationTh: sign.descriptionTh,
    };
  });
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  percentage: number;
}

export function calculateQuizResult(
  totalQuestions: number,
  correctAnswers: number
): QuizResult {
  return {
    score: correctAnswers,
    totalQuestions,
    correctAnswers,
    wrongAnswers: totalQuestions - correctAnswers,
    percentage: Math.round((correctAnswers / totalQuestions) * 100),
  };
}
