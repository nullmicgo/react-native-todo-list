import React, {useState} from 'react';
import { StyleSheet, Text, View , Button, TextInput} from 'react-native';

export default function App() {

const [outputText, setOutputText] = useState('Open up App.js to start working on your app!')

  return (

    <View style={{padding: 50}}>
        <View >
          <TextInput placeholder="Course Goal"  
          style={{ borderColor: 'black', borderWidth: 1 , padding:10}} />
          <Button title="ADD" />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
