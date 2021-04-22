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
        console.log(rawUser);
        if (rawUser) {
            const user = await formatUser(rawUser);
            const { token, ...userWithoutToken } = user;

            createUser(user.uid, userWithoutToken);
            setUser(user);
            const data = {
                uid: user.uid,
                email: user.email,
                name: user.name,
                photo_url: user.photoUrl,
            };
            console.log(data);
            axios
                .post('/users', data)
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            // axios({
            //     method: 'post',
            //     url: 'http://localhost:3001/api/v1/users',
            //     data: data,
            // }).then(
            //     (response) => {
            //         console.log(response);
            //     },
            //     (error) => {
            //         console.log(error);
            //     }
            // );
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
