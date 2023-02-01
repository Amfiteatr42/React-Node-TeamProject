import Friends from 'components/FriendsCard/Friends';
import {
  ItemCard,
  ListCard,
  Title,
  Wrapper,
  WrapperList,
} from './OurFriendsPage.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOurFriends } from 'redux/ourFriend/ourFriendOperations';
import { selectOurFriends } from 'redux/ourFriend/ourFriendsSelectors';

const OurFriendsPage = () => {
  const dispatch = useDispatch();
  const dataFriends = useSelector(selectOurFriends);
  useEffect(() => {
    dispatch(getOurFriends());
  }, [dispatch]);

  return (
    <Wrapper>
      <Title>Our friend</Title>
      <WrapperList>
        <ListCard>
          {dataFriends?.map(value => (
            <ItemCard key={value?._id}>
              <Friends friends={value} />
            </ItemCard>
          ))}
        </ListCard>
      </WrapperList>
    </Wrapper>
  );
};

export default OurFriendsPage;
