'use client';

import { useState } from 'react';
import { ArrowLeft, Send } from 'lucide-react';
import Avatar from '@/components/ui/Avatar';
import ChatBubble from '@/components/features/ChatBubble';
import MessageInput from '@/components/features/MessageInput';

const matches = [
  { id: '1', name: 'Lucy', avatar: 'https://picsum.photos/id/1062/100/100', lastMessage: 'Can’t wait for the park!' },
  { id: '2', name: 'Rocky', avatar: 'https://picsum.photos/id/1074/100/100', lastMessage: 'My human says hi!' },
  { id: '3', name: 'Mochi', avatar: 'https://picsum.photos/id/219/100/100', lastMessage: 'Squeak!' },
];

const initialMessages = [
  { id: 'm1', text: 'Hey! Buddy is so cute!', sender: 'other' },
  { id: 'm2', text: 'Thanks! Lucy looks like a princess!', sender: 'me' },
  { id: 'm3', text: 'She is! Are you guys free for a playdate this weekend?', sender: 'other' },
];

export default function ChatPage() {
  const [selectedChat, setSelectedChat] = useState(matches[0]);
  const [messages, setMessages] = useState(initialMessages);

  const handleSendMessage = (text: string) => {
    setMessages([...messages, { id: `m${messages.length + 1}`, text, sender: 'me' }]);
  };

  return (
    <div className="flex h-[calc(100vh-150px)] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
      {/* Sidebar */}
      <div className={`w-full md:w-1/3 border-r border-gray-200 dark:border-gray-700 bg-backgroundLight dark:bg-backgroundDark ${selectedChat ? 'hidden md:block' : 'block'}`}>
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold font-headings">Matches</h2>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {matches.map(match => (
            <li key={match.id} onClick={() => setSelectedChat(match)} className="p-4 flex items-center space-x-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
              <Avatar src={match.avatar} alt={match.name} />
              <div>
                <p className="font-semibold">{match.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{match.lastMessage}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Chat Window */}
      <div className={`w-full md:w-2/3 flex flex-col ${selectedChat ? 'flex' : 'hidden md:flex'}`}>
        {selectedChat ? (
          <>
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center space-x-4">
              <button className="md:hidden" onClick={() => setSelectedChat(null)}><ArrowLeft /></button>
              <Avatar src={selectedChat.avatar} alt={selectedChat.name} />
              <h3 className="text-lg font-bold">{selectedChat.name}</h3>
            </div>
            <div className="flex-grow p-4 space-y-4 overflow-y-auto bg-gray-50 dark:bg-gray-900">
              {messages.map(msg => (
                <ChatBubble key={msg.id} message={msg.text} isSender={msg.sender === 'me'} />
              ))}
            </div>
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <MessageInput onSend={handleSendMessage} />
            </div>
          </>
        ) : (
          <div className="flex-grow flex items-center justify-center text-gray-500">
            <p>Select a chat to start messaging</p>
          </div>
        )}
      </div>
    </div>
  );
}