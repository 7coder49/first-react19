import { AxiosResponse } from "axios";

interface CustomAxiosResponse<T = unknown> extends AxiosResponse<T> {
  success: boolean;
  message: string;
}

interface Exam {
  examId: number;
  patientId: string;
  patientName: string;
  examDateTime: string;
  patientDob: string;
  accessionNo: string;
  studyDescription: string;
  status: string;
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