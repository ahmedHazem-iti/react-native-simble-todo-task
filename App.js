import React from 'react';
import { StyleSheet, Text, View,FlatList, YellowBox ,Alert, Image,TouchableOpacity,TextInput} from 'react-native';
import { Ionicons ,FontAwesome} from '@expo/vector-icons';

export default function App() {
  const [tasks,settasks] =React.useState([]) ;
  const [value,setVal] =React.useState('');
  const [tasks2,settask2]=React.useState([]);
  var x=false;
  return (
    <View style={styles.container}>
    <View style={{display:'flex',flexDirection:"row",justifyContent:"space-evenly"}}>    
<TextInput
onChangeText={(e)=>{setVal(e)}}
value={value}
editable
style={{borderColor:'red',borderWidth:2,marginTop:100,width:200}}
/>
<Ionicons 
style={{marginTop:100}} name="md-checkmark-circle" size={32} color="green" 
onPress={()=>{
  console.log(value)
  settasks([...tasks,{task:value,act:true}])
  setVal('')
}}
/>
</View>
<View style={{display:'flex',flexDirection:"row",justifyContent:"space-evenly",marginTop:30}}>
<FontAwesome onPress={()=>{settask2(tasks.filter(a=>{return a.act==false}))}} name="address-book" size={44} color='green'/>

<FontAwesome onPress={()=>{settask2(tasks)}} name="asterisk" size={44} color='green'/>

<FontAwesome onPress={()=>{settask2(tasks.filter(a=>{return a.act==true}))}} name="adn" size={44} color='green'/>

</View>
<Text>
{value}
</Text>
<FlatList   
ListHeaderComponent={(<Text style={{backgroundColor:'green'}}>DONE</Text>)}

style={{marginTop:100}}
data={tasks2}
renderItem={({item,index}) => (
  <Text onPress={()=>{
    
    console.log(item)
    x=tasks.find((x)=>{return x.task == item.task })
    if (x){
      x.act =false
      settask2(tasks)
    }

    console.log(x,'kkkk',tasks)

  }}>{item.task}==={String(item.act)}</Text>
)}
keyExtractor={(ite,ndx) => String( ite.task)}
ListEmptyComponent={(<Text style={{backgroundColor:'red'}}>NO DATA FOUND</Text>)}
ListFooterComponent={(<Text style={{backgroundColor:'yellow'}}>DONE</Text>)}
/>
<TouchableOpacity
disabled={x}
onPress={()=>{Alert.alert('hi')}} onLongPress={()=>{ x=true;Alert.alert('bye')}}>
<View style={{width:100,height:100,backgroundColor:'blue'}}>
</View>
</TouchableOpacity>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  ee:{
      fontSize:   90 ,
      backgroundColor: 'green',
      color:'yellow',
      
  },
  mainbox :{flexDirection:'row',justifyContent: "space-evenly"},


});



// <Text    style={styles.ee} >Hazem  you ?</Text>
// <Text ellipsizeMode="middle" numberOfLines='2' onPress={()=>{
    
//   Alert.alert('hi')}}> hello hazem  </Text>
// <View style={styles.mainbox}>
// <View style={{width:100,height:100,backgroundColor:'red'}}></View>
// <View style={{width:100,height:100,backgroundColor:'orange'}}></View>
// <Image source={require('./assets/xx.png')} style={{width:100,height:100}} >

// </Image>
// </View>
