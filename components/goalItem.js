
import {StyleSheet, View, Text, Pressable} from 'react-native'

function GoalItem(props){
  const deleteHandler = ()=>{
    props.deleteGoal(props.id)
  }
    return <View   style={styles.listStyle} >
      <Pressable android_ripple={{color: '#ddddddd'}} style={({pressed})=> pressed && styles.pressedItem} onPress={deleteHandler} >
      <Text style={styles.listGoal} >{props.text}</Text>
      </Pressable>
      </View>
}


export default GoalItem




const styles = StyleSheet.create({
    listStyle: {
        backgroundColor: '#5e0acc',
        marginTop: 10,
    
       
        borderRadius: 6
      },
      pressedItem: {
        opacity: 0.5
      },
      listGoal:{
        color: '#fff',
        padding: 8,
      }
})