export function getToken() {
    const token = localStorage.getItem("token");
    return token;
}

export async function getProjects() {
    try {
        const token = getToken();
        if (!token) return null;

        const response = await fetch("/api/projects", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        if (!response.ok) throw new Error("Failed to fetch projects");

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching projects: ${error.message}`);
        return null;
    }
}

export async function getProjectById(id) {
    try {
        const token = getToken();
        if (!token) return null;

        const response = await fetch(`/api/projects/${id}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        if (!response.ok) throw new Error("Failed to fetch project");

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching project: ${error.message}`);
        return null;
    }
}

export async function createProject(project) {
    try {
        const token = getToken();
        if (!token) return null;

        const response = await fetch("/api/projects", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(project)
        });

        if (!response.ok) throw new Error("Failed to create project");

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error creating project", error);
        return null;
    }
}

export async function updateProject(id, project) {
    try {
        const token = getToken();
        if (!token) return null;

        const response = await fetch(`/api/projects/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(project)
        });

        if (!response.ok) throw new Error("Failed to update project");

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error updating project", error);
        return null;
    }
}

export async function deleteProject(id) {
    try {
        const token = getToken();
        if (!token) return null;

        const response = await fetch(`/api/projects/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        });

        if (!response.ok) throw new Error("Failed to delete project");

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error deleting project", error);
        return null;
    }
}