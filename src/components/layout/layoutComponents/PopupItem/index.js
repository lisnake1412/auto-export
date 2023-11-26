import styles from "./PopupItem.module.scss"
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

function PopupItem( {icon, children, ...allProps} ) {
    
    return ( 
        <li className={cx('wrapper')} {...allProps}>
            <a href="#nothing" className={cx('container')}>
                {icon && <span className={cx('icon')} {...allProps}>{icon}</span>}
                <span>{children}</span>
            </a>
        </li>
     );
}

export default PopupItem;