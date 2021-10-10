export const getDate = (date: string) => {
  const mainDate = new Date(date).toDateString();
  return mainDate;
};

export const getTime = (date: string) => {
  const hours = new Date(date).getHours();
  const min = new Date(date).getMinutes();
  return `${hours}:${min}`;
};

export const getCategory = (tag: string) => {
  let tagColor: string;
  let color: string;
  switch (tag) {
    case "trash":
      tagColor = "rgba(242, 1, 1, 0.05)";
      color = "#F20101";
      break;
    case "overdue":
      tagColor = "rgba(201, 152, 26, 0.05)";
      color = "#C9981A";
      break;
    case "completed":
      tagColor = "rgba(8, 201, 85, 0.05)";
      color = "#28BA63";
      break;
    case "in progress":
      tagColor = "rgba(70, 115, 228, 0.18)";
      color = "#4673E4";
      break;
    case "backlog":
      tagColor = "rgba(151, 166, 174, 0.11)";
      color = "#97A6AE";
      break;
    default:
      tagColor = "rgba(70, 115, 228, 0.06)";
      color = "#4673E4";
      break;
  }
  return { tagColor, color };
};

export const capitalizeTag = (tag: string) => {
  return `${tag.charAt(0).toUpperCase()}${tag.slice(1)}`;
};
