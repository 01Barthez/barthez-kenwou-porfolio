// TODO: Implement menu service
export const menuService = {
  async fetchMenu() {
    // Mock API call
    const response = await fetch('/api/menu');

    if (!response.ok) {
      throw new Error('Failed to fetch menu');
    }

    return response.json();
  },
};
