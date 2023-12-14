import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground,
  ToastAndroid
} from 'react-native';
import {useDispatch} from 'react-redux';
import {addItem} from '../helper/Store';
import { homeStyles } from '../screen_styles/HomeStyle';

function CreateProduct({navigation}) {
  const [itemName, setItemName] = useState('');
  const [plannedCost, setPlannedCost] = useState('');
  const [actualCost, setActualCost] = useState('');

  const dispatch = useDispatch();

  const handleClick = () => {
    if (itemName !== '' && plannedCost !== '' && actualCost !== '') {
      dispatch(addItem(itemName, plannedCost, actualCost));

      setActualCost('');
      setPlannedCost('');
      setItemName('');
      ToastAndroid.show(
       'Item details added successfully',
       ToastAndroid.SHORT
    );
    } else {
      Alert.alert('Please enter all fields');
    }
  };

  return (
    <ImageBackground
      source={require('../images/bckgmoney.png')}
      style={homeStyles.backgroundImageStyle}>
      <Text style={homeStyles.title}>Budget Entry</Text>

      <View style={homeStyles.inputView}>
        <Text style={homeStyles.label}>Item Name:</Text>
        <TextInput
          style={homeStyles.input}
          onChangeText={itemChangedName => setItemName(itemChangedName)}
          value={itemName}
        />
      </View>

      <View style={homeStyles.inputView}>
        <Text style={homeStyles.label}>Planned Cost:</Text>
        <TextInput
          style={homeStyles.input}
          onChangeText={changedPlannedCost => setPlannedCost(changedPlannedCost)}
          keyboardType="numeric"
          value={plannedCost}
        />
      </View>

      <View style={homeStyles.inputView}>
        <Text style={homeStyles.label}>Actual Cost:</Text>
        <TextInput
          style={homeStyles.input}
          onChangeText={
            changedActualCost => setActualCost(changedActualCost)}
          keyboardType="numeric"
          value={actualCost}
        />
      </View>

      <TouchableOpacity onPress={handleClick} style={homeStyles.button}>
        <Text style={homeStyles.buttonText}>Save</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Items')}
        style={homeStyles.button}>
        <Text style={homeStyles.buttonText}>All Items</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}



export default CreateProduct;
