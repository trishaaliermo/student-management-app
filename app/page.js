import { getConnection } from '@/lib/db';
import StudentCard from '@/components/StudentCard';
import Link from 'next/link';
import { Suspense } from 'react';

async function StudentGrid() {
  const db = await getConnection();
  const [students] = await db.execute('SELECT * FROM students ORDER BY created_at DESC');
  await db.end();

  if (students.length === 0) {
    return <p>No students found in database. Make sure your SQL table is set up!</p>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {students.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Student Directory</h2>
        <Link href="/register" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add New Student
        </Link>
      </div>

      <Suspense fallback={<p className="text-blue-500">Loading student directory...</p>}>
        <StudentGrid />
      </Suspense>
    </div>
  );
}