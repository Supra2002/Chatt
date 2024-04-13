import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) =>{
    return(
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
                projectId='65305ab9-a18d-4c6c-857e-9b097ee799a7'
                username={ props.user.username }
                secret={ props.user.secret }
                style={{ height: '100%' }}
            />
        </div>
    ) 
}
export default ChatsPage;