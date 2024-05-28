import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

type SectionProps = PropsWithChildren<{
  navigation: NavigationProp<any, any>;
}>;

function ModuleEditHeader({navigation}: SectionProps): React.JSX.Element {
    const rtnhome = () => {
        navigation.navigate('Home');
    };
  return (
    <View style={styles.container}>
        <View style={styles.navigationButton}>
                <TouchableOpacity onPress={rtnhome}>
                  <Image style={styles.img} source={require('./img/left-arrow.png')} />
                </TouchableOpacity>
        </View>
        <Text style={styles.TitleTxt}>__Name_Of___mudule</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 150,
    backgroundColor: '#6495ed',
    justifyContent: 'center',
  },

  img: {
    width: 20,
    height: 20,
  },

  navigationButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },

  TitleTxt: {
    alignSelf: 'center',
    fontSize: 35,
    fontWeight: '700',
    color: 'black',
  },

  greetingTxt: {
    alignSelf: 'center',
    paddingTop: 180,
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
  },
});

export default ModuleEditHeader;
