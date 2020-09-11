import React from 'react';
import styled from 'styled-components';
import Logo from './../../assets/images/logo.svg';
import {Link} from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Profile from "./Profile/Profile";
import CollapseMenu from "./CollapseMenu/CollapseMenu";

export default () => {

    return (
        <AsideComponent>
            <div className="aside__top">
                <Link to="/" className="logo">
                    <img src={Logo} alt="Logo"/>
                </Link>
                <div className="aside__project-top">
                    <div className="aside__project-img-top"/>
                    <div className="aside__text-top">
                        <div className="aside__title-project-top">
                            Название проекта
                        </div>
                        <div className="aside__sub-title-project-top">
                            Текущий тариф: <span className="aside__plan-project-top">PRO</span>
                        </div>

                    </div>
                </div>
                <Navigation/>
            </div>
            <div className="aside__bottom">
                <Profile/>
                <CollapseMenu/>
            </div>
        </AsideComponent>
    )
};

const AsideComponent = styled.div`
  .aside__top{
    background: #377BD4;
    border-radius: 0px 0px 10px 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    .logo{
      margin-top: 12px;
      margin-bottom: 31px;
      display: block;
      text-align: center;
      transition: all .3s;
      &:hover{
        opacity: .6;
      }
    }
    .aside__project-top{
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      margin-bottom: 32px;
      
      .aside__project-img-top{
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: #2A64B1;
      }
      
      .aside__text-top{
        margin-left: 17px;
        
        .aside__title-project-top{
          font-size: 18px;
          line-height: 22px; 
          color: #FFFFFF;
          margin-bottom: 8px;
        }
        
        .aside__sub-title-project-top{
          font-size: 13px;
          line-height: 16px; 
          color: #FFFFFF;
          
          .aside__plan-project-top{
              text-transform: uppercase;
              text-decoration: underline;
              color: #9BCCFF;
          }
          
        }
        
      }
      
      
    }
    
  }
`;


