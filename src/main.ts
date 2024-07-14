import Canvas from "./canvas/canvas";
import { connectControlPanel, connectCliPanel } from "./interface";
import Subject from "./subject/subject";
import Room from "./map/room";

const canvas = new Canvas(document.querySelector("#canvas") as HTMLCanvasElement);
const subject = new Subject(canvas);
const room = new Room(canvas);
connectControlPanel(subject);
connectCliPanel();
