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
              <th className="px-4 py-2 border-b">User ID</th>
              <th className="px-4 py-2 border-b">User Name</th>
              <th className="px-4 py-2 border-b">Email</th>
            </tr>
          </thead>
          <tbody>
            {exams.map((exam) => (
              <tr key={exam.userId} className="text-center hover:bg-gray-50">
                <td className="px-4 py-2 border-b">{exam.userId}</td>
                <td className="px-4 py-2 border-b">{exam.userName}</td>
                <td className="px-4 py-2 border-b">{exam.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}