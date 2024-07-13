import Canvas from "./canvas/canvas";
import { connectControlPanel } from "./panel";
import Subject from "./subject/subject";

const canvas = new Canvas(document.querySelector("#canvas") as HTMLCanvasElement);
const subject = new Subject(canvas);
connectControlPanel(subject);
