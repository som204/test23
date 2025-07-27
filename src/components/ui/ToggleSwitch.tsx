'use client';

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function ToggleSwitch({ checked, onChange }: ToggleSwitchProps) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary ${checked ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'}`}>
      <span
        className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300 ${checked ? 'translate-x-6' : 'translate-x-1'}`}/>
    </button>
  );
}