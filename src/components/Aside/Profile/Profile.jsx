import React from 'react';
import styled from 'styled-components';
import ProfileItem from "./ProfileItem";
const listItems = [
    {
        id: '1',
        name: 'Instagram',
        title: 'Название профиля',
        status: 1
    },{
        id: '2',
        name: 'Instagram',
        title: 'Название профиля',
        status: 1
    }

];
export default () => {
    return (
        <ProfileComponent>
            <h3 className="profile-title">
                Профили социальных сетей
            </h3>
            <ul className="profile__list">
                {listItems.map(item =>(
                    <ProfileItem
                        key={item.id}
                        name={item.name}
                        title={item.title}
                        status={item.status}

                    />
                ))}
            </ul>
        </ProfileComponent>
    )
}
const ProfileComponent = styled.div`
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
 margin-top: 36px;
 margin-bottom: 38px;
  .profile__list{
    margin: 0;
    padding: 0;
  }
  .profile-title{
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    text-align: center; 
    color: #7F869F;
    width: 190px;
    margin:  0 auto 29px auto;
  }

`;
