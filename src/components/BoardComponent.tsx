import Image from "next/image";

interface BoardProps {
  img: string;
  name: string;
  position: string;
}

const BoardComponent = ({ img, name, position }: BoardProps) => {
  return (
    <div className="grid justify-content-center">
      <Image src={img} alt="Board Member Image" />
      <h6 className="font-estiem text-black capitalize">{name}</h6>
      <h6 className="font-estiem text-estiem uppercase">{position}</h6>
    </div>
  );
};
export default BoardComponent;
