import { CONSTANT } from "../constant";
import type { SubjectClassType } from "../subject/subject";
// CONTROL PANEL
// --

// dom html
// --
// <section class="control-panel">
//       <div id="control-speed">
//         <label for="speed">Speed</label>
//         <input id="speed" type="range" min="1" max="200" value="100" />
//         <output class="tabular-nums"></output>
//       </div>
// </section>
// --
const speedControl = document.querySelector("#control-speed") as HTMLInputElement;
const speedInput = speedControl.querySelector("input") as HTMLInputElement;
const speedOutput = speedControl.lastElementChild as HTMLOutputElement;

export const connectControlPanel = (subject: InstanceType<SubjectClassType>) => {
  speedOutput.textContent = subject.getSpeed().toString();
  speedInput.value = subject.getSpeed().toString();

  // Listeners
  // --
  speedInput.addEventListener("change", (e) => {
    const { value } = e.target as HTMLInputElement;
    subject.changeSpeed(+value);
  });
  speedInput.addEventListener("input", (e) => {
    const { value } = e.target as HTMLInputElement;
    speedOutput.value = value;
  });
};

// CLI PANEL
// --

// dom html
// --
// <section class="cli-panel">
//       <div id="cli-history"></div>
//       <input id="cli-input" type="text" autocomplete="false" spellcheck="false" />
// </section>
// --
const cliHistory = document.querySelector("#cli-history") as HTMLDivElement;
const cliInput = cliHistory.nextElementSibling as HTMLInputElement;

// Helpers
// --
let deleteNextEntry = false;
const insertEntry = (str: string) => {
  cliHistory.insertAdjacentHTML("beforeend", `<p> > ${str} </p>`);
};

const toggleDeleteNextEntry = () => {
  deleteNextEntry = !deleteNextEntry;
};

const deleteEntry = () => {
  cliHistory.firstElementChild?.remove();
  toggleDeleteNextEntry();
};

const countEntries = () => {
  return cliHistory.children.length;
};

type ValidCommandType = keyof typeof CONSTANT.cmds;
const validateCmd = (cmd: string): cmd is ValidCommandType => cmd in CONSTANT.cmds;

type WithRunType = { run: (history: HTMLDivElement) => void };
const validateRun = (cmd: ValidCommandType) => "run" in CONSTANT.cmds[cmd];

export const connectCliPanel = () => {
  cliInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const command = cliInput.value.trim();
      if (validateCmd(command) && validateRun(command)) {
        const validCmd = CONSTANT.cmds[command] as WithRunType;
        validCmd.run(cliHistory);
      }
      if (deleteNextEntry) deleteEntry();
      countEntries() >= CONSTANT.maxHistoryCmds && toggleDeleteNextEntry();
      insertEntry(command);
      cliInput.value = "";
    }
  });
};
