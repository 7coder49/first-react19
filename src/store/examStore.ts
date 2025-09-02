import { create } from "zustand";
import { apiService } from "@/lib/api-service";
import { ExamsState } from "@/types";

export const useExamsStore = create<ExamsState>((set) => ({
  exams: [],
  setExams: (data) => set({ exams: data }),
  fetchExams: async () => {
    const res: any = await apiService.post("/api/getAllExams");
    if (res.data?.data) {
      set({ exams: res.data.data.exams });
    }
  },
}));
