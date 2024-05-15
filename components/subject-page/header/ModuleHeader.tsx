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

type SectionProps = PropsWithChildren<{
  NewScr: () => void;
}>;

function ModuleHeader({NewScr: Switching}: SectionProps): React.JSX.Element {
  return (
    <ImageBackground
      style={styles.container}
      resizeMode="cover"
      source={require('./img/OIP2.jpg')}>
      {/* Nút back */}
      <View style={styles.navigationButton}>
        <TouchableOpacity onPress={Switching}>
          <Image style={styles.img} source={require('./img/left-arrow.png')} />
        </TouchableOpacity>
      </View>
      {/* Tên module */}
      <Text style={styles.nameOfModuleTxt}>
        Server-side Vulnerabilities Overview
      </Text>
      <View style={styles.navigationButton}>
        <TouchableOpacity>
          <Image
            style={styles.btnTestAndDone}
            source={require('./img/test.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.btnTestAndDone}
            source={require('./img/test.png')}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
  },

  img: {
    width: 20,
    height: 20,
  },

  navigationButton: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: 15,
  },

  tag: {
    width: 100,
    backgroundColor: '#f5cc77',
    marginLeft: 10,
    alignItems: 'center',
    paddingVertical: 5,
    marginTop: 10,
  },

  nameOfModuleTxt: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 25,
    fontWeight: '900',
    color: 'lightgray',
  },

  btnTestAndDone: {
    width: 40,
    height: 40,
    marginLeft: 30,
  },
});

export default ModuleHeader;
