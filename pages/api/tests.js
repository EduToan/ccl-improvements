// pages/api/tests.js
export default function handler(req, res) {
    res.status(200).json([
      {
        id: 1,
        name: "Academic Consultation",
        description: "Scenario: Academic advice session",
        image: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
        difficulty: "easy",
      },
      {
        id: 2,
        name: "Adult Migrant English Program",
        description: "Scenario: A migration discussion",
        image: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
        difficulty: "medium",
      },
      {
        id: 3,
        name: "AI Server Troubleshooting",
        description: "Scenario: AI troubleshooting",
        image: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
        difficulty: "hard",
      },
    ]);
  }
  