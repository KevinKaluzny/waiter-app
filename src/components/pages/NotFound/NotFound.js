import styles from './NotFound.module.scss';

const NotFound = () => {
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
                <h1>Not Found</h1>
            </main>

            <footer>
                <p>Copyright @ PizzeriaApp 2022</p>
            </footer>
        </div>
    );
}

export default NotFound;