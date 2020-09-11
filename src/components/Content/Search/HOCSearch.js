import React, {Component} from 'react';
import styled from 'styled-components';
import SearchForm from "./SearchForm";
import Arrow from "../Item/Arrow";

function HOCSearch(HocComponent, data) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                data: [
                    {
                        title: "Agentgirl",
                        fio: "Настя Ивлеева"
                    },
                    {
                        title: "Agentgirl",
                        fio: "Настя Ивлеева"
                    },
                ],
                q: ''
            };

            this.handleSubmit = this.handleSubmit.bind(this);
            this.handleChange = this.handleChange.bind(this);

        }


        //
        // Submit Form
        //
        handleSubmit = e => {
            e.preventDefault();
            console.log(this.state.q);

        }

        //
        // Change input search  handler
        //
        handleChange = e =>{
            this.setState({
                q: e.target.value
            })
        }

        render() {

            const {
                data,
                q
            } = this.state;

            return (
                <HOCSearchComponent>
                    <SearchForm
                        handleSubmit={this.handleSubmit}
                        handleChange={this.handleChange}
                        query={q}
                    />
                    <Arrow
                        direction="up"
                    />
                    <HocComponent items={data} {...this.props} />
                    <Arrow
                        direction="down"
                    />
                </HOCSearchComponent>
            );
        }
    }
}

const HOCSearchComponent = styled.div`

`;

export default HOCSearch;