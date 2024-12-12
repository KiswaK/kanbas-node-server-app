import Database from "../Database/index.js";
export function findAssignmentsForCourse(courseId) {
    const { assignments } = Database;
    return assignments.filter((assignment) => assignment.course === courseId);
  }
export function createAssignment(assignment) {
    const newAssginment= { ...assignment, _id: Date.now().toString() };
    Database.assignments = [...Database.assignments, newAssginment];
    console.log("After")
    console.log(Database.assignments)
    return newAssginment;
  }

  export function deleteAssignment(assignmentId) {
    const { assignments } = Database;
    console.log("Deleting assignment with ID:", assignmentId);
    
    // Store the original length
    const originalLength = Database.assignments.length;
    
    // Filter out the assignment
    Database.assignments = assignments.filter((assignment) => assignment._id !== assignmentId);
    
    // Return a status object indicating success or failure
    return {
      deleted: Database.assignments.length < originalLength,
      count: originalLength - Database.assignments.length
    };
  }

   export function updateAssignment(assignmentId, assignmentUpdates) {
    const { assignments } = Database;
    console.log(assignmentId)
    const assignment = assignments.find((assignment) => assignment._id === assignmentId);
    Object.assign(assignment, assignmentUpdates);
    return assignment;
   }