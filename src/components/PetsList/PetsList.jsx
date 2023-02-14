import { remove } from '../../assets/icons/index';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPets, removePets } from 'redux/petsData/petsOperation';
import { getPets } from 'redux/petsData/petsSelector';
import notFoundImage from '../../images/no-image-found.png';
import {
  Box,
  Button,
  List,
  Item,
  Img,
  Span,
  Svg,
  Li,
  Content,
  Div,
  Text,
} from './PetsList.styled';
import { useEffect } from 'react';

export const PetsList = () => {
  const pets = useSelector(getPets);
  const dispatch = useDispatch();

  const handleDataFormat = date => {
    if (!date?.length) return;
    const d = date?.split('-');
    return ([d[0], d[1], d[2]] = [d[2].slice(0, 2), d[1], d[0]].join('.'));
  };

  useEffect(() => {
    dispatch(fetchPets());
  }, [dispatch]);

  return (
    <>
      <Box pets={pets.length > 2}>
        {pets.length > 0 &&
          pets.map(
            ({ _id, imgURL, name, dateOfBirth, breed, comment }, idx) => (
              <Li key={idx}>
                <Content>
                  <Img
                    src={imgURL?.url || notFoundImage}
                    alt={"Image of user's pet"}
                  />
                </Content>
                <List>
                  <Item>
                    <Span>Name:</Span> {name}
                  </Item>
                  <Item>
                    <Span>Date of birth:</Span> {handleDataFormat(dateOfBirth)}
                  </Item>
                  <Item>
                    <Span>Breed:</Span> {breed}
                  </Item>
                  <Item>
                    <Span> Comments:</Span> {comment}
                  </Item>
                </List>
                <Button>
                  <Svg
                    src={remove}
                    onClick={() => dispatch(removePets(_id))}
                    width={30}
                    height={30}
                  />
                </Button>
              </Li>
            )
          )}
      </Box>
      {pets.length === 0 && (
        <>
          <Text>I don`t have pet</Text>
          <Div></Div>{' '}
        </>
      )}
    </>
  );
};
/*        <Box>
      {[{_id: '1', name:"Cat", dateOfBirth: '10.05.2020', comment: 'test' }].map(({ _id, imgURL, name, dateOfBirth, breed, comment })  => (
      <Li key={_id}> <Img></Img>
        <List>
          <Item ><Span>Name:</Span> {name}</Item>
          <Item><Span>Date of birth:</Span> {dateOfBirth}</Item>
          <Item><Span>Breed:</Span> {breed}</Item>
          <Item>
           <Span> Comments:</Span> {comment}
          </Item>
         
          </List>
         <Button>
            <Svg src={remove} onClick={()=> dispatch(removePets(_id))} width={30} height={30} />
          </Button></Li>
      ))}
      </Box> */
/*<Box><Li>
           <Img></Img>
        <List>
          <Item> <Span>Name:</Span> Jack</Item>
          <Item><Span>Date of birth:</Span> 22.04.2018</Item>
          <Item><Span>Breed:</Span> Persian cat</Item>
          <Item>
           <Span> Comments:</Span> Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor
            sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem
            ipsum dolor sit amet, consectetur
          </Item>
          <Button>
            <Svg src={remove}  width={30} height={30} />
          </Button>
        </List></Li>
     <Li>
           <Img></Img>
        <List>
          
          <Item><Span>Name:</Span> Jack</Item>
          <Item><Span>Date of birth:</Span> 22.04.2018</Item>
          <Item><Span>Breed:</Span> Basenji</Item>
          <Item>
           <Span> Comments:</Span> Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor
            sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem
            ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
            consecteturLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor
            sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem
            ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
            consectetur ipsum dolor sit amet, rem ipsum dolor sit amet, ipsum
            sit.
          </Item>
          <Button>
            <Svg src={remove} width={30} height={30} />
          </Button>
        </List></Li></Box> */
