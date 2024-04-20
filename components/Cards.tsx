interface CardProps {
  title: string;
  desciption: string;
}

export default function Cards({ title, desciption }: CardProps) {
  return (
    <div className="w-full md:w-[20%] flex flex-col justify-center items-center gap-2 border-l-2 first:border-none pl-6">
      <h2 className="text-xs font-medium uppercase tracking-wider">{title}</h2>
      <p className="text-lg md:text-xl font-medium text-wrap">{desciption}</p>
    </div>
  );
}
