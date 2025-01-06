import fetchStudents from '@/services/api';

export default async function UsersPage() {
  const students = await fetchStudents();

  return (
    <div>
      <h1>Students List</h1>
      <ul>
        {students.map((student: { id: number; name: string; grade: string }) => (
          <li key={student.id}>{student.name} - Grade: {student.grade}</li>
        ))}
      </ul>
    </div>
  );
}
