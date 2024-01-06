
import PostPreview from "@/components/PostPreview";
import getPostMetadata from "@/components/getPostMetadata";
import Link from "next/link";


// const getPostMetadata = (): PostMetadata[] => {

//   const folder = "posts/";
//   const files = fs.readdirSync(folder);
//   const markdownPosts = files.filter((file) => file.endsWith(".md"));
//   // const slugs = markdownPosts.map((file) => file.replace(".md", ""));
//   // return slugs;


//   const posts = markdownPosts.map((fileName) => {
//     const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
//     const matterResult = matter(fileContents);
//     return {
//       title: matterResult.data.title,
//       date: matterResult.data.date,
//       subtitle: matterResult.data.subtitle,
//       slug: fileName.replace(".md", ""),
//     };
//   });

//   return posts;

// };

const HomePage = () => {
    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((post) => (
      <PostPreview key={post.slug} {...post} />
    ));

    return <div className="grid grid-cols-1 gap-4 md:grid-cols-2">{postPreviews}</div>

};

export default HomePage;