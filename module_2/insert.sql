-- Sample USERS
INSERT INTO Users (full_name, email, city, registration_date) VALUES
('Siva', 'siva@gmail.com', 'New York', '2024-12-01'),
('srinivas', 'srinivas@gmail.com', 'Los Angeles', '2024-12-05'),
('Manoj', 'manoj@gmail.com', 'Chicago', '2024-12-10'),
('Venkat', 'venkat@gmail.com', 'New York', '2025-01-15'),
('Balaji', 'balaji@gmail.com', 'Los Angeles', '2025-02-01');

-- Sample EVENTS
INSERT INTO Events (title, description, city, start_date, end_date, status, organizer_id) VALUES
('Tech Innovators Meetup', 'A meetup for tech enthusiasts.', 'chennai', '2025-06-10 10:00:00', '2025-06-10 16:00:00', 'upcoming', 1),
('AI & ML Conference', 'Conference on AI and ML advancements.', 'chennai', '2025-05-15 09:00:00', '2025-05-15 17:00:00', 'completed', 3),
('Frontend Development Bootcamp', 'Hands-on training on frontend tech.', 'chennai', '2025-07-01 10:00:00', '2025-07-03 16:00:00', 'upcoming', 2);
-- Sample SESSIONS
INSERT INTO Sessions (event_id, title, speaker_name, start_time, end_time) VALUES
(1, 'Opening Keynote', 'Dr. Tech', '2025-06-10 10:00:00', '2025-06-10 11:00:00'),
(1, 'Future of Web Dev', 'Sivabalaji', '2025-06-10 11:15:00', '2025-06-10 12:30:00'),
(2, 'AI in Healthcare', 'Manoj', '2025-05-15 09:30:00', '2025-05-15 11:00:00'),
(3, 'Intro to HTML5', 'Srinivas', '2025-07-01 10:00:00', '2025-07-01 12:00:00');

-- Sample REGISTRATIONS
INSERT INTO Registrations (user_id, event_id, registration_date) VALUES
(1, 1, '2025-05-01'),
(2, 1, '2025-05-02'),
(3, 2, '2025-04-30'),
(4, 2, '2025-04-28'),
(5, 3, '2025-06-15');

-- Sample FEEDBACK
INSERT INTO Feedback (user_id, event_id, rating, comments, feedback_date) VALUES
(3, 2, 4, 'Great insights!', '2025-05-16'),
(4, 2, 5, 'Very informative.', '2025-05-16'),
(2, 1, 3, 'Could be better.', '2025-06-11');

-- Sample RESOURCES
INSERT INTO Resources (event_id, resource_type, resource_url, uploaded_at) VALUES
(1, 'pdf', 'https://portal.com/resources/tech_meetup_agenda.pdf', '2025-05-01 10:00:00'),
(2, 'image', 'https://portal.com/resources/ai_poster.jpg', '2025-04-20 09:00:00'),
(3, 'link', 'https://portal.com/resources/html5_docs', '2025-06-25 15:00:00');
