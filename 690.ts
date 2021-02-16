class Employee {
  id: number;
  importance: number;
  subordinates: number[];
  constructor(
    id: number,
    importance: number,
    subordinates: number[]
  ) {
    this.id = id === undefined ? 0 : id;
    this.importance = importance === undefined ? 0 : importance;
    this.subordinates =
      subordinates === undefined ? [] : subordinates;
  }
}

function GetImportance(employees: Employee[], id: number): number {
  const employeeMap = new Map<number, Employee>();
  employees.forEach((employee) => {
    employeeMap.set(employee.id, employee);
  });

  const importanceMap = new Map<number, number>(); // id, importance

  function getImportanceRecursive(id: number): number {
    if (importanceMap.has(id)) {
      return importanceMap.get(id);
    }

    const employee: Employee = employeeMap.get(id);
    const importance = employee.subordinates.reduce(
      (prev, id) => getImportanceRecursive(id) + prev,
      employee.importance
    );
    importanceMap.set(id, importance);
    return importance;
  }

  return getImportanceRecursive(id);
}
