INSERT INTO category (name, slug) VALUES 
('Data Science', 'data-science'),
('IT Certifications', 'it-certifications'),
('Leadership', 'leadership'),
('Software Development', 'software-development'),
('Marketing', 'marketing'),
('Finance', 'finance');

-- Insert subcategories under "Data Science"
INSERT INTO category (name, slug, parent_category_id) VALUES 
('Machine Learning', 'machine-learning', (SELECT id FROM category WHERE slug = 'data-science')),
('Deep Learning', 'deep-learning', (SELECT id FROM category WHERE slug = 'data-science'));

-- Insert subcategories under "IT Certifications"
INSERT INTO category (name, slug, parent_category_id) VALUES 
('AWS Certification', 'aws-certification', (SELECT id FROM category WHERE slug = 'it-certifications')),
('Google Cloud Certification', 'google-cloud-certification', (SELECT id FROM category WHERE slug = 'it-certifications'));

-- Insert subcategories under "Leadership"
INSERT INTO category (name, slug, parent_category_id) VALUES 
('Project Management', 'project-management', (SELECT id FROM category WHERE slug = 'leadership')),
('Team Management', 'team-management', (SELECT id FROM category WHERE slug = 'leadership'));
