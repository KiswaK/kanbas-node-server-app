import * as assignmentsDao from "./dao.js"
export default function AssignmentRoutes(app) {
    app.delete("/api/assignments/:assignmentId", (req, res) => {
        const { assignmentId } = req.params;
        const status = assignmentsDao.deleteAssignment(assignmentId);
        
        if (status.deleted) {
          res.status(200).json(status);
        } else {
          res.status(404).json({ message: "Assignment not found" });
        }
      });

  app.put("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    const status = assignmentsDao.updateAssignment(assignmentId, assignmentUpdates);
    res.send(status);
  });
}