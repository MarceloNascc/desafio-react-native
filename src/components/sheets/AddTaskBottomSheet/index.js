import React, {useState} from 'react';

import {Picker} from '@react-native-picker/picker';
import BaseBottomSheet from '../BaseBottomSheet';
import Input from '../../Input';
import Button from '../../buttons/Button';
import {View} from 'react-native';

import {Title} from '../../../global.style';
import {Container, PickerContainer, Label} from './styles';
import theme from '../../../theme';

const AddTaskBottomSheet = ({sheetRef}) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('Alta');

  return (
    <BaseBottomSheet ref={sheetRef}>
      <Container>
        <View>
          {/*eslint-disable-next-line react-native/no-inline-styles*/}
          <Title style={{marginBottom: 40}}>Cadastrar Item</Title>

          <Input value={title} setValue={setTitle} label="Nome da tarefa" />

          <PickerContainer>
            <Label fontWeight="bold">Prioridade da tarefa</Label>
            <Picker
              mode="dropdown"
              /*eslint-disable-next-line react-native/no-inline-styles*/
              style={{height: 40}}
              selectedValue={priority}
              onValueChange={value => setPriority(value)}>
              <Picker.Item
                color={theme.grayText}
                fontFamily="Poppins-Regular"
                label="Alta"
                value="Alta"
              />

              <Picker.Item
                color={theme.grayText}
                fontFamily="Poppins-Regular"
                label="Normal"
                value="Normal"
              />

              <Picker.Item
                color={theme.grayText}
                fontFamily="Poppins-Regular"
                label="Baixa"
                value="Baixa"
              />
            </Picker>
          </PickerContainer>
        </View>

        <Button
          // eslint-disable-next-line react-native/no-inline-styles
          extraContainerStyle={{
            marginBottom: 20,
            paddingTop: 10,
            paddingBottom: 10,
          }}
          action={() => console.log('ADD')}
          text="Salvar"
        />
      </Container>
    </BaseBottomSheet>
  );
};

export default AddTaskBottomSheet;
