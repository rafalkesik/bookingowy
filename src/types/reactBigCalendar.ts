export interface slotInfoType {
  start: Date;
  end: Date;
  slots: Array<Date>;
  action: "select" | "click" | "doubleClick";
  box?: { x: number; y: number; clientX: number; clientY: number };
}