import styles from './Home.module.scss';

const Home = () => {
    return (
        <div>
            <header>
                <span>Waiter.app</span>

                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                    </ul>
                </nav>
            </header>

            <main>
                <h1>All tables</h1>

                <ul>
                    <li>
                        <div>
                            <h2>Table 1</h2>
                            <p><b>Status:</b> Reserved</p>
                            <button>Show more</button>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h2>Table 2</h2>
                            <p><b>Status:</b> Free</p>
                            <button>Show more</button>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h2>Table 3</h2>
                            <p><b>Status:</b> Busy</p>
                            <button>Show more</button>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h2>Table 4</h2>
                            <p><b>Status:</b> Cleaning</p>
                            <button>Show more</button>
                        </div>
                    </li>
                </ul>
            </main>

            <footer>
                <p>Copyright @ PizzeriaApp 2022</p>
            </footer>
        </div>
    );
}