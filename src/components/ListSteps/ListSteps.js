import './ListSteps.css'
import ListItem from "./ListItem/ListItem";

const ListSteps = ({ records, handleDelete, handleChange }) => {

	return (
		<div className="list-steps">
			<ul className="list-records">
				{records.map((rec)=> (
					<ListItem 
						key={rec.id}
						id={rec.id}
						date={rec.date}
						distance={rec.distance}
						handleChange={handleChange}
						handleDelete={handleDelete}
						edit={false} />
				))}
			</ul>
		</div>
	)
}

export default ListSteps