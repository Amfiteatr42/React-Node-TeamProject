import {
  Wrapper,
  Container,
  Img,
  Title,
  WrapperIMG,
  WrapperContent,
  Data,
  Address,
  Email,
  Phone,
  IconAddress,
  WrapperTimeHover,
  ListFullTime,
  SpanWeek,
  ItemTime,
  P,
} from './Friends.styled';

// import { v4 as uuidv4 } from 'uuid';

const Friends = ({ friends }) => {
  const { title, address, addressUrl, email, imageUrl, phone, url, workDays } =
    friends;

  const buttonAddress = () => {
    if (!addressUrl) {
      return '';
    }
    return (
      <a href={addressUrl} target="_blank" rel="noreferrer">
        <IconAddress />
      </a>
    );
  };
  const week = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
  const newWorkDays = workDays?.map((item, i) => {
    return { ...item, week: week[i] };
  });

  const fullTime = arr => {
    if (!arr.length) {
      arr = week;
      week.map((item, index) => {
        return (
          <ItemTime key={index}>
            <SpanWeek>{item}</SpanWeek>
            -------------
          </ItemTime>
        );
      });
    }
    const result = arr?.map((item, index) => {
      if (item.week) {
        if (!item.isOpen) {
          return (
            <ItemTime key={index}>
              <SpanWeek>{item.week}</SpanWeek>
              -------------
            </ItemTime>
          );
        }
        if (item.isOpen) {
          return (
            <ItemTime key={index}>
              <SpanWeek>{item.week}</SpanWeek>
              {item.from}- {item.to}
            </ItemTime>
          );
        }
      }
      return (
        <ItemTime key={index}>
          <SpanWeek>{item}</SpanWeek>
          -------------
        </ItemTime>
      );
    });

    return result;
  };

  const timeOne = arr => {
    const result = arr?.find(item => item.isOpen);
    return result ? (
      <p>
        {result?.from}- {result?.to}
      </p>
    ) : (
      '-----------------------'
    );
  };

  return (
    <Container>
      <Title href={url} target="_blank">
        {title}
      </Title>
      <Wrapper>
        <WrapperIMG>
          <Img src={imageUrl}></Img>
        </WrapperIMG>
        <WrapperContent>
          <P> Time:</P>
          <Data>
            {newWorkDays ? timeOne(newWorkDays) : '-----------------------'}
            <WrapperTimeHover>
              <ListFullTime>
                {fullTime(newWorkDays ? newWorkDays : week)}
              </ListFullTime>
            </WrapperTimeHover>
          </Data>
          <P> Adress:{buttonAddress()} </P>
          <Address href={addressUrl} target="_blank">
            {address || '-----------------------'}
          </Address>
          <P> Email:</P>
          <Email href={email ? 'mailto:' + email : null}>
            {email || '-----------------------'}
          </Email>
          <P>Phone:</P>
          <Phone href={phone ? 'tel:' + phone : null}>
            {phone || '-----------------------'}
          </Phone>
        </WrapperContent>
      </Wrapper>
    </Container>
  );
};

export default Friends;
