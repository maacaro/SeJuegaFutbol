import React, {useEffect, useState} from 'react';
import apiClient from '../../../api-client';
import ListOfMatches from './ListOfMatches';
import {useSelector} from 'react-redux';

export default () => {
  const [matches, setMatches] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const token = useSelector(state => state.user.userToken);
  const playerId = useSelector(state => state.user.playerId);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        setIsFetching(true);
        setMatches(
          await apiClient(
            `matches?playerId=${playerId}&embed=players,location`,
            {
              headers: {
                'x-access-token': token,
              },
            },
          ),
        );
        setIsFetching(false);
      } catch (e) {
        setIsFetching(false);
        console.log(e);
      }
    };

    fetchMatches();
  }, [playerId, token]);

  return <ListOfMatches matches={matches} isFetching={isFetching} />;
};
