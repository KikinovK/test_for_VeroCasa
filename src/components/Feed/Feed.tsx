import { FC, useState } from 'react';
import * as Yup from 'yup';

import Section from '../../ui/Section/Section';

import './Feed.scss';
import Button from '../../ui/Button/Button';

interface FeedhProps {
  onFeed?: (query: string) => void;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Невірний формат email').required('Email обов\'язковий для заповнення'),
});

const Feed: FC<FeedhProps> = ({ onFeed = () => {} }) => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleFedd = async  (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await validationSchema.validate({ email }, { abortEarly: false });
      setErrors({});
      onFeed(email);
    } catch (validationErrors) {
      const newErrors: Record<string, string> = {};
      if (validationErrors instanceof Yup.ValidationError) {
        validationErrors.inner.forEach(error => {
          if (error.path) {
            newErrors[error.path] = error.message;
          }
        });
      }
      setErrors(newErrors);
    }
  };
  return (
    <Section classNames={['feed']} onSubmit={handleFedd}>
      <h2 className="feed__title">Спіймай всі акції!</h2>
      <p className="feed__info">Підписуйся на Email розсилку і отримуй інформацію про всі акції, які будуть з`влятись у нашому магазині. А у нас їх багато :D</p>
      <div className="feed__form_wr">
        <form className="feed__form">
          <input
            type="text"
            className="feed__input"
            value={email}
            onChange={handleInputChange}
          />
          {errors.email && <span className="feed__input_error">{errors.email}</span>}
          <Button type="submit" classNames={['feed__btn']}>Підписатись</Button>
        </form>
      </div>
    </Section>
  );
};

export default Feed;
