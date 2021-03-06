import React from 'react';
import { Grid, transform_thumbnail } from "@simpleview/sv-mosaic";

transform_thumbnail({ width : 10, height : 20 });

function App() {
	const data = [
		{
			id : "1",
			title : "One",
			third : "something"
		},
		{
			id : "2",
			title : "One 2",
			third : "something 2"
		}
	];
	
	const activeColumns = ["id", "title", "third"];
	const columns = [
		{
			name : "id",
			label : "ID"
		},
		{
			name : "title",
			label : "Title"
		},
		{
			name : "third",
			label : "Third"
		}
	]
	
	const primaryActions = [
		{
			name : "select",
			label : "Select",
			variant : "contained",
			color : "blue",
			onClick : function() {
				alert("CLICK ME!");
			}
		},
		{
			name : "another",
			label : "Another",
			variant : "outlined",
			color : "red",
			onClick : function() {
				alert("HERE WE GO!");
			}
		}
	]
	
	return (
		<div className="App">
			<Grid
				title="Testing List View"
				data={data}
				view="list"
				columns={columns}
				activeColumns={activeColumns}
				primaryActions={primaryActions}
			/>
		</div>
	)
}

export default App;
