"use client";

import { useEffect } from "react";
import { CheckCircle2, RotateCcw, XCircle, Zap } from "lucide-react";
import Button from "@/components/ui/Button";
import { GRID_QUIZ, QUIZ_PASS_MARK } from "@/constants/quiz";
import { useGrid } from "@/hooks/useGrid";
import { useQuiz } from "@/hooks/useQuiz";
import { cn } from "@/lib/utils";

/** A short power-sector knowledge quiz for students. Passing unlocks the "Grid certified" achievement. */
export default function GridReadinessQuiz() {
  const { send } = useGrid();
  const { step, question, picked, score, finished, choose, advance, restart, total } = useQuiz(GRID_QUIZ);
  const passed = finished && score >= QUIZ_PASS_MARK;

  useEffect(() => {
    if (passed) send("quiz-pass");
  }, [passed, send]);

  return (
    <div className="rounded-3xl border border-ondark-line bg-navy-950 p-6 text-ondark shadow-xl md:p-8">
      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="font-mono text-xs uppercase tracking-widest text-brand-cyan">Grid readiness quiz</p>
        <p className="font-mono text-xs text-ondark-muted">
          {finished ? `${score}/${total}` : `Question ${step + 1}/${total} · score ${score}`}
        </p>
      </div>
      <div aria-hidden="true" className="mb-6 flex gap-1">
        {GRID_QUIZ.map((q, i) => (
          <span key={q.id} className={cn("h-1.5 flex-1 rounded-full", i < step || finished ? "bg-brand-teal" : "bg-ondark-line")} />
        ))}
      </div>

      {question ? (
        <div aria-live="polite">
          <h3 className="text-2xl font-semibold">{question.question}</h3>
          <div className="mt-5 grid gap-2">
            {question.options.map((o, i) => {
              const isAnswer = i === question.answer;
              const isPicked = i === picked;
              return (
                <button
                  key={o}
                  type="button"
                  disabled={picked !== null}
                  onClick={() => choose(i)}
                  className={cn(
                    "flex items-center justify-between gap-3 rounded-2xl border px-4 py-3 text-left transition-colors",
                    picked === null && "border-ondark-line hover:border-brand-cyan hover:bg-white/5",
                    picked !== null && isAnswer && "border-brand-teal bg-brand-teal/15",
                    picked !== null && isPicked && !isAnswer && "border-red-400/70 bg-red-500/10",
                    picked !== null && !isAnswer && !isPicked && "border-ondark-line opacity-60",
                  )}
                >
                  {o}
                  {picked !== null && isAnswer && <CheckCircle2 className="size-5 shrink-0 text-brand-cyan" aria-label="Correct answer" />}
                  {picked !== null && isPicked && !isAnswer && <XCircle className="size-5 shrink-0 text-red-300" aria-label="Your answer" />}
                </button>
              );
            })}
          </div>
          {picked !== null && (
            <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
              <p className="max-w-xl text-sm text-ondark-muted">
                <b className="text-ondark">{picked === question.answer ? "Correct. " : "Not quite. "}</b>
                {question.explanation}
              </p>
              <Button onClick={advance}>{step + 1 === total ? "See result" : "Next question"}</Button>
            </div>
          )}
        </div>
      ) : (
        <div aria-live="polite" className="text-center">
          <span className="mx-auto grid size-16 place-items-center rounded-full bg-gradient-to-br from-brand-cyan to-brand-blue text-white">
            <Zap className="size-7" aria-hidden="true" />
          </span>
          <h3 className="mt-4 text-3xl font-semibold">
            {score}/{total} {passed ? "· Grid certified" : ""}
          </h3>
          <p className="mx-auto mt-2 max-w-md text-ondark-muted">
            {passed
              ? "Great foundations. Explore the career pathways guide to see where they can take you."
              : `Score ${QUIZ_PASS_MARK} or more to earn the Grid certified achievement. The glossary can help.`}
          </p>
          <Button variant="ghost" onClick={restart} className="mt-6">
            <RotateCcw className="size-4" aria-hidden="true" /> Try again
          </Button>
        </div>
      )}
    </div>
  );
}
