import RecordModel from "../../models/RecordModel";
import './FormAddSteps.css'
import { nanoid } from 'nanoid';
import { useState } from 'react';

const FormAddSteps = ({ onAddRecord }) => {

	const [form, setForm] = useState({
		date: '',
		distance: ''
	})

	const handleSubmit = (evt) => {
		evt.preventDefault();
		const record = new RecordModel(nanoid(), form.date, +form.distance);
		onAddRecord(record);
		setForm({
			date: '',
			distance: ''
		});
	}

	const handleChange = (evt) => {
		const { name, value } = evt.target;
		setForm(prevForm => ({...prevForm, [name]: value}))
	}

	return (
			<form className="form" onSubmit={handleSubmit}>
				<input 
					name="date"
					className="form-date"
					placeholder="ДД.ММ.ГГ"
					type="date"
					value={form.date}
					onChange={handleChange}
					required>
				</input>
				<input 
					name="distance"
					className="form-distance"
					placeholder="Дистанция в км"
					type="number"
					value={form.distance}
					onChange={handleChange}
					required>
				</input>
				<button className="form-button" type="submit">OK</button>
			</form>
	)
}

export default FormAddSteps;