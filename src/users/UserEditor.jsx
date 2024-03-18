import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "./usersSlice";
import "./UserEditor.css";

function UserEditor({ user: selectedUser, onUserSelect } ) {
  const [user, setUser] = useState(selectedUser);
  const dispatch = useDispatch();

  // Синхронизируем локальное состояние с выбранным пользователем
  useEffect(() => {
    setUser(selectedUser);
  }, [selectedUser]);

  const handleInputChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSave = () => {
    if (user) {
      dispatch(updateUser(user));  // Отправляем обновленного пользователя обратно в Redux
    }
  };

  if (!user) {
    return (
      <div className="UserEditor">
        <p>Выберите пользователя.</p>{" "}
      </div>
    );
  }

  return (
    <>
    <div className="UserEditor">
      <img
        src={
          user?.img
            ? `${process.env.PUBLIC_URL}/images/${user.img}`
            : `${process.env.PUBLIC_URL}/images/default_profile.jpg`
        }
        alt={user?.name}
      />
      <div className="userInfo">
        <input
          className="userName"
          name="name"
          value={user?.name} // используем '?.' здесь
          onChange={handleInputChange}
        />
        <div className="UserEditorFields">
          <label>
            Должность:
            <input
              className="UserEditorField"
              name="position"
              value={user.position}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Отдел:
            <input
              className="UserEditorField"
              name="department"
              value={user.department}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Компания:
            <input
              className="UserEditorField"
              name="company"
              value={user.company}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <button onClick={handleSave}>Save</button> {/* Кнопка сохранения */}
      </div>
      
    </div>
    
    </>
  );
}

export default UserEditor;
