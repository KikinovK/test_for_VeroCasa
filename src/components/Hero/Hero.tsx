import { FC } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import SlideHero from '../SlideHero/SlideHero';
import Button from '../../ui/Button/Button';

import ArrowLeftIcon from '../../assets/icon/arr_left.svg?react';
import ArrowRightIcon from '../../assets/icon/arr_right.svg?react';

import { SliderButtonProps } from '../../types/interface'

import './Hero.scss';;

const items = [
  {
    imgSrc: 'images/hero_1.jpg',
    imgAlt: 'hero 1',
    title: '<strong>Швидше. <br>Вище. <br>Сильніше.</strong> <br>Разом із Nike',
    subTitle: 'Знижки до 40%',
    text: 'Залишився лише тиждень',
  },
  {
    imgSrc: 'images/hero_1.jpg',
    imgAlt: 'hero 1',
    title: '<strong>Швидше. <br>Вище. <br>Сильніше.</strong> <br>Разом із Nike',
    subTitle: 'Знижки до 40%',
    text: 'Залишився лише тиждень',
  },
  {
    imgSrc: 'images/hero_1.jpg',
    imgAlt: 'hero 1',
    title: '<strong>Швидше. <br>Вище. <br>Сильніше.</strong> <br>Разом із Nike',
    subTitle: 'Знижки до 40%',
    text: 'Залишився лише тиждень',
  },
]

const HeroNextArrow: FC<SliderButtonProps> = ({ onClick = () => {}}) => {
  return (
    <Button classNames={['hero__btn', 'hero__btn--next']} onClick={onClick}>
      <ArrowRightIcon />
    </Button>
  );
}
const HeroPrevArrow: FC<SliderButtonProps> = ({ onClick = () => {}}) => {
  return (
    <Button classNames={['hero__btn', 'hero__btn--prev']} onClick={onClick}>
      <ArrowLeftIcon />
    </Button>
  );
}

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <HeroNextArrow />,
    prevArrow: <HeroPrevArrow />,
    dotsClass: 'hero__dots'
  };
  return (
    <section className="hero">
      <Slider {...settings}>
        {items.map(item => (
          <div key={item.subTitle} className='hero_item'>
            <SlideHero {...item}/>
          </div>
        ))}
      </Slider>
    </section>
  )
};

export default Hero;
