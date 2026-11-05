import { ProjectItem, ProjectType, ProjectStatus, CertificateItem } from '../data/portfolioData';

/**
 * Filter projects by search term, project type, and status
 */
export function filterProjects(
  projects: ProjectItem[],
  query: string,
  typeFilter: string = 'all',
  statusFilter: string = 'all'
): ProjectItem[] {
  const normalizedQuery = query.trim().toLowerCase();

  return projects.filter((project) => {
    // Check type match
    if (typeFilter !== 'all' && project.type !== (typeFilter as ProjectType)) {
      return false;
    }

    // Check status match
    if (statusFilter !== 'all' && project.status !== (statusFilter as ProjectStatus)) {
      return false;
    }

    // If no search query, keep
    if (!normalizedQuery) {
      return true;
    }

    // Match query against title, description, languages, or type
    const matchesTitle = project.title.toLowerCase().includes(normalizedQuery);
    const matchesDesc = project.description.toLowerCase().includes(normalizedQuery);
    const matchesLongDesc = project.longDescription.toLowerCase().includes(normalizedQuery);
    const matchesLang = project.languages.some((lang) =>
      lang.toLowerCase().includes(normalizedQuery)
    );
    const matchesType = project.type.toLowerCase().includes(normalizedQuery);

    return matchesTitle || matchesDesc || matchesLongDesc || matchesLang || matchesType;
  });
}

/**
 * Filter certificates by category
 */
export function filterCertificates(
  certificates: CertificateItem[],
  categoryFilter: string = 'all',
  searchQuery: string = ''
): CertificateItem[] {
  const query = searchQuery.trim().toLowerCase();

  return certificates.filter((cert) => {
    if (categoryFilter !== 'all' && cert.category.toLowerCase() !== categoryFilter.toLowerCase()) {
      return false;
    }

    if (!query) return true;

    return (
      cert.title.toLowerCase().includes(query) ||
      cert.issuer.toLowerCase().includes(query) ||
      cert.description.toLowerCase().includes(query) ||
      cert.badgeTag.toLowerCase().includes(query)
    );
  });
}

/**
 * Validate contact form input
 */
export interface ContactValidationResult {
  isValid: boolean;
  errors: {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  };
}

export function validateContactForm(values: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): ContactValidationResult {
  const errors: ContactValidationResult['errors'] = {};

  if (!values.name || values.name.trim().length < 2) {
    errors.name = 'Please provide your full name (at least 2 characters).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!values.email || !emailRegex.test(values.email.trim())) {
    errors.email = 'Please provide a valid email address.';
  }

  if (!values.subject || values.subject.trim().length < 3) {
    errors.subject = 'Please specify a subject (at least 3 characters).';
  }

  if (!values.message || values.message.trim().length < 10) {
    errors.message = 'Please provide a message with at least 10 characters.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Generate simulated email mailto URL with pre-filled parameters
 */
export function generateMailtoUrl(
  recipient: string,
  subject: string,
  body: string,
  senderName: string,
  senderEmail: string
): string {
  const fullBody = `From: ${senderName} (${senderEmail})\n\nMessage:\n${body}\n\n--\nSent via Christian Jaye Portfolio Portal`;
  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(fullBody)}`;
}
