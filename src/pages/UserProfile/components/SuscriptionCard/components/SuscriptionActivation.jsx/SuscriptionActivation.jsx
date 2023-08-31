import { doc, getFirestore, updateDoc, serverTimestamp } from "firebase/firestore";

export async function SuscriptionActivation(activatePlan, userId) {  

    const timestamp = serverTimestamp();

    try {
        const firestore = getFirestore();
        const userSuscribed = doc(firestore, `Users/${userId}`);
        await updateDoc(userSuscribed, {
            [activatePlan]: true,
            subscriptionEnd: timestamp,
        });
        console.log('Plan adquirido');
    } catch (error) {
        console.log(error);
    }
}
