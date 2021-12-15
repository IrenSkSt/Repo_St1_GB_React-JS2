import './Message.css';

export const Message = ({ name }) => {
    return <div className="Message-app"> {name} пишет: Текст сообщения. </div>;
}
