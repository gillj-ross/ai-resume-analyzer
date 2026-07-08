const ATS = ({ score, suggestions }: {
    score: number;
    suggestions: { type: 'good' | 'improve'; tip: string }[];
}) => {
    const gradient = score > 69 ? 'from-green-100'
        : score > 49 ? 'from-yellow-100'
        : 'from-red-100';

    const icon = score > 69 ? '/icons/ats-good.svg'
        : score > 49 ? '/icons/ats-warning.svg'
        : '/icons/ats-bad.svg';

    return (
        <div className={`bg-gradient-to-br ${gradient} to-white rounded-2xl shadow-md p-6 flex flex-col gap-4`}>
            <div className="flex flex-row items-center gap-4">
                <img src={icon} alt="ATS status" className="w-12 h-12" />
                <div>
                    <h3 className="text-xl font-bold text-gray-800">ATS Score — {score}/100</h3>
                </div>
            </div>

            <div className="flex flex-col gap-3">
                <p className="text-base font-semibold text-gray-700">What the ATS sees</p>
                <p className="text-sm text-gray-500">
                    Applicant Tracking Systems scan your resume before a human ever reads it.
                    The tips below highlight what's working and what to fix to improve your ranking.
                </p>

                <ul className="flex flex-col gap-2 mt-1">
                    {suggestions.map((s, i) => (
                        <li key={i} className="flex flex-row items-start gap-2">
                            <img
                                src={s.type === 'good' ? '/icons/check.svg' : '/icons/warning.svg'}
                                alt={s.type}
                                className="w-4 h-4 mt-0.5 shrink-0"
                            />
                            <p className="text-sm text-gray-700">{s.tip}</p>
                        </li>
                    ))}
                </ul>

                <p className="text-sm text-gray-400 mt-2">
                    Small improvements to formatting and keywords can meaningfully boost your ATS ranking.
                </p>
            </div>
        </div>
    );
};

export default ATS;
