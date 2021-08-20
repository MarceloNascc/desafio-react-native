import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Button from '../../components/buttons/Button';
import Input from '../../components/Input';
import {View, BackHandler} from 'react-native';

import {Text, Icon} from './styles';
import {ScreenContainer, Title} from '../../global.style';

import {signIn} from '../../store/actions/auth';

const SignIn = () => {
  const dispatch = useDispatch();
  const {loading} = useSelector(state => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [seePassword, setSeePassword] = useState(false);
  const [errors, setErrors] = useState({});

  function isValid() {
    const hasErrors = {};

    if (!email) {
      hasErrors.email = true;
    }

    if (!password) {
      hasErrors.password = true;
    }

    setErrors(hasErrors);

    return password && email;
  }

  function handlerSignIn() {
    if (isValid()) {
      dispatch(signIn(email, password));
    }
  }

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <ScreenContainer style={{justifyContent: 'space-evenly'}}>
      <Icon name="left" size={22} onPress={() => BackHandler.exitApp()} />

      <Title>Acesse sua conta</Title>

      <View>
        <Input
          error={errors.email}
          label="EMAIL"
          value={email}
          setValue={setEmail}
        />

        <Input
          error={errors.password}
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

      <Button loading={loading} action={handlerSignIn} text="Entrar" />
    </ScreenContainer>
  );
};

export default SignIn;
