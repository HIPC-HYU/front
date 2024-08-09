import {
  collection,
  query,
  where,
  getDocs,
  Timestamp,
  orderBy,
  limit,
} from "firebase/firestore";
import { db } from "./firebase"; // Firebase 설정 파일 경로에 맞게 수정해주세요

interface UserState {
  boj_id: string;
  full_solved: number;
  rating: number;
  tier: string;
}

export const fetchTodayProblems = async () => {
  try {
    const now = new Date();
    const today6AM = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      6,
      0,
      0
    );

    // 현재 시간이 오늘 오전 6시 이전이라면, 어제 오전 6시를 기준으로 설정
    if (now < today6AM) {
      today6AM.setDate(today6AM.getDate() - 1);
    }

    const problemsRef = collection(db, "problems");
    const todayQuery = query(
      problemsRef,
      where("p_time", ">=", Timestamp.fromDate(today6AM)),
      orderBy("p_time", "desc")
    );

    const querySnapshot = await getDocs(todayQuery);
    const todayProblems = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return todayProblems;
  } catch (error) {
    console.error("Error fetching today's problems: ", error);
    throw error;
  }
};

export const fetchProblems = async () => {
  try {
    const problemsRef = collection(db, "problems");
    const recentProblemsQuery = query(
      problemsRef,
      orderBy("p_time", "desc"),
      limit(20)
    );

    const querySnapshot = await getDocs(recentProblemsQuery);
    const recentProblems = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return recentProblems;
  } catch (error) {
    console.error("Error fetching recent problems: ", error);
    throw error;
  }
};

export const fetchUserStates = async (): Promise<UserState[]> => {
  try {
    const newstateRef = collection(db, "newstate");
    const querySnapshot = await getDocs(newstateRef);

    const userStates = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        boj_id: data.boj_id,
        full_solved: data.full_solved,
        rating: data.rating,
        tier: data.tier,
      } as UserState;
    });

    return userStates;
  } catch (error) {
    console.error("Error fetching user states: ", error);
    throw error;
  }
};

// 푼 문제 수로 정렬하여 가져오기
export const fetchUserStatesSortedByProblemsSolved = async (): Promise<
  UserState[]
> => {
  try {
    const newstateRef = collection(db, "newstate");
    const q = query(newstateRef, orderBy("full_solved", "desc"));
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        boj_id: data.boj_id,
        full_solved: data.full_solved,
        rating: data.rating,
        tier: data.tier,
      } as UserState;
    });
  } catch (error) {
    console.error(
      "Error fetching user states sorted by problems solved: ",
      error
    );
    throw error;
  }
};

// 레이팅으로 정렬하여 가져오기
export const fetchUserStatesSortedByRating = async (): Promise<UserState[]> => {
  try {
    const newstateRef = collection(db, "newstate");
    const q = query(newstateRef, orderBy("rating", "desc"));
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        boj_id: data.boj_id,
        full_solved: data.full_solved,
        rating: data.rating,
        tier: data.tier,
      } as UserState;
    });
  } catch (error) {
    console.error("Error fetching user states sorted by rating: ", error);
    throw error;
  }
};
