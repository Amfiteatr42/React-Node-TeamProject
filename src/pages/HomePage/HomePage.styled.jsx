import { default as styled } from 'styled-components';
import girlMob from '../../assets/images/homepage/hero-girl-mob.png';
import girlMob2x from '../../assets/images/homepage/hero-girl-mob@2x.png';
import girlTablet from '../../assets/images/homepage/hero-girl-tablet.png';
import girlTablet2x from '../../assets/images/homepage/hero-girl-tablet@2x.png';
import girlDesk from '../../assets/images/homepage/hero-girl-desk.png';
import girlDesk2x from '../../assets/images/homepage/hero-girl-desk@2x.png';
import wavesMob from '../../assets/images/homepage/hero-waves-mob.png';
import wavesMob2x from '../../assets/images/homepage/hero-waves-mob@2x.png';
import wavesTablet from '../../assets/images/homepage/hero-waves-tablet.png';
import wavesTablet2x from '../../assets/images/homepage/hero-waves-tablet@2x.png';
import wavesBigDesk from '../../assets/images/homepage/hero-wave-big-desk.png';
import wavesBigDesk2x from '../../assets/images/homepage/hero-wave-big-desk@2x.png';
import wavesSmallDesk from '../../assets/images/homepage/hero-wave-small-desk.png';
import wavesSmallDesk2x from '../../assets/images/homepage/hero-wave-small-desk@2x.png';
import HeartDesk from '../../assets/images/homepage/hero-heart-desk.png';
import HeartDesk2x from '../../assets/images/homepage/hero-heart-desk@2x.png';

export const MainTitle = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 1.38;

  max-width: 320px;
  padding: 0 20px;
  margin: 0 auto;

  @media screen and (min-width: 767px) {
    max-width: 768px;
    padding: 0 32px;
    font-size: 68px;
    line-height: 1.47;
  }
  @media screen and (min-width: 1279px) {
    max-width: 1280px;
    padding: 0;
    padding-left: 16px;
    width: 604px;
    text-align: left;
    margin: 0;
  }
`;

export const HeroContainer = styled.div`
  height: 600px;
  padding-top: 60px;
  margin: 0 auto;
  background-image: url(${girlMob}), url(${wavesMob});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 320px;

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2ddpx) {
    background-image: url(${girlMob2x}), url(${wavesMob2x});
  }

  @media screen and (min-width: 767px) {
    height: 1200px;
    background-image: url(${girlTablet}), url(${wavesTablet});
    background-size: 645px, 767px;

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2ddpx) {
      background-image: url(${girlTablet2x}), url(${wavesTablet2x});
    }
  }

  @media screen and (min-width: 1279px) {
    height: 768px;
    max-width: 1280px;
    padding-top: 92px;
    background-image: url(${girlDesk}), url(${wavesBigDesk}),
      url(${wavesSmallDesk}), url(${HeartDesk});
    background-size: 590px, 1120px, 480px, 92px;
    background-position: right bottom, left bottom, right bottom, 60% 15%;

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2ddpx) {
      background-image: url(${girlDesk2x}), url(${wavesBigDesk2x}),
        url(${wavesSmallDesk2x}), url(${HeartDesk2x});
    }
  }
`;
