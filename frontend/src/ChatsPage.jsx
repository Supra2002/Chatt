import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) =>{
    return(
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
                projectId='34fce574-249d-48b6-a7ff-6d23142ba0a9'
                username={ props.user.username }
                secret={ props.user.secret }
                style={{ height: '100%' }}
            />
        </div>
    ) 
}
export default ChatsPage;