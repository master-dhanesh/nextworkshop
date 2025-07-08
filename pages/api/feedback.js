const fs = require("fs");
const path = require("path");

function buildFeedbackPath() {
    return path.join(process.cwd(), "data", "feedback-backend.json");
}
function extractFeedback(filePath) {
    const fileData = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(fileData);
}

export default function handler(req, res) {
    if (req.method === "POST") {
        const newFeedbackData = {
            id: new Date().toISOString(),
            ...JSON.parse(req.body),
        };
        const filePath = buildFeedbackPath();
        const data = extractFeedback(filePath);

        data.push(newFeedbackData);
        fs.writeFileSync(filePath, JSON.stringify(data));

        res.status(201).json({
            message: "Success!",
            feedback: newFeedbackData,
        });
    } else {
        const filePath = buildFeedbackPath();
        const data = extractFeedback(filePath);

        res.status(200).json({ feedback: data });
    }
}
