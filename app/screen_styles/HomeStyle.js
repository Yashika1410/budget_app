import { StyleSheet } from "react-native";
export const homeStyles = StyleSheet.create({
  backgroundImageStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    color: 'blue',
    fontWeight: '700',
    marginTop: 0,
  },
  inputView: {
    marginVertical: 10,
  },
  label: {
    fontSize: 20,
    color: 'black',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    width: 200,
    height: 40,
    backgroundColor: '#fff',
    // borderRadius: 20,
    paddingLeft: 10,
    fontSize: 20,
  },
  button: {
    marginTop: 20,
    width: 140,
    height: 40,
    backgroundColor: '#87CEEB',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  footer: {
    position: 'absolute',
    bottom: 10,
    fontSize: 14,
    color: 'black',
  },
});