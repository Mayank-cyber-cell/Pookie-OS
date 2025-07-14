import React, { useState } from 'react';
import { Trash2, RotateCcw, X } from 'lucide-react';

interface DeletedItem {
  id: number;
  name: string;
  type: 'poem' | 'joke' | 'screenshot' | 'note';
  content: string;
  deletedDate: string;
}

const RecycleBinApp: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<DeletedItem | null>(null);

  const deletedItems: DeletedItem[] = [
    {
      id: 1,
      name: 'cringey_love_poem_v1.txt',
      type: 'poem',
      content: `Roses are red,
Violets are blue,
I wrote this poem,
Just because I love you!

(Yeah, I know it's terrible 😅)`,
      deletedDate: '2024-02-10'
    },
    {
      id: 2,
      name: 'our_inside_jokes.txt',
      type: 'joke',
      content: `1. That time you said "pineapple" instead of "I love you" 🍍
2. When we both wore the same color by accident for a week straight
3. The great debate about whether cereal is soup
4. Your impression of my morning hair 😴
5. "That's what she said" - still funny!`,
      deletedDate: '2024-02-15'
    },
    {
      id: 3,
      name: 'failed_surprise_planning.txt',
      type: 'note',
      content: `Operation Birthday Surprise - FAILED ATTEMPTS:

❌ Attempt 1: Accidentally mentioned the restaurant while talking in sleep
❌ Attempt 2: Left the gift receipt on the table
❌ Attempt 3: Asked your friend your favorite cake flavor... while you were listening

✅ Final attempt: Just be direct and ask you 😂`,
      deletedDate: '2024-02-20'
    },
    {
      id: 4,
      name: 'embarrassing_texts_backup.txt',
      type: 'screenshot',
      content: `Screenshots of texts I sent at 3 AM:

"Are you awake? I just realized that if we were both burritos, we'd be the perfect couple because we'd wrap around each other"

"I miss you so much that I hugged my pillow and pretended it was you... it didn't work"

"Do you think penguins get jealous of how perfect we are together?"

*All sent while you were asleep* 🤦‍♂️`,
      deletedDate: '2024-02-25'
    },
    {
      id: 5,
      name: 'overthinking_notes.txt',
      type: 'note',
      content: `Things I overthought this week:

• Did that text sound too clingy?
• Should I have used 3 heart emojis instead of 2?
• Was my joke about pizza toppings too controversial?
• Do you think I'm weird for saving every photo you send?
• Is it normal to smile this much when thinking about someone?

Answer: Probably, but I don't care! 💕`,
      deletedDate: '2024-03-01'
    }
  ];

  const getItemIcon = (type: string) => {
    switch (type) {
      case 'poem': return '📝';
      case 'joke': return '😂';
      case 'screenshot': return '📱';
      case 'note': return '📋';
      default: return '📄';
    }
  };

  const restoreItem = (item: DeletedItem) => {
    alert(`"${item.name}" has been restored to your heart! 💕`);
  };

  const permanentDelete = (item: DeletedItem) => {
    if (confirm(`Are you sure you want to permanently delete "${item.name}"? This action cannot be undone!`)) {
      alert('Item permanently deleted... but the memories remain! 😢');
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-2 mb-4">
        <Trash2 className="w-6 h-6 text-pink-600" />
        <h2 className="text-xl font-bold text-pink-600">Recycle Bin</h2>
      </div>

      <div className="text-sm text-pink-600 mb-4">
        Items that were too embarrassing for the main desktop 😅
      </div>

      {!selectedItem ? (
        <div className="flex-grow space-y-2 overflow-y-auto">
          {deletedItems.map(item => (
            <div 
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="flex items-center gap-3 p-3 bg-pink-50 rounded-lg border border-pink-200 hover:bg-pink-100 cursor-pointer transition-all"
            >
              <span className="text-2xl">{getItemIcon(item.type)}</span>
              <div className="flex-grow">
                <div className="font-medium text-pink-700">{item.name}</div>
                <div className="text-sm text-pink-500">Deleted: {item.deletedDate}</div>
              </div>
            </div>
          ))}
          
          {deletedItems.length === 0 && (
            <div className="text-center py-8 text-pink-500">
              <Trash2 className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p>Recycle bin is empty!</p>
              <p className="text-sm">All our embarrassing moments are safely hidden 😌</p>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-pink-600">{selectedItem.name}</h3>
            <button 
              onClick={() => setSelectedItem(null)}
              className="w-6 h-6 bg-pink-200 rounded-full flex items-center justify-center hover:bg-pink-300 transition-colors"
            >
              <X className="w-4 h-4 text-pink-600" />
            </button>
          </div>
          
          <div className="flex-grow bg-pink-50 rounded-lg p-4 border border-pink-200 mb-4 overflow-y-auto">
            <pre className="whitespace-pre-wrap text-pink-700 text-sm font-mono">
              {selectedItem.content}
            </pre>
          </div>
          
          <div className="flex gap-2">
            <button 
              onClick={() => restoreItem(selectedItem)}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-all flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Restore
            </button>
            <button 
              onClick={() => permanentDelete(selectedItem)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-all flex items-center gap-2"
            >
              <X className="w-4 h-4" />
              Delete Forever
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecycleBinApp;