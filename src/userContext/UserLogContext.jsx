import { createContext, useContext, useEffect, useState } from "react";
import { doc, getFirestore, onSnapshot } from "firebase/firestore";
import { UserAuth } from "./userContext";

const UserLogContext = createContext();

export const UserLogContextProvider = ({children}) => {
    const firestore = getFirestore();
    const { userLogged } = UserAuth();
    const [ userInfo, setUserInfo ] = useState({});

    useEffect(() => {
        if (userLogged) {
            const unsuscribe = onSnapshot(doc(firestore, `Users/${userLogged.uid}`),
                (updData) => {
                    const newData = updData.data();
                    const userData = {
                        email: userLogged.email,
                        name: newData.name,
                        surName: newData.surName,
                        phone: newData.phone,

                    };
                    setUserInfo(userData);
                }
            );
            return () => {
                unsuscribe();
            };
        } else {
            setUserInfo({});
        }
    }, [userLogged]);

    return (
        <UserLogContext.Provider value={{ userInfo }}>
            {children}
        </UserLogContext.Provider>
    );
};

export const UserLog = () => {
    return useContext(UserLogContext);
};