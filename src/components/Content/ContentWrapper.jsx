import React from 'react';
import styled from 'styled-components';

export default ({children}) => (
    <ContentWrapperComponent>
        {children}
    </ContentWrapperComponent>
);

const ContentWrapperComponent = styled.div`
  padding: 32px 38px 0 38px;
  
`;