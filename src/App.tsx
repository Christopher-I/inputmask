import React, { Component } from "react";
import "./App.css";
import { bindActionCreators, Dispatch } from "redux";
import MaskedInput from "react-text-mask";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  Grid,
  Typography,
  Icon,
  CircularProgress,
  Hidden
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import cx from "classnames";

interface Props {
  totp: any;
  user: any;
  login: any;
  
  classes: any;
  match: any;
  nextRoute: string;
}

interface State {
  isFetching: boolean;
}

export default class Authenticator extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isFetching: false
    };
  }
  // specifying your onload callback function
  callback = () => {
    console.log("Captcha Loaded!");
  };

  expiredCallback = () => {
    console.log(`Recaptcha expired`);
  };

  // static getDerivedStateFromProps(nextProps: Props, prevState: State) {
  //   const { totp } = nextProps;
  //   if (totp.isFetching !== prevState.isFetching) {
  //     return { ...prevState, isFetching: totp.isFetching };
  //   }
  //   return null;
  //}

  componentWillUnmount() {
    console.log("things seem to be working");
  }

  render() {
    return <div>hey i am here</div>;
  }
}

const mapStateToProps = (state: any) => ({
  totp: state.totp,
  user: state.user,
  login: state.login,
  setMFA: state.setMFA
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({});
