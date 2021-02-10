import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';

import DiceOne from './assets/dices/dice1.png';
import DiceTwo from './assets/dices/dice2.png';
import DiceThree from './assets/dices/dice3.png';
import DiceFour from './assets/dices/dice4.png';
import DiceFive from './assets/dices/dice5.png';
import DiceSix from './assets/dices/dice6.png';

const App = () => {
  const [uri, setUri] = React.useState(DiceOne);

  const playGame = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setUri(DiceOne);
        break;
      case 2:
        setUri(DiceTwo);
        break;
      case 3:
        setUri(DiceThree);
        break;
      case 4:
        setUri(DiceFour);
        break;
      case 5:
        setUri(DiceFive);
        break;
      case 6:
        setUri(DiceSix);
        break;
      default:
        setUri(DiceTwo);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.header}>Dice Roller</Text>
        <Image style={styles.image} source={uri} />
        <TouchableOpacity onPress={playGame}>
          <Text style={styles.playButton}>Play Game</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222831',
  },
  image: {
    width: 100,
    height: 100,
  },
  playButton: {
    fontSize: 20,
    color: '#F2A365',
    marginTop: 20,
    borderRadius: 5,
    borderWidth: 4,
    borderColor: '#30475e',
    paddingHorizontal: 40,
    paddingVertical: 10,
    fontWeight: 'bold',
  },
  header: {
    fontSize: 30,
    color: 'white',
    borderWidth: 2,
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderColor: 'white',
    borderRadius: 30,
    marginBottom: 30,
  },
});

export default App;
