import './ListItem.css'

const ListItem = ({ date, distance, handleDelete, handleChange, id, edit}) => {

	const dateFormat = new Date(date).toLocaleString("ru").slice(0,10);

	return (
		<li className="list-item">
			<div className="list-item-data">{dateFormat}</div>
			<div className="list-item-distance">{distance}</div>
			<div className="list-item-button">
				{edit && <button className="list-item-button-edit" onClick={()=>{handleChange(id)}}>✎</button>}
				<button className="list-item-button-delete" onClick={()=>{handleDelete(id)}}>✘</button>
			</div>
		</li>

	)

}

export default ListItem;