import React, { useEffect, useState, useRef, useCallback } from "react";
import Text from "components/Text";
import Spinner from "components/Spinner";
import CheckBox from "components/CheckBox";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./style";

const UserList = ({ users, isLoading }) => {
  const [hoveredUserId, setHoveredUserId] = useState();
  const [usersToDisplay, setUsersToDisplay] = useState(users);
  const dispatch = useDispatch();
  //https://www.youtube.com/watch?v=NZKUirTtxcg
  const observer = useRef(); // not rendering the component
  const lastUserElementRef = useCallback(node => {
    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver(entries => {
      // If the object is on ther screen right now
      if (entries[0].isIntersecting) {
        dispatch({ type: "INCREASE_PAGE_NUMBER" });
      }
    })
    if (node) observer.current.observe(node);
  }, []);


  const selectedCountries = useSelector((state) => {
    return state.countriesArr
  });
  const selectedNations = useSelector((state) => {
    return state.nationsArr
  });
  useEffect(() => {
    setUsersToDisplay(users);
  }, [users]);

  useEffect(() => {
    if (selectedCountries.length === 0) {
      console.log(selectedCountries.length, users.length);
      console.log(users);
      setUsersToDisplay(users);

    } else {
      console.log("selectedCountries", selectedCountries);
      const retval = users.filter((user) => {
        console.log(`user.location.country`, user.location.country);
        console.log(selectedCountries, selectedCountries.includes(user.location.country));
        return selectedCountries.includes(user.location.country)
      })
      console.log(`retval`, retval);
      setUsersToDisplay(retval)
    }
  }, [selectedCountries, users]);

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
  const handleCheckBoxChange = (checkBoxValue, labelValue, isChecked) => {
    dispatch({ type: isChecked ? 'ADD_NATION' : 'REMOVE_NATION', payload: checkBoxValue })
    dispatch({ type: isChecked ? 'ADD_COUNRY' : 'REMOVE_COUNRY', payload: labelValue })
  }
  return (
    <S.UserList>
      <S.Filters>
        {checkboxes.map(nation =>
          <CheckBox value={nation.value} label={nation.label} key={nation.value} onChange={handleCheckBoxChange} />
        )}
      </S.Filters>
      <S.List>
        {usersToDisplay.map((user, index) => {
          return (
            <S.User
              ref={index + 1 === usersToDisplay.length ? lastUserElementRef : null}
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
