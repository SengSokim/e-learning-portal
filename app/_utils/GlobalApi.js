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

const getPosts = async () => {
  const query = gql`
    query Posts {
      posts {
        id
        title
        slug
        excerpt
        date
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

const getPostById = async (slugId) => {
    const query = gql`
    query Posts {
        post(where: {slug:"` +
        slugId +
        `"}) {
          id
          title
          content {
            html
          }
          author {
            id
            name
          }
          slug
        }
      }
    `;
  
    const result = await request(MASTER_URL, query);
    return result;
  };

export default {
  getAllCoursesList,
  getSidebanner,
  getCourseById,
  getChapterById,
  getPosts,
  getPostById
};
