import ProfilePic from "../assets/images/About/ProfilePic1.png";

// import image2 from "../assets/images/oc.png";
// import image3 from "../assets/images/testimage.png";

export default function YourComponent() {
  return (
    <div>
      {/* main image */}
      {/* button grid */}
      <div className="mt-10 lg:mt-20">
        <img
          src={ProfilePic}
          className={`mt-10 mx-auto max-h-full rounded-xl overflow-hidden object-cover shadow-lg`}
          alt="Profile Pic"
        />
      </div>
    </div>
  );
}
