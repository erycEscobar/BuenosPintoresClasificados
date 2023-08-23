import { doc, getFirestore, updateDoc } from "firebase/firestore";



export async function SuscriptionActivation(activatePlan, userId) {

    

    try {
        const firestore = getFirestore();
        const userSuscribed = doc(firestore, `Users/${userId}`);
        await updateDoc(userSuscribed, {
            [activatePlan]: true,
        });
        console.log('Plan adquirido');
    } catch (error) {
        console.log(error);
    }
}
