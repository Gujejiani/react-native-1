

import { useState } from 'react'
import { Button, StyleSheet, TextInput, View, Modal, Image } from 'react-native'
function GoalInput(props){
    const [goal, setGoal] = useState('')



    function goalInputHandler (enteredText){
        console.log(enteredText)
        setGoal(enteredText)
       }

       function addGoalHandler(){
        props.addGoalHandler(goal)
        setGoal('')
       }


return  <Modal visible={props.visible}  animationType='slide' ><View style={styles.inputContainer}><Image style={styles.image} source={require('../assets/icon.png')} /><TextInput style={styles.textInput} value={goal} onChangeText={goalInputHandler} placeholder='your course goal!' /><View style={styles.buttonContainer} ><View style={styles.button}><Button onPress={addGoalHandler} title='Add Goal' color={'#5e0acc'}  /></View><View style={styles.button} ><Button onPress={props.hideModal} color={'#f31282'} title='Cancel'  /></View></View></View></Modal> 
}


export default GoalInput



const styles = StyleSheet.create({  
       inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    
        padding: 16,
        backgroundColor: '#311b6b'
      },    
      textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        width: '100%',
        padding: 8,
        color: '#120438',
        borderRadius: 6,
        padding: 16
      
      
        
      },
    
      buttonContainer:{
        flexDirection: 'row',
        marginTop: 16
      },
      button: {
        width: '30%',
        marginHorizontal: 8
      },
      image:{
        width: 100,
        height: 100,
        margin: 20
      }
})