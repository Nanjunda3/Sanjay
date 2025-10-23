/*
  # Portfolio Chatbot Knowledge Base

  ## Description
  Creates a knowledge base table for the AI chatbot to answer questions about Sanjay's portfolio,
  work experience, skills, and projects.

  ## Tables Created
  - `portfolio_knowledge`
    - `id` (uuid, primary key): Unique identifier for each knowledge entry
    - `category` (text): Category of information (experience, skills, projects, education, contact)
    - `question` (text): Example question or topic
    - `answer` (text): Detailed answer or information
    - `keywords` (text[]): Array of keywords for better search matching
    - `created_at` (timestamptz): Timestamp of record creation

  ## Security
  - Enable RLS on `portfolio_knowledge` table
  - Add policy for public read access (portfolio information is public)
  
  ## Notes
  - This table stores structured information about Sanjay's professional background
  - Public read access is appropriate as this is portfolio information meant to be shared
*/

CREATE TABLE IF NOT EXISTS portfolio_knowledge (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category text NOT NULL,
  question text NOT NULL,
  answer text NOT NULL,
  keywords text[] DEFAULT '{}',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE portfolio_knowledge ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read portfolio knowledge"
  ON portfolio_knowledge
  FOR SELECT
  TO anon, authenticated
  USING (true);