import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { appStyles } from '../styles/appStyles';

interface LeadersScreenProps {
    navigation: any;
}

const AboutScreen: React.FC<LeadersScreenProps> = ({ navigation }) => {
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
                <Text style={appStyles.title}>Rules</Text>
                <Text style={[appStyles.regular, {textAlign: 'left'}]}>{`Two players play.

The players take turns naming a city beginning with the last letter of the previous named city.

The city must be a real city in English.

The same town cannot be used twice in the same game.

Cities must be named in the singular.

If a player cannot think of a city or names a city that has already been named, he is considered to lose the game.

It is forbidden to use names consisting only of common words such as "town", "village", "settlement", etc.`}</Text>
            </View>
        </View>
    );
};

export default AboutScreen;
