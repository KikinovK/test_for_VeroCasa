import { Children, FC, ReactNode, useEffect, useRef, useState } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Button from '../../ui/Button/Button';

import ArrowLeftIcon from '../../assets/icon/arrow_left.svg?react';
import ArrowRightIcon from '../../assets/icon/arrow_right.svg?react';

import { SliderButtonProps } from '../../types/interface';

import './SliderGeneral.scss';

interface SliderGeneralProps {
  slidesToShow: number,
  slidesToScroll: number,
  title: string,
  children: ReactNode;
}

const SliderNextArrow: FC<SliderButtonProps> = ({ onClick = () => {}, disabled = false}) => {
  return (
    <Button classNames={['slider_general__btn', 'slider_general__btn--next']} onClick={onClick}  disabled={disabled}>
      <ArrowRightIcon />
    </Button>
  );
}

const SliderPrevArrow: FC<SliderButtonProps> = ({ onClick = () => {}, disabled = false}) => {
  return (
    <Button classNames={['slider_general__btn', 'slider_general__btn--prev']} onClick={onClick} disabled={disabled}>
      <ArrowLeftIcon />
    </Button>
  );
}

const SliderGeneral: FC<SliderGeneralProps> = ({
  slidesToShow,
  slidesToScroll,
  title,
  children,
}) => {
  const sliderRef = useRef<Slider>(null);
  const [totalSlides, setTotalSlides] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    if (sliderRef.current && sliderRef.current.props.children) {
      const childrenArray = Children.toArray(sliderRef.current.props.children);
      setTotalSlides(childrenArray.length);
    }
  }, []);

  const goToPreviousSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const settings = {
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    afterChange: (index: number) => {
      setCurrentSlide(index + 1);
    },
  };
  return (
    <>
      <div className="slider_general__header">
        <h2 className="slider_general__title">{title}</h2>
        <div className="slider_general__counter">
          {`${Math.ceil(currentSlide / slidesToShow).toString().padStart(2, '0')} / ${Math.ceil(totalSlides / slidesToShow).toString().padStart(2, '0')}`}
        </div>
        <div className="slider_general__control">
          <SliderPrevArrow onClick={goToPreviousSlide} disabled={Math.ceil(currentSlide / slidesToShow) === 1}/>
          <SliderNextArrow onClick={goToNextSlide}  disabled={Math.ceil(currentSlide / slidesToShow) === Math.ceil(totalSlides / slidesToShow)}/>
        </div>
      </div>
      <Slider  ref={sliderRef} {...settings}>
        {children}
      </Slider>
    </>
  );
};

export default SliderGeneral;
