import Friends from 'components/FriendsCard/Friends';
import {
  ItemCard,
  ListCard,
  Title,
  Wrapper,
  WrapperList,
} from './OurFriendsPage.styled';
import { useEffect, useState } from 'react';
import axios from 'axios';

const OurFriendsPage = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get('/friends');
      setFriends(data.data);
    }
    fetchData();
  }, []);

  return (
    friends && (
      <Wrapper>
        <Title>Our friends</Title>
        <WrapperList>
          <ListCard>
            {friends.map(value => (
              <ItemCard key={value?._id}>
                <Friends friends={value} />
              </ItemCard>
            ))}
          </ListCard>
        </WrapperList>
      </Wrapper>
    )
  );
};

export default OurFriendsPage;
