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
            this.reqInter = axios.interceptors.response.use(requestConfig => {
                this.setState({error: null});
                return requestConfig;
            })
            this.resInter = this.axios.interceptors.response.use(res => res, error => {
                this.setState({error: error})
            })
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInter);
            axios.interceptors.response.eject(this.resInter);
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