import React, { useEffect, useState, useRef } from "react";
import Text from "components/Text";
import Spinner from "components/Spinner";
import CheckBox from "components/CheckBox";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./style";

const UserList = ({ users, isLoading }) => {
  const [hoveredUserId, setHoveredUserId] = useState();
  const dispatch = useDispatch();
  const observer = useRef();
  const selectedUsers = useSelector((state) => {
    return state.users
  });
  const selectedNations = useSelector((state) => {
    return state.nationsArr
  });

  useEffect(() => console.log(selectedUsers), [selectedUsers]);

  const handleMouseEnter = (index) => {
    setHoveredUserId(index);
  };

  const handleMouseLeave = () => {
    setHoveredUserId();
  };
  const checkboxes = [
    {
      value: 'BR',
      label: 'Brazil',
    },
    {
      value: 'AU',
      label: 'Australia',
    },
    {
      value: 'CA',
      label: 'Canada',
    },
    {
      value: 'DE',
      label: 'Germany',
    }
  ];
  const handleCheckBoxChange = (checkBoxValue, isChecked) => {
    dispatch({ type: isChecked ? 'ADD_NATION' : 'REMOVE_NATION', payload: checkBoxValue })
  }

  return (
    <S.UserList>
      <S.Filters>
        {checkboxes.map(nation =>
          <CheckBox value={nation.value} label={nation.label} key={nation.value} onChange={handleCheckBoxChange} />
        )}
      </S.Filters>
      <S.List>
        {users.map((user, index) => {
          return (
            <S.User
              ref={index + 1 === users.length ? lastUserElementRef : null}
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <S.UserPicture src={user?.picture.large} alt="" />
              <S.UserInfo>
                <Text size="22px" bold>
                  {user?.name.title} {user?.name.first} {user?.name.last}
                </Text>
                <Text size="14px">{user?.email}</Text>
                <Text size="14px">
                  {user?.location.street.number} {user?.location.street.name}
                </Text>
                <Text size="14px">
                  {user?.location.city} {user?.location.country}
                </Text>
              </S.UserInfo>
              <S.IconButtonWrapper isVisible={index === hoveredUserId}>
                <IconButton>
                  <FavoriteIcon color="error" />
                </IconButton>
              </S.IconButtonWrapper>
            </S.User>
          );
        })}
        {isLoading && (
          <S.SpinnerWrapper>
            <Spinner color="primary" size="45px" thickness={6} variant="indeterminate" />
          </S.SpinnerWrapper>
        )}
      </S.List>
    </S.UserList>
  );
};

export default UserList;
