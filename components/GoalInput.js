import React from 'react';
import {View, Text, StyleSheet, TextInput, Button } from 'react-native';

const GoalInput = props =>{
    return   <View style={styles.inputContainer}>
    <TextInput placeholder="Course Goal"   
    style={styles.input}
    onChangeText={props.goalInputHandler}
    value={props.enteredGoal}
     />
    <Button 
    title="ADD" 
    onPress={props.addGoalHandler}
     />
  </View>
}

const styles = StyleSheet.create({
    inputContainer:{
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      alignContent:'center'
    },
    input:{
      width: '80%', 
      borderColor: 'black', 
      borderWidth: 1 , 
      padding:10
    }
  });
  
  
export default GoalInput;