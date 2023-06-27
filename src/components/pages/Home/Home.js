import styles from './Home.module.scss';
import './Home.scss';

const Home = () => {
    return (
        <div>
            <main>
                <h1>All tables</h1>

                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <div>
                            <h2>Table 1</h2>
                            <p><b>Status:</b> Reserved</p>
                        </div>
                        <button className="btn btn-primary">Show more</button>
                    </li>
                    <li className="list-group-item">
                        <div>
                            <h2>Table 2</h2>
                            <p><b>Status:</b> Free</p>
                        </div>
                        <button className="btn btn-primary">Show more</button>
                    </li>
                    <li className="list-group-item">
                        <div>
                            <h2>Table 3</h2>
                            <p><b>Status:</b> Busy</p>
                        </div>
                        <button className="btn btn-primary">Show more</button>
                    </li>
                    <li className="list-group-item">
                        <div>
                            <h2>Table 4</h2>
                            <p><b>Status:</b> Cleaning</p>
                        </div>
                        <button className="btn btn-primary">Show more</button>
                    </li>
                </ul>
            </main>
        </div>
    );
}

export default Home;