import { AxiosResponse } from "axios";

interface CustomAxiosResponse<T = unknown> extends AxiosResponse<T> {
  success: boolean;
  message: string;
}

interface Exam {
  userId: number;
  userName: string;
  email: string;
}

interface ExamsState {
  exams: Exam[];
  setExams: (data: Exam[]) => void;
}

interface ExamsState {
    exams: Exam[];
    setExams: (data: Exam[]) => void;
    fetchExams: () => Promise<void>;
}

export type { CustomAxiosResponse, Exam, ExamsState };