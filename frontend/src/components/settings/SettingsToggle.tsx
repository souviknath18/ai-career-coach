type SettingsToggleProps = {
  enabled?: boolean;
};

export default function SettingsToggle({
  enabled = false,
}: SettingsToggleProps) {
  return (
    <button
      type="button"
      className={
        enabled
          ? "flex h-6 w-12 items-center rounded-full bg-[#466743] px-1"
          : "flex h-6 w-12 items-center rounded-full bg-[#b2b2ad]/30 px-1"
      }
    >
      <span
        className={
          enabled
            ? "h-4 w-4 translate-x-6 rounded-full bg-[#eaffe3] transition-transform"
            : "h-4 w-4 rounded-full bg-white transition-transform"
        }
      />
    </button>
  );
}