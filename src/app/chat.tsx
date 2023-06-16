
// app/chat.tsx

'use client'
 
import { useChat } from 'ai/react';

export default function MyComponent() {
   const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat'
  })
 
  return (
    <div>
      <ul>
        {messages.map((m, index) => (
          <li key={index}>
            {m.role === 'user' ? 'User: ' : 'AI: '}
            {m.content}
          </li>
        ))}
      </ul>
    
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input className="border-solid border-1 border-red-800" value={input} placeholder="Say something..." onChange={handleInputChange} />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}
