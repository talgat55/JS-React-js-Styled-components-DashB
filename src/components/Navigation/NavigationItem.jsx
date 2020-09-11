import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {SlideDown} from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';
import ArrowDown from '../../assets/images/arrow-down-nav.svg';

const NavigationItem = ({name, href, img: imgLink, child}) => {
    const [state, setState] = useState(false);
    const handleClick = e => {
        setState(!state);
    }
    return (
        <>
            <li className={`nav__item ${state}`}>
                <div className="nav__item-wrapper">
                    <Link to={href}>
                        <span className="nav__img-wrapper">
                            <img
                                src={require(`./../../assets/images/nav/${imgLink}`)}
                                alt="Icon"
                            />
                        </span>
                        <span className="nav__item-name">
                            {name}
                        </span>
                    </Link>

                    {child && (
                        <>
                            <img
                                onClick={handleClick}
                                className="arrow__img"
                                src={ArrowDown}
                                alt="Icon"
                            />
                        </>
                    )}
                </div>

            </li>
            {
                child && (
                    <SlideDown
                        as="li"
                        className="nav__item child"
                    >
                        {
                            state ?
                                    <ul className={`nav__child  ${state}`}>
                                        {
                                            child.map(item => (
                                                <NavigationItem
                                                    key={item.id}
                                                    name={item.name}
                                                    href={item.href}
                                                    img={item.img}
                                                />
                                            ))
                                        }
                                    </ul>
                                :
                                null
                        }
                    </SlideDown>

                )
            }
        </>
    );
};

export default NavigationItem;