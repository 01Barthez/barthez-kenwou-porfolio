export type { IProject, ITechStack, ProjectStatus } from './model/project.types';
export { ProjectSchema, TechStackSchema, ProjectStatusSchema } from './model/project.schema';
export type { ProjectInput, TechStackInput } from './model/project.schema';
export { projectApi } from './api/project.api';

// UI components
export { ProjectCard } from './ui/ProjectCard.ui';

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
