
function Message({ status }: { status: string }) {
    if(status === "idle"){
        return null;
    }
    const message = status==="success" ? "Login successful" : "Invalid password or email";
    const messageStyle = status==="success" ? "login-success" : "login-failure"
    return (
        <div className={`msg ${messageStyle}`}>
            {message}
        </div>
    )
}

export default Message
