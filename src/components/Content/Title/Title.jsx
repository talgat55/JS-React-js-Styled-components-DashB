import React from 'react';
import styled from 'styled-components';

export default ({title}) => (
    <TitleComponent className="w-100 title">
        {title}
    </TitleComponent>
);
const TitleComponent = styled.h1`
    font-weight: normal;
    font-size: 20px;
    line-height: 24px; 
    color: #7F869F;
    margin: 0 0 25px;
    
`;