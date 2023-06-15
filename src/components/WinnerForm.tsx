import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { appStyles } from '../styles/appStyles';
import axios from 'axios';
import Loader from './Loader';
import { API_DATABASE } from '../api/API_DATABASE';


interface WinnerFormProps {
    score: number
}

const WinnerForm: React.FC<WinnerFormProps> = ({score}) => {
  const [winnerName, setWinnerName] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [isResultSent, setIsResultSent] = useState(false);
  const [hasResultSuccessfullySaved, setHasResultSuccessfullySaved] = useState(false);

  const handleInputChange = (text: string) => {
    setWinnerName(text);
  };

  const saveUserScore = async (userName: string, userHighscore: number) => {
    try {
      setIsLoading(true);
      setIsResultSent(true);
      const url = API_DATABASE;
      const payload = {
        userName: userName,
        userHighscore: userHighscore.toString()
      };
  
      const response = await axios.post(url, payload);
      setIsLoading(false);
      setHasResultSuccessfullySaved(true);
      
    } catch (error) {
      setIsLoading(false);
      Alert.alert('Network error', 'Check your internet connection and try again!');
    }
  };

  const handleSubmit = () => {
    saveUserScore(winnerName, score);
  };

  return (
    <View style={appStyles.container}>
      { !isResultSent && <>
        <Text style={appStyles.title}>Congratulations!</Text>
        <Text style={appStyles.regular}>You finished the game with a score: {score}</Text>

        <TextInput
          style={appStyles.input}
          value={winnerName}
          placeholderTextColor='#2277a8'
          onChangeText={handleInputChange}
          placeholder="Enter your name"
        />

        <TouchableOpacity style={appStyles.button} onPress={handleSubmit}>
          <Text style={appStyles.buttonText}>Send</Text>
        </TouchableOpacity>
        </> 
      }
      { hasResultSuccessfullySaved &&
        <Text style={appStyles.regular}>
          Your result has been successfully sent. If you set a record, you will find yourself on the leaderboard!
        </Text>
      }

      {isLoading && <Loader/>}
    </View>
  );
};

export default WinnerForm;
