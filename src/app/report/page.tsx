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
