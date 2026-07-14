interface TitleProps {
  title: string;
}

export default function Tittle({ title }: TitleProps) {
    return (
      <div>
        <h2 className="text-2xl font-bold text-orange-500 mb-10">{title}</h2>
      </div>
    );
}
