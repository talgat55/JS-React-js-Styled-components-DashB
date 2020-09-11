import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Main from "../layouts/main";
import Aside from "../components/Aside/Aside";
import TopBar from "../components/Content/TopBar/TopBar";
import ContentWrapper from "../components/Content/ContentWrapper";
import Title from "../components/Content/Title/Title";
import ColumnItem from "../components/Content/ColumnItem/ColumnItem";

const Search = () =>{
    return (
        <Main
            aside={<Aside/>}
        >
            <TopBar/>
            <ContentWrapper>
                <Title
                    title="Поиск контента"
                />
                <Row>
                    <Col xs="12" sm="6" xl="6" className="column">
                        <ColumnItem/>
                    </Col>
                </Row>
            </ContentWrapper>
        </Main>
    )
}

export default  Search;