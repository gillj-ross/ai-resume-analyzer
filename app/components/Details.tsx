import {
    Accordion,
    AccordionItem,
    AccordionHeader,
    AccordionContent,
} from './Accordion';
import { cn } from '~/lib/utils';

type Tip = {
    type: 'good' | 'improve';
    tip: string;
    explanation: string;
};

// ── ScoreBadge ───────────────────────────────────────────────────────────────

const ScoreBadge = ({ score }: { score: number }) => {
    const isGood = score > 69;
    const isMid  = score > 39;

    return (
        <div
            className={cn(
                'flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-semibold',
                isGood ? 'bg-green-100 text-green-700'
                    : isMid ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-red-100 text-red-700'
            )}
        >
            <img
                src={isGood ? '/icons/check.svg' : '/icons/warning.svg'}
                alt=""
                className="w-3.5 h-3.5"
            />
            {score}/100
        </div>
    );
};

// ── CategoryHeader ────────────────────────────────────────────────────────────

const CategoryHeader = ({ title, categoryScore }: { title: string; categoryScore: number }) => (
    <div className="flex items-center gap-3">
        <span className="text-base font-semibold text-gray-800">{title}</span>
        <ScoreBadge score={categoryScore} />
    </div>
);

// ── CategoryContent ───────────────────────────────────────────────────────────

const CategoryContent = ({ tips }: { tips: Tip[] }) => (
    <div className="flex flex-col gap-4 pt-1">
        {/* Two-column tip grid */}
        <div className="grid grid-cols-2 gap-2 max-sm:grid-cols-1">
            {tips.map((t, i) => (
                <div key={i} className="flex items-start gap-2">
                    <img
                        src={t.type === 'good' ? '/icons/check.svg' : '/icons/warning.svg'}
                        alt={t.type}
                        className="w-4 h-4 mt-0.5 shrink-0"
                    />
                    <p className="text-sm text-gray-700">{t.tip}</p>
                </div>
            ))}
        </div>

        {/* Explanation boxes */}
        <div className="flex flex-col gap-2">
            {tips.map((t, i) => (
                <div
                    key={i}
                    className={cn(
                        'rounded-xl px-4 py-3 text-sm',
                        t.type === 'good'
                            ? 'bg-green-50 border border-green-200 text-green-800'
                            : 'bg-orange-50 border border-orange-200 text-orange-800'
                    )}
                >
                    <span className="font-semibold">{t.tip}: </span>
                    {t.explanation}
                </div>
            ))}
        </div>
    </div>
);

// ── Details ───────────────────────────────────────────────────────────────────

const Details = ({ feedback }: { feedback: Feedback }) => {
    const sections: { id: string; title: string; score: number; tips: Tip[] }[] = [
        { id: 'tone',      title: 'Tone & Style', score: feedback.toneAndStyle.score, tips: feedback.toneAndStyle.tips },
        { id: 'content',   title: 'Content',      score: feedback.content.score,      tips: feedback.content.tips },
        { id: 'structure', title: 'Structure',    score: feedback.structure.score,    tips: feedback.structure.tips },
        { id: 'skills',    title: 'Skills',       score: feedback.skills.score,       tips: feedback.skills.tips },
    ];

    return (
        <div className="bg-white rounded-2xl shadow-md p-4">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Detailed Breakdown</h3>
            <Accordion allowMultiple>
                {sections.map((s) => (
                    <AccordionItem key={s.id} id={s.id}>
                        <AccordionHeader itemId={s.id}>
                            <CategoryHeader title={s.title} categoryScore={s.score} />
                        </AccordionHeader>
                        <AccordionContent itemId={s.id}>
                            <CategoryContent tips={s.tips} />
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default Details;
