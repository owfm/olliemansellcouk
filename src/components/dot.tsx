export default function Dot({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" className={className}>
            <circle cx="5" cy="5" r="3" fill="var(--primary)" stroke="var(--foreground)" strokeWidth="0.5" />
        </svg>
    );
}
