// "use client";

// import { useEffect, useState } from "react";
import fetchStudents from "@/services/api";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
} from "react";

interface Student {
  id: string;
  first_name: string;
  last_name: string;
  date_of_birth: string;
  grade_level: number;
  gpa: number;
  enrollment_date: string;
  status: string;
  email: string;
  courses: string[];
  student_id_number: string;
  emergency_contact: {
    name: string;
    relationship: string;
    phone: string;
  };
}

export default async function StudentsPage() {
  // const [students, setStudents] = useState<Student[]>([]);
  // const [searchTerm, setSearchTerm] = useState("");

  // useEffect(() => {
  //   // const getStudents = async () => {
  //   //   try {
  //       // const data = await fetchStudents();
  //       // setStudents(data.students);
  //     // } catch (error) {
  //     //   console.error("Error fetching students:", error);
  //     // }
  //   // };

  //   // getStudents();
  // }, []);

  const data = await fetchStudents();
  const students = data.students;

  // const filteredStudents = students.filter((student) =>
  //   `${student.first_name} ${student.last_name}`
  //     .toLowerCase()
  //     .includes(searchTerm.toLowerCase())
  // );

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Students Directory</h1>
            <Input
              placeholder="Search students..."
              className="max-w-xs"
              // value={searchTerm}
              // onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow key={"header"}>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Grade</TableHead>
                <TableHead>GPA</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Courses</TableHead>
                <TableHead>Emergency Contact</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map(
                (student: {
                  id: string;
                  student_id_number:
                    | string
                    | number
                    | bigint
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | ReactPortal
                    | Promise<AwaitedReactNode>
                    | null
                    | undefined;
                  first_name:
                    | string
                    | number
                    | bigint
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | ReactPortal
                    | Promise<AwaitedReactNode>
                    | null
                    | undefined;
                  last_name:
                    | string
                    | number
                    | bigint
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | ReactPortal
                    | Promise<AwaitedReactNode>
                    | null
                    | undefined;
                  email:
                    | string
                    | number
                    | bigint
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | ReactPortal
                    | Promise<AwaitedReactNode>
                    | null
                    | undefined;
                  grade_level:
                    | string
                    | number
                    | bigint
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | ReactPortal
                    | Promise<AwaitedReactNode>
                    | null
                    | undefined;
                  gpa: number;
                  status:
                    | string
                    | number
                    | bigint
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | Promise<AwaitedReactNode>
                    | null
                    | undefined;
                  courses: any[];
                  emergency_contact: {
                    name:
                      | string
                      | number
                      | bigint
                      | boolean
                      | ReactElement<any, string | JSXElementConstructor<any>>
                      | Iterable<ReactNode>
                      | ReactPortal
                      | Promise<AwaitedReactNode>
                      | null
                      | undefined;
                    relationship:
                      | string
                      | number
                      | bigint
                      | boolean
                      | ReactElement<any, string | JSXElementConstructor<any>>
                      | Iterable<ReactNode>
                      | ReactPortal
                      | Promise<AwaitedReactNode>
                      | null
                      | undefined;
                    phone:
                      | string
                      | number
                      | bigint
                      | boolean
                      | ReactElement<any, string | JSXElementConstructor<any>>
                      | Iterable<ReactNode>
                      | ReactPortal
                      | Promise<AwaitedReactNode>
                      | null
                      | undefined;
                  };
                }) => (
                  <TableRow key={student.id}>
                    <TableCell className="font-medium">
                      {student.student_id_number}
                    </TableCell>
                    <TableCell>
                      <div>
                        {student.first_name} {student.last_name}
                        <div className="text-sm text-gray-500">
                          {student.email}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{student.grade_level}</TableCell>
                    <TableCell>{student.gpa.toFixed(2)}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          student.status === "active"
                            ? "success"
                            : "destructive"
                        }
                      >
                        {student.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {student.courses.map((course) => (
                          <Badge key={course} variant="secondary">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        {student.emergency_contact.name}
                        <div className="text-sm text-gray-500">
                          {student.emergency_contact.relationship} •{" "}
                          {student.emergency_contact.phone}
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
