import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'Головна',
    url: '/',
  },
  {
    id: 2,
    text: 'Про нас',
    url: '/about',
  },
  {
    id: 3,
    text: 'Товари',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'Гарантія якості',
    text:
      'Наша компанія надає гарантію 10 років на всю продукцію. Гарантія на монтаж - від 1-го року, залежно від складності та габаритів конструкції. За необхідності ми надаємо післягарантійне обслуговування своїх виробів.',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'Стиль та надійність',
    text:
      'Компанія «Mekado» - це команда професіоналів, які знають свою справу і постійно вдосконалюються у своїх знаннях та вміннях. Усі наші вироби відрізняються стильним дизайном і міцністю конструкцій.',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'Ціни від виробника',
    text:
      'Оскільки ми - виробники, які не користуються послугами посередників, наша співпраця з клієнтом відбувається напряму. Завдяки цьому, а також нашому постійному моніторингу ринку аналогічної продукції, ви отримаєте найактуальніші пропозиції щодо вартості та матеріалів. ',
  },
]

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
