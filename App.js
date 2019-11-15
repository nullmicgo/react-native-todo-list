import React, {useState} from 'react';
import { StyleSheet, Text, View , Button, TextInput, ScrollView, FlatList} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = gaolTitle =>{
      setCourseGoals(currentGoals => [
        ...currentGoals, 
        {id: Math.random().toString(), value: gaolTitle}
      ]);
    };
    
  const removeGoalHandler = goalId =>{
    setCourseGoals(currentGoals=>{
      return currentGoals.filter((goal)=>goal.id !== goalId);
    });
  }


  return (
    <View style={styles.screen}>
        <GoalInput  onAddGoal={addGoalHandler} />
        <FlatList 
          keyExtractor={(item, index)=> item.id}
          data={courseGoals} 
          renderItem={itemData=> ( <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value} /> )}
        />
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
