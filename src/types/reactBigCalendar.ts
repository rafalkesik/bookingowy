export interface slotInfoType {
  start: Date;
  end: Date;
  slots: Array<Date>;
  action: "select" | "click" | "doubleClick";
  box?: { x: number; y: number; clientX: number; clientY: number };
  bounds?: {
    bottom: number,
    left: number,
    right: number,
    top: number,
    x: number,
    y: number
  }
}
