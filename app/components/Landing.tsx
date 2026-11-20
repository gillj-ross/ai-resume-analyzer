import {Link} from "react-router";
import ScoreCircle from "~/components/ScoreCircle";
import ScoreBadge from "~/components/ScoreBadge";

const features = [
    {
        title: "Four-part feedback",
        description: "Scores for tone & style, content, structure, and skills, each with specific tips to fix what's holding you back.",
    },
    {
        title: "ATS compatibility score",
        description: "See how well your resume would survive an applicant tracking system before a recruiter ever reads it.",
    },
    {
        title: "Tailored to the job",
        description: "Paste the job description and get feedback measured against the role you're actually applying for.",
    },
    {
        title: "Your history, saved",
        description: "Every analysis is stored privately in your account, so you can track how your resume improves over time.",
    },
];

const sampleCategories = [
    { label: "Tone & Style", score: 82 },
    { label: "Content", score: 64 },
    { label: "Structure", score: 88 },
    { label: "Skills", score: 45 },
];

const Landing = () => {
    return (
        <section className="main-section">
            <div className="page-heading py-16">
                <h1>Get AI Feedback on Your Resume in Seconds</h1>
                <h2>
                    Upload your resume and a job description. Resumind scores it, checks
                    how it holds up against applicant tracking systems, and tells you exactly what to improve.
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                    <Link to="/auth?next=/upload" className="primary-button w-fit text-xl font-semibold px-8 py-3">
                        Try it free
                    </Link>
                    <a href="#how-it-works" className="text-lg text-dark-200 underline underline-offset-4">
                        See how it works
                    </a>
                </div>
                <p className="text-sm text-dark-200">
                    Free sign-in with Puter. Your resumes stay in your own account.
                </p>
            </div>

            <div className="gradient-border shadow-lg w-full max-w-[560px]">
                <div className="flex flex-col gap-6 bg-white rounded-2xl p-6">
                    <div className="flex flex-row items-center gap-6">
                        <ScoreCircle score={71} />
                        <div className="flex flex-col gap-1">
                            <p className="text-sm text-dark-200 uppercase tracking-wide">Sample result</p>
                            <h3 className="text-2xl font-bold text-black">Your Resume Score</h3>
                            <p className="text-dark-200">Frontend Developer Intern · ATS score 76/100</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        {sampleCategories.map(({label, score}) => (
                            <div key={label} className="flex flex-row items-center justify-between bg-gray-50 rounded-2xl px-4 py-3">
                                <p className="text-lg font-medium">{label}</p>
                                <div className="flex flex-row items-center gap-3">
                                    <ScoreBadge score={score} />
                                    <p className="text-lg font-semibold w-16 text-right">{score}/100</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div id="how-it-works" className="flex flex-col items-center gap-8 w-full max-w-[1200px] pt-12 scroll-mt-8">
                <h2 className="text-3xl font-semibold text-black text-center">How it works</h2>
                <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    {[
                        "Sign in for free with Puter",
                        "Upload your resume PDF and the job you're targeting",
                        "Get a scored breakdown with tips in seconds",
                    ].map((step, i) => (
                        <li key={step} className="flex flex-row items-center gap-4 bg-white rounded-2xl p-6 shadow-sm">
                            <span className="primary-gradient text-white rounded-full w-10 h-10 flex shrink-0 items-center justify-center font-bold">
                                {i + 1}
                            </span>
                            <p className="text-lg">{step}</p>
                        </li>
                    ))}
                </ol>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    {features.map(({title, description}) => (
                        <div key={title} className="flex flex-col gap-2 bg-white rounded-2xl p-6 shadow-sm">
                            <h3 className="text-xl font-semibold text-black">{title}</h3>
                            <p className="text-dark-200">{description}</p>
                        </div>
                    ))}
                </div>

                <Link to="/auth?next=/upload" className="primary-button w-fit text-xl font-semibold px-8 py-3">
                    Analyze my resume
                </Link>
            </div>
        </section>
    )
}

export default Landing
