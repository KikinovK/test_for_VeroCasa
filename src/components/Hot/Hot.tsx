import Section from '../../ui/Section/Section';
import HotCard from '../HotCard/HotCard';
import SliderGeneral from '../SliderGeneral/SliderGeneral';

import './Hot.scss';

const items = [
  {
    imgSrc: 'images/hot_1.png',
    imgAlt: 'hot_1',
    title: 'Термобілизна для бодібілдерів',
    type: 'Для чоловіків',
    info: '2 кольори',
    price: '4000',
  },
  {
    imgSrc: 'images/hot_2.png',
    imgAlt: 'hot_2',
    title: 'Майка для бодібілдерів',
    type: 'Для жінок',
    info: '6 кольорів',
    price: '1100 грн.',
  },
  {
    imgSrc: 'images/hot_3.png',
    imgAlt: 'hot_3',
    title: 'Ланцюжок для бодібілдерів',
    type: 'Аксесуари',
    info: '30 кг.',
    price: '2000 грн.',
  },
  {
    imgSrc: 'images/hot_1.png',
    imgAlt: 'hot_1',
    title: 'Термобілизна для бодібілдерів',
    type: 'Для чоловіків',
    info: '2 кольори',
    price: '4000',
  },
  {
    imgSrc: 'images/hot_3.png',
    imgAlt: 'hot_3',
    title: 'Ланцюжок для бодібілдерів',
    type: 'Аксесуари',
    info: '30 кг.',
    price: '2000 грн.',
  },
  {
    imgSrc: 'images/hot_2.png',
    imgAlt: 'hot_2',
    title: 'Майка для бодібілдерів',
    type: 'Для жінок',
    info: '6 кольорів',
    price: '1100 грн.',
  },
  {
    imgSrc: 'images/hot_1.png',
    imgAlt: 'hot_1',
    title: 'Термобілизна для бодібілдерів',
    type: 'Для чоловіків',
    info: '2 кольори',
    price: '4000',
  },
  {
    imgSrc: 'images/hot_2.png',
    imgAlt: 'hot_2',
    title: 'Майка для бодібілдерів',
    type: 'Для жінок',
    info: '6 кольорів',
    price: '1100 грн.',
  },
  {
    imgSrc: 'images/hot_3.png',
    imgAlt: 'hot_3',
    title: 'Ланцюжок для бодібілдерів',
    type: 'Аксесуари',
    info: '30 кг.',
    price: '2000 грн.',
  },
];

const Hot = () => (
  <Section classNames={['hot']}>
    <SliderGeneral title="Найгарячіші товари" slidesToShow={3} slidesToScroll={3}>
      {items.map(item => (
        <HotCard key={item.title} {...item} />
      ))}
    </SliderGeneral>
  </Section>
);

export default Hot;
