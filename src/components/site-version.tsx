export default function SiteVersion() {
    const { version } = require("../../package.json");
    return (
        <div className="text-sm text-center font-mono p-0 m-0 border px-1">
            <span className="text-sm text-center font-mono p-0 m-0">v.{version}</span>
        </div>
    );
}
