import React, { Component } from 'react';
import { Button, StyleSheet, View, Text, TextInput } from 'react-native';

export default class Bevitel extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          nev:"",
          komment:"",
          name:"",
          side:"",
          birth_year:"",
          birth_planet:"",
          death_year:"",
          death_planet:"",
          gender:"",
          height:"",
          mass:"",
          eye_color:"",
          hair_color:"",
          skin_color:"",
          homeworld:"",
          image:"",
          WikipediaLink:"",
          WookiepediaLink:"",
          KaminopediaLink:""
        };
      }
    

felvitel=async ()=>{
    //alert(this.props.akttema)
    try {
      let adatok={
        bevitel1:this.state.nev,
        bevitel2:this.state.komment,
        bevitel3:"2022-11-17",
        bevitel4:this.props.akttema
      }
      const response = await fetch('http://192.168.6.22:3000/felvitel',
      {
        method: "POST",
        body: JSON.stringify(adatok),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      }
      );
      const szoveg = await response.text();
      alert(szoveg)
     
    } catch (error) {
      console.log(error);
    } finally {
      
    }

}

  render() {
    return (
      <View style={{backgroundColor:"lightblue"}}>
        <View style={styles.buttonContainer}>
        {/*<Text>Név:</Text> 
        <TextInput
        style={{height: 40}}
        placeholder="Írd be a neved!"
        onChangeText={(beirtszoveg)=>this.setState({nev:beirtszoveg})}
        value={this.state.nev}
      />
        <Text>Komment:</Text>
        <TextInput
        style={{height: 40}}
        placeholder="Írj kommentet az adott témában!"
        onChangeText={(beirtszoveg)=>this.setState({komment:beirtszoveg})}
        value={this.state.komment}
      />*/}
      <Text>Szereplő neve:</Text> 
        <TextInput
        style={{height: 40}}
        placeholder="Ide írd be a Szereplő nevét!"
        onChangeText={(beirtszoveg)=>this.setState({name:beirtszoveg})}
        value={this.state.name}
      />
      <Text>Oldal:</Text> 
        <TextInput
        style={{height: 40}}
        placeholder="sötét oldal / világos oldal"
        onChangeText={(beirtszoveg)=>this.setState({side:beirtszoveg})}
        value={this.state.side}
      />
      <Text>Születési év:</Text> 
        <TextInput
        style={{height: 40}}
        placeholder="pl. 25ABY - ha nincs adat, akkor ismeretlen"
        onChangeText={(beirtszoveg)=>this.setState({birth_year:beirtszoveg})}
        value={this.state.birth_year}
      />
      <Text>Születési hely:</Text> 
        <TextInput
        style={{height: 40}}
        placeholder="Bolygó neve, pl. Coruscant"
        onChangeText={(beirtszoveg)=>this.setState({birth_planet:beirtszoveg})}
        value={this.state.birth_planet}
      />
      <Text>Elhalálozási év:</Text> 
        <TextInput
        style={{height: 40}}
        placeholder="pl. 25ABY - ha nincs adat, akkor nem halt meg"
        onChangeText={(beirtszoveg)=>this.setState({death_year:beirtszoveg})}
        value={this.state.death_year}
      />
      <Text>Elhalálozási hely:</Text> 
        <TextInput
        style={{height: 40}}
        placeholder="Bolygó neve - ha nem halt meg, akkor üres"
        onChangeText={(beirtszoveg)=>this.setState({death_planet:beirtszoveg})}
        value={this.state.death_planet}
      />
      <Text>Nem:</Text> 
        <TextInput
        style={{height: 40}}
        placeholder="nő / férfi"
        onChangeText={(beirtszoveg)=>this.setState({gender:beirtszoveg})}
        value={this.state.gender}
      />
      <Text>Magasság:</Text> 
        <TextInput
        style={{height: 40}}
        placeholder="magasság számban megadva, pl. 120"
        onChangeText={(beirtszoveg)=>this.setState({height:beirtszoveg})}
        value={this.state.height}
      />
      <Text>Súly:</Text> 
        <TextInput
        style={{height: 40}}
        placeholder="tömeg számban megadva, pl. 65"
        onChangeText={(beirtszoveg)=>this.setState({mass:beirtszoveg})}
        value={this.state.mass}
      />
      <Text>Szem színe:</Text> 
        <TextInput
        style={{height: 40}}
        placeholder="Szín megadva kisbetűvel, pl. piros"
        onChangeText={(beirtszoveg)=>this.setState({eye_color:beirtszoveg})}
        value={this.state.eye_color}
      />
      <Text>Haj színe:</Text> 
        <TextInput
        style={{height: 40}}
        placeholder="Szín megadva kisbetűvel, pl. piros"
        onChangeText={(beirtszoveg)=>this.setState({hair_color:beirtszoveg})}
        value={this.state.hair_color}
      />
      <Text>Bőr színe:</Text> 
        <TextInput
        style={{height: 40}}
        placeholder="Szín megadva kisbetűvel, pl. piros"
        onChangeText={(beirtszoveg)=>this.setState({skin_color:beirtszoveg})}
        value={this.state.skin_color}
      />
      <Text>Lakhely:</Text> 
        <TextInput
        style={{height: 40}}
        placeholder="bolygó neve"
        onChangeText={(beirtszoveg)=>this.setState({homeworld:beirtszoveg})}
        value={this.state.homeworld}
      />
      <Text>Kép:</Text> 
        <TextInput
        style={{height: 40}}
        placeholder="Fájl neve"
        onChangeText={(beirtszoveg)=>this.setState({image:beirtszoveg})}
        value={this.state.image}
      />
      <Text>Wikipédia link:</Text> 
        <TextInput
        style={{height: 40}}
        placeholder="teljes URL"
        onChangeText={(beirtszoveg)=>this.setState({WikipediaLink:beirtszoveg})}
        value={this.state.WikipediaLink}
      />
      <Text>Wookiepedia link:</Text> 
        <TextInput
        style={{height: 40}}
        placeholder="teljes URL"
        onChangeText={(beirtszoveg)=>this.setState({WookiepediaLink:beirtszoveg})}
        value={this.state.WookiepediaLink}
      />
      <Text>Kaminopedia link:</Text> 
        <TextInput
        style={{height: 40}}
        placeholder="teljes URL"
        onChangeText={(beirtszoveg)=>this.setState({KaminopediaLink:beirtszoveg})}
        value={this.state.KaminopediaLink}
      />
          <Button
            onPress={()=>this.felvitel()}
            title="Felvitel"
          />
        </View>
       
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});