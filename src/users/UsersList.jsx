import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FixedSizeList  as List } from 'react-window';
import { selectUser, selectUsers } from './usersSlice';
import Icon from '@material-ui/icons/Person';

function UsersList({user, onUserSelect, }) {
  const users = useSelector(selectUsers);

  const rowRenderer = ({ index, style }) => {
    const listItem = users[index];
    const isSelected = user && listItem.id === user.id;

    return (
      <div
        style={style}
        className={`ListItem ${isSelected ? 'selected' : ''}`}
        onClick={() => onUserSelect(listItem)}
      >
        <Icon /> {listItem.name} {listItem.surname}
      </div>
    );
  };

  return (
    <div className="UsersList" style={{ width: '50%', overflow: 'auto' }}>
      <List
        height={800}
        itemCount={users.length}
        itemSize={30}
      >
        {rowRenderer}
      </List>
    </div>
  );
}

export default React.memo(UsersList);