import test from 'node:test';
import assert from 'node:assert/strict';
import { filterProjects, filterCertificates, validateContactForm, generateMailtoUrl } from './portfolioLogic';
import { PROJECTS_DATA, CERTIFICATES_DATA } from '../data/portfolioData';

test('filterProjects filters by project type', () => {
  const hardwareProjects = filterProjects(PROJECTS_DATA, '', 'hardware', 'all');
  assert.ok(hardwareProjects.length > 0);
  assert.ok(hardwareProjects.every((p) => p.type === 'hardware'));
});

test('filterProjects filters by completion status', () => {
  const inProgressProjects = filterProjects(PROJECTS_DATA, '', 'all', 'in-progress');
  assert.ok(inProgressProjects.length > 0);
  assert.ok(inProgressProjects.every((p) => p.status === 'in-progress'));
});

test('filterProjects matches query in title or language', () => {
  const pythonProjects = filterProjects(PROJECTS_DATA, 'Python', 'all', 'all');
  assert.ok(pythonProjects.length > 0);
  assert.ok(
    pythonProjects.every(
      (p) =>
        p.languages.some((l) => l.toLowerCase().includes('python')) ||
        p.title.toLowerCase().includes('python') ||
        p.description.toLowerCase().includes('python')
    )
  );
});

test('filterCertificates filters by category', () => {
  const ciscoCerts = filterCertificates(CERTIFICATES_DATA, 'Cisco', '');
  assert.ok(ciscoCerts.length > 0);
  assert.ok(ciscoCerts.every((c) => c.category === 'Cisco'));
});

test('validateContactForm rejects invalid emails and empty fields', () => {
  const emptyResult = validateContactForm({
    name: '',
    email: 'bad-email',
    subject: '',
    message: 'hi',
  });
  assert.equal(emptyResult.isValid, false);
  assert.ok(emptyResult.errors.name);
  assert.ok(emptyResult.errors.email);
  assert.ok(emptyResult.errors.subject);
  assert.ok(emptyResult.errors.message);

  const validResult = validateContactForm({
    name: 'Jane Doe',
    email: 'jane@example.com',
    subject: 'Project Consultation',
    message: 'Hello Christian, we would love to collaborate on an AI IoT prototype.',
  });
  assert.equal(validResult.isValid, true);
  assert.equal(Object.keys(validResult.errors).length, 0);
});

test('generateMailtoUrl builds formatted string', () => {
  const url = generateMailtoUrl(
    'test@gmail.com',
    'Hello',
    'Body text',
    'Jane',
    'jane@example.com'
  );
  assert.ok(url.startsWith('mailto:test@gmail.com'));
  assert.ok(url.includes('Hello'));
  assert.ok(url.includes('Jane'));
});
