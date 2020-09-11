import React from "react";
import styled from 'styled-components';
import {Button, Form, FormGroup } from 'react-bootstrap';

export default ({handleSubmit,query,handleChange}) => {
    return (
        <SearchFormComponent onSubmit={handleSubmit}>
                <FormGroup>
                    <Form.Control
                        type="text"
                        name="q"
                        value={query}
                        id="search-input"
                        placeholder="Введите логин Instagram, ключевое слово или адрес страницы"
                        onChange={handleChange}
                    />
                    <Button
                        type="submit"
                    >
                        Найти
                    </Button>
                </FormGroup>
        </SearchFormComponent>
    )
}
const SearchFormComponent = styled.form`
    .form-group{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        margin-bottom: 20px;
        
        input{
            background: #FFFFFF;
            border: 2px solid #EBEDF2; 
            border-radius: 5px;
            padding: 13px 25px;
            height: auto;
            font-style: italic;
            font-weight: normal;
            font-size: 13px;
            line-height: 16px; 
            color: #090909;
            &:focus{
              outline: none;
              box-shadow: none;
            }
            ::-webkit-input-placeholder {  
                font-style: normal;
                font-weight: normal;
                font-size: 13px;
                line-height: 16px; 
                color: #A0A7C4;
            }
            ::-moz-placeholder { 
                font-style: normal;
                font-weight: normal;
                font-size: 13px;
                line-height: 16px; 
                color: #A0A7C4;
            }
            :-ms-input-placeholder { 
                font-style: normal;
                font-weight: normal;
                font-size: 13px;
                line-height: 16px; 
                color: #A0A7C4;
            }
            :-moz-placeholder {  
                font-style: normal;
                font-weight: normal;
                font-size: 13px;
                line-height: 16px; 
                color: #A0A7C4;
            }
        }
        
        button{
          background: #3CC9A5;
          border-radius: 5px;
          border: none;
          font-weight: normal;
          font-size: 14px;
          line-height: 17px; 
          color: #FFFFFF;
          padding: 14.5px 60px;
          margin-left: 10px;
          transition: all .3s;
          &:active,
          &:focus{
            outline: none;
            box-shadow: none;
          }
          &:hover{
            background: #0BA986;
          }
        }
 
    }
   
  
  
`;

