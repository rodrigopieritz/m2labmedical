const EXAMREGISTER_KEY = "exams";

export const getExamsList = () => {
  const examsList = JSON.parse(localStorage.getItem(EXAMREGISTER_KEY)) || [];
  return examsList;
};

export const addExamRegister = (exam) => {
  const examsList = getExamsList();
  
  exam.id = examsList.length > 0 ? Math.max(...examsList.map((exam) => exam.id)) + 1 : 1;
  examsList.push(exam);

  localStorage.setItem(EXAMREGISTER_KEY, JSON.stringify(examsList));
};

export const removeexam = (examId) => {
  let examsList = getExamsList();
  examsList = examsList.filter((exam) => exam.id !== examId);
  localStorage.setItem(EXAMREGISTER_KEY, JSON.stringify(examsList));
};