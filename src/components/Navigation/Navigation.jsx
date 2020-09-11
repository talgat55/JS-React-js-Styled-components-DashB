import React from 'react';
import styled from 'styled-components';
import NavigationItem from "./NavigationItem";

const listNav = [
    {
        id: '1',
        img: 'img.png',
        name: "Посты",
        href: '/',
        child: ''
    },
    {
        id: '2',
        img: 'new.png',
        name: "Идеи контента",
        href: '/',
        child: [
            {
                id: '1',
                img: 'search.png',
                name: "Поиск контента",
                href: '/'
            },
            {
                id: '2',
                img: 'star.png',
                name: "Избранные посты",
                href: '/'
            },
            {
                id: '3',
                img: 'light.png',
                name: "Инфоповоды",
                href: '/'
            },
        ]
    },
    {
        id: '3',
        img: 'comment.png',
        name: "Комментарии",
        href: '/',
        child: ''
    },
    {
        id: '4',
        img: 'chart.png',
        name: "Статистика",
        href: '/',
        child: ''
    },
    {
        id: '5',
        img: 'gear.png',
        name: "Настройки",
        href: '/',
        child: ''
    },
    {
        id: '6',
        img: 'dollar.png',
        name: "Тарифы",
        href: '/',
        child: ''
    },
    {
        id: '7',
        img: 'bell.png',
        name: "Помощь",
        href: '/',
        child: ''
    },

];
export default () => {

    return (
        <NavComponent>
            <ul className="nav">
                {listNav.map(item => (
                    <NavigationItem
                        key={item.id}
                        name={item.name}
                        href={item.href}
                        img={item.img}
                        child={item.child}
                    />
                ))}
            </ul>
        </NavComponent>
    )
}

const NavComponent = styled.nav`
  width: 100%;
  margin-bottom: 25px;
    .nav{
      margin: 0;
      padding: 0; 
      .nav__item{
        list-style: none;
        padding: 16.5px 28px;
        cursor: pointer;
        min-width: 100%;
        transition: all .3s; 
        &.true{
          background: #2A64B1;
        }
        .nav__item-wrapper{
          display: -webkit-box; 
          display: -ms-flexbox; 
          display: flex;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          -webkit-box-pack: justify;    
          -ms-flex-pack: justify;    
          justify-content: space-between;
          .arrow__img{
            padding: 5px;
          }
        }
        &.child{
          background: #184E96;
          padding: 0;
          &:hover{
            background: #184E96;
          }
         
        }
        &:hover{
          background: #0D376F;
        }
        a{
          text-decoration: none;
          display: -webkit-box; 
          display: -ms-flexbox; 
          display: flex;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          font-size: 18px;
          line-height: 22px;
          color: #FFFFFF;
          
          .nav__img-wrapper{
             width: 37px;
             text-align: center;
             margin-right: 10px;
             display: inline-block;
          }
        }
      }
      .nav__child{
          padding: 0;
          display: none;
          &.true{
            display: block;
          }
          li {
            padding: 11px 0 11px 74px;
            a{
              font-size: 14px;
              .nav__img-wrapper{
                width: 20px;
              }
            }
          }
      }
    }

`;