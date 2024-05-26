import React from 'react';
import { 
  Conteiner,
  ConteinerIconAndText,
  ImageIcon,
  TextTitule
} from './style';
import TopComponentLogin from '../../../Components/TopComponentLogin';
import FormularioLogin from '../../../Components/LoginComponent/FormularioLogin';
import ButtomSignFormulario from '../../../Components/LoginComponent/ButtomSignFormulario';
import { ListProductsVerticalScollView } from '../../../Components/ListProductVertical/ListProductVertical';
import CheckBoxForLogin from '../../../Components/LoginComponent/CheckBoxForLogin';

export default function CreateLoginPage(props) {
  return (
    <Conteiner>
      <TopComponentLogin {...props}/>
        <ListProductsVerticalScollView>
          <ConteinerIconAndText>
              <ImageIcon source={require('../../../global/images/LogoApp.png')}/>
              <TextTitule>Create new account</TextTitule>
          </ConteinerIconAndText>
          <FormularioLogin
            IconC='phone'
            InputTextC='Number'
            {...props}
          />
          <FormularioLogin
            IconC='email'
            InputTextC='Email'
            {...props}
          />
          <FormularioLogin
            IconC='account'
            InputTextC='Name'
            {...props}
          />
          <CheckBoxForLogin/>
          <ButtomSignFormulario {...props}/>
        </ListProductsVerticalScollView>
    </Conteiner>
  );
}
