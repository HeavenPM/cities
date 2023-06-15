import React from 'react';
import { View, Text } from 'react-native';
import { appStyles } from '../styles/appStyles';

type RecentlyCitiesProps = {
  usedCities: { city: string; isUserCity: boolean }[];
};

const RecentlyCities: React.FC<RecentlyCitiesProps> = ({ usedCities }) => {
    const lastFiveCities = usedCities.slice(-5).reverse();
  
    return (
      <View style={appStyles.citiesList}>
        {lastFiveCities.map((item, index) => (
          <View style={appStyles.citiesListElement} key={index}>
            <Text
              style={[appStyles.citiesListText, { color: item.isUserCity ? '#F5B969' : 'white' }]}
            >
              {item.city}
            </Text>
          </View>
        ))}
      </View>
    );
};

export default RecentlyCities;
