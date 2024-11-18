import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const s=document.querySelector(".container");console.log(s);const m=`<form class="feedback-form" autocomplete="off">
<label class="form-label">
Email
<input class="form-input" type="email" name="email" autofocus />
</label>
<label class="form-label">
Message
<textarea class="form-textarea" name="message" rows="8"></textarea>
</label>
<button class="form-button" type="submit">Submit</button>
</form>`;let t={email:"",message:""};s.insertAdjacentHTML("beforeend",m);const a=document.querySelector(".feedback-form");a.querySelector(".form-textarea");const o="feedback-form-state";n();a.addEventListener("input",e=>{e.target.name&&(t[e.target.name]=e.target.value,localStorage.setItem(o,JSON.stringify(t)))});a.addEventListener("submit",e=>{if(e.preventDefault(),!t.email||!t.message){alert("Fill please all fields");return}console.log("Відправлено:",t),e.currentTarget.reset(),localStorage.removeItem(o),t={email:"",message:""}});function n(){const e=localStorage.getItem(o);e&&(t=JSON.parse(e),Object.keys(t).forEach(r=>{const l=a.querySelector(`[name="${r}"]`);l&&(l.value=t[r])}))}
//# sourceMappingURL=2-form.js.map
