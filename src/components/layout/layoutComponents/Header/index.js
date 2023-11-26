import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faPlus, faEllipsisVertical} from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion, faIdBadge, faKeyboard, faLightbulb, faMoon } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/components/layout/layoutComponents/Popper';
import styles from './Header.module.scss';
import tiktokLogo from '~/assets/logo/tiktok';
import { Close } from '~/assets/icon';
import AccountItems from '~/components/layout/layoutComponents/AccountItems';
import Button from '~/components/layout/layoutComponents/Button';
import PopupItem from '~/components/layout/layoutComponents/PopupItem';
import ItemsHeader from '~/components/layout/layoutComponents/PopupItem/ItemsHeader';

const cx = classNames.bind(styles);
let curHeaderItemTitle = []
let secondMenuListStyle = {
   
    fontSize: 14,
    fontWeight:400,
    lineHeight:"18px",
}
const MENU_ITEMS = [
    {
        icon:<FontAwesomeIcon icon={faLightbulb}/>,
        text: "Trung tâm Nhà sáng tạo LIVE"
    },
    {
        icon:<FontAwesomeIcon icon={faIdBadge}/>,
        text: "Tiếng Việt",
        title:'Ngôn ngữ',
        children: [
            {
                text:'Tiếng Việt (Việt Nam)',
                title:'Vùng miền',
                children:[
                    {   
                        text:'Bắc',
                        title:'Tỉnh',
                        children:[
                            {
                                text:'Hà Nội'
                            },
                            {
                                text:'Thái Bình'
                            }
                        ]
                    },
                    {
                        text:'Trung',
                        title:'tỉnh',
                        children:[
                            {
                                text:'Nghệ An'
                            },
                            {
                                text:'Hà Tĩnh'
                            }
                        ]
                    }
                ]
            },
            {
                type:'Language',
                text:'English',
                title:'Accent',
                children: [
                    {
                        text:'American'
                    },
                    {
                        text:'British'
                    }
                ]
            },
            {
                text:"العربية"
            },
            {
                text:"বাঙ্গালি (ভারত)"
            },

            {
                text:"Cebuano (Pilipinas)"
            },
            {
                text:"Čeština (Česká republika)"
            },
        ]
    },
    {
        icon:<FontAwesomeIcon icon={faCircleQuestion}/> ,
        text: "Phản hồi và trợ giúp"
    },
    {
        icon:<FontAwesomeIcon icon={faKeyboard}/> ,
        text: "Phím tắt trên bàn phím",
        style: {
            fontSize:17
        }
    },
    {
        icon:<FontAwesomeIcon icon={faMoon}/> ,
        text: "Chế độ tối"
    }
]

function Header() {
    const [searchResult, setSearchResult] = useState([])
    const [currentItemList, setItemList] = useState([MENU_ITEMS])

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1,2])
        }, 0)
    }, [])

    function goToChildrenItem( curItem ) {
        const isChildren = !!curItem.children
        if (isChildren) {
            setItemList( prev => [ curItem.children, prev])
            curHeaderItemTitle.unshift(curItem.title)
        }
    }
    function goToParentItem() {
        setItemList(prev => prev.shift())
        curHeaderItemTitle.shift()
    }

    return (
        <header className={cx('wrapper-header')}>
            <div className={cx('inner-header')}>
                <img src={tiktokLogo.url} alt="tiktok"></img>
                <Tippy
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <div className={cx('account-title')}>Tài khoản</div>
                                <AccountItems/>
                                <AccountItems/>
                                <AccountItems/>
                                <AccountItems/>
                            </PopperWrapper>
                        </div>
                    )}
                    visible = {searchResult.length}
                    interactive = "true"
                >
                    <div className={cx('search-container')}>
                            <input placeholder="Tìm kiếm" className={cx('search-input')}></input>
                            <button className={cx('search-loading')}>
                                <FontAwesomeIcon icon={faSpinner} />
                            </button>
                            <button className={cx('search-clear')}>
                                <Close />
                            </button>
                            <span className={cx('barrier')}></span>

                            <button className={cx('search-button')}>
                                <svg width="24" data-e2e="" height="24" viewBox="0 0 48 48" fill="rgba(22, 24, 35, .34)" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M22 10C15.3726 10 10 15.3726 10 22C10 28.6274 15.3726 34 22 34C28.6274 34 34 28.6274 34 22C34 15.3726 28.6274 10 22 10ZM6 22C6 13.1634 13.1634 6 22 6C30.8366 6 38 13.1634 38 22C38 25.6974 36.7458 29.1019 34.6397 31.8113L43.3809 40.5565C43.7712 40.947 43.7712 41.5801 43.3807 41.9705L41.9665 43.3847C41.5759 43.7753 40.9426 43.7752 40.5521 43.3846L31.8113 34.6397C29.1019 36.7458 25.6974 38 22 38C13.1634 38 6 30.8366 6 22Z"></path></svg>
                            </button>
                    </div>
                </Tippy>
                <div className={cx('option')}>
                    <Button text size="medium" leftIcon={<FontAwesomeIcon icon={faPlus} />}>Tải lên</Button>
                    <Button primary size='medium' >Đăng nhập</Button>
                    <Tippy
                    render={(attrs) => (
                        <div className={cx('popup-container')} tabIndex="-1" {...attrs}>
                            <PopperWrapper popup>
                                {currentItemList.length >1 && <ItemsHeader title={curHeaderItemTitle[0]} onClick={() => goToParentItem()}/>}
                                {
                                    currentItemList[0].map( (item, index) => {
                                        
                                        return (
                                        <div key={index}>
                                            <PopupItem 
                                                icon={item.icon} 
                                                style={currentItemList.length > 1 ? {...item.style,...secondMenuListStyle} : item.style } 
                                                onClick={() => goToChildrenItem(item)}
                                            >
                                                {item.text}
                                            </PopupItem>
                                        </div>
                                        )
                                    } )
                                }
                            </PopperWrapper>
                        </div>
                    )}
                    visible
                    interactive = "true"
                    delay={[0, 600]}
                    >
                    <button className={cx('more-button')}><FontAwesomeIcon icon={faEllipsisVertical} /></button>
                    </Tippy>
                </div>
                
            </div>
        </header>
    );
}

export default Header;
