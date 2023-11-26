import classNames from 'classnames/bind';
import styles from './button.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function Button({ 
    to, 
    href, 
    children, 
    primary = false, 
    outline = false, 
    text = false,
    disabled = false, 
    size = 'medium', 
    className,
    leftIcon,
    rightIcon,
    ...allProps 
    }) {
    let Component = 'button';
    let nameOfClass = cx('wrapper', {
        primary: primary,
        outline: outline,
        text: text,
        disabled:disabled,
        [className]:className,
        [size]: size,
    });

    const attributes = {
        ...allProps,
    };
    if (to) {
        attributes.to = to;
        Component = Link;
    } else if (href) {
        attributes.href = href;
        Component = 'a';
    }

    if(disabled) {
       Object.keys(attributes).forEach( props => {
            if( props.startsWith('on') && typeof attributes[props] === 'function'  ) {
                delete attributes[props]
            }
       } )
       
    }

    return (
        <Component className={nameOfClass} {...attributes}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            {<span className={cx('content')}>{children}</span>}
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Component>
    );
}

export default Button;
