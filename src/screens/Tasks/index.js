import React, {useRef, useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {FlatList} from 'react-native';
import Task from '../../components/Task';
import FloatButton from '../../components/buttons/FloatButton';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AddTaskBottomSheet from '../../components/sheets/AddTaskBottomSheet';

import {Image, Row, Content} from './styles';
import {ScreenContainer, Title} from '../../global.style';
import theme from '../../theme';

import profilePicture from '../../assets/images/profile_picture.jpeg';
import {changeStatusBar} from '../../store/actions/ui';

const Tasks = () => {
  const dispatch = useDispatch();
  const sheetRef = useRef();

  useEffect(() => {
    dispatch(changeStatusBar(theme.grayText, 'light-content'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ScreenContainer
        style={{backgroundColor: theme.grayText}}
        withoutHorizontalPadding>
        <Row>
          <Image source={profilePicture} />
          <Title isWhite>Olá, João Marcelo</Title>
        </Row>

        <Content>
          <Title>Minhas tarefas</Title>

          <FlatList
            // eslint-disable-next-line react-native/no-inline-styles
            style={{marginTop: 40}}
            data={[
              {id: '0', title: 'Uma tarefa 0', priority: 'Alta'},
              {id: '1', title: 'Uma tarefa 1', priority: 'Baixa'},
              {id: '2', title: 'Uma tarefa 2', priority: 'Alta'},
              {id: '3', title: 'Uma tarefa 3', priority: 'Normal'},
              {id: '4', title: 'Uma tarefa 4', priority: 'Normal'},
              {id: '5', title: 'Uma tarefa 5', priority: 'Alta'},
              {id: '6', title: 'Uma tarefa 6', priority: 'Normal'},
              {id: '7', title: 'Uma tarefa 7', priority: 'Baixa'},
            ]}
            keyExtractor={task => task.id}
            renderItem={({item: task}) => (
              <Task
                key={task.key}
                title={task.title}
                priority={task.priority}
              />
            )}
            showsVerticalScrollIndicator={false}
          />

          <FloatButton
            action={() => {
              if (sheetRef.current) {
                sheetRef.current.openSheet();
              }
            }}>
            <Fontisto name="plus-a" color={theme.lightText} size={30} />
          </FloatButton>
        </Content>
      </ScreenContainer>

      <AddTaskBottomSheet sheetRef={sheetRef} />
    </>
  );
};

export default Tasks;
