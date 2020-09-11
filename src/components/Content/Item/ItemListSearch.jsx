import React from "react";
import styled from 'styled-components';
import ItemOne from "./ItemOne";

export default ({items}) => (
    <ItemListComponent>
        {
            items.map((item, index) => (
                <ItemOne
                    key={index}
                    title={item.title}
                    fio={item.fio}
                />
            ))
        }
    </ItemListComponent>
);
const ItemListComponent = styled.ul`
  margin: 0;
  padding: 0;
  
`;