import styles from "./Sidebar.module.scss"
import classNames from "classnames/bind";

const cx = classNames.bind(styles)
function Sidebar() {
    return ( 
    <aside className={cx('wrapper')}>
        <div className={cx('container')}>
            
        </div>
    </aside> 
    );
}

export default Sidebar;