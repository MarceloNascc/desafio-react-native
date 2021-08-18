import React, {useState} from 'react';

import Button from '../../components/Button';
import Input from '../../components/Input';
import {View, BackHandler} from 'react-native';

import {Text, Icon} from './styles';
import {ScreenContainer, Title} from '../../global.style';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [seePassword, setSeePassword] = useState(false);

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <ScreenContainer style={{justifyContent: 'space-evenly'}}>
      <Icon name="left" size={22} onPress={() => BackHandler.exitApp()} />

      <Title>Acesse sua conta</Title>

      <View>
        <Input label="EMAIL" value={email} setValue={setEmail} />

        <Input
          label="SENHA"
          value={password}
          setValue={setPassword}
          extraInputProps={{secureTextEntry: !seePassword}}
          extraComponent={
            <Text
              fontWeight="light"
              onPress={() => setSeePassword(current => !current)}>
              {!seePassword ? 'MOSTRAR' : 'ESCONDER'}
            </Text>
          }
        />
      </View>

      <Button action={() => console.log('sign in')} text="Entrar" />
    </ScreenContainer>
  );
};

export default SignIn;
