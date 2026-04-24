# 🏗 Project Entity

The `Project` entity represents a specific technical achievement or product showcased in the portfolio.

## Data Source
Projects are managed in `src/entities/Project/data/` or via Velite.

## Attributes

- `id`: Unique identifier.
- `title`: Display name of the project.
- `description`: Short summary.
- `category`: e.g., "Full Stack", "DevOps", "Mobile".
- `tags`: List of technologies used (React, AWS, Docker).
- `image`: URL or path to the thumbnail.
- `links`: Project links (GitHub, Live demo).
- `featured`: Boolean to highlight the project on the home page.

## Implementation Details
- **Schema**: Defined using Zod in `src/entities/Project/model/types.ts`.
- **UI Components**: Cards and detail views are located in `src/entities/Project/ui/`.
