interface CardProps {
  title: string;
  desciption: string;
}

export default function Cards({ title, desciption }: CardProps) {
  return (
    <div className="w-[20%] flex flex-col gap-2 border-l-2 first:border-none pl-6">
      <h2 className="text-xs font-medium uppercase tracking-wider">{title}</h2>
      <p className="text-xl font-medium text-wrap">{desciption}</p>
    </div>
  );
}
