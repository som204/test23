interface ChatBubbleProps {
  message: string;
  isSender: boolean;
}

export default function ChatBubble({ message, isSender }: ChatBubbleProps) {
  return (
    <div className={`flex ${isSender ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-xs md:max-w-md px-4 py-2 rounded-2xl ${isSender ? 'bg-primary text-white rounded-br-none' : 'bg-gray-200 dark:bg-gray-700 rounded-bl-none'}`}>
        <p>{message}</p>
      </div>
    </div>
  );
}