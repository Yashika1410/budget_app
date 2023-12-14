import React from 'react';
import {Text, View, ImageBackground, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import { itemsStyles } from '../screen_styles/ItemsStyle';
function Items() {
  let data = useSelector(state => state.Reducer);

  const header = ['Item Name', 'Planned Cost', 'Actual Cost'];

  const renderItem = ({item}) => (
    <View>
    {item?
    <View style={[itemsStyles.row, itemsStyles.dataRow]}>
      <View style={itemsStyles.cell}>
        <Text style={itemsStyles.text}>{item.itemName}</Text>
      </View>
      <View style={itemsStyles.cell}>
      <Text style={itemsStyles.text}>{item.plannedCost}</Text>
      </View>
      <View style={itemsStyles.cell}>
       <Text style={itemsStyles.text}>{item.originalCost}</Text>
      </View>
    </View>:null}
    </View>
  );
  return (
    <ImageBackground
      source={require('../images/bckgmoney.png')}
      style={itemsStyles.imageBackGround}>
      <View style={itemsStyles.mainView}>
        <View style={[itemsStyles.row,itemsStyles.headerRow]}>
          {header.map((item, index) => (
            <View key={index} style={itemsStyles.cell}>
              <Text style={[itemsStyles.text, itemsStyles.headerText]}>{item}</Text>
            </View>
          ))}
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </ImageBackground>
  );
}

export default Items;
