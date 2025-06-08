type PostProps = {
  title: string;
  content: string;
  link: string;
  date: string;
};

export default function Post(props: PostProps) {
  const { title, content, link, date } = props;
  return (
    <article className={"flex flex-col"}>
      <h2 className={"text-2xl pb-3 font-bold"}>{title}</h2>
      <span className={"text-gray-500 mb-3"}>{date}</span>
      <p>{content}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={"my-3 text-blue-500 hover:underline"}
      >
        Click here to read more
      </a>
      <hr className="border-gray-300" />
    </article>
  );
}
