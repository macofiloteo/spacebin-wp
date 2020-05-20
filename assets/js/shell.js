async function typeWriter(txt, speed) {
  for (let i = 0; i < txt.length; i++) {
    document.getElementById("shell_type").innerHTML += txt.charAt(i);
    await new Promise((r) => setTimeout(r, speed));
  }
  await new Promise((r) => setTimeout(r, 1000));
  let stringCount = document.getElementById("shell_type").innerHTML.length;
  for (let i = stringCount; i >= 0; i--) {
    document.getElementById("shell_type").innerHTML = document
      .getElementById("shell_type")
      .innerHTML.substr(0, i - 1);
    await new Promise((r) => setTimeout(r, speed / 2));
  }
  return true;
}

async function mimicShell(arrayOfGreetings) {
  while (true) {
    for (let i = 0; i < arrayOfGreetings.length; i++) {
      await typeWriter(arrayOfGreetings[i], 100);
    }
  }
}
window.addEventListener("load", function () {
  greetings = document.getElementById("shell_type").innerHTML.split("###");
  document.getElementById("shell_type").innerHTML = "";
  mimicShell(greetings);
});
