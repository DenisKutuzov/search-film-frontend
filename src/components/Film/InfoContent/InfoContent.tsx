'use client'

import React, { useState } from 'react'

import styles from './InfoContent.module.scss'
import WatchOptions from '@/components/Film/WatchOptions/WatchOptions'
import Image from 'next/image'
import { filmDescription } from '@/const/const'
import MyButton from '@/components/UI/MyButton/MyButton'

import { FiVolume1 } from 'react-icons/fi'
import { BsKeyboard } from 'react-icons/bs'
import { BsPlay } from 'react-icons/bs'
import { BsBookmark } from 'react-icons/bs'
import { FiShare } from 'react-icons/fi'
import { MdOndemandVideo } from 'react-icons/md'

const InfoContent: React.FC = () => {
    const [show, setShow] = useState(false)

    const actors = [1, 2, 3, 4]

    return (
        <div className={styles.infoContent}>
            <div className={styles.mainInfo}>
                <h2>1+1 (Фильм 2011)</h2>
                <div>2011 1 ч. 52 мин. 16+</div>
                <div>Франция Драмы Комедии Биография</div>

                <div className={styles.params}>
                    <div className={styles.hd}>FullHD</div>
                    <FiVolume1 size={25} color='rgba(255,255,255,.8)' />
                    <div>Рус</div>
                    <BsKeyboard size={25} color='rgba(255,255,255,.8)' />
                    <div>Рус</div>
                </div>
            </div>

            <div className={styles.otherInfo}>
                <div className={styles.actors}>
                    <div className={styles.actor}>
                        <div className={styles.actorWrapper}>
                            <div><h3> 8,9</h3></div>
                        </div>

                        <div className={styles.rating}>
                            Рейтинг Иви
                        </div>
                    </div>

                    {actors.map((el) =>
                        <div key={el}
                            className={styles.actor}>
                            <div className={styles.actorWrapper}>
                                <div className={styles.actorImage}>
                                    <Image alt='Актер'
                                        width={44}
                                        height={44}
                                        src='https://thumbs.dfs.ivi.ru/storage33/contents/f/f/06672be611ab9b9e54579c4f645460.jpg/44x44/?q=85' />
                                </div>
                            </div>

                            <div className={styles.actorName}>
                                Франсуа Клюзе
                            </div>
                        </div>
                    )}
                </div>

                <div className={styles.userButtons}>
                    <MyButton text={'Трейлер'}
                        icon={<BsPlay size={16} color='rgba(255,255,255,.72)' />}
                        nameClass='trailerButton' />

                    <div className={styles.buttonsWrapper}>
                        <MyButton
                            icon={<BsBookmark size={16} color='rgba(255,255,255,.72)' />}
                            nameClass='markerButton' />

                        <MyButton icon={<FiShare size={16} color='rgba(255,255,255,.72)' />}
                            nameClass='shareButton' />
                    </div>
                </div>
            </div>

            <div className={styles.premy}>
                <Image alt='Премия'
                    width={58}
                    height={58}
                    src='https://thumbs.dfs.ivi.ru/storage29/contents/9/9/ccf5c60716958180b98b81a6a4b447.png?q=85' />

                <div className={styles.premyInfo}>
                    <h3 >Жорж</h3>

                    <div className={styles.premyDescription}>
                        Лучшая зарубежная комедия, Лучшая зарубежная драма,
                        Лучший европейский фильм, Лучший актер
                    </div>
                </div>
            </div>

            <div className={styles.freeFilmsWrapper}>
                <MyButton text={'Бесплатные фильмы'}
                    icon={<MdOndemandVideo size={16} color='rgba(255,255,255,.72)' />}
                    nameClass='freeFilmsButton' />
            </div>

            <div className={styles.filmDescription}>
                <p>{filmDescription[0]}</p>

                {show && <div>
                    {filmDescription.map((el) =>
                        <p>{el}</p>)}
                    <div className={styles.hideWatchOptions}>
                        <WatchOptions />
                    </div>
                </div>}
            </div>

            <a onClick={() => setShow(!show)}
                className={styles.detailsButton}>
                {show ? 'Свернуть детали' : 'Детали о фильме'}
            </a>

            <a onClick={() => setShow(!show)}
                className={styles.showDetailsButton}>
                {show ? 'Свернуть' : 'Читать дальше'}
            </a>

            <div className={styles.filmRating}>
                <div className={styles.filmRatingWrapper}>
                    <h3>8,9</h3>

                    <div className={styles.filmRatingDescription}>
                        <h3>Рейтинг Иви</h3>
                        <p>Интересный сюжет</p>
                        <p>143 109 оценок</p>
                    </div>
                </div>

                <div className={styles.evaluateButton}>
                    Оценить
                </div>
            </div>

            <div className={styles.showWatchOptions}>
                <WatchOptions />
            </div>
        </div>
    )
}

export default InfoContent