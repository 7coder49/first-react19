"use client";

import { useExamsStore } from "@/store/examStore";
import { useEffect } from "react";

export default function ReportPage() {
  const { exams, fetchExams } = useExamsStore();
  
  useEffect(() => {
    fetchExams();
  }, []);
  
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold">Report</h1>
      <p className="mt-4">Welcome to your report!</p>
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
  );
}
