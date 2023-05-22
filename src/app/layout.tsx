import './global.scss'
import Footer from '@/components/Footer/Footer'
import React from 'react'
import Header from '@/components/Header/Header'
import TabBar from '@/components/UI/TabBar/TabBar'
import Auth from '@/components/Auth/Auth'
import {Metadata} from 'next'
import {Providers} from '@/redux/Provider'

export const metadata: Metadata = {
    title: 'Онлайн-кинотеатр Иви - фильмы, сериалы и мультфильмы смотреть онлайн бесплатно в хорошем качестве',
    description: 'Generated by Next.js',
}

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html lang='en'>
        <body>
           <Providers>
               <Header/>
               {/*работает просто раскоментить*/}
               {/*<Auth/>*/}
               <main>
                   {children}
               </main>
               {/*пока не работает, проблема с маршрутами в компоненте*/}
               {/*<TabBar/>*/}
               <Footer/>
           </Providers>
        </body>
        </html>
    )
}
