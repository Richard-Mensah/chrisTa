import { useCallback, useState } from "react";
import type { QuizQuestion } from "@/types";

/** One-question-at-a-time quiz state with scoring. */
export function useQuiz(questions: QuizQuestion[]) {
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const finished = step >= questions.length;
  const question = finished ? null : questions[step];

  const choose = useCallback(
    (option: number) => {
      if (picked !== null || !question) return;
      setPicked(option);
      if (option === question.answer) setScore((s) => s + 1);
    },
    [picked, question],
  );

  const advance = useCallback(() => {
    setPicked(null);
    setStep((s) => s + 1);
  }, []);

  const restart = useCallback(() => {
    setStep(0);
    setPicked(null);
    setScore(0);
  }, []);

  return { step, question, picked, score, finished, choose, advance, restart, total: questions.length };
}
