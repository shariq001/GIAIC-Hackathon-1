var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
var skillsButton = document.getElementById('skills-btn');
var skillsSection = document.getElementById('skills-section');
var skillDiv = document.getElementById('skills-div');
var generateBtn = document.getElementById('generate-btn');
var ViewBtn = document.getElementById('view-btn');
var skills = document.getElementById('skills');
skillsButton.onclick = function () {
    skillsSection.style.display = 'block';
    skillDiv.style.display = 'none';
};
// ---------------------------------------------------------------------------------
(_a = document.getElementById('create-container')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _this = this;
    event.preventDefault();
    var nameElement = document.getElementById('name');
    var usernameElement = document.getElementById('username');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var addressElement = document.getElementById('address');
    var aboutElement = document.getElementById('about');
    var educationElement = document.getElementById('education');
    var skillElement = document.getElementById('skill');
    var jobtitleElement = document.getElementById('job-title');
    var experienceElement = document.getElementById('experience');
    if (nameElement && usernameElement && emailElement && phoneElement && aboutElement && educationElement && skillElement && jobtitleElement && experienceElement) {
        var name_1 = nameElement.value;
        var username = usernameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var address = addressElement.value;
        var about = aboutElement.value;
        var education = educationElement.value;
        var skill = skillElement.value;
        var jobTitle = jobtitleElement.value;
        var experience = experienceElement.value;
        var uniquePath = "resumes/".concat(username.replace(/\s + /g, '-'), "-cv.html");
        var resumeOutput = "\n            <h1 style='text-align: center; font-size: 36px; margin: 20px; margin-top: 34px; letter-spacing: 10px;'><span id=\"edit-name\" class=\"editable\">".concat(name_1, "</span></h1>\n            <hr>\n\n            <div id='resume2'>\n                <div id=\"resume2-right\">\n                    <div class=\"resume2-divs\"  style=\"min-height: 300px; border-bottom: 2px solid black\">\n                        <h1>ABOUT ME</h1>\n                        <br>\n                        <p><span id=\"edit-about\" class=\"editable\">").concat(about, "</span></p>\n                    </div>\n\n                    <div class=\"resume2-divs\"  style=\"min-height: 300px; border-bottom: 2px solid black\">\n                        <h1>WORK EXPERIENCE</h1>\n                        <br>\n                        <div class=\"work\">\n                            <h2><span id=\"edit-job-title\" class=\"editable\">").concat(jobTitle, "</span></h2>\n                            <p><span id=\"edit-experience\" class=\"editable\">").concat(experience, "</span></p>\n                        </div>\n                    </div>\n                </div>\n\n                <hr>\n\n                <div id=\"resume2-left\" >\n                    <div class=\"resume2-divs\" style=\"min-height: 300px; border-bottom: 2px solid black\">\n                        <h1>EDUCATION</h1>\n                        <br>\n                        <p><span id=\"edit-education\" class=\"editable\">").concat(education, "</span></p>\n                    </div>\n\n                    <div class=\"resume2-divs\" style=\"min-height: 300px; border-bottom: 2px solid black;\" id=\"skills\">\n                        <h1>SKILLS</h1>\n                        <br>\n                        <p><span id=\"edit-skill\" class=\"editable\">").concat(skill, "</span></p>\n                    </div>\n                </div>\n\n                \n            </div>\n\n            <div class=\"resume2-divs\" style=\"min-height: 150px; border: 2px solid; padding: 10px; min-width: 500px;\">\n                        <h1>CONTACT</h1>\n                        <br>\n                        <ul style=\"display: flex; justify-content: space-evenly;  flex-direction: column;\">\n                            <li><i class=\"fa-solid fa-location-dot\"></i><span id=\"edit-address\" class=\"editable\">").concat(address, "</span></li>\n                            <hr>\n                            <li><i class=\"fa-solid fa-envelope\"></i><span id=\"edit-email\" class=\"editable\">").concat(email, "</span></li>\n                            <hr>\n                            <li><i class=\"fa fa-phone\"></i><span id=\"edit-phone\" class=\"editable\">").concat(phone, "</span></li>\n                        </ul>\n            </div>\n\n            \n        ");
        var resumeOutputElement = document.getElementById('resume-output');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.classList.remove('hidden');
            // Create vontainer for buttons
            var buttonsContainer = document.createElement('div');
            buttonsContainer.id = 'buttonsContainer';
            resumeOutputElement.appendChild(buttonsContainer);
            // Add Download PDF button
            var downloadButton = document.createElement('button');
            downloadButton.textContent = 'Download as PDF';
            downloadButton.addEventListener("click", function () {
                window.print();
            });
            buttonsContainer.appendChild(downloadButton);
            // Adding shareable link
            var shareLinkButton = document.createElement('button');
            shareLinkButton.textContent = "Copy Shareable Link";
            shareLinkButton.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
                var shareableLink, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            shareableLink = "https://yourdomain.com/resumes/".concat(name_1.replace(/\s + /g, "-"), "-cv.html");
                            return [4 /*yield*/, navigator.clipboard.writeText(shareableLink)];
                        case 1:
                            _a.sent();
                            alert('Shareable link copied to clipboard');
                            return [3 /*break*/, 3];
                        case 2:
                            err_1 = _a.sent();
                            console.error("Failed to copy link: ", err_1);
                            alert('Failed to copy link to clipboard, Please try again. ');
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            buttonsContainer.appendChild(shareLinkButton);
        }
        else {
            console.error("Resume Ouput container not found");
        }
    }
    else {
        console.error('Form elements are missing ');
    }
});
