export enum Routes {
  Homepage = '/',
  Login = '/login',
  Register = '/register',
  CourseLibrary = '/learning',

  // admin routes
  Admin = '/admin',
  AdminDashboard = '/admin/dashboard',
  AdminCourses = '/admin/dashboard/courses',
  AdminAlgos = '/admin/dashboard/algos',
  AdminProblems = '/admin/dashboard/problems',
  AdminAddCourse = '/admin/dashboard/add_course',
  AdminAddAlgo = '/admin/dashboard/add_algo',
  AdminAddProblem = '/admin/dashboard/add_problem',
  AdminGetCourses = '/admin/dashboard/courses',
  CoursePreview = '/admin/dashboard/courses',
  CourseEdit = '/admin/dashboard/edit_course',
  AddLecture = '/admin/dashbaord/add_lecture',
  AdminQuizzes = '/admin/dashboard/quizzes',
  AddQuizz = '/admin/dashboard/add_quizz',
  QuizzPreview = '/admin/dashboard/quizz_preview',

  // Playground routes
  Playground = '/playgrounds/:id',
}
