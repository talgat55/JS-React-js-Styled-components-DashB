import React from 'react';
import styled from 'styled-components';

export default ({name, title, status}) => {

    return (
        <ProfileItemComponent className="profile__item">
            <div className="profile__img-item">
                <div className="profile__status-img"/>
            </div>
            <div className="profile__content-item">
                <div className="profile__top-title">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path  d="M2.07907 0H7.92093C9.06442 0 10 0.935576 10 2.07907V7.92093C10 9.06442 9.06442 10 7.92093 10H2.07907C0.935583 10 0 9.06442 0 7.92093V2.07907C0 0.935583 0.935576 0 2.07907 0V0ZM5.00006 2.55074C3.99668 2.55074 3.04386 2.46149 2.67993 3.39551C2.52959 3.78128 2.55143 4.28228 2.55143 4.99966C2.55143 5.62915 2.53126 6.22079 2.67993 6.60353C3.04303 7.5381 4.00358 7.44856 4.99951 7.44856C5.96033 7.44856 6.95101 7.5486 7.31936 6.60353C7.46996 6.21389 7.44786 5.72035 7.44786 4.99966C7.44786 4.04298 7.50064 3.42536 7.03667 2.96167C6.56689 2.49189 5.93159 2.55075 4.99896 2.55075H5.00006L5.00006 2.55074ZM4.78065 2.99206C6.87363 2.98875 7.14002 2.75607 6.993 5.98839C6.94077 7.13161 6.07031 7.00615 5.00033 7.00615C3.04938 7.00615 2.99328 6.95033 2.99328 4.99855C2.99328 3.02412 3.14804 2.99317 4.78064 2.99151V2.99206H4.78065ZM6.30713 3.39855C6.14492 3.39855 6.01339 3.53009 6.01339 3.69229C6.01339 3.8545 6.14493 3.98604 6.30713 3.98604C6.46934 3.98604 6.60088 3.8545 6.60088 3.69229C6.60088 3.53009 6.46934 3.39855 6.30713 3.39855ZM5.00006 3.74204C4.30562 3.74204 3.74273 4.30522 3.74273 4.99966C3.74273 5.69409 4.30562 6.257 5.00006 6.257C5.69449 6.257 6.25712 5.6941 6.25712 4.99966C6.25712 4.30522 5.6945 3.74204 5.00006 3.74204ZM5.00006 4.18336C6.07916 4.18336 6.08054 5.81596 5.00006 5.81596C3.92124 5.81596 3.91957 4.18336 5.00006 4.18336Z" fill="#377BD4"/>
                    </svg>
                    {name}
                </div>
                <div className="profile__title">
                    {title}
                </div>
                <div className={`profile__status ${status === 1 ? 'active' : 'inactive'}`}>
                    {status === 1 ? 'Активен' : 'Неактивен'}
                </div>
            </div>
        </ProfileItemComponent>
    )
}
const ProfileItemComponent = styled.li`
  margin-bottom: 26px;
  list-style: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  &:last-child{
    margin-bottom: 0;
  }
    .profile__img-item{
      background: #EBEDF2;
      border-radius: 5px;
      width: 54px;  
      height: 54px; 
      position: relative; 
      .profile__status-img{
        width: 19px;
        height: 19px;
        background: #3CC9A5;
        border-radius: 3px;
        position: absolute;
        top: -6px;
        right: -4px;
      }
    }
    
   .profile__content-item{
      margin-left: 16px;
      .profile__status,
      .profile__title,
      .profile__top-title{
        font-size: 13px;
        line-height: 16px; 
        color: #7F869F;
        margin-bottom: 3px; 
      }
      .profile__top-title svg{
        margin-right: 5px;
      }
      .profile__title{
        font-size: 14px; 
      }
      .profile__status{
        &.active{
          color: #4ED4AA;
        }
        &.inactive{
          color: red;
        }
      
      }
   }
`;