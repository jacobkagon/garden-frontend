import React, { useState, useEffect, useContext, createContext } from 'react';
import Router from 'next/router';
import axios from 'axios';

import firebase from 'firebase';
import { createUser } from './db';

const authContext = createContext();

export function AuthProvider({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
    return useContext(authContext);
};

function useProvideAuth() {
    const [user, setUser] = useState(null);

    const handleUser = async (rawUser) => {
        if (rawUser) {
            const user = await formatUser(rawUser);
            const { token, ...userWithoutToken } = user;

            createUser(user.uid, userWithoutToken);
            const data = {
                uid: user.uid,
                email: user.email,
                name: user.name,
                photo_url: user.photoUrl,
            };
            axios
                .post('/users', data)
                .then(function (response) {
                    setUser(user);
                    axios.defaults.headers.common[
                        'Authorization'
                    ] = `Bearer ${response.data.token}`;

                    // console.log(response);
                    // grab the jwt token
                })
                .catch(function (error) {
                    console.log(error);
                });
            return user;
        } else {
            setUser(false);
            return false;
        }
    };

    const signinWithGoogle = () => {
        return firebase
            .auth()
            .signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .then((response) => handleUser(response.user));
    };

    const signout = () => {
        Router.push('/');

        return firebase
            .auth()
            .signOut()
            .then(() => {
                handleUser(false);
                delete axios.defaults.headers.common['Authorization'];
                //clear jwt/local storage
            });
    };

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(handleUser);

        return () => unsubscribe();
    }, []);

    return {
        user,
        signinWithGoogle,
        signout,
    };
}

const formatUser = async (user) => {
    const token = await user.getIdToken();
    return {
        uid: user.uid,
        email: user.email,
        name: user.displayName,
        provider: user.providerData[0].providerId,
        photoUrl: user.photoURL,
        token,
    };
};
