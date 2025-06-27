import React from 'react'

function Message({ message }: { message: string }) {
    const messageStyle = message === 'Login successful' ? 'login-success' : 'login-failure';
    return (
        <div className={`msg ${messageStyle}`}>
            {message}
        </div>
    )
}

export default Message
