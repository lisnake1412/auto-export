import Styles from  "../Popper.module.scss"
import classNames from "classnames/bind";
const cx = classNames.bind(Styles)

function Wrapper( {children,popup = false, ...allProps} ) {
    const moreClass = {
        popup:popup
    }
    return ( 
        <ul className={cx('wrapper', moreClass)} {...allProps}>
            {children}
        </ul>
     );
}

export default Wrapper;