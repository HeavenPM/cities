import React, { useState, useEffect } from 'react';
import { View, Text, Alert, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';
import { appStyles } from '../styles/appStyles';
import { API_DATABASE } from '../api/API_DATABASE';
import Loader from '../components/Loader';

interface LeadersScreenProps {
    navigation: any;
}

interface Player {
    ___class: string;
    created: number;
    objectId: string;
    ownerId: string | null;
    updated: number | null;
    userName: string | null;
    userHighscore: string;
}  
  
interface TopPlayers {
    data: Player[];
}

const LeadersScreen: React.FC<LeadersScreenProps> = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [topPlayers, setTopPlayers] = useState<Player[]>();

    useEffect(() => {
        fetchTopPlayers();
    }, []);

    const fetchTopPlayers = async () => {
        try {
          setIsLoading(true);
          const url = API_DATABASE;
          const params = {
            sortBy: 'userHighscore',
            pageSize: 10
          };
          const response = await axios.get(url, { params });
          const responseData: Player[] = response.data;
      
          setTopPlayers(responseData);
          setIsLoading(false);
        } catch (error) {
          setIsLoading(false);
          Alert.alert('Network error', 'Check your internet connection and try again!');
        }
    };
      

    const goToHomeScreen = () => {
        navigation.navigate('Menu');
    };

    return (
        <View style={appStyles.container}>
          <View style={appStyles.backButton} >
              <TouchableOpacity onPress={goToHomeScreen}>
                  <Text style={appStyles.backButtonText} >
                      {'<  Back'}
                  </Text>
              </TouchableOpacity>
            </View>

            
            <View style={appStyles.container}>
                {isLoading ? <Loader/> : <View style={appStyles.leaderboard}>
                <Text style={appStyles.title}>Leaderboard</Text>
                <FlatList
                    data={topPlayers?.reverse()}
                    keyExtractor={(item) => item.objectId}
                    renderItem={({ item }) => (
                        <View style={appStyles.leaderboardItem}>
                            <Text style={appStyles.leaderboardText}>{item.userName}</Text>
                            <Text style={appStyles.leaderboardText}>{item.userHighscore}</Text>
                        </View>
                    )}
                    />
                </View>}
            </View>
        </View>
    );
};

export default LeadersScreen;
