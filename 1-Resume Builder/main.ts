const skillsButton = document.getElementById('skills-btn') as HTMLButtonElement;
const skillsSection = document.getElementById('skills-section') as HTMLDivElement;
const skillDiv = document.getElementById('skills-div') as HTMLDivElement;
const generateBtn = document.getElementById('generate-btn') as HTMLButtonElement;
const ViewBtn = document.getElementById('view-btn') as HTMLButtonElement;
const skills = document.getElementById('skills') as HTMLDivElement;

skillsButton.onclick = function () {
    skillsSection.style.display = 'block';
    skillDiv.style.display = 'none';
}




// ---------------------------------------------------------------------------------

document.getElementById('create-container')?.addEventListener('submit', function (event) {
    event.preventDefault();

    const nameElement = document.getElementById('name') as HTMLInputElement;
    const usernameElement = document.getElementById('username') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const addressElement = document.getElementById('address') as HTMLInputElement;
    const aboutElement = document.getElementById('about') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const skillElement = document.getElementById('skill') as HTMLInputElement;
    const jobtitleElement = document.getElementById('job-title') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;

    
    if(nameElement && usernameElement && emailElement && phoneElement && aboutElement && educationElement && skillElement && jobtitleElement &&  experienceElement) {



        const name = nameElement.value;
        const username = usernameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const address = addressElement.value;
        const about = aboutElement.value;
        const education = educationElement.value;
        const skill = skillElement.value;
        const jobTitle = jobtitleElement.value;
        const experience = experienceElement.value;

        const uniquePath = `resumes/${username.replace(/\s + /g, '-')}-cv.html`;

        const resumeOutput = `
            <h1 style='text-align: center; font-size: 36px; margin: 20px; margin-top: 34px; letter-spacing: 10px;'><span id="edit-name" class="editable">${name}</span></h1>
            <hr>

            <div id='resume2'>
                <div id="resume2-right">
                    <div class="resume2-divs"  style="min-height: 300px; border-bottom: 2px solid black">
                        <h1>ABOUT ME</h1>
                        <br>
                        <p><span id="edit-about" class="editable">${about}</span></p>
                    </div>

                    <div class="resume2-divs"  style="min-height: 300px; border-bottom: 2px solid black">
                        <h1>WORK EXPERIENCE</h1>
                        <br>
                        <div class="work">
                            <h2><span id="edit-job-title" class="editable">${jobTitle}</span></h2>
                            <p><span id="edit-experience" class="editable">${experience}</span></p>
                        </div>
                    </div>
                </div>

                <hr>

                <div id="resume2-left" >
                    <div class="resume2-divs" style="min-height: 300px; border-bottom: 2px solid black">
                        <h1>EDUCATION</h1>
                        <br>
                        <p><span id="edit-education" class="editable">${education}</span></p>
                    </div>

                    <div class="resume2-divs" style="min-height: 300px; border-bottom: 2px solid black;" id="skills">
                        <h1>SKILLS</h1>
                        <br>
                        <p><span id="edit-skill" class="editable">${skill}</span></p>
                    </div>
                </div>

                
            </div>

            <div class="resume2-divs" style="min-height: 150px; border: 2px solid; padding: 10px; flex-direction: column;">
                        <h1>CONTACT</h1>
                        <br>
                        <ul style="display: flex; justify-content: space-evenly">
                            <li><i class="fa-solid fa-location-dot"></i><span id="edit-address" class="editable">${address}</span></li>
                            <hr>
                            <li><i class="fa-solid fa-envelope"></i><span id="edit-email" class="editable">${email}</span></li>
                            <hr>
                            <li><i class="fa fa-phone"></i><span id="edit-phone" class="editable">${phone}</span></li>
                        </ul>
            </div>

            
        `;

        const resumeOutputElement = document.getElementById('resume-output')
        if(resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.classList.remove('hidden');

            // Create vontainer for buttons
            const buttonsContainer = document.createElement('div');
            buttonsContainer.id = 'buttonsContainer';
            resumeOutputElement.appendChild(buttonsContainer);

            // Add Download PDF button
            const downloadButton = document.createElement('button');
            downloadButton.textContent = 'Download as PDF';
            downloadButton.addEventListener("click", () => {
                window.print();
            });
            buttonsContainer.appendChild(downloadButton);

            // Adding shareable link
            const shareLinkButton = document.createElement('button');
            shareLinkButton.textContent = "Copy Shareable Link";
            shareLinkButton.addEventListener('click', async () => {
                try{
                    const shareableLink = `https://yourdomain.com/resumes/${name.replace(/\s + /g, "-")}-cv.html`;

                    await navigator.clipboard.writeText(shareableLink);
                    alert('Shareable link copied to clipboard');
                } catch(err) {
                    console.error("Failed to copy link: ", err);
                    alert('Failed to copy link to clipboard, Please try again. ');
                }
            });

            buttonsContainer.appendChild(shareLinkButton);
        } else {
            console.error("Resume Ouput container not found");
            
        }


    } else {
        console.error('Form elements are missing ')
    }

})


