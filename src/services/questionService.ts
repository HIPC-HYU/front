import {
  collection,
  query,
  orderBy,
  limit,
  getDocs,
  Timestamp,
  doc,
  updateDoc,
  getDoc,
  addDoc,
} from "firebase/firestore";
import { db } from "./firebase";
import { Question, PaginationInfo, QuestionListType } from "../types";

const QUESTIONS_PER_PAGE = 10;

export const getQuestionList = async (
  page: number
): Promise<{
  questions: QuestionListType[];
  paginationInfo: PaginationInfo;
}> => {
  try {
    const questionsRef = collection(db, "questions");
    let q = query(
      questionsRef,
      orderBy("createdAt", "desc"),
      limit(QUESTIONS_PER_PAGE)
    );

    const snapshot = await getDocs(q);
    const questions: QuestionListType[] = snapshot.docs.map(
      (doc) => ({
        id: doc.id,
        p_num: doc.data().p_num,
        title: doc.data().title,
        codeLanguage: doc.data().codeLanguage,
        solved: doc.data().solved,
        createdAt: (doc.data().createdAt as Timestamp).toDate(),
        writer: doc.data().writer,
      })
    );

    const totalDocs = await getDocs(questionsRef);
    const totalQuestions = totalDocs.size;

    const paginationInfo: PaginationInfo = {
      currentPage: page,
      totalPages: Math.ceil(totalQuestions / QUESTIONS_PER_PAGE),
      pageSize: QUESTIONS_PER_PAGE,
    };

    return { questions, paginationInfo };
  } catch (error) {
    console.error("Error fetching questions:", error);
    throw error;
  }
};

export const getQuestions = async (
  page: number
): Promise<{
  questions: Question[];
  paginationInfo: PaginationInfo;
}> => {
  try {
    const questionsRef = collection(db, "questions");
    let q = query(
      questionsRef,
      orderBy("createdAt", "desc"),
      limit(QUESTIONS_PER_PAGE)
    );

    const snapshot = await getDocs(q);
    const questions = snapshot.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
          createdAt: (doc.data().createdAt as Timestamp).toDate(),
        } as Question)
    );

    const totalDocs = await getDocs(questionsRef);
    const totalQuestions = totalDocs.size;

    const paginationInfo: PaginationInfo = {
      currentPage: page,
      totalPages: Math.ceil(totalQuestions / QUESTIONS_PER_PAGE),
      pageSize: QUESTIONS_PER_PAGE,
    };

    return { questions, paginationInfo };
  } catch (error) {
    console.error("Error fetching questions:", error);
    throw error;
  }
};

export const getQuestionById = async (id: string): Promise<Question | null> => {
  try {
    const docRef = doc(db, "questions", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      return {
        id: docSnap.id,
        ...data,
        createdAt: (data.createdAt as Timestamp).toDate(),
      } as Question;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching question:", error);
    throw error;
  }
};

export const addQuestion = async (
  question: Omit<Question, "id" | "createdAt" | "solved">
): Promise<string> => {
  try {
    const docRef = await addDoc(collection(db, "questions"), {
      ...question,
      solved: false,
      createdAt: new Date(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error adding question:", error);
    throw error;
  }
};

export const updateQuestion = async (
  questionId: string,
  updatedFields: Partial<Question>
): Promise<void> => {
  try {
    const questionRef = doc(db, "questions", questionId);
    await updateDoc(questionRef, updatedFields);
  } catch (error) {
    console.error("Error updating question:", error);
    throw new Error("질문 업데이트에 실패했습니다.");
  }
};
