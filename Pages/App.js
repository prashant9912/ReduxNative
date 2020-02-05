import React, {Component} from 'react';
import {Text, StyleSheet, View, SafeAreaView} from 'react-native';
import { Container, Header, Content, Button } from 'native-base';
import {connect } from 'react-redux'
import { StackNavigator } from "react-navigation";


import {add,additem} from '../Redux/actions'


class App extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <SafeAreaView style={{padding:20, backgroundColor:'teal',flex:1}}>
        <View style={{padding:10,alignContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:30,color:'white'}}>Counter Redux</Text>
          <Text style={{fontSize:30,color:'white'}}>{this.props.counter}</Text>
        </View>
        <View style={{padding:10}}>
        <Button block light onPress={()=>{this.props.plus(1)}}><Text>Click Me!</Text></Button>

        <Button block light style={{marginTop:10}} onPress={()=>{this.props.additem(1)}}><Text>Add Item</Text></Button>
      

        <Button block success style={{marginTop:10}} onPress={()=>navigate('Profile')}><Text>Cart</Text></Button>


<View style={{color:'white',alignItems:'center',marginTop:10}}>
        {this.props.items.map((v,k)=>(
          <Text key={k} style={{color:'white',fontSize:18}}>{v}</Text>
        ))}
</View>

        </View>
        
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});


const mapStatetoProps = (state)=>{
  console.log(state)
  return {
    counter:state.store.count,
    items:state.store.items
  }
}


const mapDispatchtoProps = (dispatch)=>{
  console.log(dispatch)
  return{
    plus:(val)=>dispatch(add(val)),
    additem:(val)=>dispatch(additem('name'))
  }
}


export default connect(mapStatetoProps,mapDispatchtoProps )(App)