import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View, Image, Button, Linking, TouchableOpacity } from 'react-native';
const IP = require('./Ipcim');

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  async getMovies() {
    try {
      const response = await fetch(IP.ipcim+'szereplok');
      const json = await response.json();
      //alert(JSON.stringify(json))
      this.setState({ data: json });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidMount() {
    this.getMovies();
                                                                                                                                                             console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n1985\nWindows 98\ngyzsombor6X\nStar Wars adatbázis\n2022.11.15.")
  }

  felvitel=(szam)=>{
    console.log(szam)
    alert(szam)
    var adatok={
      bevitel1:szam
    }
    //alert(adatok.bevitel1)
    fetch(IP.ipcim+'felvitel',{
      method: "POST",
      body: JSON.stringify(adatok),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(x=>x.text())
    .then(y=>alert(y))
      
      
  }

  render() {
    const { data, isLoading } = this.state;

    return (
      <View style={{ flex: 1, padding: 24, backgroundColor: 'black' }}>
        {isLoading ? <View><ActivityIndicator/>{/*<Image style={{width:300,height:500,alignSelf:"center"}} source={require('./Teszt_logo.jpg')} />*/}</View> : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View>
                <Text style={{color: 'white', fontSize: 25}}></Text>{/* Üres sor */} 
                <Text style={{color: 'cyan', fontSize: 25, textAlign: 'center'}}>{item.name}</Text>{/* Szereplő neve */}
                <Image source={{uri:'http://nodejs.dszcbaross.edu.hu:24008/'+item.image}} style={{width:300, height:300, alignSelf: "center"}} />{/* Kép */}
                <Text style={{color: 'white', fontSize: 10}}></Text>{/* Üres sor */}
                {/*                                               *** Kedvelés gomb ***                                                                */}
                <View style={{textAlign: 'right'}}><TouchableOpacity
                style={{alignItems: "center",backgroundColor: "blue",padding: 5,marginLeft:240}}
                onPress={async ()=>this.felvitel(item.id)}>
                <Text style={{color:'white',fontSize:25}}>Kedvelés</Text></TouchableOpacity>
                <Text style={{color:'cyan',fontSize:15, textAlign: 'right'}}>{item.velemenyek} kedvelés</Text></View>
                {/*                                               *** Kedvelés gomb ***                                                                */}
                <Text style={{color: 'white', fontSize: 25}}>Oldal: {item.side}</Text>
                <Text style={{color: 'white', fontSize: 25}}>Születési év: {item.birth_year}, {item.birth_planet}</Text>
                <Text style={{color: 'white', fontSize: 25}}>Elhalálozás: {item.death_year}, {item.death_planet}</Text>
                <Text style={{color: 'white', fontSize: 25}}>{item.homeworld} bolygón lakik</Text>
                <Text style={{color: 'white', fontSize: 25}}>Neme: {item.gender}</Text>
                <Text style={{color: 'white', fontSize: 25}}>Magasság: {item.height} cm</Text>
                <Text style={{color: 'white', fontSize: 25}}>Súly: {item.mass} kg</Text>
                <Text style={{color: 'white', fontSize: 25}}>Szem színe: {item.eye_color}</Text>
                <Text style={{color: 'white', fontSize: 25}}>Hajszín: {item.hair_color}</Text>
                {/*<Button onPress={()=>Linking.openURL(item.WikipediaLink)} title="Like"/>*/}
                {/*<Button onPress={()=>Linking.openURL(item.WikipediaLink)} title="Wikipédia"/>*/}
                {/*<Button onPress={()=>Linking.openURL(item.WookiepediaLink)} title="Wookiepedia"/>*/}
                {/*<Button onPress={()=>Linking.openURL(item.KaminopediaLink)} title="Kaminopedia"/>*/}
                <Text style={{color: 'white', fontSize: 10}}></Text>{/* Üres sor */}
                <Text style={{color: 'gray', fontSize: 11, textAlign: 'right'}}>Created {item.created}</Text>
                <Text style={{color: 'gray', fontSize: 11, textAlign: 'right'}}>Edited {item.edited}</Text>
              </View>
            )}
          />
        )}
      </View>
    );
  }
};

{/*<Text style={{color: 'white', fontSize: 45}}>Orbán egy geci!</Text>*/}