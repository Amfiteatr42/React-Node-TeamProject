import Friends from 'components/FriendsCard/Friends';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOurFriends } from 'redux/ourFriend/ourFriendOperations';
import { selectOurFriends } from 'redux/ourFriend/ourFriendOperations';

const OurFriendsPage = () => {
  const dispatch = useDispatch();
  // const dataFriends = useSelector(selectOurFriends);
  useEffect(() => {
    dispatch(getOurFriends());
  }, [dispatch]);

  return <div></div>;
};

export default OurFriendsPage;
