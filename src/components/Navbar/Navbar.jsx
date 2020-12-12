import React, { useState } from 'react'
import "./Navbar.css"

export default function Navbar() {

    const [username, setUsername] = useState(localStorage.getItem('username'));

    const setLocalUsername = (username) => {
        localStorage.setItem('username', username);
        setUsername(username);
    }

    return (
        <div className="navbar">
            <p>DSC Chat</p>
            <input autoFocus placeholder="Username" value={username} onChange={e => setLocalUsername(e.target.value)} />
        </div>
    )
}
