// ADD A PROJECT: copy one block, paste it at the top of the list, and edit the text.
// status: "completed" | "learning" | "planned"
// github / demo: paste a URL, or leave "" if you don't have one yet.
// The "Live demo" button only appears when `demo` is not empty.
// Completed projects show a GitHub button (disabled until you add the link).
export const projects = [
  {
    id: "smartcare",
    title: "SmartCare Hospital Management System",
    status: "completed",
    description:
      "A console-based Python application that manages patient admission, triage, room and doctor assignment, search and discharge billing for a hospital. It runs in the terminal and has no graphical interface.",
    tech: ["Python", "JSON", "File handling", "Lists", "Dictionaries", "Bubble sort"],
    features: [
      "Patient admission and registration",
      "Triage queue sorted by severity using Bubble Sort",
      "Automatic room allocation based on severity",
      "Doctor assignment from a fixed doctor list",
      "Search patients by name or disease",
      "View the list of doctors",
      "Discharge with an invoice including 18% GST",
      "Loads existing patient records from a JSON file at start-up",
    ],
    limitations: [
      "Console only: no GUI, web interface or database.",
      "New admissions are not saved when the program exits (records are loaded from the JSON file but not written back).",
      "Doctors are picked at random from a fixed list, so availability is not tracked.",
      "Limited input validation, and discharge needs the exact patient name.",
    ],
    github: " https://github.com/mdnomaanansari/HOSPITAL-MANAGEMENT-SYSTEM ",
    demo: "",
  },
  {
    id: "fullstack",
    title: "Full Stack Web Application",
    status: "learning",
    description: "Coming soon. I'm currently learning the web development skills I need to build this.",
    tech: [],
    features: [],
    limitations: [],
    github: "",
    demo: "",
  },
  {
    id: "ai-app",
    title: "AI-Powered Application",
    status: "planned",
    description: "Coming soon. This project is planned and has not been started yet.",
    tech: [],
    features: [],
    limitations: [],
    github: "",
    demo: "",
  },
];

export const statusLabels = {
  completed: "Completed",
  learning: "Currently learning",
  planned: "Planned",
};
