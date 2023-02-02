import { UserDataItem } from 'components/UserDataItem/UserDataItem';
import { Content, Text, Icon, Button, Div, Svg } from './UserData.styled';
export const UserData = () => {
  return (
    <>
      {' '}
      <Div>
        <Content>
          <Icon />
        </Content>
        <Button>
      
          <Svg />
          <Text>Edit photo</Text>
        </Button>
        <UserDataItem />
      </Div>
    </>
  );
};
