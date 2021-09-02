const DASHBOARD_ROUTE = '/admin/dashboard';

export const Routes = {
  Homepage: '/',
  Login: '/login',
  Register: '/register',
  CourseLibrary: '/learning',

  // admin routes
  Admin: `/admin`,
  AdminDashboard: `${DASHBOARD_ROUTE}`,
  AdminCourses: `${DASHBOARD_ROUTE}/courses`,
  AdminAlgos: `${DASHBOARD_ROUTE}/algos`,
  AdminProblems: `${DASHBOARD_ROUTE}/problems`,
  AdminAddCourse: `${DASHBOARD_ROUTE}/add_course`,
  AdminAddAlgo: `${DASHBOARD_ROUTE}/add_algo`,
  AdminAlgoPreview: `${DASHBOARD_ROUTE}/algo_preview`,
  AdminAddProblem: `${DASHBOARD_ROUTE}/add_problem`,
  AdminGetCourses: `${DASHBOARD_ROUTE}/courses`,
  CoursePreview: `${DASHBOARD_ROUTE}/courses`,
  CourseEdit: `${DASHBOARD_ROUTE}/edit_course`,
  AddLecture: `${DASHBOARD_ROUTE}/add_lecture`,
  AdminQuizzes: `${DASHBOARD_ROUTE}/quizzes`,
  AddQuizz: `${DASHBOARD_ROUTE}/add_quizz`,
  QuizzPreview: `${DASHBOARD_ROUTE}/quizz_preview`,

  // Playground routes
  Playground: `/playgrounds/:id`,
  CompilerPlayground: '/comp_playground',
};
