import React, { useState, useEffect, useRef } from 'react';
import { apiConnector } from "../services/apiconnector.js"
import { Send } from "lucide-react";

const Project = () => {
    const [prompt, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const messageBox = useRef(null);

    const send = async () => {
        if (!prompt.trim()) return;
        setMessage('');
    
        setMessages((prevMessages) => [
            ...prevMessages,
            { sender: 'user', message: prompt }
        ]);
    
        try {
            const response = await apiConnector('POST', 'http://localhost:3000/ai/get-result', { prompt });
            const data = response.data.response;
    
            setMessages((prevMessages) => [
                ...prevMessages,
                { sender: 'ai', message: data },
            ]);
        } catch (error) {
            console.error('Error fetching AI response:', error);
            setMessages((prevMessages) => [
                ...prevMessages,
                { sender: 'ai', message: 'Error: Unable to get a response from AI.' },
            ]);
        }
    };

    const scrollToBottom = () => {
        if (messageBox.current) {
            messageBox.current.scrollTop = messageBox.current.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <main className="h-[700px] w-[375px] mx-auto flex bg-gray-100 border border-gray-300 mt-9 rounded-lg shadow-lg bg-pure-greys-300">
            <section className="chat-container relative flex flex-col h-full w-full text-white">
                <div className="conversation-area overflow-y-auto pt-1 pb-12 h-full flex flex-col">
                    <div
                        ref={messageBox}
                        className="message-box p-4 pt-2 flex-grow flex flex-col gap-3 overflow-y-auto max-h-[calc(100%-4rem)] scrollbar-hide rounded-lg"
                    >
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`${
                                    msg.sender === 'ai' ? 'bg-blue-600' : 'bg-blue-600 ml-auto'
                                } message flex flex-col p-3 text-sm rounded-lg max-w-full break-all overflow-wrap break-word`}
                            >
                                <p>{msg.message}</p>
                            </div>
                        ))}
                    </div>

                    <div className="inputField w-full flex absolute bottom-0 bg-gray-700 p-3">
                        <input
                            value={prompt}
                            onChange={(e) => setMessage(e.target.value)}
                            className="p-3 px-4 border-none outline-none flex-grow bg-gray-800 text-black rounded-l-lg"
                            type="text"
                            placeholder="Enter message"
                        />
                        <button
                            onClick={send}
                            className="px-5 bg-blue-600 text-white py-3 rounded-r-lg hover:bg-blue-700"
                        >
                            <Send size="20" />
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Project;
