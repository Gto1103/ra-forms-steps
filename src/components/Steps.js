import { useState } from 'react';
import Header from './Header/Header';
import FormAddSteps from "./FormAddSteps/FormAddSteps";
import ListSteps from "./ListSteps/ListSteps";

const Steps = () => {

const [records, setRecords] = useState([]);

	const onAddRecord = (record) =>{
		
		const newRecords =[...records];

		const idx = newRecords.findIndex(item => item.date === record.date);
		if (idx === -1) {
			newRecords.push(record);
			newRecords.sort((a, b) => new Date(a.date) - new Date(b.date));
			
		} else {
			newRecords[idx].distance += record.distance;
			;
		}

		setRecords(newRecords);
	}

	const handleDelete = (id) =>{
		setRecords(records.filter(rec=>rec.id !== id));
	}

	return (
		<div className='steps'>
			<Header header={'top-header'} action />
			<FormAddSteps onAddRecord={onAddRecord}/>
			<Header header={'header'}action={false} />
			{records.length ? <ListSteps records={records} handleDelete={handleDelete} /> : null}
		</div>
	)
}

export default Steps;