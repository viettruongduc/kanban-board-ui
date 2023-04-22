import { Route, Routes } from "react-router-dom";
import Hompage from "./components/Hompage";

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Hompage />} />
			</Routes>
		</div>
	);
}

export default App;
