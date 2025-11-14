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

export async function getEducations() {
    try {
        const token = getToken();
        if (!token) return null;

        const response = await fetch("/api/education", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        if (!response.ok) throw new Error("Failed to fetch educations");

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching educations: ${error.message}`);
        return null;
    }
}

export async function getEducationById(id) {
    try {
        const token = getToken();
        if (!token) return null;

        const response = await fetch(`/api/education/${id}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        if (!response.ok) throw new Error("Failed to fetch education");

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching education: ${error.message}`);
        return null;
    }
}

export async function createEducation(education) {
    try {
        const token = getToken();
        if (!token) return null;

        const response = await fetch("/api/education", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(education)
        });

        if (!response.ok) throw new Error("Failed to create education");

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error creating education", error);
        return null;
    }
}

export async function updateEducation(id, education) {
    try {
        const token = getToken();
        if (!token) return null;

        const response = await fetch(`/api/education/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(education)
        });

        if (!response.ok) throw new Error("Failed to update education");

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error updating education", error);
        return null;
    }
}

export async function deleteEducation(id) {
    try {
        const token = getToken();
        if (!token) return null;

        const response = await fetch(`/api/education/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        });

        if (!response.ok) throw new Error("Failed to delete education");

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error deleting education", error);
        return null;
    }
}

export async function getServices() {
    try {
        const token = getToken();
        if (!token) return null;

        const response = await fetch("/api/services", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        if (!response.ok) throw new Error("Failed to fetch services");

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching services: ${error.message}`);
        return null;
    }
}

export async function getServiceById(id) {
    try {
        const token = getToken();
        if (!token) return null;

        const response = await fetch(`/api/services/${id}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        if (!response.ok) throw new Error("Failed to fetch service");

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching service: ${error.message}`);
        return null;
    }
}

export async function createService(service) {
    try {
        const token = getToken();
        if (!token) return null;

        const response = await fetch("/api/services", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(service)
        });

        if (!response.ok) throw new Error("Failed to create service");

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error creating service", error);
        return null;
    }
}

export async function updateService(id, service) {
    try {
        const token = getToken();
        if (!token) return null;

        const response = await fetch(`/api/services/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(service)
        });

        if (!response.ok) throw new Error("Failed to update service");

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error updating service", error);
        return null;
    }
}

export async function deleteService(id) {
    try {
        const token = getToken();
        if (!token) return null;

        const response = await fetch(`/api/services/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        });

        if (!response.ok) throw new Error("Failed to delete service");

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error deleting service", error);
        return null;
    }
}

export async function createContact(contact) {
    try {
        const token = getToken();
        if (!token) return null;

        const response = await fetch("/api/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(contact)
        });

        if (!response.ok) throw new Error("Failed to create contact");

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error creating contact", error);
        return null;
    }
}