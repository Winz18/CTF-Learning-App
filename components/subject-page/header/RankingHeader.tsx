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

function RankingHeader({NewScr: Switching}: SectionProps): React.JSX.Element {
  return (
    <ImageBackground
      style={styles.container}
      resizeMode="cover"
      source={require('./img/ranking.jpg')}>
      {/* Nút back */}
      <View style={styles.navigationButton}>
        <TouchableOpacity onPress={Switching}>
          <Image style={styles.img} source={require('./img/left-arrow.png')} />
        </TouchableOpacity>
      </View>
      <Text style={styles.TitleTxt}>Bảng Xếp Hạng</Text>
      <Text style={styles.greetingTxt}>
        “No technology that’s connected to the internet is unhackable.” —
        Abhijit Naskar
      </Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 350,
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
    color: 'white',
  },

  greetingTxt: {
    alignSelf: 'center',
    paddingTop: 180,
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
  },
});

export default RankingHeader;
