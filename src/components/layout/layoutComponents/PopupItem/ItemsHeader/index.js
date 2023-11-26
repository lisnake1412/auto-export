import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"

import styles from "./ItemsHeader.module.scss"
import classNames from "classnames/bind"


const cx = classNames.bind(styles)

function ItemsHeader( {title, onClick} ) {
    return (
        <div className={cx('container')}>
            <span className={cx('back-icon')} onClick={onClick}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </span>
            <span className={cx('title')}>{title}</span>
        </div>
    )
}

export default ItemsHeader