import { createContext, useContext, useEffect, useState } from "react";
import { doc, getFirestore, onSnapshot } from "firebase/firestore";
import { UserAuth } from "./userContext";
import PropTypes from 'prop-types';

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
                        name: newData.name,
                        surName: newData.surName,
                        location: newData.location,
                        phoneNumber: newData.phoneNumber,
                        email: newData.email,
                        userAvatar: newData.userAvatar,
                        
                        trabajosRealizados: newData.trabajosRealizados,
                        precio: newData.precio,
                        pinturaDeMadera: newData.pinturaDeMadera,
                        trabajosEnAltura: newData.trabajosEnAltura,
                        durlock: newData.durlock,
                        exteriores: newData.exteriores,
                        
                        verificado: newData.verificado,
                        plan1: newData.plan1,
                        plan2: newData.plan2,
                        plan3: newData.plan3,
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
    }, [userLogged, firestore]);

    return (
        <UserLogContext.Provider value={{ userInfo }}>
            {children}
        </UserLogContext.Provider>
    );
};

UserLogContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const UserLog = () => {
    return useContext(UserLogContext);
};