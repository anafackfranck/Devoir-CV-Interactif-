function updateCV() {
    document.getElementById("previewFullName").innerText = document.getElementById("fullName").value || "Nom";
    document.getElementById("previewFirstName").innerText = document.getElementById("firstName").value || "Prenom";
    document.getElementById("previewJobTitle").innerText = document.getElementById("jobTitle").value || "Titre du poste";
    document.getElementById("previewEmail").innerText = document.getElementById("email").value || "exemple@gmail.com";
    const status = document.querySelector("input[name='currentStatus']:checked");
    document.getElementById("cvCurrentStatus").innerText = status? status.value : "situation Actuelle";
    document.getElementById("previewDescription").innerText = document.getElementById("description").value || "Brève description...";
    document.getElementById("previewPhone").innerText = document.getElementById("phone").value || "Téléphone";
    document.getElementById("previewAddress").innerText = document.getElementById("address").value || "Adresse";
    document.getElementById("laDate").innerText = document.getElementById("experienceYear[]").value || "experience";
    
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
function addLanguage() {
    let container = document.getElementById("languageFields");
    let div = document.createElement("div");
    div.classList.add("mb-2", "flex", "items-center", "gap-2");
    div.innerHTML = `
        <input type="text" placeholder="Langue" class="w-1/2 p-2 border rounded" oninput="updateLanguages()">
        <input type="range" min="0" max="100" value="50" class="w-1/2" oninput="updateLanguages()">
        <span class="w-10">50%</span>
    `;
    container.appendChild(div);
    updateLanguages();
}
function updateLanguages() {
    let container = document.getElementById("previewLanguages");
    container.innerHTML = "<h3 class='text-xl font-semibold'>Langues</h3>";
    let inputs = document.getElementById("languageFields").children;
    for (let input of inputs) {
        let language = input.children[0].value;
        let level = input.children[1].value;
        let percentage = input.children[2];
        percentage.innerText = level + "%";
        if (language) {
            container.innerHTML += `
                <p>${language} - ${level}%</p>
                <div class="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                    <div class="bg-blue-500 h-2.5 rounded-full" style="width:${level}%"></div>
                </div>
            `;
        }
    }
}