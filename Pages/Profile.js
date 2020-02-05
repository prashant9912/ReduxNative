import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'

class Profile extends Component {
    render() {
        return (
            <View style={{padding:10}}>
                <Text style={{fontSize:20}}>Redux Counter <Text style={{color:'red'}}>{this.props.counter}</Text></Text>
                <Text style={{fontSize:20,marginTop:20,textDecorationLine:1}}>ITEMS in Store  </Text>

                <View style={{padding:10,marginTop:0}}>{this.props.items.map((v,k)=>(
                                    <Text key={k} style={{color:'black',fontSize:18}}>{v}</Text>
                                         ))
                                    }
</View>

            </View>
        )
    }
}
const styles = StyleSheet.create({})


const mapStatetoProp = (state)=>{
return{
    counter: state.store.count,
    items:state.store.items
}
}

export default connect(mapStatetoProp)(Profile)
