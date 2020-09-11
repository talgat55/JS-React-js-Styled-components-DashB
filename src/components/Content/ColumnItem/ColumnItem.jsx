import React from 'react';
import styled from 'styled-components';
import HOCSearch from "../Search/HOCSearch";
import ItemListSearch from "../Item/ItemListSearch";
const Search = HOCSearch(
    ItemListSearch,
);
export default  ()=>{
    return(
        <ColumnItemComponent className="column__item">
            <div className="column__soc-item">
                Соцсеть
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.53441 0H13.4656C15.4095 0 17 1.59048 17 3.53441V13.4656C17 15.4095 15.4095 17 13.4656 17H3.53441C1.59049 17 0 15.4095 0 13.4656V3.53441C0 1.59049 1.59048 0 3.53441 0V0ZM8.50011 4.33627C6.79435 4.33627 5.17457 4.18453 4.55587 5.77237C4.30031 6.42818 4.33743 7.27988 4.33743 8.49942C4.33743 9.56956 4.30314 10.5753 4.55587 11.226C5.17316 12.8148 6.80609 12.6626 8.49917 12.6626C10.1326 12.6626 11.8167 12.8326 12.4429 11.226C12.6989 10.5636 12.6614 9.7246 12.6614 8.49942C12.6614 6.87306 12.7511 5.82312 11.9623 5.03483C11.1637 4.23621 10.0837 4.33628 8.49823 4.33628H8.50009L8.50011 4.33627ZM8.1271 5.0865C11.6852 5.08087 12.138 4.68531 11.8881 10.1803C11.7993 12.1237 10.3195 11.9105 8.50056 11.9105C5.18395 11.9105 5.08858 11.8156 5.08858 8.49754C5.08858 5.141 5.35166 5.08838 8.12709 5.08556V5.0865H8.1271ZM10.7221 5.77753C10.4464 5.77753 10.2228 6.00115 10.2228 6.2769C10.2228 6.55264 10.4464 6.77626 10.7221 6.77626C10.9979 6.77626 11.2215 6.55264 11.2215 6.2769C11.2215 6.00115 10.9979 5.77753 10.7221 5.77753ZM8.50011 6.36147C7.31956 6.36147 6.36263 7.31887 6.36263 8.49942C6.36263 9.67996 7.31956 10.6369 8.50011 10.6369C9.68064 10.6369 10.6371 9.67997 10.6371 8.49942C10.6371 7.31888 9.68065 6.36147 8.50011 6.36147ZM8.50011 7.11171C10.3346 7.11171 10.3369 9.88714 8.50011 9.88714C6.66611 9.88714 6.66328 7.11171 8.50011 7.11171Z" fill="#377BD4"/>
                </svg>
                <div className="column__title-soc">Instagram</div>
            </div>
            <Search/>
        </ColumnItemComponent>
    )
};

const ColumnItemComponent = styled.div`
    background: #fff;
    border-radius: 5px;
    padding: 22px 20px;
    .column__soc-item{
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      font-size: 13px;
      line-height: 16px; 
      color: #7F869F;
      margin-bottom: 20px;
      svg{
        margin:  0 8px;
      }
      .column__title-soc{
        color: #377BD4;
      }
      
    }
`;