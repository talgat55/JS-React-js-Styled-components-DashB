import React from "react";
import styled from 'styled-components';
import Arrow from '../../../assets/images/arrow-search.svg';


const ItemArrow = ({text, direction}) => (
    <>
        <span className={`arrow__title ${direction}`}>
            {text}
        </span>
        <img
            className={direction}
            src={Arrow}
            alt="Icon"
        />
    </>
);
export default ({direction}) => {

    return (
        <ArrowItemComponent>
            {
                direction === 'up' ?
                    (
                        <>
                            <ItemArrow
                                text="Показать предыдущие"
                                direction={direction}
                            />

                        </>
                    )
                    :
                    (
                        <>
                            <ItemArrow
                                text="Показать следущие"
                                direction={direction}
                            />
                        </>
                    )
            }
        </ArrowItemComponent>
    )
}
const ArrowItemComponent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 19px 0;
  cursor: pointer;
  transition: all .3s;
  &:hover{
    opacity: .5;
  }
  .arrow__title{
    font-weight: normal;
    font-size: 13px;
    line-height: 16px; 
    color: #7F869F;
    margin-right: 39px;
    &.up{
      margin-right: 19px;
    }
  }
  
  img.up{
      transform: rotateZ(180deg); 
  }
`;
