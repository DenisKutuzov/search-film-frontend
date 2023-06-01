'use client'

import styles from './filmComments.module.scss'

import FilmCommentsItem from './FilmCommentsItem'

import {useDispatch, useSelector} from 'react-redux'
import {selectFilms, setOpenModal} from '@/redux/FilmsSlice'

import {useRouter} from 'next/navigation'
import {useEffect} from 'react'

export type Comment = {
    id: number,
    profile: {
        profileName: string
    },
    createdAt: string,
    text: string
}

interface Comments {
    id: string,
    filmComments: Comment[]
}

const CommentList = ({id, filmComments}: Comments) => {
    const router = useRouter()

    const dispatch = useDispatch()
    const {modalOpen} = useSelector(selectFilms)

    useEffect(() => {
        if (modalOpen.modalState) {
            document.body.classList.add('modalScroll')
        }

        return () => document.body.classList.remove('modalScroll')
    }, [modalOpen.modalState])

    const modalOpenHandler = () => {
        dispatch(setOpenModal({
            modalState: true,
            value: 'comments'
        }))
        router.push(`film/${id}/comments`)
    }


    return (
        <div className={styles.comments}>
            <div className={styles.commentsTop}>
                <div onClick={() => modalOpenHandler()}
                     className={styles.commentsTitle}>
                    Комментарии
                </div>

                <div onClick={() => modalOpenHandler()}
                     className={styles.addCommentButton}>
                    Оставить комментарий
                </div>
            </div>

            <div className={styles.commentsItems}>
                {filmComments.map((comment) => (
                    <FilmCommentsItem key={comment.id} comment={comment}/>
                ))}
            </div>
        </div>
    )
}

export default CommentList