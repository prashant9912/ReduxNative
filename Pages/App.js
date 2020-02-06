import React, {Component} from 'react';
import {Text, StyleSheet, View, SafeAreaView} from 'react-native';
import { Container, Header, Content, Button } from 'native-base';
import {connect } from 'react-redux'
import { StackNavigator } from "react-navigation";


import {add,additem,addAsyncHandler,addsaga} from '../Redux/actions'



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
        <Button block light onPress={()=>{this.props.plus(1)}}><Text>Counter+1</Text></Button>

        <Button block light style={{marginTop:10}} onPress={()=>{this.props.additem(1)}}><Text>Add Item to list</Text></Button>
      

        <Button block success style={{marginTop:10}} onPress={()=>navigate('Profile')}><Text>Next Page</Text></Button>


        <View style={{color:'white',alignItems:'center',marginTop:10}}>
                {this.props.items.map((v,k)=>(
                  <Text key={k} style={{color:'white',fontSize:18}}>{v}  helloi</Text>
                ))}
        </View>


        <View style={{padding:10,alignContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:30,color:'white'}}>Thunk Redux Async Counter</Text>
          <Text style={{fontSize:30,color:'white'}}>{this.props.countAsync}</Text>
        <Button block light onPress={()=>{this.props.plusAsync(1)}}><Text>Counter+1</Text></Button>
          </View>


                  <Text style={{textAlign:'center'}}> Change B/w Thunk and Saga in code</Text>
          <View style={{padding:10,alignContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:30,color:'white'}}>Redux Saga Async Counter</Text>
          <Text style={{fontSize:30,color:'white'}}>{this.props.countSaga}</Text>
        <Button block light onPress={()=>{this.props.plusAsync(1)}}><Text>Counter+1</Text></Button>
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
    items:state.store.items,
    countAsync:state.store.countAsync,
    countSaga:state.store.countSaga
  }
}


const mapDispatchtoProps = (dispatch)=>{
  console.log(dispatch)
  return{
    plus:(val)=>dispatch(add(val)),
    additem:(val)=>dispatch(additem('name')),
    // plusAsync:(val)=>dispatch(addAsyncHandler(val)) //Thunk
    plusAsync:(val)=>dispatch(addsaga(val)) //saga

  }
}


export default connect(mapStatetoProps,mapDispatchtoProps )(App)