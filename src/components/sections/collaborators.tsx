import collaborators from "@/constants/collaborators";
import Image from "next/image";

const Collaborators = () => {
  return (
    <ul className="grid grid-cols-6 gap-10 items-center py-7 px-screen">
      {collaborators.map((c, i) => (
        <li key={i}>
          <Image
            src={c.src}
            width={300}
            height={200}
            alt={c.name}
            className="h-20 object-contain"
          />
        </li>
      ))}
    </ul>
  );
};

export default Collaborators;