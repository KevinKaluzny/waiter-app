import { useParams } from 'react-router';
import styles from './Table.module.scss';
import './Table.scss';
import { useSelector } from 'react-redux';
import { getTableById } from '../../../redux/store';
import { useEffect } from 'react';
import { updateTables } from '../../../redux/store';
import { useDispatch } from 'react-redux';

const Table = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const table = useSelector(state => getTableById(state, id));

    return (
        <div>
            <main>
                <h1>Table {table[0].id}</h1>

                <form>
                    <div className="input-group mb-3">
                        <label htmlFor="status"><b>Status:</b></label>
                        <select defaultValue={table[0].status.toLowerCase()} className="form-select" aria-label="Default select example">
                            <option value="busy">Busy</option>
                            <option value="reserved">Reserved</option>
                            <option value="free">Free</option>
                            <option value="cleaning">Cleaning</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="people" className="form-label"><b>People:</b></label>
                        <input className="form-control" type="number" min="0" max="10" defaultValue={table[0].peopleAmount} id="people" /> / <input className="form-control" type="number" min="0" max="10" defaultValue={table[0].maxPeopleAmount} />
                    </div>
                    <div>
                        <label htmlFor="bill"><b>Bill:</b></label>
                        $ <input className="form-control" type="number" min="0" defaultValue={table[0].bill} id="bill" />
                    </div>
                    <button className="btn btn-primary">Update</button>
                </form>
            </main>
        </div>
    );
}

export default Table;