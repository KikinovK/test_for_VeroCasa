import { BASE_URL } from '../../shared/baseUrl';
import Button from '../../ui/Button/Button';
import Section from '../../ui/Section/Section';
import './Invite.scss';

const Invite = () => (
  <Section classNames={['invite']}>
    <div className="invite__row">
      <div className="invite__col">
        <h2 className="invite__title">
          Ми знаємо, що сподобається вашим “великим” друзям!
        </h2>
        <p className="invite__info">
          Обирай подарунок своїм друзями бодібілдерам із нашою новою колекцію термобілизни “Big warm”
        </p>
        <Button classNames={['invite__btn']} >
          До каталогу
        </Button>
      </div>
      <div className="invite__col">
        <div className="invite__pic">
          <img src={`${BASE_URL}/images/invite.jpg`} alt="invite" className="invite__img" />
        </div>
      </div>
    </div>
  </Section>
);

export default Invite;
