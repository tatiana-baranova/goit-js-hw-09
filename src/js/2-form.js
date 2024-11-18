const container = document.querySelector(".container")
console.log(container);
const formUp = `<form class="feedback-form" autocomplete="off">
<label class="form-label">
Email
<input class="form-input" type="email" name="email" autofocus />
</label>
<label class="form-label">
Message
<textarea class="form-textarea" name="message" rows="8"></textarea>
</label>
<button class="form-button" type="submit">Submit</button>
</form>`;

let formData = { email: "", message: "" };
container.insertAdjacentHTML("beforeend", formUp);

const form = document.querySelector(".feedback-form");
const textarea = form.querySelector(".form-textarea");

const LS_KEY = "feedback-form-state";

populateFormFields();

form.addEventListener("input", (event) => {
    if (event.target.name) {
        formData[event.target.name] = event.target.value;
        localStorage.setItem(LS_KEY, JSON.stringify(formData));
    }
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
    }

    console.log("Відправлено:", formData);

    event.currentTarget.reset();
    localStorage.removeItem(LS_KEY);
    formData = { email: "", message: "" };
});

function populateFormFields() {
    const message = localStorage.getItem(LS_KEY);
    if (message) {
        formData = JSON.parse(message);


        Object.keys(formData).forEach((key) => {
            const input = form.querySelector(`[name="${key}"]`);
            if (input) {
                input.value = formData[key];
            }
        });
    }
}