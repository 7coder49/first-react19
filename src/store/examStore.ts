import { create } from "zustand";
import { apiService } from "@/lib/api-service";
import { ExamsState } from "@/types";

export const useExamsStore = create<ExamsState>((set) => ({
  exams: [],
  setExams: (data) => set({ exams: data }),
  fetchExams: async () => {
    const res: any = await apiService.get("/users/getAllUsers");
    console.log(res.data.data);
    
    if (res.data.data) {
      set({ exams: res.data.data });
    }
  },
}));
