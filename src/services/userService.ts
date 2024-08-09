// services/userService.ts
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase';

export const getUserBojId = async (userId: string): Promise<string | null> => {
  try {
    const userRef = doc(db, 'users', userId);
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
      const userData = userSnap.data();
      return userData.boj_id || null;
    }
    return null;
  } catch (error) {
    console.error("Error fetching user's boj_id:", error);
    return null;
  }
};