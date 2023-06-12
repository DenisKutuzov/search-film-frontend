import { render, screen, fireEvent } from '@testing-library/react'
import FilmsClause from '../../components/Home/FilmsClause/FilmsClause'
import { NextIntlProvider } from 'next-intl'

describe('FilmsClause', () => {
    test('renders header text', () => {
        render(
            <NextIntlProvider messages={{
                'FilmsClause': {
                    'title': 'Онлайн-кинотеатр Иви: фильмы в хорошем качестве всегда приносят настоящее удовольствие',
                    'description': 'Каждый день миллионы людей ищут фильмы онлайн, и никто не хочет усложнять себе жизнь – и вы наверняка один из них! А раз так, то Иви – это именно тот ресурс, который вам нужен. От лучших кинолент в HD-качестве вас отделяет буквально один клик. Мы не просто освобождаем от необходимости идти в кинотеатр или изучать программу телепередач – у посетителей нашего ресурса гораздо больше возможностей.',
                    'description2': 'Видеотека Иви – это постоянно пополняющаяся коллекция в рунете, которая насчитывает более 60 тысяч отечественного и зарубежного контента, доступного для просмотра онлайн. Мы первыми в России подписали контракты с крупнейшими голливудскими студиями (Walt Disney, Warner Bros., Sony, 20th Century Fox, Universal, Paramount, MGM и другими) и на постоянной основе сотрудничаем с крупнейшими российскими компаниями и телеканалами.',
                    'description3': 'Онлайн-кинотеатр ivi.ru – это:',
                    'description4': 'уникальная рекомендательная система, учитывающая ваши предпочтения и предлагающая посмотреть именно то, что точно придется вам по душе;',
                    'description5': 'просмотр в одно касание на любом из устройств, подключенном к вашему Иви-аккаунту – от смартфонов до телевизоров с технологией Smart TV;',
                    'description6': 'возможность скачивать в память мобильного устройства лицензионный контент и смотреть его без доступа к Интернету;',
                    'description7': 'уникальные условия и преимущества для обладателей подписки Иви, делающей кинопросмотр комфортным и приятным;',
                    'description8': 'удобная и продвинутая система уведомлений, вы не пропустите выход крутого обсуждаемого блокбастера – мы известим о появлении подходящим для вас способом;',
                    'description9': 'возможность добавлять фильмы в «смотреть позже», чтобы вернуться к ним в свободное время;',
                    'description10': 'контент, для просмотра которого не требуется устанавливать видеоплееры или искать кодеки;',
                    'description11': 'просмотр онлайн контента хорошего разрешения без регистрации и смс.',
                    'description12': 'Откройте для себя возможность смотреть фильмы онлайн бесплатно в отличном качестве с кинотеатром Иви!',
                    'toggle': 'Свернуть',
                    'toggle2': 'Развернуть'
                },
            }} locale={'ru'}>
                <FilmsClause />
            </NextIntlProvider>
        )
        const header = screen.getByText(/Онлайн-кинотеатр Иви/i)
        expect(header).toBeInTheDocument()
    })

    test('renders toggle button', () => {
        render(<NextIntlProvider messages={{
            'FilmsClause': {
                'title': 'Онлайн-кинотеатр Иви: фильмы в хорошем качестве всегда приносят настоящее удовольствие',
                'description': 'Каждый день миллионы людей ищут фильмы онлайн, и никто не хочет усложнять себе жизнь – и вы наверняка один из них! А раз так, то Иви – это именно тот ресурс, который вам нужен. От лучших кинолент в HD-качестве вас отделяет буквально один клик. Мы не просто освобождаем от необходимости идти в кинотеатр или изучать программу телепередач – у посетителей нашего ресурса гораздо больше возможностей.',
                'description2': 'Видеотека Иви – это постоянно пополняющаяся коллекция в рунете, которая насчитывает более 60 тысяч отечественного и зарубежного контента, доступного для просмотра онлайн. Мы первыми в России подписали контракты с крупнейшими голливудскими студиями (Walt Disney, Warner Bros., Sony, 20th Century Fox, Universal, Paramount, MGM и другими) и на постоянной основе сотрудничаем с крупнейшими российскими компаниями и телеканалами.',
                'description3': 'Онлайн-кинотеатр ivi.ru – это:',
                'description4': 'уникальная рекомендательная система, учитывающая ваши предпочтения и предлагающая посмотреть именно то, что точно придется вам по душе;',
                'description5': 'просмотр в одно касание на любом из устройств, подключенном к вашему Иви-аккаунту – от смартфонов до телевизоров с технологией Smart TV;',
                'description6': 'возможность скачивать в память мобильного устройства лицензионный контент и смотреть его без доступа к Интернету;',
                'description7': 'уникальные условия и преимущества для обладателей подписки Иви, делающей кинопросмотр комфортным и приятным;',
                'description8': 'удобная и продвинутая система уведомлений, вы не пропустите выход крутого обсуждаемого блокбастера – мы известим о появлении подходящим для вас способом;',
                'description9': 'возможность добавлять фильмы в «смотреть позже», чтобы вернуться к ним в свободное время;',
                'description10': 'контент, для просмотра которого не требуется устанавливать видеоплееры или искать кодеки;',
                'description11': 'просмотр онлайн контента хорошего разрешения без регистрации и смс.',
                'description12': 'Откройте для себя возможность смотреть фильмы онлайн бесплатно в отличном качестве с кинотеатром Иви!',
                'toggle': 'Свернуть',
                'toggle2': 'Развернуть'
            },
        }} locale={'ru'}>
            <FilmsClause />
        </NextIntlProvider>)
        const toggleButton = screen.getByText(/развернуть/i)
        expect(toggleButton).toBeInTheDocument()
    })

    test('renders inner text when toggle button is clicked', () => {
        render(<NextIntlProvider messages={{
            'FilmsClause': {
                'title': 'Онлайн-кинотеатр Иви: фильмы в хорошем качестве всегда приносят настоящее удовольствие',
                'description': 'Каждый день миллионы людей ищут фильмы онлайн, и никто не хочет усложнять себе жизнь – и вы наверняка один из них! А раз так, то Иви – это именно тот ресурс, который вам нужен. От лучших кинолент в HD-качестве вас отделяет буквально один клик. Мы не просто освобождаем от необходимости идти в кинотеатр или изучать программу телепередач – у посетителей нашего ресурса гораздо больше возможностей.',
                'description2': 'Видеотека Иви – это постоянно пополняющаяся коллекция в рунете, которая насчитывает более 60 тысяч отечественного и зарубежного контента, доступного для просмотра онлайн. Мы первыми в России подписали контракты с крупнейшими голливудскими студиями (Walt Disney, Warner Bros., Sony, 20th Century Fox, Universal, Paramount, MGM и другими) и на постоянной основе сотрудничаем с крупнейшими российскими компаниями и телеканалами.',
                'description3': 'Онлайн-кинотеатр ivi.ru – это:',
                'description4': 'уникальная рекомендательная система, учитывающая ваши предпочтения и предлагающая посмотреть именно то, что точно придется вам по душе;',
                'description5': 'просмотр в одно касание на любом из устройств, подключенном к вашему Иви-аккаунту – от смартфонов до телевизоров с технологией Smart TV;',
                'description6': 'возможность скачивать в память мобильного устройства лицензионный контент и смотреть его без доступа к Интернету;',
                'description7': 'уникальные условия и преимущества для обладателей подписки Иви, делающей кинопросмотр комфортным и приятным;',
                'description8': 'удобная и продвинутая система уведомлений, вы не пропустите выход крутого обсуждаемого блокбастера – мы известим о появлении подходящим для вас способом;',
                'description9': 'возможность добавлять фильмы в «смотреть позже», чтобы вернуться к ним в свободное время;',
                'description10': 'контент, для просмотра которого не требуется устанавливать видеоплееры или искать кодеки;',
                'description11': 'просмотр онлайн контента хорошего разрешения без регистрации и смс.',
                'description12': 'Откройте для себя возможность смотреть фильмы онлайн бесплатно в отличном качестве с кинотеатром Иви!',
                'toggle': 'Свернуть',
                'toggle2': 'Развернуть'
            },
        }} locale={'ru'}>
            <FilmsClause />
        </NextIntlProvider>)
        const toggleButton = screen.getByText(/развернуть/i)
        fireEvent.click(toggleButton)
        const innerText = screen.getByText(/Видеотека Иви/i)
        expect(innerText).toBeInTheDocument()
    })

    test('hides inner text when toggle button is clicked twice', () => {
        render(<NextIntlProvider messages={{
            'FilmsClause': {
                'title': 'Онлайн-кинотеатр Иви: фильмы в хорошем качестве всегда приносят настоящее удовольствие',
                'description': 'Каждый день миллионы людей ищут фильмы онлайн, и никто не хочет усложнять себе жизнь – и вы наверняка один из них! А раз так, то Иви – это именно тот ресурс, который вам нужен. От лучших кинолент в HD-качестве вас отделяет буквально один клик. Мы не просто освобождаем от необходимости идти в кинотеатр или изучать программу телепередач – у посетителей нашего ресурса гораздо больше возможностей.',
                'description2': 'Видеотека Иви – это постоянно пополняющаяся коллекция в рунете, которая насчитывает более 60 тысяч отечественного и зарубежного контента, доступного для просмотра онлайн. Мы первыми в России подписали контракты с крупнейшими голливудскими студиями (Walt Disney, Warner Bros., Sony, 20th Century Fox, Universal, Paramount, MGM и другими) и на постоянной основе сотрудничаем с крупнейшими российскими компаниями и телеканалами.',
                'description3': 'Онлайн-кинотеатр ivi.ru – это:',
                'description4': 'уникальная рекомендательная система, учитывающая ваши предпочтения и предлагающая посмотреть именно то, что точно придется вам по душе;',
                'description5': 'просмотр в одно касание на любом из устройств, подключенном к вашему Иви-аккаунту – от смартфонов до телевизоров с технологией Smart TV;',
                'description6': 'возможность скачивать в память мобильного устройства лицензионный контент и смотреть его без доступа к Интернету;',
                'description7': 'уникальные условия и преимущества для обладателей подписки Иви, делающей кинопросмотр комфортным и приятным;',
                'description8': 'удобная и продвинутая система уведомлений, вы не пропустите выход крутого обсуждаемого блокбастера – мы известим о появлении подходящим для вас способом;',
                'description9': 'возможность добавлять фильмы в «смотреть позже», чтобы вернуться к ним в свободное время;',
                'description10': 'контент, для просмотра которого не требуется устанавливать видеоплееры или искать кодеки;',
                'description11': 'просмотр онлайн контента хорошего разрешения без регистрации и смс.',
                'description12': 'Откройте для себя возможность смотреть фильмы онлайн бесплатно в отличном качестве с кинотеатром Иви!',
                'toggle': 'Свернуть',
                'toggle2': 'Развернуть'
            },
        }} locale={'ru'}>
            <FilmsClause />
        </NextIntlProvider>)
        const toggleButton = screen.getByText(/развернуть/i)
        fireEvent.click(toggleButton)
        fireEvent.click(toggleButton)
        const innerText = screen.queryByText(/Видеотека Иви/i)
        expect(innerText).not.toBeInTheDocument()
    })
})