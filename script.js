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

function addExperience() {
    const experiencesSection = document.getElementById('experiencesSection');
    const newExperience = experiencesSection.firstElementChild.cloneNode(true);
    
    // Créez un bouton de suppression
    const removeButton = document.createElement('button');
        removeButton.textContent = "x"; 
        removeButton.style.color = "red";
        removeButton.style.border = "none";
        removeButton.style.background = "none";
        removeButton.style.fontSize = "20px";
        removeButton.style.cursor = "pointer";
    removeButton.onclick = function() {
        experiencesSection.removeChild(newExperience);
    };
    
    // Ajoutez le bouton de suppression à la nouvelle expérience
    newExperience.appendChild(removeButton);
    
    // Ajoutez la nouvelle expérience à la section
    experiencesSection.appendChild(newExperience);
}

function addEducation(){
    const educationSection = document.getElementById('educationSection');
    const newEducation = educationSection.firstElementChild.cloneNode(true);

    //creer un bouton de suppression
    const Buttonsupprimer = document.createElement('button');
        Buttonsupprimer.textContent = "x"; 
        Buttonsupprimer.style.color = "red";
        Buttonsupprimer.style.border = "none";
        Buttonsupprimer.style.background = "none";
        Buttonsupprimer.style.fontSize = "20px";
        Buttonsupprimer.style.cursor = "pointer";
        Buttonsupprimer.onclick = function() {
    educationSection.removeChild(newEducation);
    };

    // Ajoutez le bouton de suppression à la nouvelle expérience
    newExperience.appendChild(Buttonsupprimer);

    // Ajoutez la nouvelle expérience à la section
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

