const ScoreBadge = ({ score }: { score: number }) => {
    const styles = score > 69
        ? { bg: 'bg-badge-green', text: 'text-green-600', label: 'Strong' }
        : score > 49
        ? { bg: 'bg-badge-yellow', text: 'text-yellow-600', label: 'Good Start' }
        : { bg: 'bg-badge-red', text: 'text-red-600', label: 'Needs Work' };

    return (
        <div className={`${styles.bg} rounded-full px-3 py-1`}>
            <p className={`${styles.text} text-sm font-semibold`}>{styles.label}</p>
        </div>
    );
};

export default ScoreBadge;
