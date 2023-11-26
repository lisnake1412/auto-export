import Verified from "~/assets/icon/verified";
import Styles from "./accountItems.module.scss"
import classNames from "classnames/bind"

const cx = classNames.bind(Styles)

function AccountItems() {
    return ( 
        <li className={cx("item-container")}>
            <span shape="circle" className={cx("user-avatar")}>
                <img className={cx("avatar-image")} src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/953d389b198b8f7a6f3ce10e65164823~c5_300x300.webp?x-expires=1692698400&x-signature=COeGC2admmDF7e8Iy%2FgwLCvhzE0%3D" alt=""></img>
            </span>
            <div className={cx("user-info")}>
                <h4 className={cx("user-name")}>
                    lxixsxa_Official
                    <span className={cx('verified-container')}>
                        <Verified/>
                    </span>
                </h4>
                <p className={cx("user-nickname")}>LiSa</p>
            </div>
        </li>
     );
}

export default AccountItems;