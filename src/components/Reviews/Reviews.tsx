import Section from '../../ui/Section/Section';
import ReviewCard from '../ReviewCard/ReviewCard';
import SliderGeneral from '../SliderGeneral/SliderGeneral';

import './Reviews.scss';

const items = [
  {
    name: 'Жора Ремінгтон',
    avatarSrc: '/images/avatar.jpg',
    info: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...',
    stars: 4,
  },
  {
    name: 'Жора Ремінгтон',
    avatarSrc: '/images/avatar.jpg',
    info: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...',
    stars: 4,
  },
  {
    name: 'Жора Ремінгтон',
    avatarSrc: '/images/avatar.jpg',
    info: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...',
    stars: 4,
  },
  {
    name: 'Жора Ремінгтон',
    avatarSrc: '/images/avatar.jpg',
    info: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...',
    stars: 4,
  },
  {
    name: 'Жора Ремінгтон',
    avatarSrc: '/images/avatar.jpg',
    info: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...',
    stars: 4,
  },
  {
    name: 'Жора Ремінгтон',
    avatarSrc: '/images/avatar.jpg',
    info: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...',
    stars: 4,
  },
  {
    name: 'Жора Ремінгтон',
    avatarSrc: '/images/avatar.jpg',
    info: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...',
    stars: 4,
  },
  {
    name: 'Жора Ремінгтон',
    avatarSrc: '/images/avatar.jpg',
    info: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...',
    stars: 4,
  },
  {
    name: 'Жора Ремінгтон',
    avatarSrc: '/images/avatar.jpg',
    info: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...',
    stars: 4,
  },
  {
    name: 'Жора Ремінгтон',
    avatarSrc: '/images/avatar.jpg',
    info: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...',
    stars: 4,
  },
  {
    name: 'Жора Ремінгтон',
    avatarSrc: '/images/avatar.jpg',
    info: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...',
    stars: 4,
  },
  {
    name: 'Жора Ремінгтон',
    avatarSrc: '/images/avatar.jpg',
    info: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...',
    stars: 4,
  },
]

const Reviews = () => (
  <Section classNames={['reviews']}>
    <SliderGeneral title="Відгуги наших клієнтів" slidesToShow={4} slidesToScroll={4}>
      {items.map(item => (
        <ReviewCard key={item.name} {...item} />
      ))}
    </SliderGeneral>
  </Section>
);

export default Reviews;
