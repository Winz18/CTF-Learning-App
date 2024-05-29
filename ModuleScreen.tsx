import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import ModuleHeader from "./components/subject-page/header/ModuleHeader";
import ModuleContent from "./components/subject-page/subject-content/ModuleContent";

type SectionProps = {
  navigation: NavigationProp<any, any>;
  route: any;
};

function ModuleScreen({ route, navigation }: SectionProps): React.JSX.Element {
  const { article } = route.params;

  const backToCourse = () => {
    navigation.goBack();
  };

  const goToTest = () => {
    navigation.navigate("Quiz");
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <ModuleHeader goBack={backToCourse} goToTest={goToTest} article={article} />
          <ModuleContent article={article} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default ModuleScreen;
