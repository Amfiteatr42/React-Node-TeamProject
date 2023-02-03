import { remove } from '../../assets/icons/index';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPets, removePets } from 'redux/petsData/petsOperation';
import { getPets } from 'redux/petsData/petsSelector';

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
  Icon,
} from './PetsList.styled';
import { useEffect } from 'react';

export const PetsList = () => {
  const pets = useSelector(getPets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPets());
  }, [dispatch]);

  return (
    <>
      <Box>
        {pets &&
          pets.map(
            ({ _id, imgURL, name, dateOfBirth, breed, comment }, idx) => (
              <Li key={idx}>
                <Content>
                  {imgURL ? <Img src={imgURL.url} /> : <Icon />}
                </Content>
                <List>
                  <Item>
                    <Span>Name:</Span> {name}
                  </Item>
                  <Item>
                    <Span>Date of birth:</Span> {dateOfBirth}
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
        <Span>No pets</Span>
      </Box>
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
