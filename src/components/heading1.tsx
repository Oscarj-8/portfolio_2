import Underline from "./underline";

const Heading1 = ({ title, left }: { title: string, left? : number }) => {
  return (
    <div className="relative">
      <h1 className="text-[clamp(0.6rem,5vw,1.5rem)] font-bold mb-8 relative">
        {title}
      </h1>
      <Underline left={left} />
    </div>
  );
};

export default Heading1;
