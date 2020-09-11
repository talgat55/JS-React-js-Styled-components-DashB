import React from "react";
import styled from 'styled-components';

export default ({title, fio}) => (
    <ItemOneComponent className="item item_one">
        <div className="item__content">
            <div className="item__img">

            </div>
            <div className="item__text">
                <h3 className="item__title">
                    {title}
                </h3>
                <div className="item__sub-title">
                    {fio}
                </div>
            </div>
        </div>
        <button>
            Выбрать
        </button>
    </ItemOneComponent>
);

const ItemOneComponent = styled.li`
  display: -webkit-box;
  display: -ms-flexbox;
  list-style: none;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 12px 26px 12px 20px;
  background: rgba(219, 235, 255, 0.231373);
  border-radius: 5px;
  margin-bottom: 3px;
  &:last-child{
    margin-bottom: 0;
  }
  .item__content{
      display: -webkit-box;
      display: -ms-flexbox; 
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      
      .item__img{
        width: 47px;
        height: 47px;  
        background: #ADD2FD;
        border-radius: 50%;
        margin-right: 16px;
      }
      .item__title{
        font-weight: normal;
        font-size: 13px;
        line-height: 16px; 
        color: #000000;
        margin-top: 0;
        margin-bottom: 4px;
      }
      .item__sub-title{
        font-size: 11px;
        line-height: 13px; 
        color: #7F869F;
      } 
  }
 
   button{
    border: none;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px; 
    color: #FFFFFF;
    padding: 9px 24px;
    background: #90BAF0;
    border-radius: 5px;
    transition: all .3s;
    height: 35px;
    &:focus{
      outline: none;
      box-shadow: none;
    }
    &:hover{
      background: rgba(55, 123, 212, 0.89);
    }
   }
`;




