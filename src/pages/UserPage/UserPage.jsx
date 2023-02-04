import { Logout } from 'components/Logout/Logout';
import { PetsData } from 'components/PetsData/PetsData';
import { UserData } from 'components/UserData/UserData';
import {
  Containere,
  Box,
  Package,
  Text,
  ContainerPets,
  Title,Section, Container
} from './UserPage.styled';

const UserPage = () => {
  return (
    <>
     <Section><Container>
      <Box>
        {' '}
        <Package>
          <Text> My information:</Text>
          <Containere>
              <UserData />
            <Logout />
          </Containere>
        </Package>
        <ContainerPets>
          <Title> My pets:</Title>
          <PetsData />
        </ContainerPets>
      </Box></Container></Section>
    </>
  );
};

export default UserPage;
