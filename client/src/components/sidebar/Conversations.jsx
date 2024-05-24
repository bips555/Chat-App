import useGetConversations from "../../hooks/useGetConversations.js";
import Conversation from "./Conversation";

const Conversations = () => {
  const {conversations} = useGetConversations()
  console.log(conversations)
	return (
		<div className='py-2 flex flex-col overflow-auto'>
			<Conversation />
			<Conversation />
			<Conversation />
			<Conversation />
			<Conversation />
			<Conversation />
		</div>
	);
};
export default Conversations;