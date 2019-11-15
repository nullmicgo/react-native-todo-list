import React, {useState} from 'react';
import { StyleSheet, Text, View , Button, TextInput} from 'react-native';

export default function App() {

  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
      setEnteredGoal(enteredText);
  };

  const addGoalHandler = () =>{
    console.log(enteredGoal);
  };

  return (
    <View style={styles.screen}>
        <View style={{ }}>
          <TextInput placeholder="Course Goal"   
          style={styles.inputContainer} 
          onChangeText={goalInputHandler}
          value={enteredGoal}
           />
          <Button 
          title="ADD" 
          styles={styles.input}
          onPress={addGoalHandler}
           />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding: 50
  },
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
