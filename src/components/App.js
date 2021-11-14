import React, { useState } from "react";
import Nav from "./Nav";
import Piggies from "./Piggies"
import Filter from "./Filter";

import hogs from "../porkers_data";
import PigCard from "./PigCard";

function App() {
	const [greased, setGreased] = useState(false)
	const [sortBy, setSortBy] = useState(true)
	

	let displayedPigs = [...hogs]

	function onGreaseFilter(){
		setGreased(!greased)
	}

	if (greased === true){
		displayedPigs = hogs.filter((pig) => {
			return pig.greased === greased
		})
	} else {
		displayedPigs = hogs.filter((pig) => {
			return pig.greased === false
		})
	}

	hogs.sort((pigA, pigB) => {
		if (sortBy === "weight") {
			return pigA.weight - pigB.weight
		} else {
			return pigA.name.localeCompare(pigB.name)
		}
	})

	return (
		<div className="App">
			<Nav />
			<Filter
			onGreaseFilter={onGreaseFilter}
			greased={greased}
			sortBy={sortBy}
			setSortBy={setSortBy}
			/>
			<h1>{greased === true ? "Greasy" : "Not Greasy"}</h1>
			<br/>
			<Piggies pigs={displayedPigs}
			/>
		</div>
	);
}

export default App;
