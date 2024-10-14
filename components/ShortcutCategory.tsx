import React from 'react';

interface Shortcut {
  key: string;
  description: string;
}

interface ShortcutCategoryProps {
  title: string;
  shortcuts: Shortcut[];
}

export const ShortcutCategory: React.FC<ShortcutCategoryProps> = ({ title, shortcuts }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <ul className="space-y-2">
        {shortcuts.map((shortcut, index) => (
          <li key={index} className="flex justify-between">
            <span className="font-mono bg-gray-100 px-2 py-1 rounded">{shortcut.key}</span>
            <span className="text-gray-600">{shortcut.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};