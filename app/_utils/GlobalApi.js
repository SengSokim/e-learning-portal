const { gql, default: request } = require("graphql-request");

const MASTER_URL =
  "https://api-ap-northeast-1.hygraph.com/v2/" +
  process.env.NEXT_PUBLIC_HYGRAPH_API_KEY +
  "/master";

const getAllCoursesList = async () => {
  const query = gql`
    query MyQuery {
      courses {
        id
        name
        price
        publishedAt
        isFree
        description
        coverImage {
          url
        }
        slug
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};
const getSidebanner = async () => {
  const query = gql`
    query SideBanner {
      sidebanners {
        id
        name
        url
        banner {
          url
        }
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

const getCourseById = async (slugId) => {
  const query =
    gql`
        query CourseById {
            course(where: {slug:"` +
    slugId +
    `"}) {
                name
                price
                description
                isFree
                publishedAt
                coverImage {
                    url
                }
                courseChapters {
                    id
                    title
                    content {
                        html
                    }
                    slug
                }
            }
        }
    `;

  const result = await request(MASTER_URL, query);
  return result;
};

const getChapterById = async (slugId) => {
  const query =
    gql`
        query ChapterById {
            courseChapter(where: {slug:"` +
    slugId +
    `"}) {
            id
            title
            views
            videoId
            courseContents {
                id
                title
                content {
                    html
                }
            }
            }
        }
    `;

  const result = await request(MASTER_URL, query);
  return result;
};

const getPosts = async (search, userId) => {
  const query =
    gql`
    query Posts {
      posts(where: {_search: "` +
    search +
    `"}){
        id
        title
        slug
        excerpt
        date
        author {
          id
          name
        }
        coverImage {
          url
        }
        subscribers(where: {clerkUserId: "` +
    userId +
    `"}) {
          name
        }
        tag
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

const getPostById = async (slugId) => {
  const query =
    gql`
    query Posts {
        post(where: {slug:"` +
    slugId +
    `"}) {
          id
          title
          date
          content {
            html
          }
          author {
            id
            name
          }
          slug
          coverImage {
            url
          }
        }
      }
    `;

  const result = await request(MASTER_URL, query);
  return result;
};

const getReadingList = async (clerkId) => {
  const query =
    gql`
    query MyQuery {
      readingList(where: { clerkUserId: "` +
    clerkId +
    `" }) {
        posts {
          id
          title
          excerpt
          date
          slug
          coverImage {
            url
          }
          author {
            id
            name
          }
        }
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};
const addToReadingList = async (clerkId, postId, name) => {
  const query =
    gql`
    mutation MyQuery {
      upsertReadingList(
        where: { clerkUserId: "` +
    clerkId +
    `" }
        upsert: {
          create: {
            posts: { connect: { id: "` +
    postId +
    `" } }
            name: "` +
    name +
    `"
          }
          update: {
            posts: { connect: { where: { id: "` +
    postId +
    `" } } }
            name: "` +
    name +
    `"
          }
        }
      ) {
        id
        name
        posts {
          id
          excerpt
          date
          slug
          title
        }
        clerkUserId
      }
      publishManyReadingListsConnection {
        edges {
          node {
            id
          }
        }
      }
      publishManyPostsConnection {
        edges {
          node {
            id
          }
        }
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

const removeFromReadingList = async (clerkId, postId) => {
  const query =
    gql`
    mutation MyQuery {
      updateReadingList(
        where: { clerkUserId: "` +
    clerkId +
    `" }
        data: { posts: { disconnect: { id: "` +
    postId +
    `" } } }
      ) {
        id
        name
        posts {
          id
        }
      }
      publishManyReadingListsConnection {
        edges {
          node {
            id
          }
        }
      }
      publishManyPostsConnection {
        edges {
          node {
            id
          }
        }
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

const staffPicks = async () => {
  const query = gql`
    query MyQuery {
      posts(where: { staffPicks: true }) {
        id
        title
        tag
        slug
        author {
          id
          name
        }
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

const recommendations = async () => {
  const query = gql`
    query MyQuery {
      posts(where: { recommendation: true }) {
        id
        title
        tag
        slug
        author {
          id
          name
        }
      }
    }
  `;
};
export default {
  getAllCoursesList,
  getSidebanner,
  getCourseById,
  getChapterById,
  getPosts,
  getPostById,
  getReadingList,
  addToReadingList,
  removeFromReadingList,
  staffPicks,
  recommendations
};
