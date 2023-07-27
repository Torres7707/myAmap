import "./App.css";
import MapContainer from "./components/MapContainer";

function App() {
	return (
		<div className="container">
			<MapContainer
				// akey="b7da84dc3928597e6e25a837731d59cc"
				akey="fed9ccbdb664498db23c72b3a850c5d7"
				mapStyle="amap://styles/44043d89d6bfd24fbe888f41e252342a"
				version="1.4.15"
				style={{
					width: "1000px",
					height: "800px",
				}}
			></MapContainer>
		</div>
	);
}

export default App;
