import { useMemo, useState } from 'react';
import { projectsData } from '@/entities/projets/api/mocks/projectData.mocks';
import type { ProjectRole, ProjectStatus } from '@/entities/projets/model/project.types';

// ─── Filter state ───────────────────────────────────────────────────────────────

export interface ProjectFilters {
  category: string;
  techs: string[];
  role: ProjectRole | null;
  status: ProjectStatus | null;
}

const INITIAL_FILTERS: ProjectFilters = {
  category: 'all',
  techs: [],
  role: null,
  status: null,
};

// ─── Hook ───────────────────────────────────────────────────────────────────────

export const useProjectFilters = () => {
  const [filters, setFilters] = useState<ProjectFilters>(INITIAL_FILTERS);

  // ── Derived options from data (single source) ─────────────────────────────
  const availableTechs = useMemo(
    () => Array.from(new Set(projectsData.flatMap((p) => p.tags))).sort(),
    [],
  );

  const availableRoles = useMemo(
    () => Array.from(new Set(projectsData.map((p) => p.role).filter(Boolean))) as ProjectRole[],
    [],
  );

  const availableStatuses = useMemo(
    () => Array.from(new Set(projectsData.map((p) => p.status).filter(Boolean))) as ProjectStatus[],
    [],
  );

  // ── Filtered result ───────────────────────────────────────────────────────
  const filteredProjects = useMemo(
    () =>
      projectsData.filter((project) => {
        const matchCategory =
          filters.category === 'all' || project.category === filters.category;
        const matchTech =
          filters.techs.length === 0 ||
          filters.techs.some((t) => project.tags.includes(t));
        const matchRole = !filters.role || project.role === filters.role;
        const matchStatus = !filters.status || project.status === filters.status;
        return matchCategory && matchTech && matchRole && matchStatus;
      }),
    [filters],
  );

  // ── Derived counts ────────────────────────────────────────────────────────
  const secondaryActiveCount =
    filters.techs.length + (filters.role ? 1 : 0) + (filters.status ? 1 : 0);

  // ── Actions ───────────────────────────────────────────────────────────────
  const setCategory = (category: string) =>
    setFilters((prev) => ({ ...prev, category }));

  const toggleTech = (tech: string) =>
    setFilters((prev) => ({
      ...prev,
      techs: prev.techs.includes(tech)
        ? prev.techs.filter((t) => t !== tech)
        : [...prev.techs, tech],
    }));

  const setRole = (role: ProjectRole | null) =>
    setFilters((prev) => ({ ...prev, role }));

  const setStatus = (status: ProjectStatus | null) =>
    setFilters((prev) => ({ ...prev, status }));

  const resetSecondaryFilters = () =>
    setFilters((prev) => ({ ...prev, techs: [], role: null, status: null }));

  const resetAllFilters = () => setFilters(INITIAL_FILTERS);

  return {
    filters,
    filteredProjects,
    availableTechs,
    availableRoles,
    availableStatuses,
    secondaryActiveCount,
    setCategory,
    toggleTech,
    setRole,
    setStatus,
    resetSecondaryFilters,
    resetAllFilters,
  };
};
