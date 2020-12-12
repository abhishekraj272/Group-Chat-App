import React, { useState } from 'react';
import MessageCard from '../MessageCard/MessageCard';
import './ChatArea.css';

const getRandKey = () => {
    return (Math.floor(Math.random()*90000) + 10000).toString();
}

export default function ChatArea() {

    const [messages, setMessages] = useState([]);

    const [message, setMessage] = useState("");

    const sendMessage = (e) => {
        e.preventDefault();

        const username = localStorage.getItem('username');

        console.log(username);

        if (!username) {
            alert('Please set username');
            return;
        }

        const updatedMessages = [...messages, {username: username, message: message, sent: 'sent', key: getRandKey()}]

        console.log(updatedMessages);

        setMessages(updatedMessages);
        setMessage("");
    }

    return (
        <div className="chatArea">
            <div className="messageArea">
                {
                    messages.map(data => {
                        return (
                            <MessageCard key={data.key} sender={data.username} message={data.message} sent={data.sent} />
                        )
                    })
                }
            </div>
            <form>
                <input value={message} type="text" onChange={e => setMessage(e.target.value)} />
                <button disabled={!message} onClick={sendMessage} >Send</button>
            </form>
        </div>
    )
}
