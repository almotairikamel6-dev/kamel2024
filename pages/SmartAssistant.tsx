
import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { askAI } from '../services/geminiService';

interface Message {
  text: string;
  sender: 'user' | 'ai';
}

const SmartAssistant = () => {
  const { t, direction } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([{ text: t('assistantWelcome'), sender: 'ai' }]);
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (input.trim() === '' || isLoading) return;

    const userMessage: Message = { text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const aiResponse = await askAI(input);
      const aiMessage: Message = { text: aiResponse, sender: 'ai' };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage: Message = { text: 'An error occurred. Please try again.', sender: 'ai' };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      <SectionTitle>{t('smartAssistant')}</SectionTitle>
      <Card className="h-[70vh] flex flex-col">
        <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
          {messages.map((msg, index) => (
            <div key={index} className={`flex my-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-md lg:max-w-2xl px-4 py-2 rounded-lg shadow ${
                  msg.sender === 'user'
                    ? 'bg-palm-green text-pure-white rounded-br-none'
                    : 'bg-pure-white text-gray-800 rounded-bl-none'
                }`}
              >
                {msg.text.split('\n').map((line, i) => <p key={i}>{line}</p>)}
              </div>
            </div>
          ))}
          {isLoading && (
             <div className="flex justify-start my-2">
                 <div className="max-w-xs px-4 py-3 rounded-lg shadow bg-pure-white text-gray-800 rounded-bl-none flex items-center">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-75"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-150 mx-1"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-300"></div>
                 </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <div className="p-4 border-t bg-white flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={t('askSomething')}
            className="flex-1 w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-palm-green"
            disabled={isLoading}
          />
          <Button onClick={handleSend} disabled={isLoading} className="rounded-full !p-3">
             <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${direction === 'rtl' ? 'transform -scale-x-100' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 12h14" />
            </svg>
          </Button>
        </div>
      </Card>
    </>
  );
};

export default SmartAssistant;
