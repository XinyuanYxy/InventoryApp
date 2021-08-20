import { Context } from '../context';
import { useContext } from 'react';
const Home = () => {
	const { state } = useContext(Context);
	return (
		<div>
			{/* JSON.stringify(state, null, 4) */}
			<h2 className='ui center aligned header'>Welcome Home</h2>
			<pre>Hello </pre>
		</div>
	);
};

export default Home;
