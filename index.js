/**
 * @format
 */
import {AppRegistry} from 'react-native';
import { StyleSheet } from 'react-native'; 
import App from './App';
import {name as appName} from './app.json';
import { ImageBackground } from 'react-native';
import { Provider } from 'react-redux';
import {persistor, store} from './app/helper/Store'
import  {PersistGate} from "redux-persist/integration/react";

 const addRedux = () =>(
   
    <Provider store={store}>
         <PersistGate loading={ <ImageBackground
        source={require('./app/images/loading.gif')}
        style={styles.backgroundImage}
      ></ImageBackground>} persistor ={persistor}>
         <App/>
         </PersistGate>
    </Provider>
       
 )
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' for different stretching behavior
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
});

AppRegistry.registerComponent(appName, () => addRedux);


