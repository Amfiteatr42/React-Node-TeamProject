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
  DataBox,
} from './Friends.styled';

const Friends = ({ friends }) => {
  const {
    name,
    adress,
    adressUrl,
    email,
    logo,
    phone,
    friendUrl,
    workingHours,
  } = friends;

  const buttonAddress = () => {
    if (!adressUrl) {
      return '';
    }
    return (
      <a href={adressUrl} target="_blank" rel="noreferrer">
        <IconAddress />
      </a>
    );
  };
  const week = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
  const newWorkDays = workingHours?.map((item, i) => {
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
        if (item.isOpen) {
          return (
            <ItemTime key={index}>
              <SpanWeek>{item.week}</SpanWeek>
              -------------
            </ItemTime>
          );
        }
        if (!item.isOpen) {
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
    return true ? (
      <p>
        {arr[0]?.from}- {arr[0]?.to}
      </p>
    ) : (
      '-----------------------'
    );
  };

  return (
    <Container>
      <Title href={friendUrl} target="_blank">
        {name}
      </Title>
      <Wrapper>
        <WrapperIMG>
          <Img src={logo}></Img>
        </WrapperIMG>
        <WrapperContent>
          <DataBox newWorkDays={newWorkDays}>
            <P> Time:</P>
            <Data>
              {newWorkDays ? timeOne(newWorkDays) : '-----------------------'}
              <WrapperTimeHover className="time-wrapper">
                <ListFullTime>
                  {fullTime(newWorkDays ? newWorkDays : week)}
                </ListFullTime>
              </WrapperTimeHover>
            </Data>
          </DataBox>

          <P> Adress:{buttonAddress()} </P>
          <Address href={adressUrl} target="_blank">
            {adress || '-----------------------'}
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
