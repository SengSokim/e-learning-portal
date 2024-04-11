
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
      posts( where: {_search: "` +
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
        topics {
          id
          name
        }
        subscribers(where: {userId: "` +
    userId +
    `"}) {
          email
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
          comments {
            id
            username
            content
            date
          }
        }
      }
    `;

  const result = await request(MASTER_URL, query);
  return result;
};

const getReadingList = async (userId) => {
  const query =
    gql`
    query MyQuery {
      readingList(where: { userId: "` +
    userId +
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
const addToReadingList = async (userId, postId, email) => {
  const query =
    gql`
    mutation MyQuery {
      upsertReadingList(
        where: { userId: "` +
    userId +
    `" }
        upsert: {
          create: {
            posts: { connect: { id: "` +postId +`" } }
            email: "` +email +`"
            userId:"` +userId +`"
          }
          update: {
            posts: { connect: { where: { id: "` +postId +`" } } }
            email: "` +email +`"
            userId:"` +userId +`"
          }
        }
      ) {
        id
        email
        posts {
          id
          excerpt
          date
          slug
          title
        }
        userId
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

const removeFromReadingList = async (userId, postId) => {
  const query =
    gql`
    mutation MyQuery {
      updateReadingList(
        where: { userId: "` +
    userId +
    `" }
        data: { posts: { disconnect: { id: "` +
    postId +
    `" } } }
      ) {
        id
        email
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
        excerpt
        date
        author {
          id
          name
        }
        coverImage {
          url
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

const getTopics = async () => {
  const query = gql`
    query MyQuery {
      topics {
        id
        name
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

const commentOnPost = async (content,date,username,postSlug) => {
  const query = gql`
  mutation MyQuery {
    createComment(
      data: {content: "` +
      content +
      `", date: "`+date+`", username: "`+username+`", post: {connect: {slug: "`+postSlug+`"}}}
    ) {
      id
      username
      date
      content
    }
    publishManyCommentsConnection {
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
}
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
  recommendations,
  getTopics,
  commentOnPost
};
