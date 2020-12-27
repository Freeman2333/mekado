import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return (
    <main>
      <PageHero title=' про нас' />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>Про Компанію Mekado</h2>
            <div className="underline"></div>
          </div>
          <p>
          Ми займаємося виробництвом дизайнерських предметів інтер'єру різного рівня складності: від оздоблення панелей до створення ексклюзивних меблів і вишуканих декоративних виробів.

          Наша команда надає клієнтам повний цикл робіт: прийом замовлення, розрахунок вартості, розробку проекту дизайну, виготовлення, доставку, монтаж, сервісне обслуговування.

          Ми щиро зацікавлені в тому, щоб клієнти були задоволені нашою роботою. Ми створюємо виріб у точній відповідності із замовленням, в обумовлений заздалегідь термін.
          </p>
        </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
