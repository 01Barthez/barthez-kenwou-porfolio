// TODO: Implement menu service
export const menuService = {
  async fetchMenu() {
    // Mock API call
    const response = await fetch('/api/project');

    if (!response.ok) {
      throw new Error('Failed to fetch project');
    }

    return response.json();
  },
};
