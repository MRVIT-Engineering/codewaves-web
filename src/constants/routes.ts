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
  AdminAddCourse: `${DASHBOARD_ROUTE}/add_course`,
  AdminAlgos: `${DASHBOARD_ROUTE}/algos`,
  AdminAddAlgo: `${DASHBOARD_ROUTE}/add_algo`,
  AdminAlgoPreview: `${DASHBOARD_ROUTE}/algo_preview`,
  AdminProblems: `${DASHBOARD_ROUTE}/problems`,
  AdminAddProblem: `${DASHBOARD_ROUTE}/add_problem`,
  AdminEditProblem: `${DASHBOARD_ROUTE}/problem`,
  AdminGetCourses: `${DASHBOARD_ROUTE}/courses`,
  CoursePreview: `${DASHBOARD_ROUTE}/courses`,
  CourseEdit: `${DASHBOARD_ROUTE}/edit_course`,
  AddLecture: `${DASHBOARD_ROUTE}/add_lecture`,
  AdminQuizzes: `${DASHBOARD_ROUTE}/quizzes`,
  AddQuizz: `${DASHBOARD_ROUTE}/add_quizz`,
  QuizzPreview: `${DASHBOARD_ROUTE}/quizz_preview`,

  // Playground routes
  Playgrounds: '/playgrounds',
  Playground: `/playgrounds/:id`,
  CompilerPlayground: '/comp_playground',

  TestScreen: '/test',
};
