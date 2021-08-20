import React, {memo} from 'react';

import {
  TaskContainer,
  TaskTitle,
  PriorityContainer,
  PriorityText,
} from './styles';

const Task = ({title, priority}) => {
  return (
    <TaskContainer>
      <TaskTitle>{title}</TaskTitle>

      <PriorityContainer priority={priority}>
        <PriorityText fontWeight="bold">{priority}</PriorityText>
      </PriorityContainer>
    </TaskContainer>
  );
};

export default memo(Task);
