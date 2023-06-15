import React, { useEffect, useRef } from 'react';
import { View, Animated } from 'react-native';
import { appStyles } from '../styles/appStyles';

const Loader = () => {
  const animation1 = useRef(new Animated.Value(0)).current;
  const animation2 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animate = () => {
      Animated.parallel([
        Animated.loop(
          Animated.sequence([
            Animated.timing(animation1, {
              toValue: 1,
              duration: 800,
              useNativeDriver: false,
            }),
            Animated.timing(animation1, {
              toValue: 0,
              duration: 800,
              useNativeDriver: false,
            }),
          ]),
        ),
        Animated.loop(
          Animated.sequence([
            Animated.timing(animation2, {
              toValue: 1,
              duration: 800,
              useNativeDriver: false,
            }),
            Animated.timing(animation2, {
              toValue: 0,
              duration: 800,
              useNativeDriver: false,
            }),
          ]),
        ),
      ]).start();
    };

    animate();
  }, [animation1, animation2]);

  const translateY1 = animation1.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -50],
  });

  const translateY2 = animation2.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -50],
  });

  return (
    <View style={appStyles.loader}>
      <Animated.View style={[appStyles.ball, { transform: [{ translateY: translateY1 }] }]} />
      <Animated.View style={[appStyles.ball, { transform: [{ translateY: translateY2 }] }]} />
    </View>
  );
};

export default Loader;
