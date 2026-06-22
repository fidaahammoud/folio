import "./ai-knowledge.css";

import React from "react";
import { HiOutlineAcademicCap } from "react-icons/hi";

const learningTopics = [
  "Agentic AI & Autonomous AI Agents",
  "Large Language Models (LLMs)",
  "OpenAI Agents SDK",
  "CrewAI",
  "LangGraph",
  "AutoGen",
  "Model Context Protocol (MCP)",
  "Multi-Agent Systems",
  "Prompt Engineering",
  "AI Workflow Automation",
  "AI Research & Software Engineering Agents",
  "Python for AI systems",
];

const AiKnowledge = () => {
  return (
    <section id="ai-knowledge">
      <h2>AI & Data Science Knowledge</h2>
      <div className="container ai-knowledge__container">
        <div className="ai-knowledge__card">
          <p className="ai-knowledge__intro">
            I am currently developing my knowledge in Artificial Intelligence
            and Data Science through self-learning, with a focus on modern AI
            systems and Agentic AI frameworks.
          </p>
          <p className="ai-knowledge__subtitle">
            Skills and concepts I am learning include:
          </p>
          <ul className="ai-knowledge__topics">
            {learningTopics.map((topic) => (
              <li key={topic} className="ai-knowledge__topic">
                <HiOutlineAcademicCap className="ai-knowledge__topic-icon" />
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AiKnowledge;
