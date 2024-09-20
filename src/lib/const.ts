import { Todo } from "@prisma/client";

export const TASK_STATE_OPTIONS: Readonly<
  {
    value: Todo["state"];
    title: string;
  }[]
> = Object.freeze([
  {
    value: "TODO",
    title: "Todo",
  },
  {
    value: "IN_PROGRESS",
    title: "In Progress",
  },
  // Remove or comment out the "REVIEW" state
  // {
  //   value: "REVIEW",
  //   title: "Review",
  // },
  {
    value: "DONE",
    title: "Completed",
  },
]);
