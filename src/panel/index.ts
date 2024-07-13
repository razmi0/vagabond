import type { SubjectClassType } from "../subject/subject";

const speedControl = document.querySelector("#control-speed") as HTMLInputElement;
if (!speedControl) throw new Error("No speed control found");
const speedInput = speedControl.querySelector("input") as HTMLInputElement;
if (!speedInput) throw new Error("No input found");
const speedOutput = speedControl.lastElementChild as HTMLOutputElement;
if (!speedOutput) throw new Error("No output found");

export const branchControlPanel = (subject: InstanceType<SubjectClassType>) => {
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
