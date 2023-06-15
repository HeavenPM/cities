import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';
import { API_CITIES } from '../api/API_CITIES';
import CustomModal from '../components/CustomModal'; 
import Loader from '../components/Loader';
import RecentlyCities from '../components/RecentlyCities';
import WinnerForm from '../components/WinnerForm';
import { appStyles } from '../styles/appStyles';

interface GameScreenProps {
    navigation: any;
}

interface CityData {
    city: string;
    country: string;
    populationCounts: any[];
}

const GameScreen: React.FC<GameScreenProps> = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [canPlay, setCanPlay] = useState(true);
    const [isWinner, setIsWinner] = useState(false);

    const [inputText, setInputText] = useState('');
    const [score, setScore] = useState(0);
    const [allCities, setAllCities] = useState(['']);
    const [usedCities, setUsedCities] = useState<Array<{ city: string; isUserCity: boolean }>>([]);
    const [currentCity, setCurrentCity] = useState('');


    const [modalVisible, setModalVisible] = useState(false);
    const [modalTitle, setModalTitle] = useState('Modal Title');
    const [modalText, setModalText] = useState('Modal Message');

    const handleChangeText = (inputText: string) => {
        setInputText(inputText);
    };

    const handleButtonPress = () => {
        if (inputText.trim() === '') {
          handleOpenModal('Input error', 'The text field must not be empty!');
        } else if (allCities.includes(inputText.toLocaleUpperCase())) {
          if (currentCity.charAt(currentCity.length - 1).toUpperCase() === inputText.charAt(0).toUpperCase()) {
            setScore(prev => prev + 5);
            setUsedCities(prevUsedCities => [...prevUsedCities, { city: inputText.toLocaleUpperCase(), isUserCity: true }]);
            setAllCities(prevAllCities => prevAllCities.filter(item => item !== inputText));
      
            const letter = inputText.charAt(inputText.length - 1).toUpperCase();
            const foundCity = allCities.find(city => city.startsWith(letter) && city !== inputText);
      
            if (foundCity) {
              setCurrentCity(foundCity);
              setUsedCities(prevUsedCities => [...prevUsedCities, { city: foundCity, isUserCity: false }]);
              setAllCities(prevAllCities => prevAllCities.filter(item => item !== foundCity));
            } else {
              setCanPlay(false);
              setIsWinner(true);
              handleOpenModal('You win!', `Wow! You got me stumped. I don't know any more cities on the ${inputText.charAt(inputText.length - 1).toUpperCase()}`);
            }
      
          } else {
            handleOpenModal('Wrong city', `You need to specify a city that begins with ${currentCity.charAt(currentCity.length - 1).toUpperCase()}`);
          }
      
        } else if (usedCities.some(item => item.city === inputText)) {
          handleOpenModal('The city was already', 'There is such a city, but it has already been told. Try again!');
        } else {
          handleOpenModal('There is no such city', "I don't know such a city. Are you sure you spelled it right?");
        }
        setInputText('');
      };
      

    const goToHomeScreen = () => {
        navigation.navigate('Menu');
    };

    const handleOpenModal = (title: string, text: string) => {
        setModalTitle(title)
        setModalText(text)
        setModalVisible(true);
    };
    
    const handleCloseModal = () => {
        setModalVisible(false);
    };

    const handleFinishGame = () => {
        setIsWinner(true)
        setCanPlay(false)
    }

    function removeParentheses(city: string): string {
        const regex = /\s*\([^)]*\)$/; 
        const modifiedCity = city.replace(regex, '');  
      
        return modifiedCity.trim().toUpperCase();
    }
      
    const fetchCityNames = async () => {
      setIsLoading(true);
      setCanPlay(false);
      
      try {
        const response = await axios.get(API_CITIES);
        const data = response.data;
        
        const cities = data.data.map((item: CityData) => removeParentheses(item.city));
        setAllCities(cities);
        
        const newCity = cities[Math.floor(Math.random() * cities.length)];
        setCurrentCity(newCity);
        setUsedCities([{ city: newCity, isUserCity: false }]);
        
        setIsLoading(false);
        setCanPlay(true);
      } catch (error) {
        handleOpenModal('Network error', 'Check your internet connection and try again!');
      }
    };

    useEffect(() => {
        fetchCityNames();
    }, []);

    return (
        <View style={appStyles.container}>
            
            <View style={appStyles.backButton}>
                <TouchableOpacity onPress={goToHomeScreen}>
                    <Text style={appStyles.backButtonText}>
                        {'<  Exit without saving'}
                    </Text>
                </TouchableOpacity>
            </View>

            {isWinner && <WinnerForm score={score}/>}

            <CustomModal
                visible={modalVisible}
                onClose={handleCloseModal}
                title={modalTitle}
                text={modalText}
            />

            <View style={appStyles.container}>
                { canPlay && <>
                <View style={appStyles.containerColumn}>
                    <Text style={appStyles.regular}>Score: {score}</Text>
                    <TouchableOpacity style={appStyles.button} onPress={handleFinishGame}>
                        <Text style={appStyles.buttonText}>Finish</Text>
                    </TouchableOpacity>
                </View>

                <Text style={appStyles.title}>{currentCity}</Text>
                <Text style={appStyles.regular}>A city with a letter <Text style={appStyles.title}>{currentCity.charAt(currentCity.length - 1).toUpperCase()}</Text></Text>

                <TextInput
                    style={appStyles.input}
                    value={inputText}
                    placeholderTextColor='#2277a8'
                    onChangeText={handleChangeText}
                    placeholder="Enter the name of the city"
                />
                <TouchableOpacity style={appStyles.button} onPress={handleButtonPress}>
                    <Text style={appStyles.buttonText}>Submit</Text>
                </TouchableOpacity>

                <RecentlyCities usedCities={usedCities}/>
                </>}

                {isLoading && <Loader/>}
            </View>
            
        </View>
    );
};

export default GameScreen;
