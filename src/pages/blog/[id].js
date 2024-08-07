import { useRouter } from "next/router";
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

// Blog component to display a single blog post
export default function Blog() {
  const router = useRouter();
  const { id } = router.query; // Get blog ID from URL
  const blog = blogs.find((blog) => blog.id == id); // Find Blog ID

  if (!blog) return <p>Loading...</p>; // Displaying loading message if blog not found

  return (
    <Layout>
      {/* Optimized image using Next.js Image component */}
      <Image src={blog.image} alt={blog.title} width={600} height={400} />
      <h1>{blog.title}</h1>
      <h3>By {blog.author}</h3>
      <p>{blog.body}</p>
      <CommentsSection blogId={id} /> {/* Comments section */}
    </Layout>
  );
}

// Client Component for Comments section
import dynamic from "next/dynamic";
const CommentsSection = dynamic(
  () => import("../../components/CommentsSection"),
  { ssr: false }
);
