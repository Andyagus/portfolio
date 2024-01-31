import ProjectParagraphText from "./ProjectParagraphText";

interface listProps {
  listItem1: string;
  listItem2: string;
  listItem3: string;
  listItem4?: string;
}

export default function ProjectList({
  listItem1,
  listItem2,
  listItem3,
  listItem4,
}: listProps) {
  return (
    <ul className="list-disc ml-10 mt-5">
      <li>
        <ProjectParagraphText text={listItem1} />{" "}
      </li>
      <li>
        <ProjectParagraphText text={listItem2} />{" "}
      </li>
      <li>
        <ProjectParagraphText text={listItem3} />{" "}
      </li>
      {listItem4 && (
        <li>
          <ProjectParagraphText text={listItem4} />{" "}
        </li>
      )}
    </ul>
  );
}
