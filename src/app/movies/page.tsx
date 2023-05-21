import FilterFilms from '@/components/FilterFilms/FilterFilms'

import {Metadata} from 'next'

import styles from './movies.module.scss'


export const metadata: Metadata = {
    title: 'Смотреть фильмы онлайн бесплатно в хорошем HD качестве и без регистрации. Удобный просмотр онлайн фильмов на ivi.ru',
    description: 'Generated by Next.js',
}

async function getCardFilms() {
    const response = await fetch(
        'http://localhost:12120/api/films/part/1',
        // {next: {revalidate: 100}}
    )
    return   response.json()
}


const Movie = async () => {

    const posts = await getCardFilms()

    return (
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <FilterFilms/>
                    {posts.map(item => <p style={{color : 'white'}} key={item.id}>{item.nameRU}</p>)}
                    <button className={styles.movies__btn} >Показать еще</button>
                </div>
            </div>
    )
}

export default Movie