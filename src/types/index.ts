export interface Topic {
  TopicName: string;
  Concept: string;
  Tricks: string[];
  Example: string;
  SampleQuestions: Question[];
}

export interface Question {
  Question: string;
  Answer: string;
}

export interface LogicalReasoningGuide {
  LogicalReasoningGuide: Topic[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}