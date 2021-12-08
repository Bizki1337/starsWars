import {Link, Outlet} from 'react-router-dom';

import styles from './layout.module.scss';

const Layout = () => {
    return (
        <>
            <div className={styles.header}>
                <Link to='/' className={styles.link}>Home</Link>
                <Link to='/about' className={styles.link}>About</Link>
            </div>

            <Outlet />

            <div>

            </div>
        </>
    )
}
export default Layout;