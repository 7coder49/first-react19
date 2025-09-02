"use client";

import { useEffect } from "react";
import { create } from "zustand";
import { useExamsStore } from "@/store/examStore";
import { Exam, ExamsState } from "@/types";

export default function DashboardPage() {
  const { exams, fetchExams } = useExamsStore();

  useEffect(() => {
    fetchExams();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border-b">Exam ID</th>
              <th className="px-4 py-2 border-b">Patient ID</th>
              <th className="px-4 py-2 border-b">Patient Name</th>
              <th className="px-4 py-2 border-b">Exam Time</th>
              <th className="px-4 py-2 border-b">DOB</th>
              <th className="px-4 py-2 border-b">Accession No</th>
              <th className="px-4 py-2 border-b">Study Description</th>
              <th className="px-4 py-2 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {exams.map((exam) => (
              <tr key={exam.examId} className="text-center hover:bg-gray-50">
                <td className="px-4 py-2 border-b">{exam.examId}</td>
                <td className="px-4 py-2 border-b">{exam.patientId}</td>
                <td className="px-4 py-2 border-b">{exam.patientName}</td>
                <td className="px-4 py-2 border-b">{exam.examDateTime}</td>
                <td className="px-4 py-2 border-b">{exam.patientDob || "-"}</td>
                <td className="px-4 py-2 border-b">{exam.accessionNo}</td>
                <td className="px-4 py-2 border-b">
                  {exam.studyDescription || "-"}
                </td>
                <td className="px-4 py-2 border-b">{exam.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export const useExams = create<ExamsState>((set) => ({
  exams: [],
  setExams: (data: Exam[]) => set({ exams: data }),
}));