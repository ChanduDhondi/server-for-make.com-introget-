export const allslots = [
  { start: "09:00 am", end: "10:00 am" },
  { start: "10:00 am", end: "11:00 am" },
  { start: "11:00 am", end: "12:00 pm" },
  { start: "12:00 pm", end: "01:00 pm" },
  { start: "01:00 pm", end: "02:00 pm" },
  { start: "02:00 pm", end: "03:00 pm" },
  { start: "03:00 pm", end: "04:00 pm" },
  { start: "04:00 pm", end: "05:00 pm" },
];

export function availableSlots(data) {
  const formatter = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
  });

  const bookedEvents = data.map((ele) =>
    formatter.format(new Date(ele.start)).toLowerCase()
  );

  let result = allslots.filter((slot) => {
    return !bookedEvents.includes(slot.start.toLowerCase());
  });
  result = result.map((slot) => slot.start + " - " + slot.end).join(", ");
  return result;
}
