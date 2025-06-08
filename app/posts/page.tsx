"use client";

import data from "@/app/data/data.json";
import tags from "@/app/data/tags.json";
import Post from "../components/Post";
import { useState } from "react";
export default function Posts() {
  const [selectedTag, setSelectedTag] = useState<string>("");

  const filteredData = data.filter((item) =>
    selectedTag ? item.tags.includes(selectedTag) : true
  );

  return (
    <main
      className={
        "mt-5 sm:mt-10 p-5 w-[90vw] max-w-[800px] mx-auto flex flex-col sm:flex-row gap-5 sm:gap-15"
      }
    >
      <aside className={"text-lg w-1/4"}>
        <ul className={"flex flex-row sm:flex-col gap-3"}>
          {tags.map((tag) => (
            <li
              key={tag}
              className={`cursor-pointer ${
                selectedTag === tag ? "text-blue-500" : ""
              }`}
              onClick={() => setSelectedTag(tag)}
            >
              <strong>#{tag}</strong>
            </li>
          ))}
        </ul>
      </aside>
      <section className={"flex flex-col gap-8"}>
        {filteredData.map((item, index: number) => (
          <Post
            key={index}
            title={item.title}
            content={item.content}
            link={item.link}
            date={item.date}
          />
        ))}
      </section>
    </main>
  );
}
