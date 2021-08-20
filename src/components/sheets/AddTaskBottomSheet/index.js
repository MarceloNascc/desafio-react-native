import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

import {Picker} from '@react-native-picker/picker';
import BaseBottomSheet from '../BaseBottomSheet';
import Input from '../../Input';
import Button from '../../buttons/Button';
import {View, Keyboard} from 'react-native';

import {Title} from '../../../global.style';
import {Container, PickerContainer, Label} from './styles';
import theme from '../../../theme';
import {addTask} from '../../../store/actions/tasks';

const AddTaskBottomSheet = ({sheetRef}) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('Alta');
  const [errors, setErrors] = useState({});

  function isValid() {
    const hasErrors = {};

    if (!title) {
      hasErrors.title = true;
    }

    setErrors(hasErrors);

    return Boolean(title);
  }

  function handlerSave() {
    if (isValid()) {
      dispatch(addTask(title, priority));

      setTitle('');
      Keyboard.dismiss();
      sheetRef.current.hideSheet();
    }
  }

  return (
    <BaseBottomSheet ref={sheetRef}>
      <Container>
        <View>
          {/*eslint-disable-next-line react-native/no-inline-styles*/}
          <Title style={{marginBottom: 40}}>Cadastrar Item</Title>

          <Input
            error={errors.title}
            value={title}
            setValue={setTitle}
            label="Nome da tarefa"
          />

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
          action={handlerSave}
          text="Salvar"
        />
      </Container>
    </BaseBottomSheet>
  );
};

export default AddTaskBottomSheet;
