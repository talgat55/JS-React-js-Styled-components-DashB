import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import {Dropdown} from 'react-bootstrap';
import ArrowDown from '../../../assets/images/arrow-down.svg';
import {formatMoney} from "../../../utils/utils";

export default () => {
    return (
        <TopBarComponent className="top-bar">
            <div className="top-bar__first-row">
                <div className="top-bar__current-project">
                    Проект:
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Проект 1
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item as="button">
                                <Link to="/">
                                    Проект 2
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item as="button">
                                <Link to="/">
                                    Проект 3
                                </Link>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="top-bar__balance">
                    <div className="top-bar__currency">
                        <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.13546 6.67409C3.46591 6.67409 2.11223 5.81776 2.11223 4.74955C2.11223 3.699 3.46591 2.82501 5.13546 2.82501C6.805 2.82501 8.15868 3.68134 8.15868 4.74955C8.15868 5.12033 8.63247 5.42932 9.21907 5.42932C9.80567 5.42932 10.2795 5.12916 10.2795 4.74955C10.2795 3.20462 8.57607 1.87157 6.19584 1.54493V0.679768C6.19584 0.308986 5.72205 0 5.13546 0C4.54886 0 4.07507 0.300157 4.07507 0.679768V1.54493C1.30002 1.91571 -0.482332 3.65486 0.115545 5.42932C0.611896 6.94776 2.72139 8.01597 5.14674 8.0248C6.81628 8.0248 8.16996 8.88113 8.16996 9.94934C8.16996 11.0087 6.81628 11.8739 5.14674 11.8739C3.47719 11.8739 2.12351 11.0175 2.12351 9.94934C2.12351 9.57856 1.64972 9.26957 1.06312 9.26957C0.476527 9.26957 0.00273799 9.56973 0.00273799 9.94934C0.00273799 11.4943 1.70612 12.8273 4.08635 13.1451V14.434C4.08635 14.8048 4.56014 15.1138 5.14674 15.1138C5.73333 15.1138 6.20712 14.8137 6.20712 14.434V13.1451C8.98217 12.7655 10.7532 11.0264 10.1666 9.26074C9.6703 7.75112 7.57209 6.67409 5.13546 6.67409Z"
                                fill="#3CC9A5"/>
                        </svg>
                    </div>
                    <div className="top-bar__text-balance">
                        Текущий баланс:
                        <span> { formatMoney(3000, '', ".", " ") } p</span>
                    </div>
                    <Link to="/" className="top-bar__link">
                        Пополнить
                    </Link>

                </div>

            </div>
            <div className="top-bar__second-row">
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        admin@admin.com
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item as="button">
                            <Link to="/">
                                Ссылка
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item as="button">
                            <Link to="/">
                                Выйти
                            </Link>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </TopBarComponent>
    )
};

const TopBarComponent = styled.div`
  &.top-bar{
    background: #fff;
    padding: 19px 46px 19px 38px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    
    .top-bar__first-row{
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      .top-bar__current-project{
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          font-size: 13px;
          line-height: 16px;
          color: #A0A7C4; 
      }
      .top-bar__balance{
        margin-left: 148px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        .top-bar__currency{
          border: 1px solid rgba(127, 134, 159, 0.28);
          border-radius: 50%;
          width: 37px;
          height: 37px; 
          display: -webkit-box; 
          display: -ms-flexbox; 
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
        }
        .top-bar__text-balance{
          margin-left: 15px;
          font-size: 13px;
          line-height: 16px; 
          color: #7F869F; 
          span{
            font-weight: bold;  
            color: #3CC9A5;
            margin-left: 5px;
          } 
        }
        .top-bar__link{
          display: inline-block;
          text-decoration: none;
          font-size: 13px;
          line-height: 16px; 
          color: #FFFFFF;
          padding: 5px 15px;
          background: #4ED4AA;
          border-radius: 5px;
          margin-left: 24px;
          transition: all .3s;
          &:hover{
            opacity: .5;
          }
        }
        
      }
      
    }
    .top-bar__first-row,
    .top-bar__second-row{
      .dropdown{
        margin-left: 5px;
        .dropdown-toggle{
          padding: 0;
          font-weight: normal;
          font-size: 13px;
          line-height: 16px;
          background: transparent;
          border: none;
          color: #7F869F;
          &:focus{
            box-shadow: none!important;
          }
          &::after{
            border: none;
            background: url(${ArrowDown});
            width: 8px;
            height: 7px;
            vertical-align: middle;
            margin-left: 13px;
          }
        }
            
        .dropdown-item{
          a{
            text-decoration: none;
            font-size: 13px;
            line-height: 16px;
            color: #A0A7C4;
          }
          &:focus{
            outline: none;
          }
        }
      }
    }
  }

`;

