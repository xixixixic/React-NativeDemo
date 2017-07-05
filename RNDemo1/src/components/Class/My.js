import React, { Component } from 'react';
import {View,Text,Image,StyleSheet,ListView} from 'react-native';
import {TabNavigator} from 'react-navigation';
import TabBarItem from './TabBarItem'

export default class My extends React.Component{

    constructor(props) {
        super(props);

        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2,sectionHeaderHasChanged:(s1,s2)=>s1 !== s2});
        this.state = {
            dataSource: ds.cloneWithRowsAndSections([['钱包'],['收藏','相册','卡包','表情'],['设置']])
        };
    }

    static navigationOptions = ({navigation})=>({
        // tabBarLabel: '我的',
        title: '我',
        headerStyle:{
            backgroundColor: 'black'
        },
        headerTitleStyle:{
            color: 'white' 
        },
        tabBarIcon:({tintColor,focused}) => (
            <TabBarItem  
              tintColor={tintColor}  
              focused={focused}  
              normalImage={require('./source/我的@2x.png')}  
              selectedImage={require('./source/我的-选中@2x.png')}  
            />  
        ),
    });

    render(){
        return (
            <View style={styles.container}>
                <ListView 
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
                renderSeparator={this._renderSeparator}>
                </ListView>
            </View>
        )
    }

    _renderRow(rowData, sectionID, rowID, highlightRow){
        if (sectionID == 0) {
            return(
                <View style={styles.section_0_style}>
                    <Text style={{fontSize:15}}>{rowData}</Text>
                </View>
            )
        }else if(sectionID == 1){
            return(
            <View style={styles.viewStyle}>
                <Text style={{fontSize:15}}>{rowData}</Text>
            </View>
            )
        }else{
            return(
                <View style={styles.section_0_style}>
                     <Text style={{fontSize:15}}>{rowData}</Text>
                </View>
            )
        }
    }

    _renderSeparator(sectionID, rowID, adjacentRowHighlighted)  {
        if(sectionID == 1){
        return (
            <View style={styles.separatorStyle}></View>
        )
        }
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#f5f5f5',
        flex:1
    },
    viewStyle:{
        backgroundColor: 'white',
        flex:1,
        justifyContent:'center',
        height:50,
        paddingLeft:20
    },
    section_0_style:{
        backgroundColor: 'white',
        flex:1,
        justifyContent:'center',
        height:50,
        paddingLeft:20,
        marginTop: 20,
        marginBottom:20
    },
    separatorStyle:{
        height:1,
        backgroundColor:'#d3d3d3',
        marginLeft:8
    }
});