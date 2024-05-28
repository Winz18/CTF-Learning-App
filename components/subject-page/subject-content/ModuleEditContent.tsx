import React, {PropsWithChildren} from 'react';
import {StyleSheet, Text, View,SafeAreaView, TextInput, TouchableOpacity, Alert,useEffect} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import ModalDropdown from 'react-native-modal-dropdown';
import axios from 'axios';
import {useAuth} from '../../../AuthProvider';


type SectionProps = PropsWithChildren<{
  navigation: NavigationProp<any, any>;
}>;

function ModuleEditContent({navigation}: SectionProps): React.JSX.Element {
    let Types = ['Text', 'Image', 'Video',];
    const [type, setType] = React.useState<string | null>(null);
    const handleSelect = (index, value) => {
            setType(value);
    };
    return (
        <SafeAreaView>
        <View style={styles.container}>

              <ModalDropdown
                options={Types}
                style={styles.dropdown}
                textStyle={styles.dropdownText}
                dropdownStyle={styles.dropdownStyle}
                onSelect={(index, value) => handleSelect(index, value)}
                />
              {type && <Text style={styles.selectedText}>Selected: {type}</Text>}
              <TextInput
                              style={styles.input}
                              placeholder="Name Course"
                            />
              <TouchableOpacity
                style={styles.AddSection}
              >
                <Text style={styles.text}>Add Section </Text>
              </TouchableOpacity>
        </View>
            </SafeAreaView>

    );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',

    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        padding: 15,
    },
    input: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            width: '80%',
          },
    AddSection:{
        backgroundColor: '#87cefa',
        padding: 10,
        margin: 10,
        alignItems: 'center',
        borderRadius: 10,
        width: '50%',
    },
    dropdown: {
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 4,
            padding: 8,
            width: '80%',
        },
        dropdownText: {
           fontSize: 16,
        },
        dropdownStyle: {
            width: 200,
        },
        selectedText: {
            marginTop: 16,
            fontSize: 16,
        },

});

export default ModuleEditContent;