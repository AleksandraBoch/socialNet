import React from 'react';
import './App.css';
import {Header} from "./components/header/header";
import {NavBar} from "./components/navBar/navBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {News} from "./components/news/news";
import {ActionsTypes, StoreType} from "./components/State/State";
import store, {AppStateType} from "./components/State/redux-store";
import {useSelector} from "react-redux";


export type AppPropsType = {
    store: AppStateType,
    // store: StoreType,
    dispatch: (action: ActionsTypes) => void
}

const App: React.FC<AppPropsType> = (props) => {
    // const state = useSelector((state)=>state)
    // console.log('state', state)
    return (
        <div className={'app-wrapper'}>
            <BrowserRouter>
                <Header/>
                <NavBar/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path={'/profile'} element={<Profile
                            profilePage={props.store.profilePage}
                            dispatch={props.dispatch}
                        />}/>

                        <Route path={'/dialogs/*'} element={<Dialogs
                            dispatch={props.dispatch}
                            dialogsPage={props.store.dialogsPage}
                        />}/>


                        <Route path={'/news'} element={<News/>}/>
                    </Routes>

                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
