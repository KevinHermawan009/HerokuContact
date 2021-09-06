import {GetContact, GetHeaders} from '../Services/RestSetting';
import React, {Component} from 'react';

export class FetchApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      contactData: [],
    };
     GetContactData1 = () => {
        fetch(GetContact, {
          method: 'GET',
          headers: GetHeaders,
        })
          .then(response => response.json())
          .then(res => {
            this.setState({
              message: res.message,
              contactData: res.data,
            });
          })
          .catch(error => {
            console.error(error);
          });
      };
  }
}
