function ChildComponent({ sendMessageToParent }) {
    const handleClick = () => {
    sendMessageToParent("Hello from the child!");
    };
    return <button onClick={handleClick}>Send Message</button>;
    }
    export default ChildComponent;