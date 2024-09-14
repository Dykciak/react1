// =======================================================
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcept/CoreConcepts.jsx";
import Examples from "./components/Examples/Examples.jsx";
// function CoreConcept(props) {
// 	return (
// 		<li>
// 			<img src={props.img} alt={props.title} />
// 			<h3>{props.title}</h3>
// 			<p>{props.description}</p>
// 		</li>
// 	);
// }

function App() {
	return (
		<>
			<Header />

			<main>
				<CoreConcepts />
				<Examples />
			</main>
		</>
	);
}

export default App;
