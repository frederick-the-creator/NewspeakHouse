import React from 'react';
import { ShortcutCategory } from '@/components/ShortcutCategory';

const shortcutCategories = [
  {
    title: 'Navigation',
    shortcuts: [
      { key: 'Ctrl + B', description: 'Toggle sidebar' },
      { key: 'Ctrl + P', description: 'Quick open, Go to file' },
      { key: 'Ctrl + Shift + F', description: 'Find in files' },
    ],
  },
  {
    title: 'Editing',
    shortcuts: [
      { key: 'Ctrl + X', description: 'Cut line' },
      { key: 'Ctrl + C', description: 'Copy line' },
      { key: 'Ctrl + V', description: 'Paste' },
      { key: 'Ctrl + /', description: 'Toggle line comment' },
    ],
  },
  {
    title: 'Code Folding',
    shortcuts: [
      { key: 'Ctrl + Shift + [', description: 'Fold region' },
      { key: 'Ctrl + Shift + ]', description: 'Unfold region' },
    ],
  },
];

export const CheatSheet = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {shortcutCategories.map((category, index) => (
        <ShortcutCategory key={index} {...category} />
      ))}
    </div>
  );
};