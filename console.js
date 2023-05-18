
const app = document.querySelector("#console");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
    getInput();
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){
  new_lineStart();
  createText("[sudo] password for startinhs: ***********");
  await delay(200);
  createText("Xin chào bạn đến với Website của tôi!");
  await delay(700);
  createText("Đang bắt đầu máy chủ...");
  await delay(1500);
  createText("Bạn có thể chạy một số lệnh:");
  createCode("about", "Một số thông tin về tôi.");
  createCode("social ", "Các trang Mạng xã hội tôi dùng.");
  createText("Đặc biệt với 'menu' để hiển thị tất cả các lệnh.")

  await delay(500);
  new_line();
}


function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = " user@startinhs";
  span1.textContent = ":~$";
  p.appendChild(span1);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  // i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
}

function new_lineStart(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "leminhtinh@startinhs";
  span1.textContent = ":~$";
  span2.textContent = " sudo startinhs";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInput(){
  
  const value = document.querySelector("input").value;
  if(value === "menu"){
    trueValue(value);
    
    createText("Bạn có thể chạy một số lệnh:");
    createCode("about", "Một số thông tin về tôi.");
    createCode("social", "Các trang mạng xã hội tôi dùng.");
    createCode("blog", "Xem qua Blog của tôi");
    createCode("mail", "Liên hệ tôi nếu bạn cần");
    createCode("clear", "Xóa dữ liệu Console") 
    createCode("menu", "Tất cả các chức năng.");
  }
  // else if(value === "projects"){
  //   trueValue(value);
  //   createText("Loading my projects... <3");
  //   createText("<a href='' target='_blank'><i class='fab fa-github white'></i> leminhtinh</a>")
  //   fetch('', {mode: 'cors'}).then(function(response) {
  //     return response.json();
  //   }).then(function(response) {
      
  //     for (i = 0; i < response.length; i++) {
  //       //createText(`${i+1}.${response[i].name}`)
  //       createText(`<a href='${response[i].html_url}' target='_blank'> ${i+1}.${response[i].name} </a>`)
  //       createText(`___${response[i].description}`)
  //     }
  //   });
  // }
  else if(value === "about"){
    trueValue(value);
    createText("Xin chào, tôi là Lê Minh Tính ;)")
    createText("Đôi nét về bản thân: là người đam mê công nghệ và vọc vạch những điều mới mẻ. Hiện tại đang là sinh viên Đại học Mở TPHCM, chuyên ngành Hệ Thống Thông Tin.")
    createText("Và có sở thích nghe nhạc, viết blog, bơi lội,..bla.")
  }
  else if(value === "social"){
    trueValue(value);
    createText("<a href='https://www.fb.com/181.startinhs' target='_blank'> facebook.com/181.startinhs</a>")
    createText("<a href='https://www.instagram.com/startinhs_' target='_blank'> instagram.com/startinhs_</a>")
    createText("<a href='https://www.youtube.com/startinhs' target='_blank'> youtube.com/startinhs</a>")
  }
  else if (value === "blog") {
    trueValue(value)
    window.open("https://startinhs.cf/blogTips", "_blank")
  }
  else if (value === "mail") {
    trueValue(value)
    window.open('mailto:tinhcv181@gmail.com');
  }
  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else{
    falseValue(value);
    createText(`Trời ơi hông có lệnh này: ${value}`)
    createText(`Nhập 'menu' để xem lại lệnh i`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  // i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  // i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML =
  text
  ;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();