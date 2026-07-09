import { SunIcon, MoonIcon, ComputerDesktopIcon } from "@heroicons/react/24/solid";

const OPTIONS = [
  { value: "light", label: "Light", Icon: SunIcon },
  { value: "dark", label: "Dark", Icon: MoonIcon },
  { value: "system", label: "System", Icon: ComputerDesktopIcon },
];

const ThemeToggle = ({ mode, setMode }) => {
  return (
    <div
      role="group"
      aria-label="Color theme"
      className="flex items-center gap-0.5 rounded-xl border border-line bg-elevated p-0.5"
    >
      {OPTIONS.map((option) => {
        const Icon = option.Icon;
        const isActive = mode === option.value;

        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={isActive}
            aria-label={`${option.label} theme`}
            title={`${option.label} theme`}
            onClick={() => setMode(option.value)}
            className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
              isActive
                ? "bg-accent text-accent-contrast"
                : "text-muted hover:bg-accent-soft hover:text-ink"
            }`}
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
          </button>
        );
      })}
    </div>
  );
};

export default ThemeToggle;
