import { useParams } from 'react-router';
import styles from './Table.module.scss';
import './Table.scss';
import { useSelector } from 'react-redux';
import { getTableById } from '../../../redux/store';
import { useEffect, useState } from 'react';
import { updateTables } from '../../../redux/store';
import { useDispatch } from 'react-redux';
import { updateTable } from '../../../redux/store';

const Table = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const table = useSelector(state => getTableById(state, id));
    const [status, setStatus] = useState(table[0].status.toLowerCase());
    const [peopleAmount, setPeopleAmount] = useState(table[0].peopleAmount);
    const [maxPeopleAmount, setMaxPeopleAmount] = useState(table[0].maxPeopleAmount);
    const [bill, setBill] = useState(table[0].bill);

    const handleClick = event => {
        event.preventDefault();
        dispatch(updateTable({ id: id, status: status, peopleAmount: peopleAmount, maxPeopleAmount: maxPeopleAmount, bill: bill }));
    }

    return (
        <div>
            <main>
                <h1>Table {table[0].id}</h1>

                <form>
                    <div className="input-group mb-3">
                        <label htmlFor="status"><b>Status:</b></label>
                        <select onChange={e => setStatus(e.target.value)} defaultValue={status} className="form-select" aria-label="Default select example">
                            <option value="busy">Busy</option>
                            <option value="reserved">Reserved</option>
                            <option value="free">Free</option>
                            <option value="cleaning">Cleaning</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="people" className="form-label"><b>People:</b></label>
                        <input onChange={e => setPeopleAmount(e.target.value)} className="form-control" type="number" min="0" max="10" defaultValue={peopleAmount} id="people" /> / <input onChange={e => setMaxPeopleAmount(e.target.value)} className="form-control" type="number" min="0" max="10" defaultValue={maxPeopleAmount} />
                    </div>
                    <div>
                        <label htmlFor="bill"><b>Bill:</b></label>
                        $ <input onChange={e => setBill(e.target.value)} className="form-control" type="number" min="0" defaultValue={bill} id="bill" />
                    </div>
                    <button className="btn btn-primary" onClick={handleClick}>Update</button>
                </form>
            </main>
        </div>
    );
}

export default Table;