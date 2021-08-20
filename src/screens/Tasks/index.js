import React, {useRef, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {FlatList, ActivityIndicator} from 'react-native';
import Task from '../../components/Task';
import FloatButton from '../../components/buttons/FloatButton';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AddTaskBottomSheet from '../../components/sheets/AddTaskBottomSheet';

import {Image, Row, Content} from './styles';
import {ScreenContainer, Title} from '../../global.style';
import theme from '../../theme';

import profilePicture from '../../assets/images/profile_picture.jpeg';
import {changeStatusBar} from '../../store/actions/ui';
import {loadTasks} from '../../store/actions/tasks';

const Tasks = () => {
  const dispatch = useDispatch();
  const {loading, tasks} = useSelector(state => state.tasks);
  const sheetRef = useRef();

  useEffect(() => {
    dispatch(changeStatusBar(theme.grayText, 'light-content'));
    dispatch(loadTasks());
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
            data={tasks}
            keyExtractor={task => task.id}
            renderItem={({item: task}) => (
              <Task key={task.id} title={task.title} priority={task.priority} />
            )}
            showsVerticalScrollIndicator={false}
          />

          <FloatButton
            disabled={loading}
            action={() => {
              if (sheetRef.current) {
                sheetRef.current.openSheet();
              }
            }}>
            {!loading ? (
              <Fontisto name="plus-a" color={theme.lightText} size={30} />
            ) : (
              <ActivityIndicator size={30} color={theme.lightText} />
            )}
          </FloatButton>
        </Content>
      </ScreenContainer>

      <AddTaskBottomSheet sheetRef={sheetRef} />
    </>
  );
};

export default Tasks;
