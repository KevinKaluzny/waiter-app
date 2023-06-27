import styles from './Table.module.scss';
import './Table.scss';

const Table = () => {
    return (
        <div>
            <main>
                <h1>Table 1</h1>

                <form>
                    <div class="input-group mb-3">
                        <label for="status"><b>Status:</b></label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected value="busy">Busy</option>
                            <option value="reserved">Reserved</option>
                            <option value="free">Free</option>
                            <option value="cleaning">Cleaning</option>
                        </select>
                    </div>
                    <div>
                        <label for="people" class="form-label"><b>People:</b></label>
                        <input class="form-control" type="number" min="0" max="10" id="people" /> / <input class="form-control" type="number" min="0" max="10" />
                    </div>
                    <div>
                        <label for="bill"><b>Bill:</b></label>
                        $ <input class="form-control" type="number" min="0" id="bill" />
                    </div>
                    <button class="btn btn-primary">Update</button>
                </form>
            </main>
        </div>
    );
}

export default Table;