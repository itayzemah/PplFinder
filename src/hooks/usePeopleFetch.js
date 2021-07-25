import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

export const usePeopleFetch = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const pageNumber = useSelector((state) => {
    return state.pageNumber
  });
  const nations = useSelector((state) => {
    return state.nationsArr
  });

  useEffect(() => {
    users.length = 0;
    dispatch({ type: 'RESET' })
    fetchUsers();
  }, [nations]);


  useEffect(() => {
    fetchUsers();
  }, [pageNumber]);

  async function fetchUsers() {
    setIsLoading(true);
    const url = `https://randomuser.me/api/?results=5&page=${pageNumber}${nations.length !== 0 ? "&nat=" + nations.join() : ''}`;
    console.log(`url`, url);
    const response = await axios.get(url);
    setIsLoading(false);
    setUsers([...users, ...response.data.results]);
  }

  return { users, isLoading, fetchUsers };
};
