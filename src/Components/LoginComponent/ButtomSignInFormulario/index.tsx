import React from 'react';
import { 
    ConteinerButtom, 
    Text 
} from './style';
import { 
    GestureHandlerRootView, 
    TouchableOpacity 
} from 'react-native-gesture-handler';
import { StartAppScreen } from '../../../global/other/objects';

export default function ButtomSignInFormulario(props) {

  function StartApp(){
    StartAppScreen(props)
  }

  return (
    <GestureHandlerRootView>
      <TouchableOpacity activeOpacity={0.2} onPress={StartApp}> 
        <ConteinerButtom>
          <Text>Sign in</Text>
        </ConteinerButtom>
      </TouchableOpacity>
    </GestureHandlerRootView>
  );
}
