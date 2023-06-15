import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { appStyles } from '../styles/appStyles';

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const goToLeadersScreen = () => {
    navigation.navigate('Leaderboard');
  };

  const goToGameScreen = () => {
    navigation.navigate('Game');
  };

  const goToAboutScreen = () => {
    navigation.navigate('About');
  };

  return (
    <View style={appStyles.containerCenter}>
      <Text style={appStyles.logo}>CITIES</Text>
      <Text style={appStyles.regular}>Boost your memory!</Text>

      <TouchableOpacity style={appStyles.button} onPress={goToGameScreen}>
        <Text style={appStyles.buttonText}>New Game</Text>
      </TouchableOpacity>

      <TouchableOpacity style={appStyles.button} onPress={goToLeadersScreen}>
        <Text style={appStyles.buttonText}>Leaderboard</Text>
      </TouchableOpacity>

      <TouchableOpacity style={appStyles.button} onPress={goToAboutScreen}>
        <Text style={appStyles.buttonText}>About</Text>
      </TouchableOpacity>

    </View>
  );
};

export default HomeScreen;
