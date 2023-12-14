import { StyleSheet } from "react-native";
export const itemsStyles = StyleSheet.create({
  mainView: {
    marginTop: 50,
    marginBottom: 50,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    width: 400,
    marginLeft: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerRow: {
    borderBottomWidth: 1,
    borderColor: '#000000',
    paddingBottom: 10,
  },
  dataRow: {
    borderTopWidth: 1,
    borderColor: '#000000',
    paddingTop: 10,
  },
  hide:{
    backfaceVisibility: "hidden"
  },
  cell: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Arial',
    fontSize: 16,
    color: 'black',
  },
  headerText: {
    fontWeight: 'bold',
  },
  imageBackGround: {
    flex: 1,
    height: null,
    width: null,
  },
});