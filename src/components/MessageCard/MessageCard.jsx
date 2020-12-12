import React from 'react';
import './MessageCard.css';

export default function MessageCard({ sender, message, sent }) {
    return (
        <div className={`messageCard ${sent ? "sent" : ""} `}>
            <h5>{sender}</h5> <p>{message}</p>
        </div>
    )
}
