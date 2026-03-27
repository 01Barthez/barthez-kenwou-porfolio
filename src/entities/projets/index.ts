export type { IProject, ITechStack, ProjectStatus, ProjectRole } from './model/project.types';
export { ProjectSchema, TechStackSchema, ProjectStatusSchema } from './model/project.schema';
export type { ProjectInput, TechStackInput } from './model/project.schema';
export { projectApi } from './api/project.api';
export {
  PROJECT_STATUS_CONFIG,
  PROJECT_ROLE_ICONS,
  ALL_PROJECT_ROLES,
  ALL_PROJECT_STATUSES,
} from './model/project.config';
export type { LucideIconComponent, StatusConfig } from './model/project.config';

// UI components
export { ProjectCard } from './ui/ProjectCard.ui';
export { ProjectStatusBadge } from './ui/ProjectStatusBadge.ui';
export { TechBadge } from './ui/TechBadge.ui';

/**
export { TechStackBadge } from './ui/TechStackBadge.ui';
export { ProjectStatusBadge } from './ui/ProjectStatusBadge.ui';
export { ProjectDetails } from './ui/ProjectDetails.ui';
export { ProjectList } from './ui/ProjectList.ui';
export { ProjectFilters } from './ui/ProjectFilters.ui';
export { NewProjectForm } from './ui/NewProjectForm.ui';
export { EditProjectForm } from './ui/EditProjectForm.ui';
export { ProjectStatusSelect } from './ui/ProjectStatusSelect.ui';
export { TechStackMultiSelect } from './ui/TechStackMultiSelect.ui';
export { ProjectSortSelect } from './ui/ProjectSortSelect.ui';

*/
