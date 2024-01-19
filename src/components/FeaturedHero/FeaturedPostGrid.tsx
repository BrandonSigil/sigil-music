import { makeStyles } from "../styles.ts";
import "./FeaturedHero.sass";
import FeaturedPost from "./FeaturedPost.tsx";

const useStyles = makeStyles(() => ({
  featuredPostGrid: {
    display: "grid",
    gridTemplateRows: "1fr 1fr 1fr",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: 25,
  },
}));

const blogPosts = [
  {
    timeStamp: "1-11-2020 10:15",
    postType: "news",
    title: "Big Thief strikes again",
    body: "Well well well, look what we have here.",
    author: "Brandon Wirth",
    imgUrl: `https://source.unsplash.com/random/?technology+${Math.random(1)}`,
  },
  {
    timeStamp: "1-23-2020 12:15",
    postType: "reviews",
    title: "Vampire Weekend, a hoax!?",
    body: "Well well well, look what we have here.",
    author: "Alexandra Wirth",
    imgUrl: `https://source.unsplash.com/random/?technology+${Math.random()}`,
  },
  {
    timeStamp: "1-23-2020 12:15",
    postType: "reviews",
    title:
      "When will Coldplay realize they're just a worse version of Radiohead?",
    body: "Well well well, look what we have here.",
    author: "Alexandra Wirth",
    imgUrl: `https://source.unsplash.com/random/?technology+${Math.random()}`,
  },
];

export default function FeaturedPostGrid() {
  const { classes } = useStyles();

  return (
    <div className={classes.featuredPostGrid}>
      {blogPosts.map((post) => (
        <FeaturedPost
          title={post.title}
          body={post.body}
          author={post.author}
          imgUrl={post.imgUrl}
          postType={post.postType}
          timeStamp={post.timeStamp}
        />
      ))}

      {/*<FeaturedPost />*/}
    </div>
  );
}
