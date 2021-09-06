import React, {Component} from 'react';
import {SwipeListView,SwipeRow } from 'react-native-swipe-list-view';
import {
  View,
  Text,
  Button,
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {
  globalStyle,
  defaultLeftOpenValue,
  defaultRightOpenValue,
} from '../Helper/GlobalStyle';
import {GetContact, GetHeaders} from '../Services/RestSetting';
import {GetContactData1} from '../Services/FetchApi';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      contactData: [],
    };
  }
  componentDidMount() {
    this.GetContactData();
  }
  GetContactData = () => {
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
  SwipeListButton() {
    return (
      <SwipeListView
        style={{backgroundColor: 'white'}}
        data={this.state.contactData}
        renderItem={(data, index,rowId) => (
          <View key={index} style={globalStyle.DefaultContactDataView}>
            <View style={globalStyle.BoxContactImageStyle}>
              <Image
                style={globalStyle.DefaultHomeContactImageStyle}
                source={{uri: data.item.photo}}></Image>
            </View>
            <View style={globalStyle.BoxContactInformationStyle}>
              <Text style={globalStyle.ContactInformationTextStyle}>
                {data.firstName} {data.item.lastName}
              </Text>
              <Text style={globalStyle.OtherInformarionTextStyle}>
                {data.item.age} Years Old
              </Text>
            </View>
            <View style={globalStyle.BoxContactEditorClueStyle}>
              <ImageBackground
                style={globalStyle.SwipeIconStyle}
                source={require('../Image/SwipeIcon2.png')}
              />
            </View>
          </View>
         
        )}
        renderHiddenItem={(data, index,rowId) => (
          <View key={index} style={globalStyle.DefauContactBaseView}>
            <View style={globalStyle.BoxEditorContactButtonStyle}>
              <TouchableOpacity style={globalStyle.ContactEditorButtonStyle}>
                  <View style={{alignContent:'center'}}>
                <ImageBackground
                  style={globalStyle.EditorIconStyle}
                  source={require('../Image/EditIcon.png')}
                />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={globalStyle.ContactDeleteButtonStyle}>
                <ImageBackground
                  style={globalStyle.EditorIconStyle}
                  source={require('../Image/DeleteIcon.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
        leftOpenValue={defaultLeftOpenValue}
        rightOpenValue={defaultRightOpenValue}
      />
    );
  }

  render() {
    return <View style={{marginTop: 50}}>
        {this.SwipeListButton()}</View>;
  }
}
export default Home;
