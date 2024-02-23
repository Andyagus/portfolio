interface ProjectData {
  image1: string;
  image2: string;
  image3?: string;
}

const ProjectImageGrid = (data: ProjectData) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto">
      <img src={data.image1} alt="project" className="rounded-lg" />
      <img src={data.image2} alt="project" className="rounded-lg" />
      {data.image3 && (
        <img src={data.image3} alt="project" className="rounded-lg" />
      )}
    </div>
  );
};

export default ProjectImageGrid;
