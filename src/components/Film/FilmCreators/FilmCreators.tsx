'use client'

import {useEffect, useState} from 'react'

import styles from './filmCreators.module.scss'

import FilmCreatorsItem from './FilmCreatorsItem/FilmCreatorsItem'

import {useDispatch, useSelector} from 'react-redux'
import {selectFilms} from '@/redux/FilmsSlice'
import {setOpenModal} from '@/redux/FilmsSlice'

import {useRouter} from 'next/navigation'
import {useTranslations} from 'next-intl'

import {CreatorsProps} from '@/types/components/Film'

const FilmCreators = ({actors, id}: CreatorsProps) => {
    const router = useRouter()
    const t = useTranslations('FilmCreators')
    const {modalOpen} = useSelector(selectFilms)
    const dispatch = useDispatch()

    const useResize = () => {
        const [width, setWidth] = useState(window.innerWidth)

        useEffect(() => {
            const handleResize = (event) => {
                setWidth(event.target.innerWidth)
            }
            window.addEventListener('resize', handleResize)
            return () => {
                window.removeEventListener('resize', handleResize)
            }
        }, [])

        if (width >= 1260) return 10
        if (width < 1260 && width > 1145) return 9
        if (width <= 1145 && width > 1035) return 8
        if (width <= 1035 && width > 920) return 7
        if (width <= 920 && width > 805) return 6
        if (width <= 805 && width > 690) return 5
        if (width <= 690) return 4
    }

    useEffect(() => {
        if (modalOpen.modalState) {
            document.body.classList.add('modalScroll')
        }

        return () => document.body.classList.remove('modalScroll')
    }, [modalOpen.modalState])

    const modalOpenHandler = () => {
        dispatch(setOpenModal({
            modalState: true,
            value: 'creators'
        }))

        router.push(`film/${id}/creators`)
    }

    return (
        <div className={styles.creators}>
            <div className={styles.creatorsTitle}>
                {t('title')}
            </div>
            <div className={styles.creatorsItems}>
                {actors.slice(0, useResize()).map((actor) => (
                    <FilmCreatorsItem actor={actor} key={actor.id} inModal={true}/>
                ))}
                <button onClick={() => modalOpenHandler()}
                        className={styles.moreCreators}>
                    {t('title1')}
                </button>
            </div>
        </div>
    )
}

export default FilmCreators