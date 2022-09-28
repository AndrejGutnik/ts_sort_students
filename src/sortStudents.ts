
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[]
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAverageGrade(numbers: number[]): number {
  return numbers.reduce((sum, number) => sum + number) / numbers.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const cloneStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? cloneStudents
          .sort((firstStudent, secondStudent) => (
            firstStudent[sortBy].localeCompare(secondStudent[sortBy])))
        : cloneStudents
          .sort((firstStudent, secondStudent) => (
            secondStudent[sortBy].localeCompare(firstStudent[sortBy])));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? cloneStudents
          .sort((firstStudent, secondStudent) => (
            Number(firstStudent[sortBy]) - Number(secondStudent[sortBy])))
        : cloneStudents
          .sort((firstStudent, secondStudent) => (
            Number(secondStudent[sortBy]) - Number(firstStudent[sortBy])));

    case SortType.AverageGrade:
      return order === 'asc'
        ? cloneStudents
          .sort((firstStudent, secondStudent) => (
            getAverageGrade(firstStudent[sortBy])
              - getAverageGrade(secondStudent[sortBy])))
        : cloneStudents
          .sort((firstStudent, secondStudent) => (
            getAverageGrade(secondStudent[sortBy])
              - getAverageGrade(firstStudent[sortBy])));
    default:
      break;
  }

  return cloneStudents;
}
