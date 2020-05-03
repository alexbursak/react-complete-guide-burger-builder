import React, { Component } from 'react';
// import classes from "./WithErrorHandler.css";
import Aux from "../Aux/Aux";
import Modal from "../../components/UI/Modal/Modal";

const WithErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        constructor() {
            super();
            axios.interceptors.response.use(requestConfig => {
                this.setState({error: null});
                return requestConfig;
            })
            axios.interceptors.response.use(res => res, error => {
                this.setState({error: error})
            })
        }

        errorConfirmedHandler = () => {
            console.log('clearing error...')
            this.setState({error: null});
        }

        render() {
            return (
                <Aux>
                    <Modal show={this.state.error} modalClosed={this.errorConfirmedHandler} >
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            )
        }
    }
};

export default WithErrorHandler;