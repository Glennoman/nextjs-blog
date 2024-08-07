import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";

// Sample blog data
const blogs = [
  {
    id: 1,
    title: "Web Development",
    author: "Glenn",
    body: "This is about Web Development",
    image: "/images/blog1.jpg",
  },
  {
    id: 2,
    title: "Software Engineer",
    author: "John Doe",
    body: "This is about Software Engineering",
    image: "/images/blog2.jpg",
  },
];

// Home component to display a list of blogs
export default function Home() {
  return (
    <layout>
      <h1>Blog List</h1>
      <ul>
        {/* Looping through blogs and creating a list item for each */}
        {blogs.map((blog) => (
          <li key={blog.id}>
            {/* Link to single blog page */}
            <Link href={`/blog/${blog.id}`}>
              <a>
                {/* Optimized image using Next.js Image component */}
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={150}
                  height={150}
                />
                <h2>{blog.title}</h2>
                <p>{blog.author}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </layout>
  );
}
