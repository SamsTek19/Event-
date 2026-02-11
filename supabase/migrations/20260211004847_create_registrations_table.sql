/*
  # Create Event Registrations Table

  1. New Tables
    - `registrations`
      - `id` (uuid, primary key) - Unique identifier for each registration
      - `full_name` (text) - Participant's full name
      - `email` (text) - Participant's email address
      - `institution` (text) - Institution or organization name
      - `role` (text) - Participant's role (e.g., student, professional, etc.)
      - `registration_type` (text) - Individual or Team registration
      - `team_name` (text, optional) - Team name if registering as a team
      - `created_at` (timestamptz) - Registration timestamp
  
  2. Security
    - Enable RLS on `registrations` table
    - Add policy for public insert (anyone can register)
    - Add policy for authenticated users to read all registrations (admin view)
*/

CREATE TABLE IF NOT EXISTS registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  institution text NOT NULL,
  role text NOT NULL,
  registration_type text NOT NULL DEFAULT 'individual',
  team_name text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can register for the event"
  ON registrations
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all registrations"
  ON registrations
  FOR SELECT
  TO authenticated
  USING (true);