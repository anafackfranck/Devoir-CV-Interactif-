function updateCV() {
    document.getElementById("previewFullName").innerText = document.getElementById("fullName").value || "Nom";
    document.getElementById("previewFirstName").innerText = document.getElementById("firstName").value || "Prenom";
    document.getElementById("previewJobTitle").innerText = document.getElementById("jobTitle").value || "Titre du poste";
    document.getElementById("cvAge").innerText = "Âge: " + (document.getElementById("age").value || "");
    document.getElementById("cvGender").innerText = "Sexe: " + (document.getElementById("gender").value || "");
    document.getElementById("previewJobTitle").innerText = document.getElementById("jobTitle").value || "Titre du Poste";
    const status = document.querySelector('input[name="currentStatus"]:checked');
    document.getElementById("cvCurrentStatus").innerText =status ? status.value : "Situation Actuelle";
    document.getElementById("cvDescription").innerText = document.getElementById("description").value || "Brève description...";
    document.getElementById("previewEmail").innerText = "Email: " + (document.getElementById("email").value || "");
    document.getElementById("cvPhone").innerText = "Téléphone: " + (document.getElementById("phone").value || "");
    document.getElementById("cvAddress").innerText = "Adresse: " + (document.getElementById("address").value || "");
}
// Fonction pour ajouter une compétence
function addSkill() {
    const skillsSection = document.getElementById('skillsSection');
    const newSkill = document.createElement('div');
    newSkill.className = 'mb-4 flex items-center';
    newSkill.innerHTML = `
        <input type="text" name="skills[]" class="mt-1 block w-full border border-gray-300 rounded p-2" placeholder="Compétence" required>
        <button type="button" class="ml-2 bg-red-500 text-white py-2 px-4 rounded" onclick="removeElement(this)">-</button>
    `;
    skillsSection.appendChild(newSkill);
}

// Fonction pour ajouter une expérience professionnelle
function addExperience() {
    const experiencesSection = document.getElementById('experiencesSection');
    const newExperience = document.createElement('div');
    newExperience.className = 'mb-4 flex items-center';
    newExperience.innerHTML = `
        <input type="text" name="experienceYear[]" class="mt-1 block w-1/4 border border-gray-300 rounded p-2" placeholder="Année" required>
        <input type="text" name="experiencePosition[]" class="mt-1 block w-1/4 border border-gray-300 rounded p-2" placeholder="Poste" required>
        <input type="text" name="experienceDescription[]" class="mt-1 block w-1/2 border border-gray-300 rounded p-2" placeholder="Description" required>
        <button type="button" class="ml-2 bg-red-500 text-white py-2 px-4 rounded" onclick="removeElement(this)">-</button>
    `;
    experiencesSection.appendChild(newExperience);
}

// Fonction pour ajouter une formation
function addEducation() {
    const educationSection = document.getElementById('educationSection');
    const newEducation = document.createElement('div');
    newEducation.className = 'mb-4 flex items-center';
    newEducation.innerHTML = `
        <input type="text" name="educationYear[]" class="mt-1 block w-1/4 border border-gray-300 rounded p-2" placeholder="Année" required>
        <input type="text" name="educationDegree[]" class="mt-1 block w-1/4 border border-gray-300 rounded p-2" placeholder="Diplôme" required>
        <input type="text" name="educationInstitution[]" class="mt-1 block w-1/2 border border-gray-300 rounded p-2" placeholder="Établissement" required>
        <button type="button" class="ml-2 bg-red-500 text-white py-2 px-4 rounded" onclick="removeElement(this)">-</button>
    `;
    educationSection.appendChild(newEducation);
}

// Fonction pour supprimer un élément
function removeElement(button) {
    button.parentElement.remove();
}