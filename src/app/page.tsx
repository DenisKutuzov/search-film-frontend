'use client'

import React from 'react'
import {Metadata} from 'next'


import styles from './home.module.scss'

import TeaserBtn from '@/components/UI/TeaserBtn'
import MainSlider from '@/components/MainSlider/MainSlider'
import FilmsCategory from '@/components/FilmsCategory/FilmsCategory'
import FilmsRating from '@/components/FilmsRating/FilmsRating'
import FilmsClause from '@/components/FilmsClause/FilmsClause'
import FilmsInteresting from '@/components/FilmsInteresting/FilmsInteresting'

import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement, incrementByAmount} from '@/Features/counter/counterSlice'
import {RootState} from '@/GlobalRedux/store'

const Home: React.FC = () => {

    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div className={styles.wrapper}>

            {/*Редакс счетчик*/}
            <div className={styles.btn__group}>
                <button className={styles.btn} onClick={() => dispatch(increment())}>Increment</button>
                <span className={styles.count}>{count}</span>
                <button  className={styles.btn}onClick={() => dispatch(decrement())}>Decrement</button>
                <button  className={styles.btn}onClick={() => dispatch(incrementByAmount(2))}>IncrementByAmount</button>
            </div>

            <MainSlider/>
            <div className={styles.container}>
                <ul className={styles.teaser__list}>
                    <TeaserBtn src='https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/lightning.svg'
                               alt='/' width={24} height={32} text='30 дней подписки за 1 ₽'
                               className={styles.teaser__item}/>
                    <TeaserBtn src='https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/gift.svg'
                               alt='/' width={56} height={32} text='Активировать сертификат'
                               className={styles.teaser__item}/>
                </ul>
                {/* сюда приходят все фильмы по категориям на главной, прост перебираем их и делает компоненту ну и вставляет данные
                (они дожны быть одинаковыми) кроме наполнения фильмов, разумеется*/}
            </div>
            <FilmsCategory title='Рекомендую посмотреть'/>

            <FilmsRating/>

            <FilmsClause/>

            <FilmsCategory title='Добрые мультсериалы'/>

            <FilmsCategory title='Поймать преступника'/>

            <FilmsCategory title='Лучшие сериалы в подписке'/>

            <FilmsCategory title='Зарубежные мультфильмы'/>

            <FilmsCategory title='Российские детективные сериалы'/>

            <FilmsCategory title='Зарубежные мелодраматические сериалы'/>

            <FilmsCategory title='Современные мультфильмы'/>

            <FilmsCategory title='Сериалы с высоким рейтингом по подписке'/>

            <FilmsInteresting/>

            <FilmsCategory title='Мелодрамы на основе книг'/>

            <FilmsCategory title='Захватывающие боевики'/>

            <FilmsCategory title='Лучшие фильмы в подписке'/>

            <FilmsCategory title='Мультфильмы о храбрости'/>

            <FilmsCategory title='Криминальные триллеры'/>

            <FilmsCategory title='Американские комедии'/>

            <FilmsCategory title='Криминальные детективы'/>

        </div>
    )
}

export default Home