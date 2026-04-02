'use client'
// Тут мы подключаем store который создали в makeStore
import { makeStore } from '../lib/store'
import { Provider } from 'react-redux'
import { useState } from 'react'

export default function StoreProvider({
    children
}: {
    children: React.ReactNode
}) {
    const [store] = useState(() => makeStore())
    return <Provider store={store}>{children}</Provider>
}
