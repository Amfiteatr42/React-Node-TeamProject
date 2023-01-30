import { ImgWrapper } from './LearnMoreModal.styled';
import { BsFillHeartFill } from 'react-icons/bs';

export function LearnMoreModal() {
  return (
    <div>
      <ImgWrapper>{/* <img src="" alt="" /> */}</ImgWrapper>
      <h2>Cute dog looking for a home</h2>
      <table>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>Rich</td>
          </tr>
          <tr>
            <td>Birthday:</td>
            <td>21.09.2020</td>
          </tr>
          <tr>
            <td>Breed</td>
            <td>pomeranian</td>
          </tr>
          <tr>
            <td>Location</td>
            <td>lviv</td>
          </tr>
          <tr>
            <td>Sex</td>
            <td>male</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>asdsadasd</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>1225675</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>1000$</td>
          </tr>
        </tbody>
      </table>
      <p>
        Comments: laksjfla kjlakf ka lakdfl akjfllkajsl jalksjflak gn mx
        mxncz,nwi fo
      </p>
      <button type="button">Contact</button>
      <button type="button">
        Add to <BsFillHeartFill />
      </button>
    </div>
  );
}
