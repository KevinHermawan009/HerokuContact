import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { width } from 'styled-system';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
export const defaultLeftOpenValue = screenWidth*0/100;
export const defaultRightOpenValue = screenWidth*-33/100;
export const globalStyle =  StyleSheet.create({
    DefaultScreenStyle: {
      backgroundColor:'white',
      width:screenWidth,
      height: screenHeight
    },
    DefaultHeaderTextStyle: {
      fontSize: 20,
      backgroundColor: 'white'
    },
    DefauContactBaseView:{
        flexDirection:'row',
        backgroundColor:'transparent',
        margin:0,
        height:screenHeight*7.5/100,
        marginTop:screenHeight*1/100,
     
    },
    BoxContactImageStyle:{
        width:screenWidth*5/100,
        backgroundColor:'white',
        marginLeft:screenWidth*5/100
    },
    DefaultContactDataView:{
        width:screenWidth,  
        flexDirection:'row',
        alignItems:'center', 
        height:screenHeight*7.5/100,
        backgroundColor:'white',
        borderBottomWidth:1,
        borderBottomColor:'#E2E2E2',
        marginTop:screenHeight*1/100
    },
    BoxEditorContactButtonStyle:{
        marginLeft:screenWidth*70/100,
        flexDirection: 'row',
        backgroundColor:'white',
        width:screenWidth,
        position:'absolute'
    },
    ContactEditorButtonStyle:{
        alignItems:'center',
        marginLeft:screenWidth*1/100,
        width:screenWidth*13.5/100,
        height:screenHeight*7.5/100,
        backgroundColor:'#B4F8C8',
       
    },
    ContactDeleteButtonStyle:{
        alignItems:'center',
        marginLeft:screenWidth*1/100,
        width:screenWidth*13.5/100,
        height:screenHeight*7.5/100,
        backgroundColor:'#FFAEBC'
    },
    TextButtonContactEditorStyle: {
        height:screenHeight*2/100,
        backgroundColor:'transparent',
        fontSize:12,
        marginTop:screenHeight*2.25/100
    },

   ContactInformationTextStyle:{
        fontSize:15,
        fontWeight:'bold',
        color:'black'
     
    },
    OtherInformarionTextStyle:{
        fontSize:10,
        color:'black'
     
    },
    BoxContactInformationStyle:{
        width:screenWidth*65/100,
        height:screenHeight*5/100,
        marginLeft:screenWidth*10/100,
        backgroundColor:'white'
        
    },
    DefaultHomeContactImageStyle:{
        width:screenWidth*10/100,
        height: screenHeight*5/100,
        borderRadius: 50,

    },
    BoxContactEditorClueStyle:{
        width:screenWidth*10/100,
        backgroundColor:'white',
        alignContent:'center',
        alignItems:'flex-end'
    },
    //#region IconStyke
    SwipeIconStyle:{
        width:screenWidth*6/100,
        height: screenHeight*2/100,
        borderRadius: 50,
    },
    EditorIconStyle:
    {
        width:screenWidth*6/100,
        height: screenHeight*3/100,
        marginTop:screenHeight*2.25/100,
        borderRadius: 50,
    }
    //#region 
  });