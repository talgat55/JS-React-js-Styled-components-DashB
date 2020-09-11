import React from 'react';
import styled from 'styled-components';

export default () => (
    <CollapseMenuComponent>
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="17" cy="17" r="17" fill="#7F869F"/>
            <path
                d="M11.7194 18.7072L18.9403 23.6506C19.2738 23.8791 19.6098 24 19.8891 24C20.4291 24 20.7631 23.5667 20.7631 22.8413L20.7631 12.157C20.7631 11.4325 20.4295 11 19.8908 11C19.6111 11 19.2805 11.121 18.9462 11.3501L11.7219 16.2935C11.2573 16.6119 11 17.0404 11 17.5006C10.9999 17.9604 11.2542 18.3888 11.7194 18.7072Z"
                fill="white"/>
        </svg>
        <div className="collapse-menu__title">
            Свернуть меню
        </div>
    </CollapseMenuComponent>
);

const CollapseMenuComponent = styled.div`
    cursor: pointer;
    transition: all .3s;
    margin-left: 30px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    &:hover{
      opacity: .5;
    }
    .collapse-menu__title{
      font-size: 13px;
      line-height: 16px; 
      color: #7F869F;
      margin-left: 26px;
    }
`;