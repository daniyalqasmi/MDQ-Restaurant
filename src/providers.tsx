"use client"

import { Provider } from "react-redux"
import { store } from "./app/store/store"
import { PersistGate } from "redux-persist/integration/react"
import persistStore from "redux-persist/es/persistStore"


export default function Providers({
    children,
}: {
    children: React.ReactNode
}) {
    let persistor = persistStore(store)
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    )
}