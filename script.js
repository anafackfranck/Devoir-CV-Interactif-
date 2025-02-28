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

let experienceCounter = 0;
let educationCounter = 0;
let competenceCounter = 0;
let interestCounter = 0;
let referenceCounter = 0;
let languageCounter = 0;

document.getElementById('saveButton').addEventListener('click', function() {
    let formData = {
        fullName: document.getElementById('fullName').value,
        firstName: document.getElementById('firstName').value,
        age: document.getElementById('age').value,
        gender: document.getElementById('gender').value,
        jobTitle: document.getElementById('jobTitle').value,
        currentStatus: document.querySelector('input[name="currentStatus"]:checked')?.value,
        email: document.getElementById('email').value,
        description: document.getElementById('description').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        experiences: [...document.querySelectorAll('#experiencesSection > .experience-item')].map(exp => ({
            entreprise: exp.querySelector('.entreprise').value,
            duree: exp.querySelector('.duree').value,
            poste: exp.querySelector('.poste').value,
            dureeFin: exp.querySelector('.dureeFin').value,
            description: exp.querySelector('.description').value
        })),
        educations: [...document.querySelectorAll('#educationSection > .education-item')].map(edu => ({
            diplome: edu.querySelector('.diplome').value,
            etablissement: edu.querySelector('.etablissement').value,
            anneeObtention: edu.querySelector('.anneeObtention').value
        })),
        competences: [...document.querySelectorAll('input[name="competences"]')].map(input => input.value),
        interests: [...document.querySelectorAll('input[name="interest"]')].map(input => input.value),
        references: [...document.querySelectorAll('#referencesSection .reference-item')].map(div => ({
            name: div.querySelector('.referenceName').value,
            position: div.querySelector('.referencePosition').value,
            contact: div.querySelector('.referenceContact').value
        })),
        languages: [...document.querySelectorAll('#languageFields input')].map(input => input.value)
    };
    
    // if (Object.values(formData).some(value => value === '' || (Array.isArray(value) && value.length === 0))) {
    //     alert('Veuillez remplir tous les champs avant d\'enregistrer.');
    //     return;
    // }
    
    localStorage.setItem('cvData', JSON.stringify(formData));
    alert('Données enregistrées avec succès !');
});

document.body.insertAdjacentHTML('beforeend', '<button id="retrieveButton" class="bg-blue-500 text-white p-2 rounded mt-4">Récupérer les données</button>');

document.getElementById('retrieveButton').addEventListener('click', function() {
    let storedData = JSON.parse(localStorage.getItem('cvData'));
    if (!storedData) {
        alert('Aucune donnée trouvée.');
        return;
    }
    
    document.getElementById('fullName').value = storedData.fullName;
    document.getElementById('firstName').value = storedData.firstName;
    document.getElementById('age').value = storedData.age;
    document.getElementById('gender').value = storedData.gender;
    document.getElementById('jobTitle').value = storedData.jobTitle;
    if (storedData.currentStatus) {
        document.querySelector(`input[name="currentStatus"][value="${storedData.currentStatus}"]`).checked = true;
    }
    document.getElementById('email').value = storedData.email;
    document.getElementById('description').value = storedData.description;
    document.getElementById('phone').value = storedData.phone;
    document.getElementById('address').value = storedData.address;
    
    let experiencesSection = document.getElementById('experiencesSection');
    experiencesSection.innerHTML = '';
    storedData.experiences.forEach(exp => {
        let newExperience = createExperienceElement(exp);
        experiencesSection.appendChild(newExperience);
    });
    
    let educationSection = document.getElementById('educationSection');
    educationSection.innerHTML = '';
    storedData.educations.forEach(edu => {
        let newEducation = createEducationElement(edu);
        educationSection.appendChild(newEducation);
    });
    
    alert('Données récupérées avec succès !');
});

function addExperience() {
    let experiencesSection = document.getElementById('experiencesSection');
    let newExperience = createExperienceElement();
    experiencesSection.appendChild(newExperience);
}

function createExperienceElement(exp = {}) {
    let experienceDiv = document.createElement('div');
    experienceDiv.classList.add('experience-item', 'shadow-md', 'p-10', 'mt-4');
    experienceDiv.innerHTML = `
        <div class="flex flex-col md:flex-row gap-3">
            <div class="flex-1">
                <label>Nom de l'entreprise</label><br>
                <input type="text" class="entreprise w-full mt-2 p-2 border border-gray-300 rounded mb-2" placeholder="Nom de l'entreprise" value="${exp.entreprise || ''}">
                <label>Date de début</label><br>
                <input type="date" class="duree w-full mt-2 p-2 border border-gray-300 rounded mb-2" value="${exp.duree || ''}">
            </div>
            <div class="flex-1">
                <label>Poste occupé</label><br>
                <input type="text" class="poste w-full mt-2 p-2 border border-gray-300 rounded" placeholder="Poste occupé" value="${exp.poste || ''}">
                <label>Date de Fin</label><br>
                <input type="date" class="dureeFin w-full mt-2 p-2 border border-gray-300 rounded mb-2" value="${exp.dureeFin || ''}">
            </div>
        </div>
        <label>Description</label><br>
        <textarea class="description w-full mt-2 p-2 border rounded">${exp.description || ''}</textarea>
        <button class="removeExperience bg-red-500 text-white p-2 rounded mt-2">Supprimer</button>
    `;
    
    experienceDiv.querySelector('.removeExperience').addEventListener('click', function() {
        experienceDiv.remove();
    });
    
    return experienceDiv;
}


//ajouter un centre d'interet
function addInterest() {
    let experiencesSection = document.getElementById('experiencesSection');
    let newExperience = createExperienceElement();
    experiencesSection.appendChild(newExperience);
}

function addEducation() {
    let educationSection = document.getElementById('educationSection');
    let newEducation = createEducationElement();
    educationSection.appendChild(newEducation);
}

function loadImage(event) {
    const image = document.getElementById('previewImage'); // Assurez-vous que cet ID correspond à l'élément d'image dans l'aperçu
    const file = event.target.files[0]; // Récupère le fichier téléchargé

    if (file) {
        const reader = new FileReader(); // Crée un nouveau FileReader
        reader.onload = function(e) {
            image.src = e.target.result; // Définit la source de l'image à la donnée URL du fichier
        };
        reader.readAsDataURL(file); // Lit le fichier et déclenche onload
    }
}

//ajouter un centre d'interet
  function addInterest() {
        const interestSection = document.getElementById('InterestSection');
        const newInterest = interestSection.firstElementChild.cloneNode(true);
        
        // Créez un bouton de suppression
        const removeButton = document.createElement('button');
        removeButton.textContent = "x"; 
            removeButton.style.color = "red";
            removeButton.style.border = "none";
            removeButton.style.background = "none";
            removeButton.style.fontSize = "20px";
            removeButton.style.cursor = "pointer";
            removeButton.onclick = function() {
                interestSection.removeChild(newInterest);
            };
        
        // Ajoutez le bouton de suppression à la nouvelle section d'intérêt
        newInterest.appendChild(removeButton);
        
        // Ajoutez le nouveau centre d'intérêt à la section
        interestSection.appendChild(newInterest);
    }


// ajouter des references
function addReference() {
    const referencesSection = document.getElementById('referencesSection');
    const newReference = referencesSection.firstElementChild.cloneNode(true);
    
    // Créez un bouton de suppression
    const removeButton = document.createElement('button');
    removeButton.textContent = "x"; 
    removeButton.style.color = "red";
    removeButton.style.border = "none";
    removeButton.style.background = "none";
    removeButton.style.fontSize = "20px";
    removeButton.style.cursor = "pointer";
    removeButton.onclick = function() {
        referencesSection.removeChild(newReference);
    };
    // Ajoutez le bouton de suppression à la nouvelle référence
    newReference.appendChild(removeButton);
    
    // Ajoutez la nouvelle référence à la section
    referencesSection.appendChild(newReference);
}

// ajouter des competences
function ajoutcompetences() {
    const ajoutCompetenceSection = document.getElementById('Ajoutcompetence');
    const newCompetence = ajoutCompetenceSection.firstElementChild.cloneNode(true);
    // Créez un bouton de suppression
    const removeButton = document.createElement('button');
    removeButton.textContent = "x"; 
    removeButton.style.color = "red";
    removeButton.style.border = "none";
    removeButton.style.background = "none";
    removeButton.style.fontSize = "20px";
    removeButton.style.cursor = "pointer";
    removeButton.onclick = function() {
        ajoutCompetenceSection.removeChild(newCompetence);
    };
    // Ajoutez le bouton de suppression à la nouvelle compétence
    newCompetence.appendChild(removeButton);
    // Ajoutez la nouvelle compétence à la section
    ajoutCompetenceSection.appendChild(newCompetence);
}


function addEducation() {
    const educationSection = document.getElementById('educationSection');
    const newEducation = educationSection.firstElementChild.cloneNode(true);
    // Créez un bouton de suppression
    const removeButton = document.createElement('button');
    removeButton.textContent = "x"; 
    removeButton.style.color = "red";
    removeButton.style.border = "none";
    removeButton.style.background = "none";
    removeButton.style.fontSize = "20px";
    removeButton.style.cursor = "pointer";
    removeButton.onclick = function() {
        educationSection.removeChild(newEducation);
    };
    // Ajoutez le bouton de suppression à la nouvelle formation
    newEducation.appendChild(removeButton);
    // Ajoutez la nouvelle formation à la section
    educationSection.appendChild(newEducation);
}



// Fonction pour supprimer un élément
function removeElement(button) {
    button.parentElement.remove();
}

// ajouter une langue
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

