
import {  StyleSheet, View, FlatList, Button, } from 'react-native';
import {useState} from 'react'
import GoalItem from './components/goalItem'
import GoalInput from './components/goalInput';
import { StatusBar } from 'expo-status-bar';



export default function App() {

  const [goalList, setGoalList] = useState([])

  const [modalIsVisible, setModalIsVisible]= useState(false)



  function startAddGoalHandler(){
    setModalIsVisible(true)
  }
  function endAddGoalHandler(){
    setModalIsVisible(false)
  }


  function addGoalHandler(goal){
    const updatedGoals = [...goalList, {text: goal, key: Math.random().toString()}]
    setGoalList(updatedGoals)
   setModalIsVisible(false)
    console.log('pressed')
  }

  function deleteGoalHandler(key){
    setGoalList((prevState)=>prevState.filter(goal=> goal.key !==key))
  }

  return (
    <>
    <StatusBar style='light'  />
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color="#5a0ccc" onPress={startAddGoalHandler} />
   <GoalInput hideModal={endAddGoalHandler} visible={modalIsVisible} addGoalHandler={addGoalHandler}   />
      <View style={styles.goals}>
      <FlatList data={goalList}  alwaysBounceVertical={false} renderItem={itemData=>{ 
           return <GoalItem deleteGoal={deleteGoalHandler} id={itemData.item.key} text={itemData.item.text} />
      }}  />
           
         
        
       
     
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1
  },


  goals:{
    flex: 5
  },
 
});
