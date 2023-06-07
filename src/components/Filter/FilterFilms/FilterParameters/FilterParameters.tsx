import {useSelector} from 'react-redux'
import {selectFilterText} from '@/redux/FilterTextSlice'

import styles from './filterParameters.module.scss'
import {useLocale} from 'next-intl'




export default function FilterParameters () {

    const locale = useLocale()

    const {filterTextObj} = useSelector(selectFilterText)
    
    return (
        <div className={styles.parameters}>
            {filterTextObj.arrGenres ?
                filterTextObj.arrGenres.map((item, inx) =>
                    <span key={inx}>{item.charAt(0).toUpperCase() + item.slice(1)}, </span>) :
                <span>Все жанры, </span>}
            {filterTextObj.arrCountries ?
                filterTextObj.arrCountries.map((item, inx) =>
                    <span key={inx}>{item}, </span>) :
                <span>Все страны, </span>}
            {filterTextObj.arrYears ?
                filterTextObj.arrYears.map((item, inx) =>
                    <span key={inx}>{item}</span>) :
                <span>Все годы</span>}
            {filterTextObj.ratingStart?.map((item, inx) =>
                <span key={inx}>, Рейтинг больше {item}</span>)}
            {filterTextObj.countRatingStart?.map((item, inx) =>
                <span key={inx}>, Оценок больше {item}</span>)}
            {filterTextObj.arrDirMembers?.map((item, inx) =>
                <span key={inx}>, {item}</span>)}
            {filterTextObj.arrActorMembers?.map((item, inx) =>
                <span key={inx}>, {item}</span>)}
        </div>
    )
}